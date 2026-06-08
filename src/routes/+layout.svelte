<script>
	import '../lib/styles/global.css';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import { theme } from '$lib/theme/theme.js';

	// Firefox-specific workaround for prefetch
	onMount(() => {
		theme.init();

		if (navigator.userAgent.includes('Firefox')) {
			document.querySelectorAll('a[sveltekit\\:prefetch]').forEach((link) => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
					const href = link.getAttribute('href');
					history.pushState({}, '', href);
					location.reload();
				});
			});
		}
	});
</script>

<ParaglideJS {i18n}>
	<Nav />
	<main>
		<slot />
	</main>
</ParaglideJS>

<style>
	main {
		position: relative;
		background-color: var(--color-bg);
		color: var(--color-text);
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}
</style>
