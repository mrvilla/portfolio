import MagicString from 'magic-string';
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
export declare function createAppendix(params: Params): Promise<void>;
export {};
