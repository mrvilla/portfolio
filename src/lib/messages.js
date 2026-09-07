import copy from '$lib/data/copy.json';

/** @type {Record<string, () => string>} */
const messages = {};

for (const [key, value] of Object.entries(copy)) {
	if (key.startsWith('$') || typeof value !== 'string') continue;
	messages[key] = () => value;
}

export default messages;
