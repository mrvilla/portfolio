import companies from './_company.js';

export const prerender = true;

export function load(){
	return { companies };
}
