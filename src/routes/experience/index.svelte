<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`experience.json`)
		  .then(r => r.json())
		  .then(companies => {
			return { companies };
		});
	}
</script>

<script>
    import Company from '../../components/Company/Company.svelte';
	export let companies;
</script>

<style>
    .company__company-item {
	    padding-bottom: 72px;
    }
    .company__item {
        display: flex;
        align-items: end;
    }
    .company__item-place {
	    font-size: 0.9em;
	    letter-spacing: 1px;
		padding-left: 18px;
        display: flex;
	    flex-direction: column;
    }
    img {
        border: 3px solid #000;
        border-radius: 20px;
    }
    a>img:hover {
	    border-radius: 20px;
	    border: 3px solid #2196f3;
    }
    .company__title {
        font-size: 1.36em;
	    margin: 32px 0 1em;

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
