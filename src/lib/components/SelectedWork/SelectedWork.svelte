<script>
	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { resolveFeaturedProjects } from '$lib/data/featured-work.js';
	import FeaturedProjectCard from './FeaturedProjectCard.svelte';

	$: languageTag();
	$: featuredProjects = resolveFeaturedProjects(m);
</script>

<section id="selected-work" class="selected-work" aria-labelledby="selected-work-heading">
	<h4 id="selected-work-heading" class="selected-work__label">{m.stage_selectedWork_label()}</h4>

	<div class="selected-work__grid">
		{#each featuredProjects as project (project.slug)}
			<FeaturedProjectCard
				category={project.category}
				title={project.title}
				statement={project.statement}
				supporting={project.supporting}
				meta={project.meta}
				slug={project.slug}
				caseStudyLabel={project.caseStudyLabel}
				visitSiteLabel={project.visitSiteLabel}
				projectHref={project.projectHref}
				showVisitSite={project.showVisitSite}
			/>
		{/each}
	</div>

	<div class="selected-work__footer">
		<a class="selected-work__view-all" rel="prefetch" href="/portfolio">
			{m.stage_selectedWork_viewAll()}
		</a>
	</div>
</section>

<style lang="scss">
	@import './style/selected-work.scss';
</style>
