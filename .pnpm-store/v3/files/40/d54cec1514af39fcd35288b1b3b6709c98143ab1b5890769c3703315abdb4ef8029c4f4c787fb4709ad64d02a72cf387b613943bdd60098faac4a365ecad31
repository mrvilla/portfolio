import type { CompiledASTNodes } from './nodes';
import type { ESTreeAST } from '#parser/ast';
interface Params {
    nodes: CompiledASTNodes;
    filename?: string;
}
type Result = (ESTreeAST.CallExpression | ESTreeAST.ExpressionStatement)[];
export declare function extractStoriesNodesFromExportDefaultFn(params: Params): Promise<Result>;
export {};
