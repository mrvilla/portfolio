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
		width: 100%;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;

		&:hover {
			background: var(--assistant-prompt-hover);
			border-color: var(--assistant-focus);
			transform: translateX(3px);
		}

		&:focus-visible {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.125rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.suggested-prompt {
			transition: none;

			&:hover {
				transform: none;
			}
		}
	}
</style>
