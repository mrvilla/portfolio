import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				quietDeps: true,
				additionalData: `
				@use '/src/lib/styles/vars.scss' as *;
				`
			}
		}
	}
});
