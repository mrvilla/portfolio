import type { IndexInput } from '@storybook/types';
import type { StorybookAddonSvelteCsFOptions } from '#preset';
interface Results {
    meta: Pick<IndexInput, 'title' | 'tags'>;
    stories: Array<Pick<IndexInput, 'exportName' | 'name' | 'tags'>>;
}
export declare function parseForIndexer(filename: string, options: Partial<StorybookAddonSvelteCsFOptions>): Promise<Results>;
export {};
