<script>
	import '../lib/styles/global.css';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import AmbientEffects from '$lib/components/AmbientEffects/AmbientEffects.svelte';
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

<AmbientEffects />
<Nav />
<main>
	<slot />
</main>

<style>
	main {
		position: relative;
		z-index: 1;
		background-color: transparent;
		color: var(--color-text);
		margin: 0;
		padding: 0;
		min-height: 100vh;
	}
</style>
