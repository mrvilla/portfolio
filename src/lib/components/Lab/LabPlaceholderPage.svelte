<script>
	import m from '$lib/messages.js';

	export let kicker;
	export let title;
	export let description;
	export let note;
</script>

<section class="lab-placeholder">
	<div class="lab-placeholder__intro">
		<a class="lab-placeholder__back" href="/#lab">{m.lab_back()}</a>
		<span class="lab-placeholder__kicker">{kicker}</span>
		<h1 class="lab-placeholder__title">{title}</h1>
		<p class="lab-placeholder__description">{description}</p>
		<p class="lab-placeholder__note">{note}</p>
	</div>
	<div class="lab-placeholder__body">
		<slot />
	</div>
</section>

<style lang="scss">
	@import './style/lab-placeholder-page.scss';
</style>
