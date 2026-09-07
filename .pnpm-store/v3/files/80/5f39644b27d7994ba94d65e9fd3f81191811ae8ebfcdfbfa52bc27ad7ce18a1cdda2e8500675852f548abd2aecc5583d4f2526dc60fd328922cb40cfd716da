import type MagicString from 'magic-string';
import type { CompiledASTNodes } from '#parser/extract/compiled/nodes';
import type { SvelteASTNodes } from '#parser/extract/svelte/nodes';
interface Params {
    code: MagicString;
    nodes: {
        compiled: CompiledASTNodes;
        svelte: SvelteASTNodes;
    };
    filename?: string;
}
/**
 * Attempt to transform compiled `defineMeta()` when necessary.
 * And in the end, update the compiled code using {@link MagicString}.
 */
export declare function transformDefineMeta(params: Params): void;
export {};
