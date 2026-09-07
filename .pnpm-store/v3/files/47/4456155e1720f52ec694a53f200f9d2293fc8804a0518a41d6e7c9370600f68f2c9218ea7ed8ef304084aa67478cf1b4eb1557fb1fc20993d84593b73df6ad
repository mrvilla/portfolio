/**
 * Extract Svelte AST nodes via `svelte.compile`,
 * and from the instance tag - `<script>` _(without `module`)_.
 * They are needed for further code analysis/transformation.
  // NOTE: Is optional for the `*.stories.svelte` files to have this tag.
 */
export async function extractInstanceNodes(options) {
    const { instance, moduleNodes } = options;
    const { setTemplateImport } = moduleNodes;
    if (!instance || !setTemplateImport) {
        return {
            setTemplateCall: undefined,
        };
    }
    const { walk } = await import('zimmerframe');
    const state = {};
    const visitors = {
        CallExpression(node, { state }) {
            if (node.callee.type === 'Identifier' && node.callee.name === setTemplateImport?.local.name) {
                state.setTemplateCall = node;
            }
        },
    };
    walk(instance.content, state, visitors);
    const { setTemplateCall } = state;
    return {
        setTemplateCall,
    };
}
