import projectDetails from '../_portfolio.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { slug } = params;
	const project = projectDetails.find(p => p.slug === slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}
