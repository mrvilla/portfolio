<script>
	export let group;
	export let onSelect;
</script>

<button type="button" class="prompt-group" on:click={() => onSelect(group.id)}>
	{group.label}
</button>

<style lang="scss">
	.prompt-group {
		appearance: none;
		border: 0.125rem solid var(--assistant-border);
		background: var(--assistant-prompt-bg);
		color: var(--assistant-text);
		border-radius: 0.75rem;
		padding: $spacing-16 * 0.85 $spacing-16;
		font-family: inherit;
		font-size: 0.9rem;
		line-height: 1.45;
		text-align: center;
		cursor: pointer;
		transition: background-color 0.15s ease, border-color 0.15s ease;
		width: 100%;

		&:hover {
			background: var(--assistant-prompt-hover);
			border-color: var(--assistant-focus);
		}

		&:focus-visible {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.125rem;
		}
	}
</style>
