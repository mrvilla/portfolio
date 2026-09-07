import { NoDestructuredDefineMetaCallError } from '#utils/error/parser/analyse/define-meta';
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
export function destructureMetaFromDefineMeta(params) {
    const { nodes, filename } = params;
    const { defineMetaVariableDeclaration } = nodes;
    const { declarations } = defineMetaVariableDeclaration;
    const { id } = declarations[0];
    if (id.type !== 'ObjectPattern') {
        throw new NoDestructuredDefineMetaCallError({
            filename,
            defineMetaVariableDeclarator: declarations[0],
        });
    }
    const destructuredMeta = id.properties.find((p) => {
        return p.type === 'Property' && p.key.type === 'Identifier' && p.key.name === 'meta';
    });
    if (destructuredMeta) {
        return;
    }
    id.properties.push({
        type: 'Property',
        kind: 'init',
        key: {
            type: 'Identifier',
            name: 'meta',
        },
        value: {
            type: 'Identifier',
            name: 'meta',
        },
        shorthand: true,
        computed: false,
        method: false,
    });
}
