<script>
	import Stage from '$lib/components/Stage/Stage.svelte';
</script>

<svelte:head>
	<title>iamevilla</title>
	<link rel="prefetch" href="/images/profile.jpg" as="image" />
	<link rel="prefetch" href="/images/laptop_working.jpg" as="image" />
</svelte:head>

<div class="content">
	<Stage />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 3.5rem);
	}
</style>
