import { extractDefineMetaPropertiesNodes } from '#parser/extract/svelte/define-meta';
import { InvalidComponentValueError } from '#utils/error/parser/analyse/define-meta';
export function getDefineMetaComponentValue(params) {
    const { nodes, filename } = params;
    const { component } = extractDefineMetaPropertiesNodes({
        nodes,
        properties: ['component'],
    });
    if (!component) {
        return;
    }
    const { value } = component;
    if (value.type !== 'Identifier') {
        throw new InvalidComponentValueError({
            filename,
            componentProperty: component,
        });
    }
    return value;
}
