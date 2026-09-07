import { StorybookSvelteCSFError } from '#utils/error';
import type { SvelteAST } from '#parser/ast';
export declare class InvalidTemplateAttribute extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 1;
    documentation: boolean;
    attribute: SvelteAST.Attribute;
    constructor({ filename, attribute, }: {
        filename: StorybookSvelteCSFError['filename'];
        attribute: InvalidTemplateAttribute['attribute'];
    });
    template(): string;
}
export declare class LegacyTemplateNotEnabledError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 2;
    documentation: boolean;
    constructor(filename?: string);
    template(): string;
}
export declare class DuplicatedUnidentifiedTemplateError extends StorybookSvelteCSFError {
    readonly category: any;
    readonly code = 3;
    documentation: boolean;
    constructor(filename?: string);
    template(): string;
}
