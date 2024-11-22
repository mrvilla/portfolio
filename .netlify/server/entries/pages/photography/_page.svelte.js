import { Z as slot, Y as head, S as bind_props, V as ensure_array_like } from "../../../chunks/index.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Photo($$payload, $$props) {
  $$payload.out += `<div class="photo"><h2 class="photo__headline">Black &amp; White Photographs</h2> <div class="photo__photo-items"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  async function load({ fetch }) {
    const response = await fetch("_photo.js");
    const photos2 = await response.json();
    return { photos: photos2 };
  }
  let data = $$props["data"];
  const { photos } = data;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Photography</title>`;
  });
  Photo($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(photos);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let photo = each_array[$$index];
        $$payload2.out += `<div class="photo__photo-item svelte-10ozaus"><div class="photo__item svelte-10ozaus"><div class="photo__item-background svelte-10ozaus"><img${attr("src", photo.src)}${attr("alt", photo.alt)} class="svelte-10ozaus"></div> <div class="photo__item-place svelte-10ozaus"><span class="photo__item-location">${escape_html(photo.location)}</span> <span class="photo__item-year">${escape_html(photo.year)}</span></div></div></div>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data, load });
}
export {
  _page as default
};
