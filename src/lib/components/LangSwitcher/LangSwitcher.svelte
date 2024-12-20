<script>
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n.js';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	import FlagEn from '$lib/components/Flags/FlagEn.svelte';
	import FlagEs from '$lib/components/Flags/FlagEs.svelte';
	import FlagDe from '$lib/components/Flags/FlagDe.svelte';

	let isOpen = false;

	/**
	 * @param import("$lib/paraglide/runtime").AvailableLanguageTag newLanguage
	 */
	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
		isOpen = false;
	}

	const labels = {
		en: FlagEn,
		es: FlagEs,
		de: FlagDe
	};

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	$: otherLanguages = availableLanguageTags.filter((langTag) => langTag !== languageTag());
</script>

<div class="dropdown" aria-expanded={isOpen}>
	<!-- Current Selection -->
	<button class="current-selection" on:click={toggleDropdown} type="button">
		{languageTag().toUpperCase()}
		<svelte:component this={labels[languageTag()]} />
	</button>

	<!-- Dropdown Menu -->

	{#if isOpen}
		<div class="menu">
			{#each otherLanguages as langTag}
				<button class="menu-item" on:click={() => switchToLanguage(langTag)} type="button">
					{langTag.toUpperCase()}
					<svelte:component this={labels[langTag]} />
				</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.dropdown {
		position: relative;
		display: flex;
		align-items: center;
		cursor: pointer;
		user-select: none;

		.current-selection {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.5rem;
			background-color: #000;
			color: #fff;
			border: 0;
			border-radius: 0.25rem;
			font-size: inherit;
			line-height: inherit;
			font-family: inherit;
			cursor: pointer;
		}

		.menu {
			position: absolute;
			top: 86%;
			left: 0;
			background-color: #000;
			border: 0;
			border-radius: 0.25rem;
			margin-top: 0;
			min-width: 150px;
			z-index: 10;
			display: flex;
			flex-direction: column;

			.menu-item {
				display: flex;
				align-items: center;
				gap: 0.5rem;
				padding: 0.5rem;
				background-color: #000;
				color: #fff;
				cursor: pointer;
				transition: background-color 0.2s;
				border: 0;
				font-size: inherit;
				line-height: inherit;
				font-family: inherit;
			}
		}
	}
</style>
