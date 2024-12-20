<script>
	import * as m from '$lib/paraglide/messages';
</script>

<div class="photo">
	<h2 class="photo__headline">{m.photograph_headline()}</h2>
	<div class="photo__photo-items">
		<slot />
	</div>
</div>

<style lang="scss">
	@import './style/photo.scss';
</style>
