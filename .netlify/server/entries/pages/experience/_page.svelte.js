import { Y as slot, X as head, S as bind_props, R as pop, V as ensure_array_like, P as push } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index4.js";
import { a as attr } from "../../../chunks/attributes.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function Company($$payload, $$props) {
  $$payload.out += `<div class="company"><h2 class="company__headline">Companies I worked for</h2> <div class="company__company-items"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  push();
  async function load({ fetch }) {
    const response = await fetch("_company.js");
    const companies2 = await response.json();
    return { companies: companies2 };
  }
  let data = $$props["data"];
  const { companies } = data;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Experience</title>`;
  });
  Company($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(companies);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let company = each_array[$$index];
        $$payload2.out += `<div class="company__company-item svelte-1gae4kh"><div class="company__item svelte-1gae4kh"><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(company.href, void 0))} class="svelte-1gae4kh"><img${attr("src", company.src)}${attr("alt", company.companyName)} class="svelte-1gae4kh"></a> <div class="company__item-place svelte-1gae4kh"><span class="company__item-location">${escape_html(company.location)}</span> <span class="company__item-date svelte-1gae4kh">${escape_html(company.beginEnd)}</span></div></div> <h4 class="company__title svelte-1gae4kh">${escape_html(company.title)}</h4> <p class="company__details">${escape_html(company.details)}</p></div>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data, load });
  pop();
}
export {
  _page as default
};
