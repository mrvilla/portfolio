import { a as attr } from "../../../chunks/attributes.js";
import { P as push, R as pop } from "../../../chunks/index.js";
import { g as getTranslationFunctions } from "../../../chunks/index4.js";
function _page($$payload, $$props) {
  push();
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`/demo/paraglide`, void 0))}>paraglide</a>`;
  pop();
}
export {
  _page as default
};
