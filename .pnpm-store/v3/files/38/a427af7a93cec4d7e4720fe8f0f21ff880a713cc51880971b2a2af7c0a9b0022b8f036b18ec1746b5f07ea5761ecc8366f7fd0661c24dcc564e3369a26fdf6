import { getContext, hasContext, setContext } from 'svelte';
const CONTEXT_KEYS = 'storybook-stories-template-snippet-context';
function buildContext() {
    let template = $state();
    function set(snippet) {
        template = snippet;
    }
    return {
        get template() {
            return template;
        },
        set,
    };
}
export function useStoriesTemplate() {
    if (!hasContext(CONTEXT_KEYS)) {
        setContext(CONTEXT_KEYS, buildContext());
    }
    return getContext(CONTEXT_KEYS).template;
}
export function setTemplate(snippet) {
    if (!hasContext(CONTEXT_KEYS)) {
        setContext(CONTEXT_KEYS, buildContext());
    }
    const ctx = getContext(CONTEXT_KEYS);
    ctx.set(snippet);
}
