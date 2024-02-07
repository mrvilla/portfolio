<script>
  import Nav from '../components/Nav/Nav.svelte';

  export let segment;

  import { onMount } from 'svelte';

  onMount(() => {
    if (navigator.userAgent.includes('Firefox')) {
      document.querySelectorAll('a[sveltekit\\:prefetch]').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const href = link.getAttribute('href');
          history.pushState({}, '', href);
          location.reload();
        });
      });
    }
  });
</script>

<style>
    main {
        position: relative;
        background-color: #000;
        margin: 0;
	    padding: 0;
        min-height: 100vh;
    }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
