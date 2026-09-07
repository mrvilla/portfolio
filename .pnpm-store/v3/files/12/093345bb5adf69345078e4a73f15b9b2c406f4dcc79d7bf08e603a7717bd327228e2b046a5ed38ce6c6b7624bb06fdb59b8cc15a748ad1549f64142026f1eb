export function createNamedExportStory(params) {
    const { exportName, node } = params;
    const exported = {
        type: 'Identifier',
        name: exportName,
    };
    return {
        type: 'ExportNamedDeclaration',
        specifiers: [
            {
                type: 'ExportSpecifier',
                local: exported,
                exported,
            },
        ],
        declaration: {
            type: 'VariableDeclaration',
            kind: 'const',
            declarations: [
                {
                    type: 'VariableDeclarator',
                    id: exported,
                    init: {
                        type: 'MemberExpression',
                        computed: true,
                        optional: false,
                        object: {
                            type: 'Identifier',
                            name: getNameFromVariable(node),
                        },
                        property: { type: 'Literal', value: exportName },
                    },
                },
            ],
        },
    };
}
function getNameFromVariable(node) {
    return node.declarations[0].id.name;
}
