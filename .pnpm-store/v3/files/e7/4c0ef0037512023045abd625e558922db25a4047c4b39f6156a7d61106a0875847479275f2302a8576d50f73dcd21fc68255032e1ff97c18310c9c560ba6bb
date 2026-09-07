import type { Cmp } from '../../types';
declare function buildContext<TCmp extends Cmp>(): {
    readonly template: ((Partial<import("../../types").StoryAnnotations<TCmp>> & {
        id?: never;
        children?: import("svelte").Snippet<[NonNullable<import("../../types").StoryAnnotations<TCmp>["args"]>, import("../../types").StoryContext<TCmp>]> | undefined;
        name?: string;
        exportName?: string;
        autodocs?: never;
        source?: never;
    } & ({
        exportName: string;
    } | {
        name: string;
    })) & {})["children"] | undefined;
    set: (snippet?: ((Partial<import("../../types").StoryAnnotations<TCmp>> & {
        id?: never;
        children?: import("svelte").Snippet<[NonNullable<import("../../types").StoryAnnotations<TCmp>["args"]>, import("../../types").StoryContext<TCmp>]> | undefined;
        name?: string;
        exportName?: string;
        autodocs?: never;
        source?: never;
    } & ({
        exportName: string;
    } | {
        name: string;
    })) & {})["children"] | undefined) => void;
};
type StoriesTemplateContext<TCmp extends Cmp> = ReturnType<typeof buildContext<TCmp>>;
export declare function useStoriesTemplate<TCmp extends Cmp>(): ((Partial<import("../../types").StoryAnnotations<TCmp>> & {
    id?: never;
    children?: import("svelte").Snippet<[NonNullable<import("../../types").StoryAnnotations<TCmp>["args"]>, import("../../types").StoryContext<TCmp>]> | undefined;
    name?: string;
    exportName?: string;
    autodocs?: never;
    source?: never;
} & ({
    exportName: string;
} | {
    name: string;
})) & {})["children"] | undefined;
export declare function setTemplate<TCmp extends Cmp>(snippet?: StoriesTemplateContext<TCmp>['template']): void;
export {};
