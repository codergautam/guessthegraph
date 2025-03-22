import { writable } from 'svelte/store';

// Store for keeping track of the calculator instance
export const calculatorStore = writable(null);
