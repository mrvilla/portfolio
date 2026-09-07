import { findPropertyParametersIndex, getParametersPropertyValue, } from '#compiler/post-transform/shared/description';
import { getStoryPropsObjectExpression } from '#parser/extract/compiled/story';
import { getStoryChildrenRawCode } from '#parser/analyse/story/children';
import { createASTObjectExpression, createASTProperty } from '#parser/ast';
/**
 * Insert addon's internal object `__svelteCsf`
 * to `parameters` of every `<Story />` component **into the compiled code**.
 */
export function insertSvelteCSFToStoryParameters(params) {
    const { nodes, filename, originalCode } = params;
    const { component, svelte } = nodes;
    const storyPropsObjectExpression = getStoryPropsObjectExpression({
        node: component.compiled,
        filename,
    });
    if (findPropertyParametersIndex({
        filename,
        component: component.svelte.component,
        node: storyPropsObjectExpression,
    }) === -1) {
        storyPropsObjectExpression.properties.push(createASTProperty('parameters', createASTObjectExpression()));
    }
    const rawCode = getStoryChildrenRawCode({
        nodes: {
            component: component.svelte.component,
            svelte,
        },
        originalCode,
    });
    getParametersPropertyValue({
        filename,
        component: component.svelte.component,
        node: storyPropsObjectExpression,
    }).properties.push(createASTProperty('__svelteCsf', createASTObjectExpression([
        createASTProperty('rawCode', {
            type: 'Literal',
            value: rawCode,
        }),
    ])));
}
