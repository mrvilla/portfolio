export function createExportOrderVariable(params) {
    const { storyIdentifiers } = params;
    const exported = {
        type: 'Identifier',
        name: '__namedExportsOrder',
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
                        type: 'ArrayExpression',
                        elements: storyIdentifiers.map(({ exportName }) => ({
                            type: 'Literal',
                            value: exportName,
                        })),
                    },
                },
            ],
        },
    };
}
