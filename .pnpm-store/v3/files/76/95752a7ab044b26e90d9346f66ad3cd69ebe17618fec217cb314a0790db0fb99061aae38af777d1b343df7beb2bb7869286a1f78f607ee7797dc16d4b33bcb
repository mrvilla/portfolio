import type { Cmp, StoryAnnotations, StoryContext } from '../../types';
interface ContextProps<TCmp extends Cmp> {
    currentStoryExportName: string | undefined;
    args: NonNullable<StoryAnnotations<TCmp>['args']>;
    storyContext: StoryContext<TCmp>;
}
declare function buildContext<TCmp extends Cmp>(props: ContextProps<TCmp>): {
    readonly args: NonNullable<StoryAnnotations<TCmp>["args"]>;
    readonly storyContext: StoryContext<TCmp>;
    readonly currentStoryExportName: string | undefined;
    set: (props: ContextProps<TCmp>) => void;
};
export type StoryRendererContext<TCmp extends Cmp = Cmp> = ReturnType<typeof buildContext<TCmp>>;
export declare function useStoryRenderer<TCmp extends Cmp>(): {
    readonly args: NonNullable<StoryAnnotations<TCmp>["args"]>;
    readonly storyContext: StoryContext<TCmp>;
    readonly currentStoryExportName: string | undefined;
    set: (props: ContextProps<TCmp>) => void;
};
export {};
