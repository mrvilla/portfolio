import company from './_company.js';

const contents = JSON.stringify(company.map(company => {
	return {
		src: company.src,
		companyName: company.companyName,
		title: company.title,
		location: company.location,
		beginEnd: company.beginEnd,
		details: company.details,
		href: company.href
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}