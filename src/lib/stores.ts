import { writable } from 'svelte/store';

export const isModelLoading = writable(true);
export const modelItemsLoaded = writable(0);
export const modelItemsTotal = writable(0);