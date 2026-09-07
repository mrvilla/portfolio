import StoryComponent from './runtime/Story.svelte';
import LegacyMetaComponent from './runtime/LegacyMeta.svelte';
import LegacyStoryComponent from './runtime/LegacyStory.svelte';
import LegacyTemplateComponent from './runtime/LegacyTemplate.svelte';
export { setTemplate } from './runtime/contexts/template.svelte';
import type { Meta as MetaType, StoryContext as BaseStoryContext, StoryAnnotations, Cmp } from './types';
export declare function defineMeta<const TCmp extends Cmp>(meta: MetaType<TCmp>): {
    Story: typeof StoryComponent<TCmp>;
    meta: MetaType<TCmp>;
};
export type Args<TStoryCmp> = TStoryCmp extends typeof StoryComponent<infer TCmp extends Cmp> ? NonNullable<StoryAnnotations<TCmp>['args']> : never;
export type StoryContext<TStoryCmp> = TStoryCmp extends typeof StoryComponent<infer TCmp extends Cmp> ? BaseStoryContext<TCmp> : never;
export { 
/**
 * @deprecated Use `defineMeta` instead
 * @see {@link https://github.com/storybookjs/addon-svelte-csf/blob/main/MIGRATION.md#meta-component-removed-in-favor-of-definemeta}
 */
LegacyMetaComponent as Meta, 
/**
 * @deprecated Use `Story` component returned from `defineMeta` instead
 * @see {@link https://github.com/storybookjs/addon-svelte-csf/blob/main/MIGRATION.md#export-meta-removed-in-favor-of-definemeta}
 */
LegacyStoryComponent as Story, 
/**
 * @deprecated Use snippets instead
 * @see {@link https://github.com/storybookjs/addon-svelte-csf/blob/main/MIGRATION.md#template-component-removed}
 */
LegacyTemplateComponent as Template, };
export * from './legacy-types.d';
