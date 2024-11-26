import projectDetails from './_portfolio.js';

export const prerender = true;

export function load() {
	return {
			portfolios: projectDetails
	};
}
