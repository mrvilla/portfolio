<script>
	import * as m from '$lib/paraglide/messages';
	import { theme, THEME_DARK } from '$lib/theme/theme.js';
</script>

<button
	type="button"
	class="theme-switcher"
	on:click={() => theme.toggle()}
	aria-label={$theme === THEME_DARK ? m.theme_switchToLight() : m.theme_switchToDark()}
	title={$theme === THEME_DARK ? m.theme_switchToLight() : m.theme_switchToDark()}
>
	{#if $theme === THEME_DARK}
		<svg class="theme-switcher__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.75" />
			<path
				d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
				stroke="currentColor"
				stroke-width="1.75"
				stroke-linecap="round"
			/>
		</svg>
	{:else}
		<svg class="theme-switcher__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
				stroke="currentColor"
				stroke-width="1.75"
				stroke-linejoin="round"
			/>
		</svg>
	{/if}
</button>

<style lang="scss">
	.theme-switcher {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border: 0.0625rem solid var(--color-accent);
		border-radius: 0.25rem;
		background: transparent;
		color: var(--color-text);
		cursor: pointer;
		transition:
			background-color 0.15s ease,
			border-color 0.15s ease;

		&:hover {
			background: var(--color-surface-hover);
		}

		&:focus-visible {
			outline: 0.125rem solid var(--color-accent);
			outline-offset: 0.125rem;
		}
	}

	.theme-switcher__icon {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
