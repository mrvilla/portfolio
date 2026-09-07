<script>
	import m from '$lib/messages.js';

	export let backHref = '';
	export let backLabel = '';
</script>

<section class="project-case">
	{#if backHref && backLabel}
		<a class="project-case__back" href={backHref}>← {backLabel}</a>
	{/if}
	<h1 class="project-case__headline">{m.project_headline()}</h1>
	<div class="project-case__content">
		<slot />
	</div>
</section>

<style lang="scss">
	@import './style/project-case.scss';
</style>
