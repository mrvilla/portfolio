<script>
	import LabPlaceholderPage from '$lib/components/Lab/LabPlaceholderPage.svelte';
	import LabExperiment from '$lib/components/Lab/LabExperiment.svelte';
	import m from '$lib/messages.js';
</script>

<svelte:head>
	<title>{m.lab_engineering_002_kicker()}</title>
</svelte:head>

<LabPlaceholderPage
	kicker={m.lab_engineering_002_kicker()}
	title={m.lab_engineering_002_title()}
	description={m.lab_engineering_002_description()}
	note={m.lab_engineering_002_note()}
>
	<LabExperiment variant="relay">
		<section class="lab-experiment__section">
			<p class="lab-experiment__index">{m.lab_engineering_section_experiment()}</p>
			<blockquote class="lab-experiment__quote">{m.lab_engineering_002_experiment_quote()}</blockquote>
			<p class="lab-experiment__meta">
				<span class="lab-experiment__label">{m.lab_engineering_002_sequence()}</span>
			</p>
			<p class="lab-experiment__audit">{m.lab_engineering_002_purpose()}</p>
		</section>

		<figure class="lab-experiment__visual lab-experiment__visual--hero">
			<img
				src="/experiments/engineering/002/figma3.png"
				alt={m.lab_engineering_002_design_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_engineering_002_design_caption_title()}</span>
				{m.lab_engineering_002_design_caption()}
			</figcaption>
		</figure>

		<figure class="lab-experiment__visual">
			<img
				src="/experiments/engineering/002/figma1.png"
				alt={m.lab_engineering_002_structure_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_engineering_002_structure_caption_title()}</span>
				{m.lab_engineering_002_structure_caption()}
			</figcaption>
		</figure>

		<figure class="lab-experiment__visual">
			<img
				src="/experiments/engineering/002/cursor1.png"
				alt={m.lab_engineering_002_build_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_engineering_002_build_caption_title()}</span>
				{m.lab_engineering_002_build_caption()}
			</figcaption>
		</figure>

		<figure class="lab-experiment__visual">
			<img
				src="/experiments/engineering/002/token.png"
				alt={m.lab_engineering_002_document_alt()}
			/>
			<figcaption class="lab-experiment__caption">
				<span class="lab-experiment__caption-title">{m.lab_engineering_002_document_caption_title()}</span>
				{m.lab_engineering_002_document_caption()}
			</figcaption>
		</figure>
	</LabExperiment>
</LabPlaceholderPage>
