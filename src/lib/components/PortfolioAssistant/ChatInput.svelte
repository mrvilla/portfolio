<script>
	export let value = '';
	export let placeholder = '';
	export let disabled = false;
	export let onSubmit;

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
		id="portfolio-assistant-input"
		type="text"
		class="chat-input__field"
		{placeholder}
		{disabled}
		bind:value
		on:keydown={handleKeydown}
		autocomplete="off"
	/>
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
		align-items: stretch;
		width: 100%;
		box-sizing: border-box;
		padding: 1rem * 0.35;
		border-radius: 0.75rem;
		background: var(--assistant-input-bg);
		overflow: hidden;

		&:focus-within {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.0625rem;
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

	.chat-input__submit {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		min-height: 2.75rem;
		border: none;
		border-radius: 0.5rem;
		background: var(--assistant-user-bg);
		color: var(--assistant-user-text);
		cursor: pointer;
		flex-shrink: 0;
		margin: 0.15rem;
		transition: opacity 0.15s ease;

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
