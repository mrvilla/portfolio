import projectDetails from '../_portfolio.js';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }){
	const { slug } = params;
	// console.log('Slug received:', slug);

	const project = projectDetails.find((p)=> p.slug === params.slug);

	if (!project) {
		return {
			status: 404,
			error: new Error(`Project with slug "${slug}" not found.`),
		};
	}

	return { project };
}
