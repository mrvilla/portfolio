import projectDetails from './_portfolio.js';

const contents = JSON.stringify(projectDetails.map(project => {
	return {
		title: project.title,
		subtitle: project.subtitle,
		shortDesc: project.shortDesc,
		link: project.link,
		slug: project.slug,
		projectHref: project.projectHref,
		projectLink: project.projectLink
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}