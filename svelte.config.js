import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			entries: [
				'/', // Home page
				'/about',
				'/photography',
				'/experience',
				'/portfolio/sembo',
				'/portfolio/signum',
				'/portfolio/ibmix-aperto',
				'/portfolio/video-dev-team',
				'/portfolio/corruptor',
				'/portfolio/btv',
				'/portfolio/dihk',
				'/portfolio/consuo',
				'/portfolio/ibmix-aperto',
				'/portfolio/signum-consulting',
				'/portfolio/consus',
				'/portfolio/cemex',
				'/portfolio/qualmity',
			]
		}
	},

	preprocess: [mdsvex()],
	extensions: ['.svelte', '.svx']
};

export default config;
