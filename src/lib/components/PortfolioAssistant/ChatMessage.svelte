<script>
	import { localizedPath } from '$lib/utils/localizedPath.js';

	export let message;
</script>

<div class="chat-message chat-message--{message.role}" role="article" aria-label={message.role === 'user' ? 'Your question' : 'Assistant response'}>
	{#if message.categories?.length}
		<ul class="chat-message__categories" aria-label="Related topics">
			{#each message.categories as category}
				<li class="chat-message__category">{category}</li>
			{/each}
		</ul>
	{/if}
	<p class="chat-message__content">{message.content}</p>
	{#if message.links?.length}
		<ul class="chat-message__links">
			{#each message.links as link}
				<li>
					<a class="chat-message__link" href={localizedPath(link.href)} rel="prefetch">
						{link.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.chat-message {
		max-width: 88%;
		display: flex;
		flex-direction: column;
	}

	.chat-message--user {
		align-self: flex-end;
	}

	.chat-message--user .chat-message__content {
		background: var(--assistant-user-bg);
		color: var(--assistant-user-text);
		border-radius: 1rem 1rem 0.25rem 1rem;
	}

	.chat-message--assistant {
		align-self: flex-start;
		background: var(--assistant-assistant-bg);
		color: var(--assistant-text);
		border: 0.125rem solid var(--assistant-border);
		border-radius: 1rem 1rem 1rem 0.25rem;
	}

	.chat-message--assistant .chat-message__content {
		background: transparent;
		color: inherit;
	}

	.chat-message__categories {
		list-style: none;
		margin: 0;
		padding: 0.75rem 1rem 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.375rem;
	}

	.chat-message__category {
		font-size: 0.75rem;
		line-height: 1.2;
		padding: 0.25rem 0.5rem;
		border-radius: 999px;
		background: rgba(164, 119, 100, 0.12);
		color: var(--assistant-focus);
		border: 0.0625rem solid rgba(164, 119, 100, 0.25);
	}

	.chat-message__content {
		margin: 0;
		padding: 1rem;
		font-size: 0.95rem;
		line-height: 1.55;
		white-space: pre-line;
	}

	.chat-message__links {
		list-style: none;
		margin: 0;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.chat-message--assistant .chat-message__links {
		padding-top: 0;
	}

	.chat-message__link {
		display: inline-block;
		font-size: 0.875rem;
		color: var(--assistant-focus);
		text-decoration: none;
		border-bottom: 0.0625rem solid transparent;
		transition: border-color 0.15s ease;

		&:hover {
			border-bottom-color: var(--assistant-focus);
		}

		&:focus-visible {
			outline: 0.125rem solid var(--assistant-focus);
			outline-offset: 0.125rem;
			border-radius: 0.125rem;
		}
	}
</style>
