<script>
	import Stage from '$lib/components/Stage/Stage.svelte';
</script>

<svelte:head>
	<title>iammrvilla</title>
	<link rel="prefetch" href="/videos/dji_fly_video_clip.mp4" as="video" type="video/mp4" />
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
		height: 100%;
	}
</style>
