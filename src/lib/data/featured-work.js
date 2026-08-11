import projectDetails from '../../routes/portfolio/_portfolio.js';

/** Homepage featured projects, ordered for display. Reuses portfolio slugs/hrefs. */
export const featuredWorkConfig = [
	{ slug: 'qualmity', showVisitSite: false },
	{ slug: 'sembo', showVisitSite: true }
];

/**
 * Resolve featured homepage projects from portfolio data + homepage-specific copy.
 * @param {typeof import('$lib/paraglide/messages')} m
 */
export function resolveFeaturedProjects(m) {
	return featuredWorkConfig.map(({ slug, showVisitSite }) => {
		const index = projectDetails.findIndex((project) => project.slug === slug);
		if (index === -1) {
			throw new Error(`Featured project not found in portfolio data: ${slug}`);
		}

		const project = projectDetails[index];
		const n = index + 1;
		const titleFn = m[`project${n}_title`];

		return {
			slug: project.slug,
			title: titleFn ? titleFn() : project.title,
			projectHref: project.projectHref,
			showVisitSite: Boolean(showVisitSite && project.projectHref),
			category: m[`featured_${slug}_category`](),
			statement: m[`featured_${slug}_statement`](),
			supporting: m[`featured_${slug}_supporting`](),
			meta: m[`featured_${slug}_meta`](),
			caseStudyLabel: m.stage_selectedWork_viewCaseStudy(),
			visitSiteLabel: m.stage_selectedWork_visitSite()
		};
	});
}
