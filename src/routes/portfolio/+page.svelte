<script>
	import ProjectCase from '$lib/components/ProjectCase/ProjectCase.svelte';
	import FeaturedProjectCard from '$lib/components/SelectedWork/FeaturedProjectCard.svelte';
	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { localizedPath } from '$lib/utils/localizedPath.js';

	export let data;
	const { portfolios } = data;

	function msg(key) {
		const fn = m[key];
		return typeof fn === 'function' ? fn() : '';
	}

	$: languageTag();
	$: translatedPortfolios = portfolios.map((portfolio, index) => {
		const n = index + 1;
		const slug = portfolio.slug;
		const title = msg(`project${n}_title`) || portfolio.title;
		const statement =
			msg(`featured_${slug}_statement`) || msg(`project${n}_extendedTitle`) || title;

		return {
			slug,
			title,
			logo: portfolio.companyLogo,
			category: msg(`featured_${slug}_category`) || msg(`project${n}_subtitle`),
			statement,
			meta: msg(`featured_${slug}_meta`) || msg(`project${n}_tools`),
			projectHref: portfolio.projectHref,
			showVisitSite: Boolean(portfolio.projectHref),
			caseStudyLabel: m.stage_selectedWork_viewCaseStudy(),
			visitSiteLabel: m.stage_selectedWork_visitSite()
		};
	});
</script>

<svelte:head>
	<title>{m.nav_portfolio()}</title>
</svelte:head>

<ProjectCase
	backHref={localizedPath('/#selected-work')}
	backLabel={m.project_backToSelectedWork()}
>
	{#each translatedPortfolios as project (project.slug)}
		<FeaturedProjectCard
			category={project.category}
			title={project.title}
			logo={project.logo}
			statement={project.statement}
			meta={project.meta}
			slug={project.slug}
			caseStudyLabel={project.caseStudyLabel}
			visitSiteLabel={project.visitSiteLabel}
			projectHref={project.projectHref}
			showVisitSite={project.showVisitSite}
		/>
	{/each}
</ProjectCase>
