import type { extractModuleNodes } from './module-nodes';
import type { extractInstanceNodes } from './instance-nodes';
import type { SvelteAST } from '#parser/ast';
interface Result {
    storyComponents: Array<{
        /** Leading HTML comment as AST nodes which can be used as description for the story. */
        comment?: SvelteAST.Comment;
        /** '<Story>' component AST node. */
        component: SvelteAST.Component;
    }>;
    /**
     * "First level" _(at the root of fragment)_ snippet blocks AST nodes, which can be used for further transformation.
     *
     * For example:
     * Determining the source code of the `<Story />`.
     * Based on either `setTemplate` call,
     * or by passing `children` as prop from the outer Svelte snippet block definition - e.g. `Story children={template1} />`.
     */
    snippetBlocks: SvelteAST.SnippetBlock[];
}
interface Params {
    fragment: SvelteAST.Fragment;
    filename?: string;
    instanceNodes: Awaited<ReturnType<typeof extractInstanceNodes>>;
    moduleNodes: Awaited<ReturnType<typeof extractModuleNodes>>;
}
/**
 * Extract Svelte AST nodes via `svelte.compile`,
 * and from the fragment aka HTML code.
 * They are needed for further code analysis/transformation.
 */
export declare function extractFragmentNodes(params: Params): Promise<Result>;
export {};
