import type { SvelteAST } from '#parser/ast';
import type { SvelteASTNodes } from '#parser/extract/svelte/nodes';
/**
 * Svelte 5 allows to passing `children` as attribute _(aka prop)_.
 *
 * For example:
 *
 * ```svelte
 * {#snippet myTemplate()}
 *   <SomeComponent color="red" />
 * {/snippet}
 * <Story children={myTemplate} />
 * ```
 *
 * This function attempts to extract the AST node of the snippet block from the root fragment of `*.svelte` file,
 * which was referenced by the attribute `children`. Following example above - it would be snippet `myTemplate`.
 */
export declare function findStoryAttributeChildrenSnippetBlock(options: {
    component: SvelteAST.Component;
    nodes: SvelteASTNodes;
    filename?: string;
}): any;
/**
 * Find and extract the AST node of snippet block used by `setTemplate` call in the instance module.
 * It uses first argument from `setTemplate` call.
 *
 * For example:
 *
 * ```js
 * <script>
 *   setTemplate(myCustomTemplate);
 * </script>
 * ```
 *
 * Where `myCustomTemplate` is a identifier with a hoisted reference to the snippet block,
 * which should exist at the root fragment of `*.svelte` file.
 */
export declare function findSetTemplateSnippetBlock(options: {
    nodes: SvelteASTNodes;
    filename?: string;
}): SvelteAST.SnippetBlock | undefined;
