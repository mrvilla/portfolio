import photos from './_photo.js';

export async function GET() {
	const contents = JSON.stringify(
		photos.map(photo => ({
			src: photo.src,
			alt: photo.title,
			location: photo.location,
			year: photo.year,
		}))
	);

	return new Response(contents, {
		headers: { 'Content-Type': 'application/json' }
	});
}
