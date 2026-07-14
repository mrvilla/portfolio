<script>
	import ProjectDetail from '$lib/components/ProjectDetail/ProjectDetail.svelte';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages';
	import projectDetails from '../_portfolio.js';

	/** @type {{ data: import('./$types').PageData }} */
	export let data;
	const { project } = data;

	$: slug = $page.url.pathname.split('/').pop();

	const hasText = (value) => typeof value === 'string' && value.trim().length > 0;

	/** Keep in sync with `_portfolio.js` order via slug → index. */
	const slugToIndex = Object.fromEntries(projectDetails.map((entry, index) => [entry.slug, index]));

	function msg(key) {
		const fn = m[key];
		return typeof fn === 'function' ? fn() : undefined;
	}

	$: projectIndex = slugToIndex[slug];
	$: projectNumber = projectIndex === undefined ? null : projectIndex + 1;

	$: translatedProject =
		projectNumber == null
			? null
			: {
					...project,
					title: msg(`project${projectNumber}_title`),
					extendedTitle: msg(`project${projectNumber}_extendedTitle`) || msg(`project${projectNumber}_title`),
					overviewHeadlineText: msg(`project${projectNumber}_overviewHeadlineText`),
					overview: msg(`project${projectNumber}_overview`),
					roleHeadlineText: msg(`project${projectNumber}_roleHeadlineText`),
					role: msg(`project${projectNumber}_role`),
					teamHeadlineText: msg(`project${projectNumber}_teamHeadlineText`),
					team: msg(`project${projectNumber}_team`),
					toolsHeadlineText: msg(`project${projectNumber}_toolsHeadlineText`),
					tools: msg(`project${projectNumber}_tools`),
					solutionsHeadlineText: msg(`project${projectNumber}_solutionsHeadlineText`),
					solutions: msg(`project${projectNumber}_solutions`),
					companyLogo: msg(`project${projectNumber}_companyLogo`),
					contributionsHeadlineText: msg(`project${projectNumber}_contributionsHeadlineText`),
					contributionsSubheadlineText1: msg(`project${projectNumber}_contributionsSubheadlineText1`),
					contributionsText1: msg(`project${projectNumber}_contributionsText1`),
					contributionsSubheadlineText2: msg(`project${projectNumber}_contributionsSubheadlineText2`),
					contributionsText2: msg(`project${projectNumber}_contributionsText2`),
					contributionsSubheadlineText3: msg(`project${projectNumber}_contributionsSubheadlineText3`),
					contributionsText3: msg(`project${projectNumber}_contributionsText3`),
					contributionsSubheadlineText4: msg(`project${projectNumber}_contributionsSubheadlineText4`),
					contributionsText4: msg(`project${projectNumber}_contributionsText4`),
					keyResultsHeadlineText: msg(`project${projectNumber}_keyResultsHeadlineText`),
					keyResultsText1: msg(`project${projectNumber}_keyResultsText1`),
					keyResultsText2: msg(`project${projectNumber}_keyResultsText2`),
					keyResultsText3: msg(`project${projectNumber}_keyResultsText3`),
					keyResultsText4: msg(`project${projectNumber}_keyResultsText4`),
					keyResultsText5: msg(`project${projectNumber}_keyResultsText5`),
					contentImgsHeadline: msg(`project${projectNumber}_contentImgsHeadline`),
					figcaption:
						msg(`project${projectNumber}_figcaption`) || msg(`project${projectNumber}_figcaption1`),
					figcaptionImg:
						msg(`project${projectNumber}_figcaptionImg`) ||
						msg(`project${projectNumber}_figcaption1Img`),
					figcaption2: msg(`project${projectNumber}_figcaption2`),
					figcaption2img:
						msg(`project${projectNumber}_figcaption2img`) ||
						msg(`project${projectNumber}_figcaption2Img`),
					figcaption3: msg(`project${projectNumber}_figcaption3`),
					figcaption3img:
						msg(`project${projectNumber}_figcaption3img`) ||
						msg(`project${projectNumber}_figcaption3Img`),
					figcaption4: msg(`project${projectNumber}_figcaption4`),
					figcaption4img:
						msg(`project${projectNumber}_figcaption4img`) ||
						msg(`project${projectNumber}_figcaption4Img`),
					previousProjectControlTitle: msg(`project${projectNumber}_previousProjectControlTitle`),
					previousLink: msg(`project${projectNumber}_previousLink`),
					previousProjectName: msg(`project${projectNumber}_previousProjectName`),
					nextProjectControlTitle: msg(`project${projectNumber}_nextProjectControlTitle`),
					nextLink: msg(`project${projectNumber}_nextLink`),
					nextProjectName: msg(`project${projectNumber}_nextProjectName`)
				};
</script>

<svelte:head>
	<title>{translatedProject?.title ?? 'Portfolio'}</title>
</svelte:head>

{#if translatedProject}
	<ProjectDetail>
		<h2 class="project-detail__headline">
			{translatedProject.extendedTitle || translatedProject.title}
		</h2>

		<div class="project-detail__content">
			<div class="project-detail__overview">
				<div class="project-detail__overview-content">
					<h3 class="overview-content__headline">{translatedProject.overviewHeadlineText}</h3>
					<p class="overview-content__p">{translatedProject.overview}</p>
					<h4>{translatedProject.roleHeadlineText}</h4>
					<p class="overview-content__p">{translatedProject.role}</p>
					<h4>{translatedProject.teamHeadlineText}</h4>
					<p class="overview-content__p">{translatedProject.team}</p>
					<h4>{translatedProject.toolsHeadlineText}</h4>
					<p class="overview-content__p">{translatedProject.tools}</p>
					{#if hasText(translatedProject.solutionsHeadlineText) || hasText(translatedProject.solutions)}
						{#if hasText(translatedProject.solutionsHeadlineText)}
							<h4>{translatedProject.solutionsHeadlineText}</h4>
						{/if}
						{#if hasText(translatedProject.solutions)}
							<p class="overview-content__p">{translatedProject.solutions}</p>
						{/if}
					{/if}
				</div>
				<img src={translatedProject.companyLogo} alt="Logo of Company">
			</div>
			{#if hasText(translatedProject.contributionsHeadlineText) || hasText(translatedProject.contributionsText1)}
			<div class="project-detail__contributions">
				<div class="project-detail__contributions-content">
					{#if hasText(translatedProject.contributionsHeadlineText)}
						<h3 class="contributions-content__headline">{translatedProject.contributionsHeadlineText}</h3>
					{/if}
					{#if hasText(translatedProject.contributionsSubheadlineText1)}
						<h4>{translatedProject.contributionsSubheadlineText1}</h4>
					{/if}
					{#if hasText(translatedProject.contributionsText1)}
						<p>{translatedProject.contributionsText1}</p>
					{/if}
					{#if hasText(translatedProject.contributionsSubheadlineText2)}
						<h4>{translatedProject.contributionsSubheadlineText2}</h4>
					{/if}
					{#if hasText(translatedProject.contributionsText2)}
						<p>{translatedProject.contributionsText2}</p>
					{/if}
					{#if hasText(translatedProject.contributionsSubheadlineText3)}
						<h4>{translatedProject.contributionsSubheadlineText3}</h4>
					{/if}
					{#if hasText(translatedProject.contributionsText3)}
						<p>{translatedProject.contributionsText3}</p>
					{/if}
					{#if hasText(translatedProject.contributionsSubheadlineText4)}
						<h4>{translatedProject.contributionsSubheadlineText4}</h4>
					{/if}
					{#if hasText(translatedProject.contributionsText4)}
						<p>{translatedProject.contributionsText4}</p>
					{/if}
				</div>
			</div>
			{/if}
			<div class="project-detail__key-results">
				<div class="project-detail__key-results-content">
					{#if hasText(translatedProject.keyResultsHeadlineText)}
						<h3 class="key-results-content__headline">{translatedProject.keyResultsHeadlineText}</h3>
					{/if}
					{#if hasText(translatedProject.keyResultsText1)}<p>{translatedProject.keyResultsText1}</p>{/if}
					{#if hasText(translatedProject.keyResultsText2)}<p>{translatedProject.keyResultsText2}</p>{/if}
					{#if hasText(translatedProject.keyResultsText3)}<p>{translatedProject.keyResultsText3}</p>{/if}
					{#if hasText(translatedProject.keyResultsText4)}<p>{translatedProject.keyResultsText4}</p>{/if}
					{#if hasText(translatedProject.keyResultsText5)}<p>{translatedProject.keyResultsText5}</p>{/if}
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
					{#if translatedProject.figcaption4 && translatedProject.figcaption4img}
					<figure>
						<figcaption>{translatedProject.figcaption4}</figcaption>
						<img src={translatedProject.figcaption4img} alt="Desktop">
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
			color: #000;
	}
	.project-detail__content :global(p) {
			font-size: 1rem;
			padding-bottom: 1.25rem;
			color: #000;
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
			color: #a47764;
	}
	@media (min-width: 480px) {
		.project-detail__content :global(.content-controls__right .content-controls__right-title),
		.project-detail__content :global(.content-controls__left .content-controls__left-title) {
			font-size: 1.36rem;
			padding-bottom: 1rem;
		}
	}

	.project-detail__content :global(.project-detail__content-controls a) {
			color: #000;
			text-decoration: underline;
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

	.overview-content__p {
		white-space: pre-wrap;
	}
</style>
