import { X as head } from "../../../chunks/index.js";
function Article($$payload) {
  $$payload.out += `<article class="article"><h2 class="article__headline">A bit of history</h2> <div class="article__content"><p>My family named me Enrique, but people call me Henry.</p> <p>I'm international; parents from Colombian, but I was born in Caracas, been fortunate to live in various places, like NY, BPT, Caracas, Madrid, Berlin, and Stockholm.</p> <p>Studied architecture, which I left to follow my artistic passion, then became an independent artist and illustrator for several years.</p> <p>10 years ago, I started as a UI Designer, which later led me to be a Front-end Developer. Throughout this career, I have worked on multiple projects and products with great people in different teams within various industries.</p> <p>Beyond this, I'm passionate about staying creative and continue to explore my artistic skills. In my free time, I enjoy taking Black &amp; White Photography and capture the world from above with my drone creating some photography and short videos.</p> <p>My curiosity to know how something works helps me discover and learn more which broadens my perspectives.</p> <p>Today I continue to collaborate with teams to build amazing things with them and continue to have fun with my own hobbies, while listening to some good music, drinking hell of a lot coffee and enjoy eating pizza.</p></div></article>`;
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About</title>`;
  });
  Article($$payload);
}
export {
  _page as default
};
