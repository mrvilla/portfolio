<script>
	export let value = '';
	export let placeholder = '';
	export let disabled = false;
	export let showClose = false;
	export let closeLabel = 'Close';
	export let onSubmit;
	export let onClose = () => {};

	let inputEl;

	export function focus() {
		inputEl?.focus();
	}

	function handleSubmit() {
		const trimmed = value.trim();
		if (!trimmed || disabled) return;
		onSubmit(trimmed);
		value = '';
	}

	function handleKeydown(event) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			handleSubmit();
		}
	}
</script>

<form class="chat-input" on:submit|preventDefault={handleSubmit}>
	<label class="visually-hidden" for="portfolio-assistant-input">{placeholder}</label>
	<input
		bind:this={inputEl}
		id="portfolio-assistant-input"
		type="text"
		class="chat-input__field"
		{placeholder}
		{disabled}
		bind:value
		on:keydown={handleKeydown}
		autocomplete="off"
	/>
	{#if showClose}
		<button
			type="button"
			class="chat-input__close"
			on:click={onClose}
			aria-label={closeLabel}
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M18 6L6 18M6 6l12 12"
					stroke="currentColor"
					stroke-width="1.75"
					stroke-linecap="round"
				/>
			</svg>
		</button>
	{:else}
	<button type="submit" class="chat-input__submit" {disabled} aria-label="Send question">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M5 12h14M13 6l6 6-6 6"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>
	{/if}
</form>

<style lang="scss">
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.chat-input {
		display: flex;
		align-items: center;
		width: 100%;
		box-sizing: border-box;
		padding: 0.35rem 0.5rem 0.35rem 0.35rem;
		border-radius: 999px;
		background: var(--assistant-input-bg);
		border: 1px solid var(--assistant-border-subtle, rgba(255, 255, 255, 0.08));
		overflow: hidden;
		transition:
			box-shadow 280ms ease,
			background-color 280ms ease,
			border-color 280ms ease;

		&:focus-within {
			outline: none;
			background: rgba(var(--atmospheric-sky-rgb), 0.65);
			border-color: rgba(var(--atmospheric-blue-rgb), 0.42);
			box-shadow:
				0 0 0 1px rgba(var(--atmospheric-blue-rgb), 0.28),
				0 0 28px var(--assistant-glow);
		}
	}

	.chat-input__field {
		flex: 1;
		min-width: 0;
		width: 100%;
		border: none;
		border-radius: 0;
		background: transparent;
		color: var(--assistant-text);
		font-family: inherit;
		font-size: 1rem;
		padding: 0.25rem 0.75rem; 
		line-height: 1.4;

		&::placeholder {
			color: var(--assistant-muted);
		}

		&:focus-visible {
			outline: none;
		}

		&:disabled {
			opacity: 0.6;
		}
	}

	.chat-input__close,
	.chat-input__submit {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		min-height: 2.5rem;
		border: none;
		border-radius: 50%;
		background: var(--assistant-user-bg);
		color: var(--assistant-user-text);
		cursor: pointer;
		flex-shrink: 0;
		margin: 0.1rem;
		transition:
			opacity 0.15s ease,
			background-color 0.15s ease;
	}

	.chat-input__close {
		background: transparent;
		color: var(--assistant-muted);
		cursor: pointer;
		flex-shrink: 0;

		&:hover {
			color: var(--assistant-text);
			background: rgba(var(--atmospheric-sky-rgb), 0.45);
		}

		&:focus-visible {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.0625rem;
		}
	}

	.chat-input__submit {
		&:hover:not(:disabled) {
			opacity: 0.9;
		}

		&:focus-visible {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.0625rem;
		}

		&:disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}
	}
</style>
