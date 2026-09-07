import type { CompiledASTNodes } from '#parser/extract/compiled/nodes';
interface Params {
    nodes: CompiledASTNodes;
    filename?: string;
}
/**
 * Attempt to destructure 'meta' identifier in the object pattern of the variable declaration from call `defineMeta({...})`
 * if it wasn't done by user manually.
 *
 * Before:
 *
 * ```js
 * const { Story } = defineMeta({});
 * ```
 *
 * After:
 *
 * ```js
 * const { Story, meta } = defineMeta({});
 * ```
 */
export declare function destructureMetaFromDefineMeta(params: Params): void;
export {};
