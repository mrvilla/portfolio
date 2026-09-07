import { camelCase } from 'es-toolkit/string';
import { createASTArrayExpression, createASTAttribute, createASTExpressionTag, createASTObjectExpression, createASTProperty, } from '#parser/ast';
import { InvalidTemplateAttribute } from '#utils/error/legacy-api/index';
export function transformLegacyStory(params) {
    const { component, filename, state } = params;
    let { attributes, fragment, ...rest } = component;
    let newAttributes = [];
    let autodocs;
    let source;
    let parameters;
    let tags;
    let letDirectiveArgs;
    let letDirectiveContext;
    let hasTemplateAttribute = false;
    for (let attribute of attributes) {
        if (attribute.type === 'LetDirective' && attribute.name === 'args') {
            letDirectiveArgs = attribute;
            continue;
        }
        if (attribute.type === 'LetDirective' && attribute.name === 'context') {
            letDirectiveContext = attribute;
            continue;
        }
        if (attribute.type === 'Attribute' && attribute.name === 'autodocs') {
            autodocs = attribute;
            continue;
        }
        if (attribute.type === 'Attribute' && attribute.name === 'source') {
            source = attribute;
            continue;
        }
        if (attribute.type === 'Attribute' && attribute.name === 'parameters') {
            parameters = attribute;
            continue;
        }
        if (attribute.type === 'Attribute' && attribute.name === 'tags') {
            tags = attribute;
            continue;
        }
        if (attribute.type === 'Attribute' && attribute.name === 'template') {
            attribute = templateToChildren(attribute, filename);
            hasTemplateAttribute = true;
        }
        newAttributes.push(attribute);
    }
    // NOTE: is self-closing
    // AND has no template attribute
    // AND there is an existing unidentified <Template> components in the stories file
    if (fragment.nodes.length === 0 && !hasTemplateAttribute && state.unidentifiedTemplateComponent) {
        newAttributes.push(createASTAttribute('children', createASTExpressionTag({
            type: 'Identifier',
            name: 'sb_default_template',
        })));
    }
    if (autodocs) {
        transformAutodocs({
            autodocs,
            tags,
            newAttributes,
        });
    }
    if (source) {
        transformSource({
            source,
            parameters,
            newAttributes,
        });
    }
    if (letDirectiveArgs || letDirectiveContext) {
        fragment = transformFragment({
            letDirectiveArgs,
            letDirectiveContext,
            fragment,
        });
    }
    if (parameters) {
        newAttributes.push(parameters);
    }
    if (tags) {
        newAttributes.push(tags);
    }
    return {
        ...rest,
        attributes: newAttributes,
        fragment,
    };
}
function transformAutodocs(params) {
    let { autodocs, tags, newAttributes } = params;
    if (!autodocs) {
        return;
    }
    if (!tags) {
        tags = createASTAttribute('tags', createASTExpressionTag(createASTArrayExpression()));
    }
    const autodocsLiteral = {
        type: 'Literal',
        value: 'autodocs',
    };
    tags.value.expression.elements.push(autodocsLiteral);
    newAttributes.push(tags);
}
function transformSource(params) {
    let { source, parameters, newAttributes } = params;
    if (!source)
        return;
    const value = getSourceValue(source);
    if (!value)
        return;
    const codeLiteralValue = {
        type: 'Literal',
        value,
    };
    if (!parameters) {
        parameters = createASTAttribute('parameters', createASTExpressionTag(createASTObjectExpression()));
    }
    let docsProperty = parameters.value.expression.properties.find((property) => property.type === 'Property' && property.key.name === 'docs');
    if (!docsProperty) {
        docsProperty = createASTProperty('docs', createASTObjectExpression());
    }
    let sourceProperty = docsProperty.value.properties.find((property) => property.type === 'Property' && property.key.name === 'source');
    if (!sourceProperty) {
        sourceProperty = createASTProperty('source', createASTObjectExpression());
    }
    let codeProperty = sourceProperty.value.properties.find((property) => property.type === 'Property' && property.key.name === 'code');
    if (!codeProperty) {
        codeProperty = createASTProperty('code', codeLiteralValue);
        sourceProperty.value.properties.push(codeProperty);
        docsProperty.value.properties.push(sourceProperty);
        parameters.value.expression.properties.push(docsProperty);
    }
    newAttributes.push(parameters);
}
function getSourceValue(attribute) {
    const { value } = attribute;
    if (value === true) {
        return;
    }
    if (!Array.isArray(value) && value.expression.type === 'Literal') {
        return value.expression.value;
    }
    if (value[0].type === 'Text') {
        return value[0].raw;
    }
}
function templateToChildren(attribute, filename) {
    const { name, value, ...rest } = attribute;
    if (value === true) {
        throw new InvalidTemplateAttribute({ attribute, filename });
    }
    return {
        ...rest,
        name: 'children',
        value: [
            createASTExpressionTag({
                type: 'Identifier',
                name: camelCase(value[0].type === 'Text'
                    ? value[0].data
                    : value[0].expression.value),
            }),
        ],
    };
}
function transformFragment(params) {
    let { letDirectiveArgs, letDirectiveContext, fragment } = params;
    let parameters = [
        {
            type: 'Identifier',
            name: letDirectiveArgs ? 'args' : '_args',
        },
    ];
    if (letDirectiveContext) {
        parameters.push({
            type: 'Identifier',
            name: 'context',
        });
    }
    const snippetBlock = {
        type: 'SnippetBlock',
        body: fragment,
        expression: {
            type: 'Identifier',
            name: 'children',
        },
        parameters,
    };
    return {
        ...fragment,
        nodes: [snippetBlock],
    };
}
