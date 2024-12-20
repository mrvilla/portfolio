<script>
	export let headline;
	export let src;
</script>

<div class="iframe">
	<h2 class="iframe__headline">{headline}</h2>
	<div class="iframe__content">
		<iframe
			rel="prefetch"
			{src}
			frameborder="0"
			width="960"
			height="569"
			title="Component Workshop"
			allowfullscreen="true"
			mozallowfullscreen="true"
			webkitallowfullscreen="true"
		/>
	</div>
</div>

<style lang="scss">
	@import './style/iframe.scss';
</style>
