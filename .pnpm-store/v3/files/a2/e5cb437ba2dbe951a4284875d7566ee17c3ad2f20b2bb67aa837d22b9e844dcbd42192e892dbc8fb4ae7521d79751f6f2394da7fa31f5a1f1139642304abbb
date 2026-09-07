import type { SvelteASTNodes } from '#parser/extract/svelte/nodes';
import type { CompiledASTNodes } from '#parser/extract/compiled/nodes';
interface Params {
    nodes: {
        compiled: CompiledASTNodes;
        svelte: SvelteASTNodes;
    };
    filename?: string;
}
/**
 * Attempt to insert JSDoc comment above the `defineMeta()` call.
 *
 * Before:
 *
 * ```js
 * // Some description about the component
 * const { Story } = defineMeta({});
 * ```
 *
 * After:
 * ```js
 * // Some description about the component
 * const { Story } = defineMeta({
 *   parameters: {
 *     docs: {
 *       description: { component: "Some description about the component" },
 *     },
 *   },
 * });
 * ```
 */
export declare function insertDefineMetaJSDocCommentAsDescription(params: Params): void;
export {};
