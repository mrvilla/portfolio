import { languageTag } from '$lib/paraglide/runtime.js';

/**
 * Constructs a localized path for assets or links, excluding static asset directories.
 * @param {string} path - The relative path to localize (e.g., "/images/example.jpg").
 * @returns {string} - The localized path (e.g., "/es/images/example.jpg" for links, or "/images/example.jpg" for assets).
 */
export function localizedPath(path) {
	// Static directories that should not be prefixed
	const staticDirs = ['/images', '/videos', '/social-icons'];

	// Check if the path starts with any static directory
	const isStaticAsset = staticDirs.some((dir) => path.startsWith(dir));

	// If it's a static asset, return the original path
	if (isStaticAsset) {
		return path;
	}

	// Otherwise, prepend the language prefix
	const lang = languageTag();
	if (lang === 'es' || lang === 'de') {
		return `/${lang}${path}`;
	}

	// Default to the original path for English
	return path;
}
