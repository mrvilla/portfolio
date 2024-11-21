<script>
  export let segment;
  let menuOpen = false;
</script>

<style lang="scss">
  @import './style/nav.scss';
</style>

<nav>
	<a aria-current="{segment === undefined ? 'page' : undefined}" href=".." on:click={() => menuOpen = false}>iammrvilla</a>
	<input id="menu-toggle" type="checkbox" bind:checked={menuOpen}/>
	<label class='menu-button-container' for="menu-toggle">
		<svg viewBox="0 0 64 48">
			<path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
			<path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
			<path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
		</svg>
	</label>
	<div class="nav-ul">
		<ul>
			<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about"
			       on:click={() => menuOpen = false}>About</a></li>
			<li><a aria-current="{segment === 'experience' ? 'page' : undefined}" href="experience"
			       on:click={() => menuOpen = false}>Experience</a></li>
			<li><a rel=prefetch aria-current="{segment === 'portfolio' ? 'page' : undefined}" href="portfolio"
			       on:click={() => menuOpen = false}>Portfolio</a></li>
			<li><a rel=prefetch aria-current="{segment === 'photography' ? 'page' : undefined}" href="photography"
			       on:click={() => menuOpen = false}>Photography</a></li>
			<li><a rel=prefetch
			       href="https://docs.google.com/document/d/1gPTRULnIaw_Hbmz1fvxFgRsUXxs3eiLBxNI8V10WYBA/edit?usp=sharing">CV</a>
			</li>
		</ul>
		<ul>
			<li><a rel=prefetch href="https://codepen.io/iammrvilla/" class="social-icon"><img alt="CodePen"
			                                                                                  src="../social-icons/cp_icon.svg"
			                                                                                  class="icon"/></a></li>
			<li><a rel=prefetch href="https://github.com/mrvilla" class="social-icon"><img alt="GitHub"
			                                                                               src="../social-icons/gh_icon.svg"
			                                                                               class="icon"/></a></li>
			<li><a rel=prefetch href="https://www.linkedin.com/in/henryvilla/" class="social-icon"><img alt="LinkedIn"
			                                                                                            src="../social-icons/li_icon.svg"
			                                                                                            class="icon"/></a>
			</li>
			<li><a rel=prefetch href="https://www.instagram.com/iammrvilla/" class="social-icon"><img alt="Instagram"
			                                                                                          src="../social-icons/ig_icon.svg"
			                                                                                          class="icon"/></a>
			</li>
			<li><a rel=prefetch href="https://youtube.com/@iammrvilla?si=lAbW5MgHVpmZW5uh"><img alt="YouTube"
			                                                                                    src="../social-icons/yt_icon.svg"
			                                                                                    class="icon"/></a></li>
			<li><a href='mailto:iammrvilla@gmail.com'><img alt="Mail" src="../social-icons/mail_icon.svg" class="icon"/></a>
			</li>
		</ul>
	</div>
</nav>
