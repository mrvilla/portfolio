import { print } from 'esrap';
import { destructureMetaFromDefineMeta } from './destructure-meta';
import { insertDefineMetaJSDocCommentAsDescription } from './insert-description';
/**
 * Attempt to transform compiled `defineMeta()` when necessary.
 * And in the end, update the compiled code using {@link MagicString}.
 */
export function transformDefineMeta(params) {
    const { code, nodes, filename } = params;
    destructureMetaFromDefineMeta({
        nodes: nodes.compiled,
        filename,
    });
    insertDefineMetaJSDocCommentAsDescription({
        nodes,
        filename,
    });
    const { compiled } = nodes;
    const { defineMetaVariableDeclaration } = compiled;
    const { start, end } = defineMetaVariableDeclaration;
    code.update(start, end, print(defineMetaVariableDeclaration).code);
}
