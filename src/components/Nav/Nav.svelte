<script>
	export let segment;
</script>

<style src="./style/nav.scss"></style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href="..">iammrvilla</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li><a aria-current="{segment === 'experience' ? 'page' : undefined}" href="experience">Experience</a></li>
		<li><a rel=prefetch aria-current="{segment === 'portfolio' ? 'page' : undefined}" href="portfolio">Portfolio</a></li>
		<li><a rel=prefetch aria-current="{segment === 'workshop' ? 'page' : undefined}" href="workshop">Workshop</a></li>
		<li><a rel=prefetch href="https://docs.google.com/document/d/1gPTRULnIaw_Hbmz1fvxFgRsUXxs3eiLBxNI8V10WYBA/edit?usp=sharing">CV</a></li>
	</ul>
</nav>
