import { buildFallback } from './build-fallback.js';
import type {
	AssistantData,
	AssistantKnowledgeTopic,
	AssistantProject,
	AssistantPrompt,
	AssistantResult
} from './types.js';

const MIN_PROMPT_SCORE = 2;
const MIN_TOPIC_SCORE = 2;
const MIN_PROJECT_SCORE = 3;

function escapeRegExp(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Score how well a single keyword matches the query (0 = no match). */
function scoreKeywordMatch(query: string, keyword: string): number {
	const normalizedQuery = query.toLowerCase().trim();
	const normalizedKeyword = keyword.toLowerCase().trim();

	if (!normalizedKeyword) return 0;

	if (normalizedQuery === normalizedKeyword) {
		return 10;
	}

	if (normalizedKeyword.includes(' ')) {
		return normalizedQuery.includes(normalizedKeyword) ? 5 : 0;
	}

	const wordPattern = new RegExp(`\\b${escapeRegExp(normalizedKeyword)}\\b`, 'i');
	return wordPattern.test(normalizedQuery) ? (normalizedKeyword.length >= 4 ? 3 : 2) : 0;
}

function scoreByKeywords(
	query: string,
	keywords: string[],
	categories: string[] = [],
	exactMatch?: string
): number {
	const normalized = query.toLowerCase().trim();

	if (exactMatch && exactMatch.toLowerCase() === normalized) {
		return 100;
	}

	let score = 0;

	for (const keyword of keywords) {
		score += scoreKeywordMatch(normalized, keyword);
	}

	for (const category of categories) {
		const categoryTerm = category.toLowerCase();
		if (normalized.includes(categoryTerm)) {
			score += 3;
		}
	}

	return score;
}

function scorePrompt(query: string, prompt: AssistantPrompt): number {
	const questionScore = scoreByKeywords(query, prompt.keywords, prompt.categories, prompt.question);

	const questionWords = prompt.question
		.toLowerCase()
		.split(/\W+/)
		.filter((word) => word.length > 3);

	let score = questionScore;

	for (const word of questionWords) {
		if (query.toLowerCase().includes(word)) {
			score += 1;
		}
	}

	return score;
}

function scoreTopic(query: string, topic: AssistantKnowledgeTopic): number {
	return scoreByKeywords(query, topic.keywords, topic.categories);
}

function scoreProject(query: string, project: AssistantProject): number {
	const keywordScore = scoreByKeywords(query, project.keywords, [], project.name);
	const nameScore = scoreKeywordMatch(query, project.name);
	const companyScore = scoreKeywordMatch(query, project.company);
	const idScore = scoreKeywordMatch(query, project.id.replace(/-/g, ' '));

	return keywordScore + nameScore + companyScore + idScore;
}

function resultFromPrompt(prompt: AssistantPrompt): AssistantResult {
	return {
		answer: prompt.answer,
		promptId: prompt.id,
		categories: prompt.categories,
		links: prompt.links,
		source: 'local'
	};
}

function resultFromTopic(topic: AssistantKnowledgeTopic): AssistantResult {
	return {
		answer: topic.answer,
		topicId: topic.id,
		categories: topic.categories,
		links: topic.links,
		source: 'local'
	};
}

function resultFromProject(project: AssistantProject): AssistantResult {
	const techLine =
		project.technologies.length > 0 ? `\n\n${project.technologies.join(' · ')}` : '';

	const links = project.caseStudyHref
		? [{ label: `${project.name} case study`, href: project.caseStudyHref }]
		: undefined;

	return {
		answer: `${project.name} (${project.company}, ${project.period})\n\n${project.summary}${techLine}`,
		projectId: project.id,
		categories: ['Enterprise Projects'],
		links,
		source: 'local'
	};
}

export function matchQuery(query: string, data: AssistantData): AssistantResult {
	const normalized = query.trim();
	const fallback = buildFallback(data);

	if (!normalized) {
		return { answer: fallback, source: 'local' };
	}

	const byPromptId = data.prompts.find((prompt) => prompt.id === normalized);
	if (byPromptId) {
		return resultFromPrompt(byPromptId);
	}

	const byTopicId = data.topics.find((topic) => topic.id === normalized);
	if (byTopicId) {
		return resultFromTopic(byTopicId);
	}

	const byProjectId = data.projects.find((project) => project.id === normalized);
	if (byProjectId) {
		return resultFromProject(byProjectId);
	}

	let bestProject: { project: AssistantProject; score: number } | null = null;

	for (const project of data.projects) {
		const score = scoreProject(normalized, project);
		if (!bestProject || score > bestProject.score) {
			bestProject = { project, score };
		}
	}

	/** Strong project-name hits (e.g. "cemex", "sembo") beat general prompts. */
	if (bestProject && bestProject.score >= 5) {
		return resultFromProject(bestProject.project);
	}

	let bestPrompt: { prompt: AssistantPrompt; score: number } | null = null;

	for (const prompt of data.prompts) {
		const score = scorePrompt(normalized, prompt);
		if (!bestPrompt || score > bestPrompt.score) {
			bestPrompt = { prompt, score };
		}
	}

	if (bestPrompt && bestPrompt.score >= MIN_PROMPT_SCORE) {
		return resultFromPrompt(bestPrompt.prompt);
	}

	if (bestProject && bestProject.score >= MIN_PROJECT_SCORE) {
		return resultFromProject(bestProject.project);
	}

	let bestTopic: { topic: AssistantKnowledgeTopic; score: number } | null = null;

	for (const topic of data.topics) {
		const score = scoreTopic(normalized, topic);
		if (!bestTopic || score > bestTopic.score) {
			bestTopic = { topic, score };
		}
	}

	if (bestTopic && bestTopic.score >= MIN_TOPIC_SCORE) {
		return resultFromTopic(bestTopic.topic);
	}

	return { answer: fallback, source: 'local' };
}
