<script>
	import Company from '$lib/components/Company/Company.svelte';
	import * as m from '$lib/paraglide/messages.js';

	export let data;
	const { companies } = data;
	// console.log('companies: ', companies);

	const translatedCompanies = companies.map((company, index) => ({
		...company,
		companyName: m[`company${index + 1}_name`](),
		title: m[`company${index + 1}_title`](),
		location: m[`company${index + 1}_location`](),
		beginEnd: m[`company${index + 1}_beginEnd`](),
		details: m[`company${index + 1}_details`]()
	}));
</script>

<svelte:head>
	<title>{m.nav_experience()}</title>
</svelte:head>

<Company>
	{#each translatedCompanies as { src, companyName, title, location, beginEnd, details, href }}
		<div class="company__company-item">
			<div class="company__item">
				<a {href}><img {src} alt={companyName} /></a>
				<div class="company__item-place">
					<span class="company__item-location">{location}</span>
					<span class="company__item-date">{beginEnd}</span>
				</div>
			</div>
			<h4 class="company__title">{title}</h4>
			<p class="company__details">{details}</p>
		</div>
	{/each}
</Company>

<style lang="scss">
	.company__company-item {
		padding-bottom: 4.5rem;
	}
	.company__item {
		display: flex;
		align-items: end;
	}
	.company__item-place {
		font-size: 0.9rem;
		letter-spacing: 0.063rem;
		padding-left: 1.125rem;
		display: flex;
		flex-direction: column;
	}
	img {
		border: 0.188rem solid #000;
		border-radius: 1.25rem;
	}
	a > img:hover {
		border-radius: 1.25rem;
		border: 0.188rem solid #a47764;
	}
	.company__title {
		font-size: 1.36rem;
		margin: 2rem 0 1rem;
	}
	.company__item-date {
		font-family: 'Source Code Pro', monospace;
	}
</style>
