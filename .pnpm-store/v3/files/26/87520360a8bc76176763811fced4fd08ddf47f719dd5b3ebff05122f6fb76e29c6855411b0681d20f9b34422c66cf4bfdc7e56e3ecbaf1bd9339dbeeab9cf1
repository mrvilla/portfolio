import { extractModuleNodes } from './module-nodes';
import { extractFragmentNodes } from './fragment-nodes';
import { extractInstanceNodes } from './instance-nodes';
/**
 * Pick only required Svelte AST nodes for further usage in this addon.
 */
export async function extractSvelteASTNodes(params) {
    const { ast, filename } = params;
    const { module, fragment, instance } = ast;
    const moduleNodes = await extractModuleNodes({ module, filename });
    const instanceNodes = await extractInstanceNodes({
        instance,
        filename,
        moduleNodes,
    });
    const fragmentNodes = await extractFragmentNodes({
        fragment,
        filename,
        moduleNodes,
        instanceNodes,
    });
    return {
        ...moduleNodes,
        ...instanceNodes,
        ...fragmentNodes,
    };
}
