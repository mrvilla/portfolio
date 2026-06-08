import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const THEME_STORAGE_KEY = 'portfolio-theme';
export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

function readStoredTheme() {
	if (!browser) return THEME_DARK;

	const stored = localStorage.getItem(THEME_STORAGE_KEY);
	if (stored === THEME_LIGHT || stored === THEME_DARK) {
		return stored;
	}

	return window.matchMedia('(prefers-color-scheme: light)').matches ? THEME_LIGHT : THEME_DARK;
}

export function applyTheme(theme) {
	if (!browser) return;
	document.documentElement.dataset.theme = theme;
	localStorage.setItem(THEME_STORAGE_KEY, theme);
}

function createThemeStore() {
	const { subscribe, set: setStore, update } = writable(THEME_DARK);

	return {
		subscribe,
		init() {
			const nextTheme = readStoredTheme();
			applyTheme(nextTheme);
			setStore(nextTheme);
		},
		set(theme) {
			if (theme !== THEME_DARK && theme !== THEME_LIGHT) return;
			applyTheme(theme);
			setStore(theme);
		},
		toggle() {
			update((current) => {
				const nextTheme = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
				applyTheme(nextTheme);
				return nextTheme;
			});
		}
	};
}

export const theme = createThemeStore();
