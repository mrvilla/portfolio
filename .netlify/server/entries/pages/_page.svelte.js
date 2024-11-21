import { R as pop, P as push, X as head } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import { g as getTranslationFunctions } from "../../chunks/index4.js";
function Stage($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<div class="stage"><h1 class="stage__headline">Create Your Digital Presence, Anywhere in the World.</h1> <div class="stage__content_hero"><p class="stage__hero_text">Combining <strong>Web Development,</strong>breathtaking <strong>Drone Photography,</strong>and user-centric <strong>UI Designs</strong> to bring your unique needs—to life.</p> <div class="stage__video_wrapper"><video class="stage__video" autoplay muted loop playsinline><source src="./videos/dji_fly_video_clip.mp4" type="video/mp4"></video></div></div> <div class="stage__content_about"><img class="stage__profile_photo" alt="profile_pic" src="./images/profile.jpg"> <p class="stage__about_text">Henry here, your Frontend Developer and Visual Storyteller. I help businesses and individuals transform their ideas into digital experiences. Whether you're in the heart of the city or in a remote corner of the world, together we‘ll ensure you to stay connected and visible online.</p></div> <section class="stage__content_key_offering"><div class="stage__offerings_wrapper"><div class="stage__key_offering_one"><h3 class="stage__key_offering_headline"><strong>Discover Professional Creative Services to Elevate Your Vision</strong></h3> <div class="stage__offering"><h3 class="stage__offering_headline">User-Centric UI Designs</h3> <p class="stage__offering_content_text">User-friendly interfaces crafted with a decade of design expertise.</p></div></div> <div class="stage__offering two"><h3 class="stage__offering_headline">Web Development</h3> <p class="stage__offering_content_text">Custom, responsive websites designed to engage and convert.</p></div> <div class="stage__offering three"><h3 class="stage__offering_headline">Drone Photography &amp; Videography</h3> <p class="stage__offering_content_text">Captivating visuals that make your brand unforgettable.</p></div></div></section> <section class="stage__content_why_me"><h2 class="stage__why_me_headline">Trust Your Partner for Flexible, Remote-Ready Solutions</h2> <div class="stage__why_me_wrapper"><div class="stage__why one"><h3 class="stage__why_headline">Proven Experience</h3> <p class="stage__why_content_text">Trusted by brands and individuals for delivering quality, on-time results.</p></div> <div class="stage__why two"><h3 class="stage__why_headline">Remote Expertise</h3> <p class="stage__why_content_text">Specializing in assisting clients in hard-to-reach locations or without access to in-person tech solutions.</p></div> <div class="stage__why three"><h3 class="stage__why_headline">Flexible &amp; Adaptive</h3> <p class="stage__why_content_text">Offering both part-time project commitments and/or full-scale support to fit your needs.</p></div></div></section>        <section class="stage__content_cta"><div class="stage__cta_wrapper"><div class="stage__cta_text"><h2 class="stage__cta_headline">Ready to elevate your digital presence or see how my unique skills can benefit you?</h2> <a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`mailto:evilla@iammrvilla.com`, void 0))} class="stage__cta_button">Let's Connect</a></div> <div class="stage__cta_image"><img src="./images/laptop_working.jpg" alt="Me working on a laptop"></div></div> <div class="stage__social_icons"><ul><li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://codepen.io/iammrvilla/`, void 0))} class="social-icon"><img alt="CodePen" src="./social-icons/cp_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://github.com/mrvilla`, void 0))} class="social-icon"><img alt="GitHub" src="./social-icons/gh_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.linkedin.com/in/henryvilla/`, void 0))} class="social-icon"><img alt="LinkedIn" src="./social-icons/li_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.instagram.com/iammrvilla/`, void 0))} class="social-icon"><img alt="Instagram" src="./social-icons/ig_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://youtube.com/@iammrvilla?si=lAbW5MgHVpmZW5uh`, void 0))} class="social-icon"><img alt="YouTube" src="./social-icons/yt_icon.svg" class="icon"></a></li> <li><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`mailto:iammrvilla@gmail.com`, void 0))} class="social-icon"><img alt="Mail" src="./social-icons/mail_icon.svg" class="icon"></a></li></ul></div></section></div>`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>iammrvilla</title>`;
    $$payload2.out += `<link rel="prefetch" href="./videos/dji_fly_video_clip.mp4" as="video" type="video/mp4"> <link rel="prefetch" href="./images/profile.jpg" as="image"> <link rel="prefetch" href="./images/laptop_working.jpg" as="image">`;
  });
  $$payload.out += `<div class="content svelte-1vl5yk6">`;
  Stage($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};