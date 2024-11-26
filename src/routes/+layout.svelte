<script>
	import '../lib/styles/global.css';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import { onMount } from 'svelte';

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

<div>
	<Nav />
	<main>
		<slot />
	</main>
</div>
