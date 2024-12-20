import projectDetails from '../_portfolio.js';

export const prerender = false;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// console.log('Loading project for slug:', params.slug);
	const { slug } = params;
	// console.log('Slug received:', slug);

	const project = projectDetails.find((p) => p.slug === slug);

	if (!project) {
		return {
			status: 404,
			error: new Error(`Project with slug "${slug}" not found.`)
		};
	}

	return { project };
}
