export async function load({ fetch }) {
	const response = await fetch('/experience'); // Fetch data from the +server.js endpoint
	if (!response.ok) {
		throw new Error('Failed to fetch companies data');
	}

	const companies = await response.json();
	return { companies };
}
