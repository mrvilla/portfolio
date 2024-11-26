import photos from './_photo.js';

export const prerender = true;

export function load(){
	return { photos };
}
