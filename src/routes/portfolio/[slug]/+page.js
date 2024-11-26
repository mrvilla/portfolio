import projectDetails from '../_portfolio.js';
import { error } from '@sveltejs/kit';

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const { slug } = params;
	// Debug the slug being passed
	console.log('Slug received:', slug);

	const project = projectDetails.find((p)=> p.slug === slug);

	if (!project) {
		throw error(404, `Project with slug "${slug}" not found.`);
	}

	return { project };
}
