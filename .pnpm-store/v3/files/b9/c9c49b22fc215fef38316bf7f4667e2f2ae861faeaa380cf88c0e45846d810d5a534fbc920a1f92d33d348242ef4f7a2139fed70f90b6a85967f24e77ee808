import { StorybookSvelteCSFError } from '#utils/error';
import type { extractStoriesNodesFromExportDefaultFn } from '#parser/extract/compiled/stories';
export declare class MissingImportedDefineMetaError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 1;
    readonly documentation = true;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class MissingDefineMetaVariableDeclarationError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 2;
    readonly documentation = true;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class NoExportDefaultError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 3;
    readonly documentation = true;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class NoStoryIdentifierFoundError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 4;
    readonly documentation = true;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class NoStoriesFunctionDeclarationError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 5;
    readonly documentation = true;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class NoCompiledStoryPropsObjectExpression extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 6;
    readonly documentation = true;
    node: Awaited<ReturnType<typeof extractStoriesNodesFromExportDefaultFn>>[number];
    constructor({ filename, node, }: {
        filename: StorybookSvelteCSFError['filename'];
        node: NoCompiledStoryPropsObjectExpression['node'];
    });
    template(): string;
}
