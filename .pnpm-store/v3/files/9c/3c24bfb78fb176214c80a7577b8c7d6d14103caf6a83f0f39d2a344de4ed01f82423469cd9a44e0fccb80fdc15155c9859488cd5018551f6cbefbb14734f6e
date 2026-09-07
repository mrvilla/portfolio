import type { StoryObj } from '@storybook/svelte';
import type { ComponentProps } from 'svelte';
import type Story from './Story.svelte';
import type { Cmp, StoryContext } from '../types';
type Params = {
    args: ComponentProps<Story<Cmp>>['args'];
    storyContext: StoryContext<Cmp>;
};
/**
 * Given a code string representing the raw source code for the story,
 * and the current, dynamic args
 * this function:
 * 1. Replaces args references in the code with the actual values
 * 2. Emits the final code to Storybook's internal code provider
 * So that it can be shown in source code viewer
 */
export declare const emitCode: (params: Params) => void;
export declare const generateCodeToEmit: ({ code, args }: {
    code: string;
    args: StoryObj["args"];
}) => string;
export {};
