<script>
	import '../lib/styles/global.css';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	let { children } = $props();

	// Firefox-specific workaround for prefetch
	onMount(() => {
		if (navigator.userAgent.includes('Firefox')) {
			document.querySelectorAll('a[sveltekit\\:prefetch]').forEach(link => {
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

<style>
    main {
        position: relative;
        background-color: #000;
        margin: 0;
        padding: 0;
        min-height: 100vh;
    }
</style>

<ParaglideJS {i18n}>
	<Nav />
	<main>
		{@render children()}
	</main>
</ParaglideJS>
