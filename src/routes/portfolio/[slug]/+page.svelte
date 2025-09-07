<script>
	import ProjectDetail from '$lib/components/ProjectDetail/ProjectDetail.svelte';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages';
	/** @type {{ data: import('./$types').PageData }} */
	export let data;
	const { project } = data;
	// console.log('project: ', project);

	$: slug = $page.url.pathname.split('/').pop();
	// $: console.log('Updated slug:', slug)

	const slugToIndex = {
		sembo: 0,
		signum: 1,
		'ibmix-aperto': 2,
		'video-dev-team': 3,
		corruptor: 4,
		btv: 5,
		dihk: 6,
		consuo: 7,
		'signum-consulting': 8,
		consus: 9,
		cemex: 10,
		qualmity: 11
	};

	$: projectIndex = slugToIndex[slug];
	// console.log('projectIndex: ', projectIndex);

	if (projectIndex !== undefined) {
		// console.warn(`Slug '${project.slug}' not found in slugToIndex mapping.`);
		throw new Error(`Slug '${project.slug}' not found in slugToIndex mapping.`);
	}


	$: translatedProject = {
		...project,
		title: m[`project${projectIndex + 1}_title`]?.(),
		extendedTitle: m[`project${projectIndex + 1}_extendedTitle`]?.(),
		overviewHeadlineText: m[`project${projectIndex + 1}_overviewHeadlineText`]?.(),
		overview: m[`project${projectIndex + 1}_overview`]?.(),
		roleHeadlineText: m[`project${projectIndex + 1}_roleHeadlineText`]?.(),
		role: m[`project${projectIndex + 1}_role`]?.(),
		teamHeadlineText: m[`project${projectIndex + 1}_teamHeadlineText`]?.(),
		team: m[`project${projectIndex + 1}_team`]?.(),
		toolsHeadlineText: m[`project${projectIndex + 1}_toolsHeadlineText`]?.(),
		tools: m[`project${projectIndex + 1}_tools`]?.(),
		solutionsHeadlineText: m[`project${projectIndex + 1}_solutionsHeadlineText`]?.(),
		solutions: m[`project${projectIndex + 1}_solutions`]?.(),
		companyLogo: m[`project${projectIndex + 1}_companyLogo`]?.(),
		contributionsHeadlineText: m[`project${projectIndex + 1}_contributionsHeadlineText`]?.(),
		contributionsSubheadlineText1: m[`project${projectIndex + 1}_contributionsSubheadlineText1`]?.(),
		contributionsText1: m[`project${projectIndex + 1}_contributionsText1`]?.(),
		contributionsSubheadlineText2: m[`project${projectIndex + 1}_contributionsSubheadlineText2`]?.(),
		contributionsText2: m[`project${projectIndex + 1}_contributionsText2`]?.(),
		keyResultsHeadlineText: m[`project${projectIndex + 1}_keyResultsHeadlineText`]?.(),
		keyResultsText1: m[`project${projectIndex + 1}_keyResultsText1`]?.(),
		keyResultsText2: m[`project${projectIndex + 1}_keyResultsText2`]?.(),
		keyResultsText3: m[`project${projectIndex + 1}_keyResultsText3`]?.(),
		contentImgsHeadline: m[`project${projectIndex + 1}_contentImgsHeadline`]?.(),
		figcaption: m[`project${projectIndex + 1}_figcaption`]?.(),
		figcaptionImg: m[`project${projectIndex + 1}_figcaptionImg`]?.(),
		figcaption2: m[`project${projectIndex + 1}_figcaption2`]?.(),
		figcaption2img: m[`project${projectIndex + 1}_figcaption2img`]?.(),
		figcaption3: m[`project${projectIndex + 1}_figcaption3`]?.(),
		figcaption3img: m[`project${projectIndex + 1}_figcaption3img`]?.(),
		previousProjectControlTitle: m[`project${projectIndex + 1}_previousProjectControlTitle`](),
		previousLink: m[`project${projectIndex + 1}_previousLink`]?.(),
		previousProjectName: m[`project${projectIndex + 1}_previousProjectName`]?.(),
		nextProjectControlTitle: m[`project${projectIndex + 1}_nextProjectControlTitle`]?.(),
		nextLink: m[`project${projectIndex + 1}_nextLink`]?.(),
		nextProjectName: m[`project${projectIndex + 1}_nextProjectName`]?.(),
	};

</script>

<svelte:head>
	<title>{translatedProject.title}</title>
</svelte:head>

{#if translatedProject}
	<ProjectDetail>
		<h2 class="project-detail__headline">{translatedProject.extendedTitle}</h2>

		<div class="project-detail__content">
			<div class="project-detail__overview">
				<div class="project-detail__overview-content">
					<h3 class="overview-content__headline">{translatedProject.overviewHeadlineText}</h3>
					<p>{translatedProject.overview}</p>
					<h4>{translatedProject.roleHeadlineText}</h4>
					<p>{translatedProject.role}</p>
					<h4>{translatedProject.teamHeadlineText}</h4>
					<p>{translatedProject.team}</p>
					<h4>{translatedProject.toolsHeadlineText}</h4>
					<p>{translatedProject.tools}</p>
					<h4>{translatedProject.solutionsHeadlineText}</h4>
					<p>{translatedProject.solutions}</p>
				</div>
				<img src={translatedProject.companyLogo} alt="Logo of Company">
			</div>
			<div class="project-detail__contributions">
				<div class="project-detail__contributions-content">
					<h3 class="contributions-content__headline">{translatedProject.contributionsHeadlineText}</h3>
					<h4>{translatedProject.contributionsSubheadlineText1}</h4>
					<p>{translatedProject.contributionsText1}</p>
					<h4>{translatedProject.contributionsSubheadlineText2}</h4>
					<p>{translatedProject.contributionsText2}</p>
				</div>
			</div>
			<div class="project-detail__key-results">
				<div class="project-detail__key-results-content">
					<h3 class="key-results-content__headline">{translatedProject.keyResultsHeadlineText}</h3>
					<p>{translatedProject.keyResultsText1}</p>
					<p>{translatedProject.keyResultsText2}</p>
					<p>{translatedProject.keyResultsText3}</p>
				</div>
			</div>
			<div class="project-detail__content-imgs">
				<h3 class="content-imgs__headline">{translatedProject.contentImgsHeadline}</h3>
				<div class="project-detail__content-imgs-content">
					<figure>
						<figcaption>{translatedProject.figcaption}</figcaption>
						<img src={translatedProject.figcaptionImg} alt="Mobile">
					</figure>
					{#if translatedProject.figcaption2 && translatedProject.figcaption2img}
					<figure>
						<figcaption>{translatedProject.figcaption2}</figcaption>
						<img src={translatedProject.figcaption2img} alt="Desktop">
					</figure>
					{/if}
					{#if translatedProject.figcaption3 && translatedProject.figcaption3img}
					<figure>
						<figcaption>{translatedProject.figcaption3}</figcaption>
						<img src={translatedProject.figcaption3img} alt="Desktop">
					</figure>
					{/if}
				</div>
			</div>

			<div class="project-detail__content-controls">
				<div class="content-controls__left">
					{#if translatedProject.previousLink && translatedProject.previousProjectName}
            <span class="content-controls__left-title">
                <strong>{translatedProject.previousProjectControlTitle}</strong>
            </span>
						<a href="{translatedProject.previousLink}" aria-current={$page.url.pathname === translatedProject.previousLink ? 'page' : undefined}>
							{translatedProject.previousProjectName}
						</a>
					{/if}
				</div>
				<div class="content-controls__right">
					{#if translatedProject.nextLink && translatedProject.nextProjectName}
            <span class="content-controls__right-title">
                <strong>{translatedProject.nextProjectControlTitle}</strong>
            </span>
						<a href="{translatedProject.nextLink}" aria-current={$page.url.pathname === translatedProject.nextLink ? 'page' : undefined}>
							{translatedProject.nextProjectName}
						</a>
					{/if}
				</div>
			</div>
		</div>
		
	</ProjectDetail>
{:else}
	<p>{m.project_loading_details()}</p>
{/if}

<style>
	.project-detail__content {
			padding: 3.25rem 1.125rem 1.125rem;
	}
	.project-detail__content :global(h3) {
			font-size: 2rem;
			padding-bottom: 2rem;
	}
	.project-detail__content :global(h4) {
			font-size: 1.36rem;
			padding-bottom: 1.125rem;
	}
	.project-detail__content :global(p) {
			font-size: 1rem;
			padding-bottom: 1.25rem;
	}
	.project-detail__content :global(.project-detail__overview) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
		gap: 2.5rem;
		justify-items: center;
    	align-items: center;
	}
	.project-detail__content :global(.project-detail__contributions) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
		gap: 2.5rem;
		margin: 2rem auto 2rem;
	}
	.project-detail__content :global(.project-detail__key-results) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
		gap: 2.5rem;
		margin: 0 auto 2rem;
	}
	.project-detail__content :global(.project-detail__content-imgs-content) {
		padding: 0 0 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
		gap: 2.5rem;
	}
	.project-detail__content :global(figcaption) {
			text-align: center;
			padding: 1rem 0;
	}
	.project-detail__content :global(.project-detail__content-controls) {
			text-align: center;
			padding: 2rem 0;
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
	.project-detail__content :global(.content-controls__left .content-controls__left-title) {
			font-size: 1rem;
			padding-bottom: 1rem;
	}
	@media (min-width: 480px) {
		.project-detail__content :global(.content-controls__right .content-controls__right-title),
		.project-detail__content :global(.content-controls__left .content-controls__left-title) {
			font-size: 1.36rem;
			padding-bottom: 1rem;
		}
	}
	.project-detail__content :global(figcaption a:hover),
	.project-detail__content :global(.project-detail__content-controls a:hover) {
			color: #a47764;
			text-decoration: none;
	}
	.project-detail__headline {
			font-family: 'Source Code Pro', monospace;
			font-weight: bold;
			font-size: 2.6rem;
			padding: 4.5rem 1.125rem 1.125rem;
			color: #fff;
			background-color: #000;
	}
	.overview-content__headline,	
	.contributions-content__headline,
	.key-results-content__headline,
	.content-imgs__headline {
      font-weight: bold;
      color: #a47764;
	}
</style>
