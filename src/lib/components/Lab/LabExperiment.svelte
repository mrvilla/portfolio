<script>
	export let variant = 'depth';
	/** Short film source. Leave empty until the video is ready — nothing renders. */
	export let videoSrc = '';
	export let videoCaption = '';
</script>

<article class="lab-experiment lab-experiment--{variant}">
	<slot />
	{#if videoSrc}
		<figure class="lab-experiment__video">
			<!-- svelte-ignore a11y_media_has_caption -->
			<video src={videoSrc} controls playsinline></video>
			{#if videoCaption}
				<figcaption class="lab-experiment__audit">{videoCaption}</figcaption>
			{/if}
		</figure>
	{/if}
</article>

<style lang="scss">
	:global {
		@import './style/lab-experiment.scss';
	}
</style>
