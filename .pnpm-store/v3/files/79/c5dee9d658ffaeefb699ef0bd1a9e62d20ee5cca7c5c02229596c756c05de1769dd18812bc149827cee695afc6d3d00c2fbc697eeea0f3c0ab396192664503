import type { Snippet } from 'svelte';
import type { Cmp, StoryAnnotations } from '../types';
declare class __sveltets_Render<const TCmp extends Cmp> {
    props(): Partial<StoryAnnotations<TCmp>> & {
        /**
         * @deprecated
         * Use `exportName` instead.
         */
        id?: never;
        /**
         * The content to render in the story, either as:
         * 1. A snippet taking args and storyContext as parameters
         * 2. Static markup
         *
         * Can be omitted if a default template is set with [`setTemplate()`](https://github.com/storybookjs/addon-svelte-csf/blob/main/README.md#default-snippet)
         */
        children?: Snippet<[NonNullable<StoryAnnotations<TCmp>["args"]>, import("../types").StoryContext<TCmp>]> | undefined;
        /**
         * Name of the story. Can be omitted if `exportName` is provided.
         */
        name?: string;
        /**
         * exportName of the story.
         * If not provided, it will be generated from the 'name', by converting it to a valid, PascalCased JS variable name.
         * eg. 'My story!' -> 'MyStory'
         *
         * Use this prop to explicitly set the export name of the story. This is useful if you have multiple stories with the names
         * that result in duplicate export names like "My story" and "My story!".
         * It's also useful for explicitly defining the export that can be imported in MDX docs.
         */
        exportName?: string;
        /**
         * @deprecrated
         * Use `tags={['autodocs']}` instead.
         * @see {@link https://github.com/storybookjs/addon-svelte-csf/blob/main/MIGRATION.md#story-prop-autodocs-has-been-removed}
         */
        autodocs?: never;
        /**
         * @deprecated
         * Use `parameters={{ docs: { source: { code: "..." } } }}` instead.
         * @see {@link https://github.com/storybookjs/addon-svelte-csf/blob/next/MIGRATION.md#story-prop-source-has-been-removed}
         */
        source?: never;
    } & ({
        /**
         * exportName of the story.
         * If not provided, it will be generated from the 'name', by converting it to a valid, PascalCased JS variable name.
         * eg. 'My story!' -> 'MyStory'
         *
         * Use this prop to explicitly set the export name of the story. This is useful if you have multiple stories with the names
         * that result in duplicate export names like "My story" and "My story!".
         * It's also useful for explicitly defining the export that can be imported in MDX docs.
         */
        exportName: string;
    } | {
        /**
         * Name of the story. Can be omitted if `exportName` is provided.
         */
        name: string;
    });
    events(): {};
    slots(): {};
    bindings(): "";
    exports(): {};
}
interface $$IsomorphicComponent {
    new <const TCmp extends Cmp>(options: import('svelte').ComponentConstructorOptions<ReturnType<__sveltets_Render<TCmp>['props']>>): import('svelte').SvelteComponent<ReturnType<__sveltets_Render<TCmp>['props']>, ReturnType<__sveltets_Render<TCmp>['events']>, ReturnType<__sveltets_Render<TCmp>['slots']>> & {
        $$bindings?: ReturnType<__sveltets_Render<TCmp>['bindings']>;
    } & ReturnType<__sveltets_Render<TCmp>['exports']>;
    <const TCmp extends Cmp>(internal: unknown, props: ReturnType<__sveltets_Render<TCmp>['props']> & {}): ReturnType<__sveltets_Render<TCmp>['exports']>;
    z_$$bindings?: ReturnType<__sveltets_Render<any>['bindings']>;
}
declare const Story: $$IsomorphicComponent;
type Story<const TCmp extends Cmp> = InstanceType<typeof Story<TCmp>>;
export default Story;
