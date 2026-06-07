import type { AssistantProvider, AssistantResult } from '../types.js';

/**
 * Future LLM integration — swap the local provider for this without UI changes.
 * Expected API shape: POST { query: string } → { answer: string, promptId?: string }
 */
export class ApiAssistantProvider implements AssistantProvider {
	constructor(private readonly endpoint: string) {}

	async ask(query: string): Promise<AssistantResult> {
		const response = await fetch(this.endpoint, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query })
		});

		if (!response.ok) {
			throw new Error(`Assistant API error: ${response.status}`);
		}

		const data = (await response.json()) as AssistantResult;
		return { ...data, source: 'api' };
	}
}
