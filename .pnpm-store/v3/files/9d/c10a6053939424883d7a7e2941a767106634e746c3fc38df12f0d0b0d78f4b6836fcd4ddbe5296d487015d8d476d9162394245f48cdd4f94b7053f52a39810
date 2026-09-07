import { type Component } from 'svelte';
import type { Cmp, Meta } from '#types';
/**
 * @module
 * Called from a bundler.
 *
 * It mounts the Stories components in a context which disables
 * the rendering of every `<Story />`,
 * but instead collects names and properties.
 *
 * For every discovered `<Story />`, it creates a `StoryFn` which
 * instantiate the main Stories component: Every Story but
 * the one selected is disabled.
 */
export declare const createRuntimeStories: (Stories: Component, meta: Meta<Cmp>) => Record<string, import("@storybook/csf").StoryAnnotations<import("@storybook/svelte").SvelteRenderer<import("svelte").SvelteComponent<Record<string, any>, any, any>>, Component<{
    Stories: Component;
    exportName: string;
    args: NonNullable<import("../types").StoryAnnotations<import("../types").Cmp>["args"]>;
    storyContext: import("../types").StoryContext<import("../types").Cmp>;
}, {}, "">>>;
