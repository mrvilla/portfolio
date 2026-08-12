<script>
	export let group;
	export let variant = 'card';
	export let onSelect;
</script>

<button
	type="button"
	class="prompt-group"
	class:prompt-group--pill={variant === 'pill'}
	on:click={() => onSelect(group.id)}
>
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
				rgba(var(--atmospheric-blue-rgb), 0.22),
				rgba(var(--atmospheric-lavender-rgb), 0.08) 70%,
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

	.prompt-group--pill {
		width: auto;
		flex-shrink: 0;
		border-width: 0;
		border-radius: 999px;
		padding: 0.55rem 1rem;
		font-size: 0.8125rem;
		background: var(--assistant-prompt-bg);
		backdrop-filter: blur(8px);

		&::before {
			display: none;
		}

		&:hover {
			transform: translateY(-1px);
			background: var(--assistant-prompt-hover);
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

		.prompt-group--pill:hover {
			transform: none;
		}
	}
</style>
