import { P as push, S as bind_props, R as pop, T as store_get, V as ensure_array_like, W as unsubscribe_stores, X as fallback, Y as head, Z as slot } from "../../chunks/index.js";
import { g as getTranslationFunctions, s as setParaglideContext } from "../../chunks/index4.js";
import { a as attr } from "../../chunks/attributes.js";
import { n as normaliseBase, p as parseRoute, s as serializeRoute, g as getHrefBetween, i as i18n } from "../../chunks/i18n.js";
import { p as page } from "../../chunks/stores.js";
import { b as base } from "../../chunks/equality.js";
import { g as get } from "../../chunks/index3.js";
import "@inlang/paraglide-js/internal/adapter-utils";
function Nav($$payload, $$props) {
  push();
  let segment = $$props["segment"];
  let menuOpen = false;
  const paraglide_sveltekit_translate_attribute_pass_translationFunctions = getTranslationFunctions();
  const [
    paraglide_sveltekit_translate_attribute_pass_translateAttribute,
    paraglide_sveltekit_translate_attribute_pass_handle_attributes
  ] = paraglide_sveltekit_translate_attribute_pass_translationFunctions;
  $$payload.out += `<nav><a${attr("aria-current", segment === void 0 ? "page" : void 0)}${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`..`, void 0))}>iammrvilla</a> <input id="menu-toggle" type="checkbox"${attr("checked", menuOpen, true)}> <label class="menu-button-container" for="menu-toggle"><svg viewBox="0 0 64 48"><path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path><path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path><path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path></svg></label> <div class="nav-ul"><ul><li><a${attr("aria-current", segment === "about" ? "page" : void 0)}${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`about`, void 0))}>About</a></li> <li><a${attr("aria-current", segment === "experience" ? "page" : void 0)}${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`experience`, void 0))}>Experience</a></li> <li><a rel="prefetch"${attr("aria-current", segment === "portfolio" ? "page" : void 0)}${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`portfolio`, void 0))}>Portfolio</a></li> <li><a rel="prefetch"${attr("aria-current", segment === "photography" ? "page" : void 0)}${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`photography`, void 0))}>Photography</a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://docs.google.com/document/d/1gPTRULnIaw_Hbmz1fvxFgRsUXxs3eiLBxNI8V10WYBA/edit?usp=sharing`, void 0))}>CV</a></li></ul> <ul><li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://codepen.io/iammrvilla/`, void 0))} class="social-icon"><img alt="CodePen" src="../social-icons/cp_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://github.com/mrvilla`, void 0))} class="social-icon"><img alt="GitHub" src="../social-icons/gh_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.linkedin.com/in/henryvilla/`, void 0))} class="social-icon"><img alt="LinkedIn" src="../social-icons/li_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://www.instagram.com/iammrvilla/`, void 0))} class="social-icon"><img alt="Instagram" src="../social-icons/ig_icon.svg" class="icon"></a></li> <li><a rel="prefetch"${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`https://youtube.com/@iammrvilla?si=lAbW5MgHVpmZW5uh`, void 0))}><img alt="YouTube" src="../social-icons/yt_icon.svg" class="icon"></a></li> <li><a${attr("href", paraglide_sveltekit_translate_attribute_pass_translateAttribute(`mailto:iammrvilla@gmail.com`, void 0))}><img alt="Mail" src="../social-icons/mail_icon.svg" class="icon"></a></li></ul></div></nav>`;
  bind_props($$props, { segment });
  pop();
}
function isExternal(url, currentUrl, base2) {
  const absoluteBase = new URL(base2 ?? "/", currentUrl).pathname;
  return url.origin !== currentUrl.origin || !url.pathname.startsWith(absoluteBase);
}
function AlternateLinks($$payload, $$props) {
  push();
  var $$store_subs;
  let localisedPath, canonicalPath, alternateLinks;
  const absoluteBase = normaliseBase(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let availableLanguageTags = $$props["availableLanguageTags"];
  let strategy = $$props["strategy"];
  let currentLang = $$props["currentLang"];
  const getAlternateLinks = (canonicalPath2, strategy2) => {
    const links = [];
    for (const lang of availableLanguageTags) {
      const localisedPath2 = strategy2.getLocalisedPath(canonicalPath2, lang);
      const fullPath = serializeRoute(localisedPath2, absoluteBase, void 0);
      const link = new URL(fullPath, new URL(store_get($$store_subs ??= {}, "$page", page).url)).href;
      links.push(link);
    }
    return links;
  };
  localisedPath = parseRoute(store_get($$store_subs ??= {}, "$page", page).url.pathname, absoluteBase)[0];
  canonicalPath = strategy.getCanonicalPath(localisedPath, currentLang);
  alternateLinks = getAlternateLinks(canonicalPath, strategy);
  if (availableLanguageTags.length >= 1) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(alternateLinks);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let href = each_array[i];
      $$payload.out += `<link rel="alternate"${attr("hreflang", availableLanguageTags[i])}${attr("href", href)}>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { availableLanguageTags, strategy, currentLang });
  pop();
}
function ParaglideJS($$payload, $$props) {
  push();
  var $$store_subs;
  let lang;
  const absoluteBase = normaliseBase(base, new URL(store_get($$store_subs ??= {}, "$page", page).url)) || "/";
  let languageTag = fallback($$props["languageTag"], () => void 0, true);
  let i18n2 = $$props["i18n"];
  function translateHref(href, hreflang) {
    try {
      const localisedCurrentUrl = new URL(get(page).url);
      const [localisedCurrentPath, suffix] = parseRoute(localisedCurrentUrl.pathname, absoluteBase);
      const canonicalCurrentPath = i18n2.strategy.getCanonicalPath(localisedCurrentPath, lang);
      const canonicalCurrentUrl = new URL(localisedCurrentUrl);
      canonicalCurrentUrl.pathname = serializeRoute(canonicalCurrentPath, absoluteBase, suffix);
      const original_to = new URL(href, new URL(canonicalCurrentUrl));
      if (isExternal(original_to, localisedCurrentUrl, absoluteBase) || i18n2.config.exclude(original_to.pathname)) return href;
      const targetLanguage = hreflang ?? lang;
      const [canonicalPath, dataSuffix] = parseRoute(original_to.pathname, absoluteBase);
      const translatedPath = i18n2.strategy.getLocalisedPath(canonicalPath, targetLanguage);
      const to = new URL(original_to);
      to.pathname = serializeRoute(translatedPath, absoluteBase, dataSuffix);
      return getHrefBetween(localisedCurrentUrl, to);
    } catch (error) {
      return href;
    }
  }
  setParaglideContext({ translateHref });
  lang = languageTag ?? i18n2.getLanguageFromUrl(store_get($$store_subs ??= {}, "$page", page).url);
  head($$payload, ($$payload2) => {
    if (i18n2.config.seo.noAlternateLinks !== true && !i18n2.config.exclude(store_get($$store_subs ??= {}, "$page", page).url.pathname)) {
      $$payload2.out += "<!--[-->";
      AlternateLinks($$payload2, {
        availableLanguageTags: i18n2.config.runtime.availableLanguageTags,
        strategy: i18n2.strategy,
        currentLang: lang
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  });
  $$payload.out += `<!---->`;
  {
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { languageTag, i18n: i18n2 });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  ParaglideJS($$payload, {
    i18n,
    children: ($$payload2) => {
      Nav($$payload2, {});
      $$payload2.out += `<!----> <main class="svelte-1l4xjjx">`;
      children($$payload2);
      $$payload2.out += `<!----></main>`;
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  _layout as default
};
