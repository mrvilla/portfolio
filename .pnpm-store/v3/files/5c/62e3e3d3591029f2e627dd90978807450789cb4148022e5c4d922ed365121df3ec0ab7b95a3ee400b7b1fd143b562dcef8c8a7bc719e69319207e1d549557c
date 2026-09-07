import type { ComponentProps } from 'svelte';
import type { SvelteAST } from '#parser/ast';
import type { Cmp } from '#types';
import type Story from '#runtime/Story.svelte';
type StoryAttributes = Array<keyof ComponentProps<typeof Story<Cmp>>>;
interface Options<Attributes extends StoryAttributes> {
    component: SvelteAST.Component;
    filename?: string;
    attributes: Attributes;
}
type Result<Attributes extends StoryAttributes> = Partial<{
    [Key in Attributes[number]]: SvelteAST.Attribute;
}>;
export declare function extractStoryAttributesNodes<const Attributes extends StoryAttributes>(options: Options<Attributes>): Result<Attributes>;
export {};
