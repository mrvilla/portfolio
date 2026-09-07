export function createVariableFromRuntimeStoriesCall(params) {
    const { storiesFunctionDeclaration, metaIdentifier } = params;
    return {
        type: 'VariableDeclaration',
        kind: 'const',
        declarations: [
            {
                type: 'VariableDeclarator',
                id: {
                    type: 'Identifier',
                    name: '__stories',
                },
                init: {
                    type: 'CallExpression',
                    optional: false,
                    callee: {
                        type: 'Identifier',
                        // WARN: Tempting to use `createRuntimeStories.name` here.
                        // It will break, because this function imports `*.svelte` files.
                        name: 'createRuntimeStories',
                    },
                    arguments: [
                        {
                            type: 'Identifier',
                            name: storiesFunctionDeclaration.id.name,
                        },
                        metaIdentifier,
                    ],
                },
            },
        ],
    };
}
