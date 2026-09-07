import { getContext, hasContext, setContext } from 'svelte';
const CONTEXT_KEY = 'storybook-story-renderer-context';
function buildContext(props) {
    let currentStoryExportName = $state(props.currentStoryExportName);
    let args = $state(props.args);
    let storyContext = $state(props.storyContext);
    function set(props) {
        currentStoryExportName = props.currentStoryExportName;
        args = props.args;
        storyContext = props.storyContext;
    }
    return {
        get args() {
            return args;
        },
        get storyContext() {
            return storyContext;
        },
        get currentStoryExportName() {
            return currentStoryExportName;
        },
        set,
    };
}
function createStoryRendererContext() {
    const ctx = buildContext({
        currentStoryExportName: undefined,
        args: {},
        // @ts-expect-error FIXME: I don't know how to satisfy this one
        storyContext: {},
    });
    setContext(CONTEXT_KEY, ctx);
}
export function useStoryRenderer() {
    if (!hasContext(CONTEXT_KEY)) {
        createStoryRendererContext();
    }
    return getContext(CONTEXT_KEY);
}
