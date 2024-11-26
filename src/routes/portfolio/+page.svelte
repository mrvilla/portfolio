<script>
  import ProjectCase from '$lib/components/ProjectCase/ProjectCase.svelte';

	export let data;
	const { portfolios } = data;
	// console.log('portfolios: ', portfolios);
</script>

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
		color: #FFBE98;
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

<svelte:head>
	<title>Portfolio</title>
</svelte:head>


<ProjectCase>
	{#each portfolios as portfolio (portfolio.slug)}
		<div class='project-case__item'>
			<div class='project-case__item-details'>
				<h4>{portfolio.title}</h4>
				<span>{portfolio.subtitle}</span>
				<p>{portfolio.shortDesc}</p>
			</div>
			<div class='project-case__item-links'>
				<a rel="prefetch" href="portfolio/{portfolio.slug}">
					{portfolio.link}
				</a>
				{#if portfolio.projectLink}
					<a target='_blank' href={portfolio.projectHref}>
						{portfolio.projectLink}
					</a>
        {/if}
			</div>
		</div>
	{/each}
</ProjectCase>
