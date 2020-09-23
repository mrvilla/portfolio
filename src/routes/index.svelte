<script>
  import Stage from '../components/Stage/Stage.svelte';
  import SocialLinks from '../components/SocialLinks/SocialLinks.svelte';
</script>

<style>
	.content {
        display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>

<svelte:head>
	<title>iammrvilla</title>
</svelte:head>


<div class='content'>
	<Stage />
	<SocialLinks />
</div>
