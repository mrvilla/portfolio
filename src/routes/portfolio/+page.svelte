<script>
	import ProjectCase from '$lib/components/ProjectCase/ProjectCase.svelte';
	import * as m from '$lib/paraglide/messages';

	export let data;
	const { portfolios } = data;
	// console.log('portfolios: ', portfolios);

	const translatedPortfolios = portfolios.map((portfolio, index) => ({
		...portfolio,
		title: m[`project${index + 1}_title`]
			? m[`project${index + 1}_title`]()
			: `Missing: project${index + 1}_title`,
		slug: portfolio.slug || `Missing: project${index + 1}_slug`,
		subtitle: m[`project${index + 1}_subtitle`]
			? m[`project${index + 1}_subtitle`]()
			: `Missing: project${index + 1}_subtitle`,
		shortDesc: m[`project${index + 1}_shortDesc`]
			? m[`project${index + 1}_shortDesc`]()
			: `Missing: project${index + 1}_shortDesc`,
		link: m[`project${index + 1}_link`]
			? m[`project${index + 1}_link`]()
			: `Missing: project${index + 1}_link`,
		projectLink: m[`project${index + 1}_projectLink`]
			? m[`project${index + 1}_projectLink`]()
			: `Missing: project${index + 1}_projectLink`,
	}));
</script>

<svelte:head>
	<title>{m.nav_portfolio()}</title>
</svelte:head>

<ProjectCase>
	{#each translatedPortfolios as { title, subtitle, shortDesc, slug, link, projectLink, projectHref }}
		<div class="project-case__item">
			<div class="project-case__item-details">
				<h4>{title}</h4>
				<span>{subtitle}</span>
				<p>{shortDesc}</p>
			</div>
			<div class="project-case__item-links">
				<a rel="prefetch" href={`/portfolio/${slug}`}>
					{link}
				</a>
				{#if projectLink}
					<a target="_blank" href={projectHref}>
						{projectLink}
					</a>
				{/if}
			</div>
		</div>
	{/each}
</ProjectCase>

<style lang="scss">
	.project-case__item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 1.25rem;
		padding: 1rem;
		background-color: #000;
		color: #fff;
	}
	.project-case__item-links {
		display: flex;
		justify-content: space-between;
	}
	a:hover {
		color: #a47764;
	}
	h4 {
		font-size: 2rem;
		font-weight: bold;
	}
	p {
		padding-bottom: 4rem;
	}
	span {
		font-size: 0.9rem;
		letter-spacing: 0.063rem;
		display: block;
		padding-bottom: 0.063rem;
	}
</style>
