import photo from './_photo.js';

const contents = JSON.stringify(photo.map(photo => {
	return {
		src: photo.src,
		alt: photo.title,
		location: photo.location,
		year: photo.year,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
