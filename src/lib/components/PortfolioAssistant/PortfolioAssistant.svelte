<script>
	import { onMount, tick } from 'svelte';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { createAssistantProvider, getAssistantData } from '$lib/assistant/index';
	import ChatMessageComponent from './ChatMessage.svelte';
	import SuggestedPrompt from './SuggestedPrompt.svelte';
	import PromptGroup from './PromptGroup.svelte';
	import ChatInput from './ChatInput.svelte';

	export let headline;
	export let placeholder;
	export let suggestedLabel;
	export let backToTopicsLabel;

	let messages = [];
	let isResponding = false;
	let chatLogEl;
	let dockEl;
	let sectionEl;
	let messageId = 0;
	let selectedGroupId = null;

	$: locale = languageTag();
	$: assistantData = getAssistantData(locale);
	$: provider = createAssistantProvider(locale);
	$: promptGroups = assistantData.promptGroups ?? [];
	$: promptsById = Object.fromEntries(assistantData.prompts.map((prompt) => [prompt.id, prompt]));
	$: activeGroup = promptGroups.find((group) => group.id === selectedGroupId);
	$: groupPrompts = activeGroup
		? activeGroup.promptIds.map((id) => promptsById[id]).filter(Boolean)
		: [];
	$: hasResults = messages.length > 0 || isResponding;

	$: hasResults, activeGroup, dockEl && tick().then(syncDockHeight);

	function nextId() {
		messageId += 1;
		return `msg-${messageId}`;
	}

	function syncDockHeight() {
		if (!dockEl) return;
		const height = `${dockEl.offsetHeight}px`;
		sectionEl?.style.setProperty('--assistant-dock-height', height);
		sectionEl?.closest('.stage')?.style.setProperty('--assistant-dock-height', height);
	}

	onMount(() => {
		syncDockHeight();
		const observer = new ResizeObserver(syncDockHeight);
		observer.observe(dockEl);

		return () => observer.disconnect();
	});

	async function scrollToBottom(instant = false) {
		await tick();
		if (!chatLogEl) return;
		chatLogEl.scrollTo({
			top: chatLogEl.scrollHeight,
			behavior: instant ? 'auto' : 'smooth'
		});
	}

	async function syncAndScroll(instant = false) {
		syncDockHeight();
		await tick();
		await scrollToBottom(instant);
	}

	function selectGroup(groupId) {
		selectedGroupId = groupId;
		tick().then(syncDockHeight);
	}

	function clearGroup() {
		selectedGroupId = null;
		tick().then(syncDockHeight);
	}

	async function askQuestion(question) {
		const trimmed = question.trim();
		if (!trimmed || isResponding) return;

		isResponding = true;
		const isFirstMessage = messages.length === 0;
		messages = [...messages, { id: nextId(), role: 'user', content: trimmed }];
		await syncAndScroll(isFirstMessage);

		try {
			const result = await provider.ask(trimmed);
			messages = [
				...messages,
				{
					id: nextId(),
					role: 'assistant',
					content: result.answer,
					categories: result.categories,
					links: result.links
				}
			];
		} catch {
			messages = [
				...messages,
				{
					id: nextId(),
					role: 'assistant',
					content: assistantData.fallback
				}
			];
		} finally {
			isResponding = false;
			await syncAndScroll(isFirstMessage);
		}
	}
</script>

<section class="portfolio-assistant" bind:this={sectionEl} aria-label={headline}>
	<div
		class="portfolio-assistant__conversation"
		class:portfolio-assistant__conversation--active={hasResults}
		bind:this={chatLogEl}
		role="log"
		aria-live="polite"
		aria-relevant="additions"
		aria-label="Portfolio assistant conversation"
	>
		{#if hasResults}
			<div class="portfolio-assistant__messages">
				{#each messages as message (message.id)}
					<ChatMessageComponent {message} />
				{/each}

				{#if isResponding}
					<p class="portfolio-assistant__typing" aria-live="polite">Thinking…</p>
				{/if}
			</div>
		{/if}
	</div>

	<div
		class="portfolio-assistant__dock"
		class:portfolio-assistant__dock--compact={hasResults}
		bind:this={dockEl}
	>
		{#if !hasResults}
			<div class="portfolio-assistant__header">
				<h4 id="portfolio-assistant-heading" class="portfolio-assistant__headline">{headline}</h4>
			</div>
		{/if}

		<div class="portfolio-assistant__controls">
			<div class="portfolio-assistant__search">
				<ChatInput {placeholder} disabled={isResponding} onSubmit={askQuestion} />
			</div>

			<div class="portfolio-assistant__topics" role="group" aria-label={suggestedLabel}>
				{#if activeGroup}
					<div class="portfolio-assistant__topics-header">
						<button type="button" class="portfolio-assistant__back" on:click={clearGroup}>
							← {backToTopicsLabel}
						</button>
						<p class="portfolio-assistant__group-label">{activeGroup.label}</p>
					</div>
					<div class="portfolio-assistant__prompts">
						{#each groupPrompts as prompt (prompt.id)}
							<SuggestedPrompt {prompt} onSelect={askQuestion} />
						{/each}
					</div>
				{:else}
					<div class="portfolio-assistant__groups">
						{#each promptGroups as group (group.id)}
							<PromptGroup {group} onSelect={selectGroup} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import './style/portfolio-assistant.scss';
</style>
