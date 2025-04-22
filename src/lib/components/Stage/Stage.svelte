<script>
	import * as m from '$lib/paraglide/messages';
</script>

<div class="stage">
<h1 class="stage__headline">{m.stage_headline()}</h1>
	<div class="stage__content_hero">
		<p class="stage__hero_text">
			{@html m.stage_heroText()}
		</p>
		<div class="stage__video_wrapper">
			<video
				class="stage__video"
				autoplay
				muted
				loop
				playsinline
				preload="auto"
				poster="/images/dji_fly_video_clip.jpg"
			>
				<source src="/videos/dji_fly_video_clip.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
	<div class="stage__content_about">
		<div class="stage__profile_photo_container">
			<img class="stage__profile_photo" alt="profile_pic" src="/images/profile.jpg" />
		</div>
		<div class="stage__about">
			<p class="stage__about_text">{m.stage_aboutText()}</p>
			<p class="stage__text">{m.stage_aboutText2()}</p>
			<p class="stage__text">{m.stage_aboutText3()}</p>
			<ul class="stage__list">
				<li class="stage__list-item">{m.stage_aboutListItem1()}</li>
				<li class="stage__list-item">{m.stage_aboutListItem2()}</li>
				<li class="stage__list-item">{m.stage_aboutListItem3()}</li>
				<li class="stage__list-item">{m.stage_aboutListItem4()}</li>
				<li class="stage__list-item">{m.stage_aboutListItem5()}</li>
			</ul>
		</div>

	</div>
	<section class="stage__content_key_offering">
		<div class="stage__offerings_wrapper">
			<div class="stage__key_offering_one">
				<h3 class="stage__key_offering_headline">
					<strong>{m.stage_key_offering_headline()}</strong>
				</h3>
				<div class="stage__offering">
					<h3 class="stage__offering_headline">{m.stage_keyOfferings_userInterface()}</h3>
					<p class="stage__offering_content_text">
						{m.stage_keyOfferings_userInterfaceDescription()}
					</p>
				</div>
			</div>
			<div class="stage__offering two">
				<h3 class="stage__offering_headline">{m.stage_keyOfferings_webDevelopment()}</h3>
				<p class="stage__offering_content_text">
					{m.stage_keyOfferings_webDevelopmentDescription()}
				</p>
			</div>
			<div class="stage__offering three">
				<h3 class="stage__offering_headline">{m.stage_keyOfferings_drone()}</h3>
				<p class="stage__offering_content_text">{m.stage_keyOfferings_droneDescription()}</p>
			</div>
		</div>
	</section>
	<section class="stage__content_why_me">
		<h2 class="stage__why_me_headline">{m.stage_whyMe_headline()}</h2>
		<div class="stage__why_me_wrapper">
			<div class="stage__why one">
				<h3 class="stage__why_headline">{m.stage_whyMe_provenExperience()}</h3>
				<p class="stage__why_content_text">{m.stage_whyMe_provenExperienceDescription()}</p>
			</div>
			<div class="stage__why two">
				<h3 class="stage__why_headline">{m.stage_whyMe_remoteExpertise()}</h3>
				<p class="stage__why_content_text">{m.stage_whyMe_remoteExpertiseDescription()}</p>
			</div>
			<div class="stage__why three">
				<h3 class="stage__why_headline">{m.stage_whyMe_flexibleAdaptive()}</h3>
				<p class="stage__why_content_text">{m.stage_whyMe_flexibleAdaptiveDescription()}</p>
			</div>
		</div>
	</section>
	<!--	<section class="stage__content_testimonials">-->
	<!--		<h2 class="stage__testimonials_headline">Real Feedback, Real Results</h2>-->
	<!--		<div class="stage__testimonials_wrapper">-->
	<!--			<div class="stage__testimonial one ">-->
	<!--				<p><i>Working with Henry was a great for our remote project. His ability to deliver solutions despite our location was outstanding.” — [Client Name/Company]</i></p>-->
	<!--			</div>-->
	<!--			<div class="stage__testimonial two">-->
	<!--				<p><i>"His flexibility made collaborating a breeze, whether it was a short-term project or something more extensive." — [Client Name/Company]</i></p>-->
	<!--			</div>-->
	<!--			<div class="stage__testimonial three">-->
	<!--				<p><i>"Reliable, efficient, and incredibly skilled. We saw immediate results from his contributions." — [Client Name/Company]</i></p>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</section>-->
	<section class="stage__content_cta">
		<div class="stage__cta_wrapper">
			<div class="stage__cta_text">
				<h2 class="stage__cta_headline">{m.stage_ctaHeadlineConnect()}</h2>
				<a href="mailto:evilla@iammrvilla.com" class="stage__cta_button">{m.stage_ctaBtn()}</a>
			</div>
			<div class="stage__cta_image">
				<img src="/images/laptop_working.jpg" alt="Me working on a laptop" />
			</div>
		</div>
		<div class="stage__social_icons">
			<ul>
				<li>
					<a rel="prefetch" href="https://codepen.io/iammrvilla/" class="social-icon">
						<img alt="CodePen" src="./social-icons/cp_icon.svg" class="icon" />
					</a>
				</li>
				<li>
					<a rel="prefetch" href="https://github.com/mrvilla" class="social-icon">
						<img alt="GitHub" src="./social-icons/gh_icon.svg" class="icon" />
					</a>
				</li>
				<li>
					<a rel="prefetch" href="https://www.linkedin.com/in/henryvilla/" class="social-icon">
						<img alt="LinkedIn" src="./social-icons/li_icon.svg" class="icon" />
					</a>
				</li>
				<li>
					<a rel="prefetch" href="https://www.instagram.com/iammrvilla/" class="social-icon">
						<img alt="Instagram" src="./social-icons/ig_icon.svg" class="icon" />
					</a>
				</li>
			</ul>
		</div>
	</section>
</div>

<style lang="scss">
	@import './style/stage.scss';
</style>
