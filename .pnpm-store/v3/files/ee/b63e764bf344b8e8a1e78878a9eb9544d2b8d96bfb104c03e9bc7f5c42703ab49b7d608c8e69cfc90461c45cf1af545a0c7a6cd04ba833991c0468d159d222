import type { extractModuleNodes } from './module-nodes';
import type { ESTreeAST, SvelteAST } from '#parser/ast';
interface Result {
    setTemplateCall: ESTreeAST.CallExpression | undefined;
}
interface Params {
    instance: SvelteAST.Root['instance'];
    moduleNodes: Awaited<ReturnType<typeof extractModuleNodes>>;
    filename?: string;
}
/**
 * Extract Svelte AST nodes via `svelte.compile`,
 * and from the instance tag - `<script>` _(without `module`)_.
 * They are needed for further code analysis/transformation.
  // NOTE: Is optional for the `*.stories.svelte` files to have this tag.
 */
export declare function extractInstanceNodes(options: Params): Promise<Result>;
export {};
