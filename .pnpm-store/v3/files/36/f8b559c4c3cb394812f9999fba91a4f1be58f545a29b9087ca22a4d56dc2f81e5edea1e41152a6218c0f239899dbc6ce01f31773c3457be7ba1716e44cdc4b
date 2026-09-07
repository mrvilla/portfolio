import type { SvelteAST } from '#parser/ast';
import type { SvelteASTNodes } from '#parser/extract/svelte/nodes';
import { StorybookSvelteCSFError } from '#utils/error';
export declare class MissingModuleTagError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 1;
    documentation: boolean;
    constructor(filename?: string);
    template(): string;
}
export declare class DefaultOrNamespaceImportUsedError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 2;
    documentation: boolean;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class MissingDefineMetaImportError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 3;
    documentation: boolean;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class MissingDefineMetaVariableDeclarationError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 4;
    documentation: boolean;
    constructor(filename?: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class NoStoryComponentDestructuredError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 5;
    documentation: boolean;
    defineMetaImport: SvelteASTNodes['defineMetaImport'];
    constructor({ filename, defineMetaImport, }: {
        filename?: StorybookSvelteCSFError['filename'];
        defineMetaImport: NoStoryComponentDestructuredError['defineMetaImport'];
    });
    template(): string;
}
export declare class GetDefineMetaFirstArgumentError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 6;
    documentation: boolean;
    defineMetaVariableDeclaration: SvelteASTNodes['defineMetaVariableDeclaration'];
    constructor({ filename, defineMetaVariableDeclaration, }: {
        filename?: StorybookSvelteCSFError['filename'];
        defineMetaVariableDeclaration: SvelteASTNodes['defineMetaVariableDeclaration'];
    });
    template(): string;
}
export declare class InvalidStoryChildrenAttributeError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 7;
    documentation: boolean;
    childrenAttribute: SvelteAST.Attribute;
    constructor({ filename, component, childrenAttribute, }: {
        filename?: StorybookSvelteCSFError['filename'];
        component: NonNullable<StorybookSvelteCSFError['component']>;
        childrenAttribute: InvalidStoryChildrenAttributeError['childrenAttribute'];
    });
    template(): string;
}
export declare class InvalidSetTemplateFirstArgumentError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 8;
    documentation: boolean;
    setTemplateCall: SvelteASTNodes['setTemplateCall'];
    constructor({ filename, setTemplateCall, }: {
        filename?: StorybookSvelteCSFError['filename'];
        setTemplateCall: InvalidSetTemplateFirstArgumentError['setTemplateCall'];
    });
    template(): string;
}
export declare class IndexerParseError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 9;
    documentation: boolean;
    constructor();
    template(): string;
}
