<script context="module">
    export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`portfolio/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
    import ProjectDetail from '../../components/ProjectDetail/ProjectDetail.svelte';
	export let project;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{project.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
    .project-detail__content {
        padding: 52px 18px 18px;
    }
	.project-detail__content :global(h3) {
		font-size: 2em;
		padding-bottom: 32px;
	}
    .project-detail__content :global(h4) {
        font-size: 1.36em;
        padding-bottom: 18px;
    }
    .project-detail__content :global(p) {
        font-size: 1em;
	    padding-bottom: 20px;
    }
    .project-detail__content :global(.project-detail__overview) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
        gap: 2.5em;
    }
    .project-detail__content :global(.project-detail__content-imgs) {
	    padding: 2em 0 2em;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
        gap: 2.5em;
    }
    .project-detail__content :global(figcaption) {
	    text-align: center;
        padding: 1em 0;
    }
    .project-detail__content :global(.project-detail__content-controls) {
        text-align: center;
        padding: 2em 0;
        display: flex;
    }
    .project-detail__content :global(.content-controls__right),
    .project-detail__content :global(.content-controls__left) {
        display: flex;
        flex-direction: column;
	    width: 49%;
    }
    .project-detail__content :global(.content-controls__left) {
        text-align: left;
    }
    .project-detail__content :global(.content-controls__right) {
        text-align: right;
    }
    .project-detail__content :global(.content-controls__right .content-controls__right-title),
    .project-detail__content :global(.content-controls__left .content-controls__left-title){
	    font-size: 1em;
        padding-bottom: 1em;
    }
    @media (min-width: 480px) {
        .project-detail__content :global(.content-controls__right .content-controls__right-title),
        .project-detail__content :global(.content-controls__left .content-controls__left-title){
            font-size: 1.36em;
            padding-bottom: 1em;
        }
    }
    .project-detail__content :global(figcaption a:hover),
    .project-detail__content :global(.project-detail__content-controls a:hover) {
        color: #FFBE98;
	    text-decoration: none;
    }
    .project-detail__headline {
        font-family: 'Source Code Pro', monospace;
        font-size: 2.6em;
	    padding: 72px 18px 18px;
        color: #fff;
	    background-color: #000;
    }
</style>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>

<ProjectDetail>
	<h2 class="project-detail__headline">{project.title}</h2>

	<div class='project-detail__content'>
		{@html project.html}
	</div>
</ProjectDetail>
