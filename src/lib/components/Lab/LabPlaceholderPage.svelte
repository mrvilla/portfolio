<script>
	import * as m from '$lib/paraglide/messages';
	import { i18n } from '$lib/i18n.js';
	import { languageTag } from '$lib/paraglide/runtime.js';

	export let kicker;
	export let title;
	export let description;
	export let note;

	$: languageTag();
	$: labHref = `${i18n.resolveRoute('/', languageTag())}#lab`;
</script>

<section class="lab-placeholder">
	<div class="lab-placeholder__intro">
		<a class="lab-placeholder__back" href={labHref}>{m.lab_back()}</a>
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
