import { matchQuery } from '../match-query.js';
import type { AssistantData, AssistantProvider, AssistantResult } from '../types.js';

export class LocalAssistantProvider implements AssistantProvider {
	constructor(private readonly data: AssistantData) {}

	async ask(query: string): Promise<AssistantResult> {
		return matchQuery(query, this.data);
	}
}
