import type { AssistantData } from './types.js';

export function buildFallback(data: AssistantData): string {
	const topics = data.promptGroups.map((group) => group.label).join(' · ');

	return `${data.fallbackIntro}\n\n${data.fallbackBrowseLabel} ${topics}`;
}
