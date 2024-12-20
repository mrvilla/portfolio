<script>
	import * as m from '$lib/paraglide/messages';
</script>

<div class="aerial">
	<h2 class="aerial__headline">{m.aerial_headline()}</h2>
	<div class="aerial__aerial-items">
		<slot />
	</div>
</div>

<style lang="scss">
	@import './style/aerial.scss';
</style>
