import { postTransformPlugin, preTransformPlugin } from '#compiler/plugins';
import { createIndexer } from '#indexer/index';
export const viteFinal = async (config, options) => {
    let { plugins = [], ...restConfig } = config;
    const { legacyTemplate = false } = options;
    if (legacyTemplate) {
        plugins.unshift(await preTransformPlugin());
    }
    plugins.push(await postTransformPlugin());
    return {
        ...restConfig,
        plugins,
    };
};
export const experimental_indexers = (indexers, options) => {
    return [createIndexer(options.legacyTemplate ?? false), ...(indexers || [])];
};
