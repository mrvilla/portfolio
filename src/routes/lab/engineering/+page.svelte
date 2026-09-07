<script>
	import LabPlaceholderPage from '$lib/components/Lab/LabPlaceholderPage.svelte';
	import LabExperiment from '$lib/components/Lab/LabExperiment.svelte';
	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime.js';

	$: languageTag();

	const videoSrc = '';
</script>

<svelte:head>
	<title>{m.lab_engineering_kicker()}</title>
</svelte:head>

<LabPlaceholderPage
	kicker={m.lab_engineering_kicker()}
	title={m.lab_engineering_title()}
	description={m.lab_engineering_description()}
	note={m.lab_engineering_note()}
>
	<LabExperiment variant="relay" {videoSrc}>
		<section class="lab-experiment__section">
			<p class="lab-experiment__index">{m.lab_engineering_section_experiment()}</p>
			<blockquote class="lab-experiment__quote">{m.lab_engineering_experiment_quote()}</blockquote>
			<p class="lab-experiment__sequence">{m.lab_engineering_sequence()}</p>
		</section>

		<section>
			<p class="lab-experiment__index">{m.lab_engineering_section_workflow()}</p>

			<div class="lab-experiment__moment">
				<div class="lab-experiment__copy">
					<h2 class="lab-experiment__heading">{m.lab_engineering_plan_title()}</h2>
					<p class="lab-experiment__quote">{m.lab_engineering_plan_text()}</p>
				</div>
				<figure class="lab-experiment__visual">
					<img
						src="/experiments/engineering/relay05.png"
						alt={m.lab_engineering_plan_alt()}
					/>
				</figure>
			</div>

			<div class="lab-experiment__moment lab-experiment__moment--image-start">
				<figure class="lab-experiment__visual">
					<img
						src="/experiments/engineering/rela07.png"
						alt={m.lab_engineering_execution_alt()}
					/>
				</figure>
				<div class="lab-experiment__copy">
					<h2 class="lab-experiment__heading">{m.lab_engineering_execution_title()}</h2>
					<p class="lab-experiment__quote">{m.lab_engineering_execution_text()}</p>
				</div>
			</div>

			<div class="lab-experiment__moment lab-experiment__moment--wide">
				<div class="lab-experiment__copy">
					<h2 class="lab-experiment__heading">{m.lab_engineering_control_title()}</h2>
					<p class="lab-experiment__quote">{m.lab_engineering_control_text()}</p>
				</div>
				<figure class="lab-experiment__visual">
					<img
						src="/experiments/engineering/rela08.png"
						alt={m.lab_engineering_control_alt()}
					/>
				</figure>
			</div>

			<div class="lab-experiment__moment lab-experiment__moment--wide">
				<figure class="lab-experiment__visual">
					<img
						src="/experiments/engineering/relay13.png"
						alt={m.lab_engineering_recovery_alt()}
					/>
				</figure>
				<div class="lab-experiment__copy">
					<h2 class="lab-experiment__heading">{m.lab_engineering_recovery_title()}</h2>
					<p class="lab-experiment__quote">{m.lab_engineering_recovery_text()}</p>
				</div>
			</div>
		</section>

		<section class="lab-experiment__section">
			<p class="lab-experiment__index">{m.lab_engineering_section_looking()}</p>
			<p class="lab-experiment__looking">{m.lab_engineering_looking_at()}</p>
			<p class="lab-experiment__audit">{m.lab_engineering_audit()}</p>
		</section>
	</LabExperiment>
</LabPlaceholderPage>
