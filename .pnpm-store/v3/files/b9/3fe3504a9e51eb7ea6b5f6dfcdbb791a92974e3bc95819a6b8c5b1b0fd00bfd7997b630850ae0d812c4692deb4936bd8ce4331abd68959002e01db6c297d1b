import type { getStoryIdentifiers } from '#parser/analyse/story/attributes/identifiers';
import type { ESTreeAST, SvelteAST } from '#parser/ast';
import { StorybookSvelteCSFError } from '#utils/error';
export declare class AttributeNotStringError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 1;
    documentation: boolean;
    attribute: SvelteAST.Attribute;
    constructor({ filename, attribute, component, }: {
        filename: StorybookSvelteCSFError['filename'];
        component: NonNullable<StorybookSvelteCSFError['component']>;
        attribute: AttributeNotStringError['attribute'];
    });
    template(): string;
}
export declare class AttributeNotArrayError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 2;
    documentation: boolean;
    attribute: SvelteAST.Attribute;
    constructor({ filename, attribute, component, }: {
        filename: StorybookSvelteCSFError['filename'];
        component: NonNullable<StorybookSvelteCSFError['component']>;
        attribute: AttributeNotStringError['attribute'];
    });
    get valueType(): any;
    template(): string;
}
export declare class AttributeNotArrayOfStringsError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 3;
    documentation: boolean;
    attribute: SvelteAST.Attribute;
    element: ESTreeAST.ArrayExpression['elements'][number];
    constructor({ filename, attribute, component, element, }: {
        filename: StorybookSvelteCSFError['filename'];
        component: NonNullable<StorybookSvelteCSFError['component']>;
        attribute: AttributeNotArrayOfStringsError['attribute'];
        element: AttributeNotArrayOfStringsError['element'];
    });
    get valueType(): any;
    template(): string;
}
export declare class NoStoryIdentifierError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 4;
    documentation: boolean;
    constructor({ filename, component, }: {
        filename: StorybookSvelteCSFError['filename'];
        component: NonNullable<StorybookSvelteCSFError['component']>;
    });
    template(): string;
}
export declare class InvalidStoryExportNameError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 5;
    documentation: boolean;
    value: string;
    constructor({ filename, component, value, }: {
        filename: StorybookSvelteCSFError['filename'];
        component: NonNullable<StorybookSvelteCSFError['component']>;
        value: InvalidStoryExportNameError['value'];
    });
    template(): string;
}
export declare class DuplicateStoryIdentifiersError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 6;
    documentation: boolean;
    identifiers: ReturnType<typeof getStoryIdentifiers>;
    duplicateIdentifiers: NonNullable<ReturnType<typeof getStoryIdentifiers>>;
    constructor({ filename, identifiers, duplicateIdentifiers, }: {
        filename: StorybookSvelteCSFError['filename'];
        identifiers: DuplicateStoryIdentifiersError['identifiers'];
        duplicateIdentifiers: DuplicateStoryIdentifiersError['duplicateIdentifiers'];
    });
    template(): string;
}
