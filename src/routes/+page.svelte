<script>
	import Stage from '$lib/components/Stage/Stage.svelte'; // Use the $lib alias for better project structure
</script>

<svelte:head>
	<title>iammrvilla</title>
		<link rel="prefetch" href="/videos/dji_fly_video_clip.mp4" as="video" type="video/mp4" />
		<link rel="prefetch" href="/images/profile.jpg" as="image" />
		<link rel="prefetch" href="/images/laptop_working.jpg" as="image" />
</svelte:head>

<style>
    .content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
</style>

<div class="content">
	<Stage />
</div>
