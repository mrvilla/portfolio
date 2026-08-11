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
		position: relative;
		isolation: isolate;
		overflow: hidden;
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
		width: 100%;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			transform 0.2s ease;

		&::before {
			content: '';
			position: absolute;
			inset: 0;
			z-index: -1;
			background: linear-gradient(
				90deg,
				rgba(164, 119, 100, 0.28),
				rgba(164, 119, 100, 0.05) 70%,
				transparent
			);
			transform: scaleX(0);
			transform-origin: left center;
			transition: transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1);
			pointer-events: none;
		}

		&:hover {
			background: var(--assistant-prompt-hover);
			border-color: var(--assistant-focus);
			transform: translateX(2px);

			&::before {
				transform: scaleX(1);
			}
		}

		&:focus-visible {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.125rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.prompt-group,
		.prompt-group::before {
			transition: none;
		}

		.prompt-group:hover {
			transform: none;
		}
	}
</style>
