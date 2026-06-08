<script>
	export let prompt;
	export let onSelect;
</script>

<button
	type="button"
	class="suggested-prompt"
	on:click={() => onSelect(prompt.question)}
>
	{prompt.question}
</button>

<style lang="scss">
	.suggested-prompt {
		appearance: none;
		border: 1px solid var(--assistant-border);
		background: var(--assistant-prompt-bg);
		color: var(--assistant-text);
		border-radius: 0.75rem;
		padding: 0.5rem;
		font-family: inherit;
		font-size: 0.875rem;
		line-height: 1.45;
		text-align: left;
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
