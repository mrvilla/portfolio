<script>
	import { onMount } from 'svelte';

	let orbEl;
	let enabled = false;
	let visible = false;
	let hovering = false;

	onMount(() => {
		const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		const pointerQuery = window.matchMedia('(pointer: fine)');

		const syncEnabled = () => {
			enabled = !motionQuery.matches && pointerQuery.matches;
			if (!enabled) {
				visible = false;
				document.documentElement.style.removeProperty('--mouse-x');
				document.documentElement.style.removeProperty('--mouse-y');
			}
		};

		syncEnabled();
		motionQuery.addEventListener('change', syncEnabled);
		pointerQuery.addEventListener('change', syncEnabled);

		let targetX = window.innerWidth / 2;
		let targetY = window.innerHeight * 0.35;
		let currentX = targetX;
		let currentY = targetY;
		let rafId = 0;

		const interactiveSelector = [
			'a',
			'button',
			'input',
			'textarea',
			'select',
			'summary',
			'[role="button"]',
			'[tabindex]:not([tabindex="-1"])',
			'.featured-card'
		].join(',');

		const updateOrb = () => {
			currentX += (targetX - currentX) * 0.16;
			currentY += (targetY - currentY) * 0.16;

			if (orbEl) {
				orbEl.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
			}

			rafId = requestAnimationFrame(updateOrb);
		};

		const onPointerMove = (event) => {
			if (!enabled) return;

			targetX = event.clientX;
			targetY = event.clientY;
			visible = true;

			document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
			document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);

			const target = event.target;
			hovering = Boolean(target?.closest?.(interactiveSelector));
		};

		const onPointerLeave = () => {
			visible = false;
			hovering = false;
		};

		window.addEventListener('pointermove', onPointerMove, { passive: true });
		document.documentElement.addEventListener('mouseleave', onPointerLeave);
		rafId = requestAnimationFrame(updateOrb);

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('pointermove', onPointerMove);
			document.documentElement.removeEventListener('mouseleave', onPointerLeave);
			motionQuery.removeEventListener('change', syncEnabled);
			pointerQuery.removeEventListener('change', syncEnabled);
			document.documentElement.style.removeProperty('--mouse-x');
			document.documentElement.style.removeProperty('--mouse-y');
		};
	});
</script>

{#if enabled}
	<div
		bind:this={orbEl}
		class="cursor-orb"
		class:is-visible={visible}
		class:is-hovering={hovering}
		aria-hidden="true"
	></div>
{/if}

<style lang="scss">
	.cursor-orb {
		position: fixed;
		top: 0;
		left: 0;
		width: 26px;
		height: 26px;
		border: 1px solid rgba(180, 132, 108, 0.55);
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		opacity: 0;
		box-shadow: 0 0 18px rgba(180, 132, 108, 0.12);
		transition:
			width 180ms ease,
			height 180ms ease,
			opacity 180ms ease,
			border-color 180ms ease,
			box-shadow 180ms ease;
		will-change: transform;

		&.is-visible {
			opacity: 0.85;
		}

		&.is-hovering {
			width: 42px;
			height: 42px;
			opacity: 1;
			border-color: rgba(180, 132, 108, 0.8);
			box-shadow: 0 0 24px rgba(180, 132, 108, 0.18);
		}
	}

	:global(html[data-theme='light']) .cursor-orb {
		border-color: rgba(164, 119, 100, 0.45);
		box-shadow: 0 0 16px rgba(164, 119, 100, 0.1);

		&.is-hovering {
			border-color: rgba(164, 119, 100, 0.7);
			box-shadow: 0 0 22px rgba(164, 119, 100, 0.16);
		}
	}
</style>
