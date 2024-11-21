export async function load({ fetch }) {
	const response = await fetch('/photography'); // Fetch data from the +server.js endpoint
	if (!response.ok) {
		throw new Error('Failed to fetch companies data');
	}

	const photos = await response.json();
	return { photos };
}
