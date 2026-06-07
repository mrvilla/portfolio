export interface AssistantLink {
	label: string;
	href: string;
}

export interface AssistantProfile {
	name: string;
	title: string;
	summary: string;
	contact: {
		website: string;
		github: string;
		email: string;
		linkedin: string;
	};
	languages: string[];
}

export interface AssistantSkills {
	frontend: string[];
	design: string[];
	testing: string[];
	accessibility: string[];
	performance: string[];
	backendIntegration: string[];
	practices: string[];
	tools: string[];
}

export interface AssistantCompany {
	id: string;
	name: string;
	role: string;
	period: string;
	location: string;
	highlights: string[];
	keywords: string[];
}

export interface AssistantProject {
	id: string;
	name: string;
	company: string;
	period: string;
	summary: string;
	technologies: string[];
	keywords: string[];
	caseStudyHref?: string;
}

export interface AssistantKnowledgeTopic {
	id: string;
	answer: string;
	categories: string[];
	keywords: string[];
	links?: AssistantLink[];
}

export interface AssistantKnowledge {
	profile: AssistantProfile;
	skills: AssistantSkills;
	industries: string[];
	companies: AssistantCompany[];
	projects: AssistantProject[];
	topics: AssistantKnowledgeTopic[];
}

export interface AssistantPromptGroup {
	id: string;
	label: string;
	promptIds: string[];
}

export interface AssistantPrompt {
	id: string;
	question: string;
	answer: string;
	categories: string[];
	keywords: string[];
	links?: AssistantLink[];
	/** When false, prompt is keyword-matchable but not shown as a suggestion card. */
	featured?: boolean;
}

export interface AssistantContent {
	promptGroups: AssistantPromptGroup[];
	prompts: AssistantPrompt[];
	fallbackIntro: string;
	fallbackBrowseLabel: string;
}

export interface AssistantData extends AssistantKnowledge, AssistantContent {
	fallback: string;
}

export interface AssistantResult {
	answer: string;
	promptId?: string;
	topicId?: string;
	categories?: string[];
	links?: AssistantLink[];
	source: 'local' | 'api';
}

export interface AssistantProvider {
	ask(query: string): Promise<AssistantResult>;
}

export interface ChatMessage {
	id: string;
	role: 'user' | 'assistant';
	content: string;
	categories?: string[];
	links?: AssistantLink[];
}
