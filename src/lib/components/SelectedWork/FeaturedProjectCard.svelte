<script>
	export let category;
	export let title;
	export let statement;
	export let supporting;
	export let meta;
	export let slug;
	export let caseStudyLabel;
	export let visitSiteLabel = '';
	export let projectHref = '';
	export let showVisitSite = false;

	let cardEl;
	let tiltStyle = '';

	function handlePointerEnter() {
		if (!cardEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		if (!window.matchMedia('(pointer: fine)').matches) return;
		tiltStyle = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(-4px)';
	}

	function handlePointerMove(event) {
		if (!cardEl || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		if (!window.matchMedia('(pointer: fine)').matches) return;

		const rect = cardEl.getBoundingClientRect();
		const x = (event.clientX - rect.left) / rect.width;
		const y = (event.clientY - rect.top) / rect.height;
		const tiltX = ((0.5 - y) * 2.2).toFixed(2);
		const tiltY = ((x - 0.5) * 2.2).toFixed(2);

		tiltStyle = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
	}

	function resetTilt() {
		tiltStyle = '';
	}
</script>

<article
	bind:this={cardEl}
	class="featured-card"
	style:transform={tiltStyle || undefined}
	on:pointerenter={handlePointerEnter}
	on:pointermove={handlePointerMove}
	on:pointerleave={resetTilt}
>
	<span class="featured-card__category">{category}</span>
	<h3 class="featured-card__title">{title}</h3>
	<p class="featured-card__statement">{statement}</p>
	<p class="featured-card__supporting">{supporting}</p>
	<p class="featured-card__meta">{meta}</p>
	<div class="featured-card__links">
		<a class="featured-card__link" rel="prefetch" href={`/portfolio/${slug}`}>
			{caseStudyLabel}
		</a>
		{#if showVisitSite && projectHref}
			<a class="featured-card__link" target="_blank" rel="noopener noreferrer" href={projectHref}>
				{visitSiteLabel}
			</a>
		{/if}
	</div>
</article>

<style lang="scss">
	@import './style/featured-project-card.scss';
</style>
