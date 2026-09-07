import { type ComponentProps } from 'svelte';
import type Story from '../Story.svelte';
import type { Cmp } from '../../types';
export interface StoriesExtractorContextProps<TCmp extends Cmp> {
    isExtracting: boolean;
    register: (storyCmpProps: ComponentProps<typeof Story<TCmp>>) => void;
}
declare function buildContext<TCmp extends Cmp>(storyCmpProps: StoriesExtractorContextProps<TCmp>): {
    readonly isExtracting: boolean;
    readonly register: (storyCmpProps: (Partial<import("../../types").StoryAnnotations<TCmp>> & {
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
    })) & {}) => void;
};
export type StoriesExtractorContext<TCmp extends Cmp> = ReturnType<typeof buildContext<TCmp>>;
export type StoriesRepository<TCmp extends Cmp> = {
    stories: Map<string, ComponentProps<typeof Story<TCmp>>>;
};
export declare function createStoriesExtractorContext<TCmp extends Cmp>(repository: StoriesRepository<TCmp>): void;
export declare function useStoriesExtractor<TCmp extends Cmp>(): {
    readonly isExtracting: boolean;
    readonly register: (storyCmpProps: (Partial<import("../../types").StoryAnnotations<TCmp>> & {
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
    })) & {}) => void;
};
export {};
