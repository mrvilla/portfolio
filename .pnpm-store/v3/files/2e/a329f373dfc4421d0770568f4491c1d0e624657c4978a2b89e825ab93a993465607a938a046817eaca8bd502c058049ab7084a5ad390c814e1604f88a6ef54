import type MagicString from 'magic-string';
import type { CompiledASTNodes } from '#parser/extract/compiled/nodes';
import type { SvelteASTNodes } from '#parser/extract/svelte/nodes';
interface Params {
    code: MagicString;
    nodes: {
        svelte: SvelteASTNodes;
        compiled: CompiledASTNodes;
    };
    filename?: string;
    originalCode: string;
}
/**
 * Updates the {@link MagicString} code with necessary transformations for this addon to work correctly.
 */
export declare function transformStoriesCode(params: Params): Promise<void>;
export {};
