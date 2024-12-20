<script>
	import Article from '$lib/components/Article/Article.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>{m.nav_about()}</title>
</svelte:head>

<Article />
