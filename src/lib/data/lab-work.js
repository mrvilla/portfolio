/** Homepage Lab experiments. `href` is the category index for that track. */
export const labWorkConfig = [
	{
		id: 'engineering',
		variant: 'engineering',
		href: '/lab/engineering'
	},
	{
		id: 'creative',
		variant: 'creative',
		href: '/lab/creative'
	}
];

/**
 * Resolve Lab homepage cards from config + i18n copy.
 * @param {typeof import('$lib/paraglide/messages')} m
 */
export function resolveLabProjects(m) {
	return labWorkConfig.map((item) => ({
		...item,
		kicker: m[`lab_${item.id}_kicker`](),
		title: m[`lab_${item.id}_title`](),
		meta: m[`lab_${item.id}_meta`](),
		status: m[`lab_${item.id}_status`](),
		cta: m[`lab_${item.id}_cta`]()
	}));
}
