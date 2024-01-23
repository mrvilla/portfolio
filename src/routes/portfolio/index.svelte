<script context="module">
	export async function preload({ params, query }) {
		return this.fetch(`portfolio.json`).then(res => res.json()).then(portfolios => {
		  return { portfolios};
		});
	}
</script>

<script>
  import ProjectCase from '../../components/ProjectCase/ProjectCase.svelte';

  export let portfolios;
</script>

<style>
	.project-case__item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
        border-radius: 20px;
        padding: 1em;
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
        font-size: 2em;
        font-weight: bold;
	}
	p {
		padding-bottom: 4em;
	}
	span {
        font-size: 0.9em;
		letter-spacing: 1px;
		display: block;
        padding-bottom: 1em;
	}
</style>

<svelte:head>
	<title>Portfolio</title>
</svelte:head>


<ProjectCase>
	{#each portfolios as portfolio}
		<div class='project-case__item'>
			<div class='project-case__item-details'>
				<h4>{portfolio.title}</h4>
				<span>{portfolio.subtitle}</span>
				<p>{portfolio.shortDesc}</p>
			</div>
			<div class='project-case__item-links'>
				<a rel='prefetch' href='portfolio/{portfolio.slug}'>
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
