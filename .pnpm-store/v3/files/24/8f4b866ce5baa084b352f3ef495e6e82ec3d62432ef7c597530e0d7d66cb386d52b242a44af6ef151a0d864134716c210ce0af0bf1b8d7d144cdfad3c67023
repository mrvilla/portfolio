import type { SvelteAST } from '#parser/ast';
import type { SvelteASTNodes } from '#parser/extract/svelte/nodes';
type StoryIdentifiers = {
    exportName: string;
    name: string | undefined;
};
interface GetIdentifiersParams {
    nameNode?: SvelteAST.Attribute | undefined;
    exportNameNode?: SvelteAST.Attribute | undefined;
    filename?: string;
    component: SvelteAST.Component;
}
export declare function getStoryIdentifiers(options: GetIdentifiersParams): StoryIdentifiers;
interface GetStoriesIdentifiersParams {
    nodes: SvelteASTNodes;
    filename?: string;
}
export declare function getStoriesIdentifiers(params: GetStoriesIdentifiersParams): StoryIdentifiers[];
export {};
