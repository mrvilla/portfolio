<script>
	import LabPlaceholderPage from '$lib/components/Lab/LabPlaceholderPage.svelte';
	import LabExperiment from '$lib/components/Lab/LabExperiment.svelte';
	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime.js';

	$: languageTag();

	const videoSrc = '';
</script>

<svelte:head>
	<title>{m.lab_creative_title()}</title>
</svelte:head>

<LabPlaceholderPage
	kicker={m.lab_creative_kicker()}
	title={m.lab_creative_title()}
	description={m.lab_creative_description()}
	note={m.lab_creative_note()}
>
	<LabExperiment variant="depth" {videoSrc}>
		<section class="lab-experiment__section">
			<p class="lab-experiment__index">{m.lab_creative_section_experiment()}</p>
			<h2 class="lab-experiment__heading">{m.lab_creative_spatial_title()}</h2>
			<blockquote class="lab-experiment__quote">{m.lab_creative_spatial_quote()}</blockquote>
			<p class="lab-experiment__meta">
				<span class="lab-experiment__label">{m.lab_creative_tech_label()}:</span>
				{m.lab_creative_tech()}
			</p>
			<p class="lab-experiment__sequence">{m.lab_creative_sequence()}</p>
		</section>

		<figure class="lab-experiment__visual lab-experiment__visual--hero">
			<img
				src="/experiments/creative/depth-cover04.png"
				alt={m.lab_creative_hero_alt()}
			/>
		</figure>
		<figure class="lab-experiment__visual">
			<img
				src="/experiments/creative/depth-cover03.png"
				alt={m.lab_creative_scale_alt()}
			/>
		</figure>
		<figure class="lab-experiment__visual">
			<img
				src="/experiments/creative/depth-cover01.png"
				alt={m.lab_creative_viewpoint_alt()}
			/>
		</figure>
	</LabExperiment>
</LabPlaceholderPage>
