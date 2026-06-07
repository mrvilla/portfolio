import knowledgeEn from '$lib/data/portfolio-assistant/knowledge.en.json' with { type: 'json' };
import knowledgeDe from '$lib/data/portfolio-assistant/knowledge.de.json' with { type: 'json' };
import contentEn from '$lib/data/portfolio-assistant/en.json' with { type: 'json' };
import contentDe from '$lib/data/portfolio-assistant/de.json' with { type: 'json' };
import { buildFallback } from './build-fallback.js';
import { LocalAssistantProvider } from './providers/local-provider.js';
import type { AssistantContent, AssistantData, AssistantKnowledge, AssistantProvider } from './types.js';

function mergeAssistantData(
	knowledge: AssistantKnowledge,
	content: AssistantContent
): AssistantData {
	const data: AssistantData = {
		...knowledge,
		...content,
		fallback: ''
	};
	data.fallback = buildFallback(data);
	return data;
}

const dataByLocale: Record<string, AssistantData> = {
	en: mergeAssistantData(knowledgeEn as AssistantKnowledge, contentEn as AssistantContent),
	de: mergeAssistantData(knowledgeDe as AssistantKnowledge, contentDe as AssistantContent)
};

export function getAssistantData(locale: string): AssistantData {
	return dataByLocale[locale] ?? dataByLocale.en;
}

/** Returns a local provider today; replace with ApiAssistantProvider when an endpoint exists. */
export function createAssistantProvider(locale: string): AssistantProvider {
	return new LocalAssistantProvider(getAssistantData(locale));
}

export type {
	AssistantCompany,
	AssistantContent,
	AssistantData,
	AssistantKnowledge,
	AssistantProfile,
	AssistantProject,
	AssistantPrompt,
	AssistantPromptGroup,
	AssistantProvider,
	AssistantResult,
	AssistantSkills,
	ChatMessage
} from './types.js';
export { ApiAssistantProvider } from './providers/api-provider.js';
export { buildFallback } from './build-fallback.js';
export { LocalAssistantProvider } from './providers/local-provider.js';
