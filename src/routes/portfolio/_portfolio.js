import * as m from '$lib/paraglide/messages';

const projectDetails = [
	{
		title: m.project1_title(),
		slug: 'sembo',
		subtitle: m.project1_subtitle(),
		shortDesc: m.project1_shortDesc(),
		link: m.project1_link(),
		projectHref: 'https://www.sembo.se/',
		projectLink: m.project1_projectLink(),
		overviewHeadlineText: m.project1_overviewHeadlineText(),
		overview: m.project1_overview(),
		roleHeadlineText: m.project1_roleHeadlineText(),
		role: m.project1_role(),
		teamHeadlineText: m.project1_teamHeadlineText(),
		team: m.project1_team(),
		toolsHeadlineText: m.project1_toolsHeadlineText(),
		tools: m.project1_tools(),
		solutionsHeadlineText: m.project1_solutionsHeadlineText(),
		solutions: m.project1_solutions(),
		companyLogo: m.project1_companyLogo(),
		figcaption: m.project1_figcaption(),
		figcaptionImg: m.project1_figcaptionImg(),
		figcaption2: m.project1_figcaption2(),
		figcaption2img: m.project1_figcaption2img(),
		previousProjectControlTitle: m.project1_previousProjectControlTitle(),
		nextProjectControlTitle: m.project1_nextProjectControlTitle(),
		nextLink: m.project1_nextLink(),
		nextProjectName: m.project1_nextProjectName(),
	},
	{
		title: m.project2_title(),
		slug: 'signum',
		subtitle: m.project2_subtitle(),
		shortDesc: m.project2_shortDesc(),
		link: m.project2_link(),
		projectHref: 'https://www.signum-consult.com/',
		projectLink: m.project2_projectLink(),
		overviewHeadlineText: m.project2_overviewHeadlineText(),
		overview: m.project2_overview(),
		roleHeadlineText: m.project2_roleHeadlineText(),
		role: m.project2_role(),
		teamHeadlineText: m.project2_teamHeadlineText(),
		team: m.project2_team(),
		toolsHeadlineText: m.project2_toolsHeadlineText(),
		tools: m.project2_tools(),
		solutionsHeadlineText: m.project2_solutionsHeadlineText(),
		solutions: m.project2_solutions(),
		companyLogo: m.project2_companyLogo(),
		figcaption: m.project2_figcaption(),
		figcaptionImg: m.project2_figcaptionImg(),
		figcaption2: m.project2_figcaption2(),
		figcaption2img: m.project2_figcaption2img(),
		previousProjectControlTitle: m.project2_previousProjectControlTitle(),
		previousProjectName: m.project2_previousProjectName(),
		previousLink: m.project2_previousLink(),
		nextProjectControlTitle: m.project2_nextProjectControlTitle(),
		nextLink: m.project2_nextLink(),
		nextProjectName: m.project2_nextProjectName(),

	},
	{
		title: m.project3_title(),
		slug: 'ibmix-aperto',
		subtitle: m.project3_subtitle(),
		shortDesc: m.project3_shortDesc(),
		link: m.project3_link(),
		projectHref: 'https://www.aperto.com/en',
		projectLink: m.project3_projectLink(),
		overviewHeadlineText: m.project3_overviewHeadlineText(),
		overview: m.project3_overview(),
		roleHeadlineText: m.project3_roleHeadlineText(),
		role: m.project3_role(),
		teamHeadlineText: m.project3_teamHeadlineText(),
		team: m.project3_team(),
		toolsHeadlineText: m.project3_toolsHeadlineText(),
		tools: m.project3_tools(),
		solutionsHeadlineText: m.project3_solutionsHeadlineText(),
		solutions: m.project3_solutions(),
		companyLogo: m.project3_companyLogo(),
		figcaption: m.project3_figcaption(),
		figcaptionImg: m.project3_figcaptionImg(),
		figcaption2: m.project3_figcaption2(),
		figcaption2img: m.project3_figcaption2img(),
		previousProjectControlTitle: m.project3_previousProjectControlTitle(),
		previousProjectName: m.project3_previousProjectName(),
		previousLink: m.project3_previousLink(),
		nextProjectControlTitle: m.project3_nextProjectControlTitle(),
		nextLink: m.project3_nextLink(),
		nextProjectName: m.project3_nextProjectName(),
	},
	// {
	// 	title: m.project4_title(),
	// 	slug: 'video-dev-team',
	// 	subtitle: m.project4_subtitle(),
	// 	shortDesc: m.project4_shortDesc(),
	// 	link: m.project4_link(),
	// 	projectHref: 'https://video-dev.team/',
	// 	projectLink: m.project4_projectLink(),
	// 	overviewHeadlineText: m.project4_overviewHeadlineText(),
	// 	overview: m.project4_overview(),
	// 	roleHeadlineText: m.project4_roleHeadlineText(),
	// 	role: m.project4_role(),
	// 	teamHeadlineText: m.project4_teamHeadlineText(),
	// 	team: m.project4_team(),
	// 	toolsHeadlineText: m.project4_toolsHeadlineText(),
	// 	tools: m.project4_tools(),
	// 	solutionsHeadlineText: m.project4_solutionsHeadlineText(),
	// 	solutions: m.project4_solutions(),
	// 	companyLogo: m.project4_companyLogo(),
	// 	figcaption: m.project4_figcaption(),
	// 	figcaptionImg: m.project4_figcaptionImg(),
	// 	figcaption2: m.project4_figcaption2(),
	// 	figcaption2img: m.project4_figcaption2img(),
	// 	previousProjectControlTitle: m.project4_previousProjectControlTitle(),
	// 	previousProjectName: m.project4_previousProjectName(),
	// 	previousLink: m.project4_previousLink(),
	// 	nextProjectControlTitle: m.project4_nextProjectControlTitle(),
	// 	nextLink: m.project4_nextLink(),
	// 	nextProjectName: m.project4_nextProjectName(),
	// },
	// {
	// 	title: m.project5_title(),
	// 	slug: 'corruptor',
	// 	subtitle: m.project5_subtitle(),
	// 	shortDesc: m.project5_shortDesc(),
	// 	link: m.project5_link(),
	// 	projectHref: 'https://corruptor.io/',
	// 	projectLink: m.project5_projectLink(),
	// 	overviewHeadlineText: m.project5_overviewHeadlineText(),
	// 	overview: m.project5_overview(),
	// 	roleHeadlineText: m.project5_roleHeadlineText(),
	// 	role: m.project5_role(),
	// 	teamHeadlineText: m.project5_teamHeadlineText(),
	// 	team: m.project5_team(),
	// 	toolsHeadlineText: m.project5_toolsHeadlineText(),
	// 	tools: m.project5_tools(),
	// 	solutionsHeadlineText: m.project5_solutionsHeadlineText(),
	// 	solutions: m.project5_solutions(),
	// 	companyLogo: m.project5_companyLogo(),
	// 	figcaption: m.project5_figcaption(),
	// 	figcaptionImg: m.project5_figcaptionImg(),
	// 	figcaption2: m.project5_figcaption2(),
	// 	figcaption2img: m.project5_figcaption2img(),
	// 	previousProjectControlTitle: m.project5_previousProjectControlTitle(),
	// 	previousProjectName: m.project5_previousProjectName(),
	// 	previousLink: m.project5_previousLink(),
	// 	nextProjectControlTitle: m.project5_nextProjectControlTitle(),
	// 	nextLink: m.project5_nextLink(),
	// 	nextProjectName: m.project5_nextProjectName(),
	// },
	// {
	// 	title: m.project6_title(),
	// 	slug: 'btv',
	// 	subtitle: m.project6_subtitle(),
	// 	shortDesc: m.project6_shortDesc(),
	// 	link: m.project6_link(),
	// 	projectHref: 'https://btv.de',
	// 	projectLink: m.project6_projectLink(),
	// 	overviewHeadlineText: m.project6_overviewHeadlineText(),
	// 	overview: m.project6_overview(),
	// 	roleHeadlineText: m.project6_roleHeadlineText(),
	// 	role: m.project6_role(),
	// 	teamHeadlineText: m.project6_teamHeadlineText(),
	// 	team: m.project6_team(),
	// 	toolsHeadlineText: m.project6_toolsHeadlineText(),
	// 	tools: m.project6_tools(),
	// 	solutionsHeadlineText: m.project6_solutionsHeadlineText(),
	// 	solutions: m.project6_solutions(),
	// 	companyLogo: m.project6_companyLogo(),
	// 	figcaption: m.project6_figcaption(),
	// 	figcaptionImg: m.project6_figcaptionImg(),
	// 	figcaption2: m.project6_figcaption2(),
	// 	figcaption2img: m.project6_figcaption2img(),
	// 	previousProjectControlTitle: m.project6_previousProjectControlTitle(),
	// 	previousProjectName: m.project6_previousProjectName(),
	// 	previousLink: m.project6_previousLink(),
	// 	nextProjectControlTitle: m.project6_nextProjectControlTitle(),
	// 	nextLink: m.project6_nextLink(),
	// 	nextProjectName: m.project6_nextProjectName(),
	// },
	// {
	// 	title: m.project7_title(),
	// 	slug: 'dihk',
	// 	subtitle: m.project7_subtitle(),
	// 	shortDesc: m.project7_shortDesc(),
	// 	link: m.project7_link(),
	// 	projectHref: 'https://www.dihk.de/de',
	// 	projectLink: m.project7_projectLink(),
	// 	overviewHeadlineText: m.project7_overviewHeadlineText(),
	// 	overview: m.project7_overview(),
	// 	roleHeadlineText: m.project7_roleHeadlineText(),
	// 	role: m.project7_role(),
	// 	teamHeadlineText: m.project7_teamHeadlineText(),
	// 	team: m.project7_team(),
	// 	toolsHeadlineText: m.project7_toolsHeadlineText(),
	// 	tools: m.project7_tools(),
	// 	solutionsHeadlineText: m.project7_solutionsHeadlineText(),
	// 	solutions: m.project7_solutions(),
	// 	companyLogo: m.project7_companyLogo(),
	// 	figcaption: m.project7_figcaption(),
	// 	figcaptionImg: m.project7_figcaptionImg(),
	// 	figcaption2: m.project7_figcaption2(),
	// 	figcaption2img: m.project7_figcaption2img(),
	// 	previousProjectControlTitle: m.project7_previousProjectControlTitle(),
	// 	previousProjectName: m.project7_previousProjectName(),
	// 	previousLink: m.project7_previousLink(),
	// 	nextProjectControlTitle: m.project7_nextProjectControlTitle(),
	// 	nextLink: m.project7_nextLink(),
	// 	nextProjectName: m.project7_nextProjectName(),
	// },
	// {
	// 	title: m.project8_title(),
	// 	slug: 'consuo',
	// 	subtitle: m.project8_subtitle(),
	// 	shortDesc: m.project8_shortDesc(),
	// 	link: m.project8_link(),
	// 	projectHref: 'https://consuo.tv/',
	// 	projectLink: m.project8_projectLink(),
	// 	overviewHeadlineText: m.project8_overviewHeadlineText(),
	// 	overview: m.project8_overview(),
	// 	roleHeadlineText: m.project8_roleHeadlineText(),
	// 	role: m.project8_role(),
	// 	teamHeadlineText: m.project8_teamHeadlineText(),
	// 	team: m.project8_team(),
	// 	toolsHeadlineText: m.project8_toolsHeadlineText(),
	// 	tools: m.project8_tools(),
	// 	solutionsHeadlineText: m.project8_solutionsHeadlineText(),
	// 	solutions: m.project8_solutions(),
	// 	companyLogo: m.project8_companyLogo(),
	// 	figcaption: m.project8_figcaption(),
	// 	figcaptionImg: m.project8_figcaptionImg(),
	// 	figcaption2: m.project8_figcaption2(),
	// 	figcaption2img: m.project8_figcaption2img(),
	// 	previousProjectControlTitle: m.project8_previousProjectControlTitle(),
	// 	previousProjectName: m.project8_previousProjectName(),
	// 	previousLink: m.project8_previousLink(),
	// 	nextProjectControlTitle: m.project8_nextProjectControlTitle(),
	// 	nextLink: m.project8_nextLink(),
	// 	nextProjectName: m.project8_nextProjectName(),
	// },
	// {
	// 	title: m.project9_title(),
	// 	slug: 'signum-consulting',
	// 	subtitle: m.project9_subtitle(),
	// 	shortDesc: m.project9_shortDesc(),
	// 	link: m.project9_link(),
	// 	projectHref: 'https://www.signum-consult.com/index.html',
	// 	projectLink: m.project9_projectLink(),
	// 	overviewHeadlineText: m.project9_overviewHeadlineText(),
	// 	overview: m.project9_overview(),
	// 	roleHeadlineText: m.project9_roleHeadlineText(),
	// 	role: m.project9_role(),
	// 	teamHeadlineText: m.project9_teamHeadlineText(),
	// 	team: m.project9_team(),
	// 	toolsHeadlineText: m.project9_toolsHeadlineText(),
	// 	tools: m.project9_tools(),
	// 	solutionsHeadlineText: m.project9_solutionsHeadlineText(),
	// 	solutions: m.project9_solutions(),
	// 	companyLogo: m.project9_companyLogo(),
	// 	figcaption: m.project9_figcaption(),
	// 	figcaptionImg: m.project9_figcaptionImg(),
	// 	figcaption2: m.project9_figcaption2(),
	// 	figcaption2img: m.project9_figcaption2img(),
	// 	previousProjectControlTitle: m.project9_previousProjectControlTitle(),
	// 	previousProjectName: m.project9_previousProjectName(),
	// 	previousLink: m.project9_previousLink(),
	// 	nextProjectControlTitle: m.project9_nextProjectControlTitle(),
	// 	nextLink: m.project9_nextLink(),
	// 	nextProjectName: m.project9_nextProjectName(),
	// },
	// {
	// 	title: m.project10_title(),
	// 	slug: 'consus',
	// 	subtitle: m.project10_subtitle(),
	// 	shortDesc: m.project10_shortDesc(),
	// 	link: m.project10_link(),
	// 	projectHref: 'https://www.consus.ag/consus-investment-highlights',
	// 	projectLink: m.project10_projectLink(),
	// 	overviewHeadlineText: m.project10_overviewHeadlineText(),
	// 	overview: m.project10_overview(),
	// 	roleHeadlineText: m.project10_roleHeadlineText(),
	// 	role: m.project10_role(),
	// 	teamHeadlineText: m.project10_teamHeadlineText(),
	// 	team: m.project10_team(),
	// 	toolsHeadlineText: m.project10_toolsHeadlineText(),
	// 	tools: m.project10_tools(),
	// 	solutionsHeadlineText: m.project10_solutionsHeadlineText(),
	// 	solutions: m.project10_solutions(),
	// 	companyLogo: m.project10_companyLogo(),
	// 	figcaption: m.project10_figcaption(),
	// 	figcaptionImg: m.project10_figcaptionImg(),
	// 	figcaption2: m.project10_figcaption2(),
	// 	figcaption2img: m.project10_figcaption2img(),
	// 	previousProjectControlTitle: m.project10_previousProjectControlTitle(),
	// 	previousProjectName: m.project10_previousProjectName(),
	// 	previousLink: m.project10_previousLink(),
	// 	nextProjectControlTitle: m.project10_nextProjectControlTitle(),
	// 	nextLink: m.project10_nextLink(),
	// 	nextProjectName: m.project10_nextProjectName(),
	// },
	// {
	// 	title: m.project11_title(),
	// 	slug: 'cemex',
	// 	subtitle: m.project11_subtitle(),
	// 	shortDesc: m.project11_shortDesc(),
	// 	link: m.project11_link(),
	// 	projectHref: 'https://www.cemex.de/',
	// 	projectLink: m.project11_projectLink(),
	// 	overviewHeadlineText: m.project11_overviewHeadlineText(),
	// 	overview: m.project11_overview(),
	// 	roleHeadlineText: m.project11_roleHeadlineText(),
	// 	role: m.project11_role(),
	// 	teamHeadlineText: m.project11_teamHeadlineText(),
	// 	team: m.project11_team(),
	// 	toolsHeadlineText: m.project11_toolsHeadlineText(),
	// 	tools: m.project11_tools(),
	// 	solutionsHeadlineText: m.project11_solutionsHeadlineText(),
	// 	solutions: m.project11_solutions(),
	// 	companyLogo: m.project11_companyLogo(),
	// 	figcaption: m.project11_figcaption(),
	// 	figcaptionImg: m.project11_figcaptionImg(),
	// 	figcaption2: m.project11_figcaption2(),
	// 	figcaption2img: m.project11_figcaption2img(),
	// 	previousProjectControlTitle: m.project11_previousProjectControlTitle(),
	// 	previousProjectName: m.project11_previousProjectName(),
	// 	previousLink: m.project11_previousLink(),
	// 	nextProjectControlTitle: m.project11_nextProjectControlTitle(),
	// 	nextLink: m.project11_nextLink(),
	// 	nextProjectName: m.project11_nextProjectName(),
	// },
	// {
	// 	title: m.project12_title(),
	// 	slug: 'qualmity',
	// 	subtitle: m.project12_subtitle(),
	// 	shortDesc: m.project12_shortDesc(),
	// 	link: m.project12_link(),
	// 	projectHref: 'https://www.qualmity.com/',
	// 	projectLink: m.project12_projectLink(),
	// 	overviewHeadlineText: m.project12_overviewHeadlineText(),
	// 	overview: m.project12_overview(),
	// 	roleHeadlineText: m.project12_roleHeadlineText(),
	// 	role: m.project12_role(),
	// 	teamHeadlineText: m.project12_teamHeadlineText(),
	// 	team: m.project12_team(),
	// 	toolsHeadlineText: m.project12_toolsHeadlineText(),
	// 	tools: m.project12_tools(),
	// 	solutionsHeadlineText: m.project12_solutionsHeadlineText(),
	// 	solutions: m.project12_solutions(),
	// 	companyLogo: m.project12_companyLogo(),
	// 	figcaption: m.project12_figcaption(),
	// 	figcaptionImg: m.project12_figcaptionImg(),
	// 	previousProjectControlTitle: m.project12_previousProjectControlTitle(),
	// 	previousProjectName: m.project12_previousProjectName(),
	// 	previousLink: m.project12_previousLink(),
	// }
];

export default projectDetails;
