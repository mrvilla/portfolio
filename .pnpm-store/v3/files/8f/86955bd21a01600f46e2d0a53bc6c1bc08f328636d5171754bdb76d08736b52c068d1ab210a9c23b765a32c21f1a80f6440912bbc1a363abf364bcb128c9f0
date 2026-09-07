import { StorybookSvelteCSFError } from '#utils/error';
import type * as ESTreeAST from 'estree';
export declare class InvalidComponentValueError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 1;
    documentation: boolean;
    componentProperty: ESTreeAST.Property;
    constructor({ filename, componentProperty, }: {
        filename: StorybookSvelteCSFError['filename'];
        componentProperty: InvalidComponentValueError['componentProperty'];
    });
    template(): string;
}
export declare class NoDestructuredDefineMetaCallError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 2;
    documentation: boolean;
    defineMetaVariableDeclarator: ESTreeAST.VariableDeclarator;
    constructor({ filename, defineMetaVariableDeclarator, }: {
        filename: StorybookSvelteCSFError['filename'];
        defineMetaVariableDeclarator: NoDestructuredDefineMetaCallError['defineMetaVariableDeclarator'];
    });
    template(): string;
}
export declare class NoMetaIdentifierFoundError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 3;
    documentation: boolean;
    constructor(filename: StorybookSvelteCSFError['filename']);
    template(): string;
}
export declare class NoStringLiteralError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 4;
    documentation: boolean;
    readonly property: ESTreeAST.Property;
    constructor({ filename, property, }: {
        filename: StorybookSvelteCSFError['filename'];
        property: NoStringLiteralError['property'];
    });
    template(): string;
}
export declare class NoArrayExpressionError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 5;
    documentation: boolean;
    readonly property: ESTreeAST.Property;
    constructor({ filename, property, }: {
        filename: StorybookSvelteCSFError['filename'];
        property: NoArrayExpressionError['property'];
    });
    template(): string;
}
export declare class ArrayElementNotStringError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 6;
    documentation: boolean;
    readonly property: ESTreeAST.Property;
    readonly element: ESTreeAST.ArrayExpression['elements'][number];
    constructor({ filename, property, element, }: {
        filename: StorybookSvelteCSFError['filename'];
        property: ArrayElementNotStringError['property'];
        element: ArrayElementNotStringError['element'];
    });
    template(): string;
}
