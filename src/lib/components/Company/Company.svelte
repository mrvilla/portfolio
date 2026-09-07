<script>
	import m from '$lib/messages.js';
</script>

<div class="company">
	<h2 class="company__headline">{m.company_headline()}</h2>
	<div class="company__company-items">
		<slot />
	</div>
</div>

<style lang="scss">
	@import './style/company.scss';
</style>
