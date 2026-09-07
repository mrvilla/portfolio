<script>
	import * as m from '$lib/paraglide/messages';
	import { languageTag } from '$lib/paraglide/runtime.js';
	import { resolveLabProjects } from '$lib/data/lab-work.js';
	import LabCard from './LabCard.svelte';

	$: languageTag();
	$: labProjects = resolveLabProjects(m);
</script>

<section id="lab" class="lab" aria-labelledby="lab-heading">
	<div class="lab__header">
		<h4 id="lab-heading" class="lab__label">{m.stage_lab_label()}</h4>
	</div>

	<div class="lab__grid">
		{#each labProjects as project (project.id)}
			<LabCard
				variant={project.variant}
				kicker={project.kicker}
				title={project.title}
				meta={project.meta}
				status={project.status}
				href={project.href}
				cta={project.cta}
			/>
		{/each}
	</div>
</section>

<style lang="scss">
	@import './style/lab.scss';
</style>
