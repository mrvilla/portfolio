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
		logo: portfolio.companyLogo,
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
	{#each translatedPortfolios as { title, subtitle, logo, slug, link, projectLink, projectHref }}
		<div class="project-case__item">
			<div class="project-case__item-details">
				<span class="item-details__subtitle">{subtitle}</span>
				{#if logo}
					<img class="project-case__item-logo" src={logo} alt={title} />
				{:else}
					<h4>{title}</h4>
				{/if}
			</div>
			<div class="project-case__item-links">
				<a rel="prefetch" href={`/portfolio/${slug}`}>
					{link}
				</a>
				{#if projectLink && projectHref}
					<a target="_blank" href={projectHref}>
						{projectLink}
					</a>
				{/if}
			</div>
		</div>
	{/each}
</ProjectCase>

<style lang="scss">
  .item-details__subtitle {
	  background-color: #d4e8f5;
	  color: #000;
    display: inline-block;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
    margin: 0.5rem 0;
  }
	.project-case__item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border-radius: 1.25rem;
		padding: 1rem;
		background-color: #fff;
		color: #000;
	}
	.project-case__item-links {
		display: flex;
		justify-content: space-between;

    a {
      display: block;
      text-decoration: none;
      position: relative;
      margin-bottom: 0.5rem;

      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 0.438rem;
        background-color: #6d8faf;
	      border-radius: 0.25rem;
        display: block;
        bottom: -0.563rem;
      }
    }
	}
	h4 {
		font-size: 2rem;
		font-weight: bold;
	}
	.project-case__item-logo {
		display: block;
		max-height: 2.5rem;
		max-width: 12rem;
		width: auto;
		height: auto;
		margin: 0.25rem 0 0.75rem;
		object-fit: contain;
		object-position: left center;
	}
	span {
		font-size: 0.9rem;
		letter-spacing: 0.063rem;
		display: block;
		padding-bottom: 0.063rem;
	}
</style>
