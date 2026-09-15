/** Homepage Lab experiments. `href` is the detail page for that experiment. */
export const labWorkConfig = [
	{
		id: 'engineering',
		variant: 'engineering',
		href: '/lab/engineering'
	},
	{
		id: 'engineering_002',
		variant: 'engineering',
		href: '/lab/engineering/002'
	},
	{
		id: 'creative',
		variant: 'creative',
		href: '/lab/creative'
	},
	{
		id: 'creative_002',
		variant: 'creative',
		href: '/lab/creative/002'
	}
];

/**
 * Resolve Lab homepage cards from config + copy.
 * @param {typeof import('$lib/messages.js').default} m
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
