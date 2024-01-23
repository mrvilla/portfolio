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
<!--		<li><a rel=prefetch aria-current="{segment === 'workshop' ? 'page' : undefined}" href="workshop">Workshop</a></li>-->
		<li><a rel=prefetch aria-current="{segment === 'photography' ? 'page' : undefined}" href="photography">Photography</a></li>
		<li><a rel=prefetch href="https://docs.google.com/document/d/1gPTRULnIaw_Hbmz1fvxFgRsUXxs3eiLBxNI8V10WYBA/edit?usp=sharing">CV</a></li>
	</ul>
	<ul>
		<li><a rel=prefetch href="http://codepen.io/iammrvilla/" class="social-icon"><img alt="CodePen" src="./social-icons/cp_icon.svg" class="icon" /></a></li>
		<li><a rel=prefetch href="https://github.com/mrvilla" class="social-icon"><img alt="GitHub" src="./social-icons/gh_icon.svg" class="icon" /></a></li>
		<li><a rel=prefetch href="https://www.linkedin.com/in/henryvilla/" class="social-icon"><img alt="LinkedIn" src="./social-icons/li_icon.svg" class="icon" /></a></li>
		<li><a rel=prefetch href="https://www.instagram.com/iammrvilla/" class="social-icon"><img alt="Instagram" src="./social-icons/ig_icon.svg" class="icon" /></a></li>
		<li><a rel=prefetch href="https://youtube.com/@iammrvilla?si=lAbW5MgHVpmZW5uh"><img alt="YouTube" src="./social-icons/yt_icon.svg" class="icon" /></a></li>
		<li><a href='mailto:iammrvilla@gmail.com'><img alt="Mail" src="./social-icons/mail_icon.svg" class="icon" /></a></li>
	</ul>
</nav>
