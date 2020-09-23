<script>
	import Nav from '../components/Nav/Nav.svelte';
	export let segment;
</script>

<style>
    main {
        position: relative;
        background-color: #fff;
        margin: 0 auto;
        height: 100%;
    }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>