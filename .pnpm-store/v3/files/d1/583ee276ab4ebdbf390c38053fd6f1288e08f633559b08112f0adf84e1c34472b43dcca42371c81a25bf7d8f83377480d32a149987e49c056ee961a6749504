import { WebRenderer, Canvas } from 'storybook/internal/types';
import { SvelteComponent, ComponentEvents, ComponentConstructorOptions } from 'svelte';

type ComponentType<Props extends Record<string, any> = any, Events extends Record<string, any> = any> = new (options: ComponentConstructorOptions<Props>) => {
    [P in keyof SvelteComponent<Props> as P extends `$$${string}` ? never : P]: SvelteComponent<Props, Events>[P];
};
interface SvelteRenderer<C extends SvelteComponent = SvelteComponent> extends WebRenderer {
    component: ComponentType<this['T'] extends Record<string, any> ? this['T'] : any>;
    storyResult: this['T'] extends Record<string, any> ? SvelteStoryResult<this['T'], ComponentEvents<C>> : SvelteStoryResult;
    mount: (Component?: ComponentType, options?: Record<string, any> & {
        props: Record<string, any>;
    }) => Promise<Canvas>;
}
interface SvelteStoryResult<Props extends Record<string, any> = any, Events extends Record<string, any> = any> {
    Component?: ComponentType<Props>;
    on?: Record<string, any> extends Events ? Record<string, (event: CustomEvent) => void> : {
        [K in keyof Events as string extends K ? never : K]?: (event: Events[K]) => void;
    };
    props?: Props;
    decorator?: ComponentType<Props>;
}

export { SvelteRenderer as S };
