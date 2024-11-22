import { Z as slot, P as push, Y as head, S as bind_props, R as pop, V as ensure_array_like } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index4.js";
import { e as escape_html } from "../../../chunks/escaping.js";
import { a as attr } from "../../../chunks/attributes.js";
function ProjectCase($$payload, $$props) {
  $$payload.out += `<div class="project-case"><h2 class="project-case__headline">Projects I worked on</h2> <div class="project-case__content"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { portfolios } = data;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Portfolio</title>`;
  });
  ProjectCase($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(portfolios);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let portfolio = each_array[$$index];
        $$payload2.out += `<div class="project-case__item svelte-l2y1zf"><div class="project-case__item-details"><h4 class="svelte-l2y1zf">${escape_html(portfolio.title)}</h4> <span class="svelte-l2y1zf">${escape_html(portfolio.subtitle)}</span> <p class="svelte-l2y1zf">${escape_html(portfolio.shortDesc)}</p></div> <div class="project-case__item-links svelte-l2y1zf"><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`portfolio/${portfolio.slug}`, void 0))} class="svelte-l2y1zf">${escape_html(portfolio.link)}</a> `;
        if (portfolio.projectLink) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<a target="_blank"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(portfolio.projectHref, void 0))} class="svelte-l2y1zf">${escape_html(portfolio.projectLink)}</a>`;
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]--></div></div>`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
