import { StorybookSvelteCSFError } from '#utils/error';
import dedent from 'dedent';
export class InvalidComponentValueError extends StorybookSvelteCSFError {
    category = StorybookSvelteCSFError.CATEGORY.parserAnalyseDefineMeta;
    code = 1;
    documentation = true;
    componentProperty;
    constructor({ filename, componentProperty, }) {
        super({ filename });
        this.componentProperty = componentProperty;
    }
    template() {
        return dedent `
      The 'component' property of 'defineMeta' must reference an imported Svelte component.
      The current type of the property is '${this.componentProperty.value.type}'.

      The issue occurred in Stories file: ${this.filepathURL}
    `;
    }
}
export class NoDestructuredDefineMetaCallError extends StorybookSvelteCSFError {
    category = StorybookSvelteCSFError.CATEGORY.parserAnalyseDefineMeta;
    code = 2;
    documentation = true;
    defineMetaVariableDeclarator;
    constructor({ filename, defineMetaVariableDeclarator, }) {
        super({ filename });
        this.defineMetaVariableDeclarator = defineMetaVariableDeclarator;
    }
    template() {
        return dedent `
      The return value of the 'defineMeta' call was not destructured to { Story }.
      The issue occurred in Stories file: ${this.filepathURL}

      The current pattern type is: "${this.defineMetaVariableDeclarator.id.type}", and expected is "ObjectPattern".
    `;
    }
}
export class NoMetaIdentifierFoundError extends StorybookSvelteCSFError {
    category = StorybookSvelteCSFError.CATEGORY.parserAnalyseDefineMeta;
    code = 3;
    documentation = true;
    constructor(filename) {
        super({ filename });
    }
    template() {
        return dedent `
			Could not find 'meta' identifier in the compiled output of stories file: ${this.filepathURL}
      This is most likely a bug in @storybook/addon-svelte-csf. Please open an issue on GitHub.
    `;
    }
}
export class NoStringLiteralError extends StorybookSvelteCSFError {
    category = StorybookSvelteCSFError.CATEGORY.parserAnalyseDefineMeta;
    code = 4;
    documentation = true;
    property;
    constructor({ filename, property, }) {
        super({ filename });
        this.property = property;
    }
    template() {
        return dedent `
      The '${this.property.key.name}' passed to 'defineMeta()' must be a static string literal.
      But it is of type '${this.property.value.type}'.

      This issue occurred in stories file: ${this.filepathURL}
    `;
    }
}
export class NoArrayExpressionError extends StorybookSvelteCSFError {
    category = StorybookSvelteCSFError.CATEGORY.parserAnalyseDefineMeta;
    code = 5;
    documentation = true;
    property;
    constructor({ filename, property, }) {
        super({ filename });
        this.property = property;
    }
    template() {
        return dedent `
      The '${this.property.key.name}' passed to 'defineMeta()' must be a static array.
      But it is of type '${this.property.value.type}'.

      This issue occurred in stories file: ${this.filepathURL}
    `;
    }
}
export class ArrayElementNotStringError extends StorybookSvelteCSFError {
    category = StorybookSvelteCSFError.CATEGORY.parserAnalyseDefineMeta;
    code = 6;
    documentation = true;
    property;
    element;
    constructor({ filename, property, element, }) {
        super({ filename });
        this.element = element;
        this.property = property;
    }
    template() {
        return dedent `
      All entries in the '${this.property.key.name}' property passed to 'defineMeta()' must be static strings.
      One of the elements is not a string but is instead of type '${this.element?.type}'.

      This issue occurred in stories file: ${this.filepathURL}
    `;
    }
}
