import type { ComponentAnnotations as BaseComponentAnnotations, StoryAnnotations as BaseStoryAnnotations, StoryContext as BaseStoryContext, WebRenderer } from '@storybook/types';
import type { Component, ComponentProps } from 'svelte';
import type { SetOptional, Simplify } from 'type-fest';
export type Cmp = Component<any>;
/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<TCmp extends Cmp> = ComponentAnnotations<TCmp>;
export type ComponentAnnotations<TCmp extends Cmp> = BaseComponentAnnotations<SvelteRenderer<TCmp>, ComponentProps<TCmp>>;
export interface SvelteRenderer<TCmp extends Cmp> extends WebRenderer {
    component: TCmp;
    storyResult: SvelteStoryResult<TCmp>;
}
export interface SvelteStoryResult<TCmp extends Cmp> {
    Component?: TCmp;
    props?: ComponentProps<TCmp>;
    decorator?: TCmp;
}
export type StoryContext<TCmp extends Cmp> = BaseStoryContext<SvelteRenderer<TCmp>, Simplify<TCmp>>;
export type StoryAnnotations<TCmp extends Cmp> = BaseStoryAnnotations<SvelteRenderer<TCmp>, ComponentProps<TCmp>, Partial<Simplify<SetOptional<ComponentProps<TCmp>, keyof Meta<TCmp>['args']>>>>;
