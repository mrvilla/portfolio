import companies from './_company.js';

export async function GET() {
	const contents = JSON.stringify(
		companies.map(company => ({
			src: company.src,
			companyName: company.companyName,
			title: company.title,
			location: company.location,
			beginEnd: company.beginEnd,
			details: company.details,
			href: company.href
		}))
	);

	return new Response(contents, {
		headers: { 'Content-Type': 'application/json' }
	});
}
