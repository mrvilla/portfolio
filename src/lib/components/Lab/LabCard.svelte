<script>
	export let variant = 'engineering';
	export let kicker;
	export let title;
	export let meta;
	export let status;
	export let href;
	export let cta;

	let cardEl;
	let tiltStyle = '';

	function prefersFineMotion() {
		if (!cardEl) return false;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
		if (!window.matchMedia('(pointer: fine)').matches) return false;
		return true;
	}

	function handlePointerEnter() {
		if (variant !== 'creative' || !prefersFineMotion()) return;
		tiltStyle = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(-3px)';
	}

	function handlePointerMove(event) {
		if (variant !== 'creative' || !prefersFineMotion()) return;

		const rect = cardEl.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width;
		const y = (event.clientY - rect.top) / rect.height;
		const tiltX = ((0.5 - y) * 3.4).toFixed(2);
		const tiltY = ((x - 0.5) * 3.4).toFixed(2);

		tiltStyle = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-3px)`;
	}

	function resetTilt() {
		tiltStyle = '';
	}
</script>

<article
	bind:this={cardEl}
	class="lab-card lab-card--{variant}"
	style:transform={tiltStyle || undefined}
	on:pointerenter={handlePointerEnter}
	on:pointermove={handlePointerMove}
	on:pointerleave={resetTilt}
>
	<span class="lab-card__kicker">{kicker}</span>
	<h3 class="lab-card__title">{title}</h3>
	<p class="lab-card__meta">{meta}</p>
	<div class="lab-card__footer">
		<span class="lab-card__status">{status}</span>
		<a class="lab-card__cta" rel="prefetch" href={href}>{cta}</a>
	</div>
</article>

<style lang="scss">
	@import './style/lab-card.scss';
</style>
