<script>
	import * as m from '$lib/paraglide/messages';
</script>

<div class="project-case">
	<h2 class="project-case__headline">{m.project_headline()}</h2>
	<div class="project-case__content">
		<slot />
	</div>
</div>

<style lang="scss">
	@import './style/project-case.scss';
</style>
