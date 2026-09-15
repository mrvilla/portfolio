<script>
	import LabPlaceholderPage from '$lib/components/Lab/LabPlaceholderPage.svelte';
	import LabExperiment from '$lib/components/Lab/LabExperiment.svelte';
	import m from '$lib/messages.js';
</script>

<svelte:head>
	<title>{m.lab_creative_002_kicker()}</title>
</svelte:head>

<LabPlaceholderPage
	kicker={m.lab_creative_002_kicker()}
	title={m.lab_creative_002_title()}
	description={m.lab_creative_002_description()}
	note={m.lab_creative_002_note()}
>
	<LabExperiment variant="depth">
		<section class="lab-experiment__section">
			<p class="lab-experiment__index">{m.lab_creative_section_experiment()}</p>
			<h2 class="lab-experiment__heading">{m.lab_creative_002_heading()}</h2>
			<blockquote class="lab-experiment__quote">{m.lab_creative_002_quote()}</blockquote>
			<p class="lab-experiment__meta">
				<span class="lab-experiment__label">{m.lab_creative_tech_label()}:</span>
				{m.lab_creative_002_tech()}
			</p>
			<p class="lab-experiment__sequence">{m.lab_creative_002_sequence()}</p>
		</section>

		<figure class="lab-experiment__visual lab-experiment__visual--hero">
			<img
				src="/experiments/creative/002/main1.png"
				alt={m.lab_creative_002_discover_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_creative_002_discover_caption_title()}</span>
				{m.lab_creative_002_discover_caption()}
			</figcaption>
		</figure>

		<figure class="lab-experiment__visual">
			<img
				src="/experiments/creative/002/idea.png"
				alt={m.lab_creative_002_structure_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_creative_002_structure_caption_title()}</span>
				{m.lab_creative_002_structure_caption()}
			</figcaption>
		</figure>

		<figure class="lab-experiment__visual">
			<img
				src="/experiments/creative/002/stitch1.png"
				alt={m.lab_creative_002_generate_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_creative_002_generate_caption_title()}</span>
				{m.lab_creative_002_generate_caption()}
			</figcaption>
		</figure>
	</LabExperiment>
</LabPlaceholderPage>
