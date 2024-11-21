<script>
	import Company from '$lib/components/Company/Company.svelte';

	export async function load({ fetch }) {
		const response = await fetch('_company.js');
		const companies = await response.json();
		return { companies };
	}
	export let data;
	const { companies } = data;
</script>

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
    a>img:hover {
	    border-radius: 1.25rem;
	    border: 0.188rem solid #FFBE98;
    }
    .company__title {
        font-size: 1.36rem;
	    margin: 2rem 0 1rem;
    }
    .company__item-date {
        font-family: 'Source Code Pro', monospace;
    }
</style>


<svelte:head>
	<title>Experience</title>
</svelte:head>

<Company>
	{#each companies as company}
		<div class="company__company-item">
			<div class="company__item">
				<a href="{company.href}"><img src="{company.src}" alt="{company.companyName}"></a>
				<div class="company__item-place">
					<span class="company__item-location">{company.location}</span>
					<span class="company__item-date">{company.beginEnd}</span>
				</div>
			</div>
			<h4 class="company__title">{company.title}</h4>
			<p class="company__details">{company.details}</p>
		</div>
	{/each}
</Company>
