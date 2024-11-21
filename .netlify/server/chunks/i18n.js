import { p as page } from "./stores.js";
import { negotiateLanguagePreferences, bestMatch, resolveRoute } from "@inlang/paraglide-js/internal/adapter-utils";
import { b as base } from "./equality.js";
import { L as LANG_COOKIE_NAME } from "./constants.js";
import { g as get } from "./index3.js";
let _onSetLanguageTag;
const sourceLanguageTag = "en";
const availableLanguageTags = (
  /** @type {const} */
  ["en", "es", "de"]
);
let languageTag = () => sourceLanguageTag;
const setLanguageTag = (tag) => {
  if (typeof tag === "function") {
    languageTag = enforceLanguageTag(tag);
  } else {
    languageTag = enforceLanguageTag(() => tag);
  }
  if (_onSetLanguageTag !== void 0) {
    _onSetLanguageTag(languageTag());
  }
};
function enforceLanguageTag(unsafeLanguageTag) {
  return () => {
    const tag = unsafeLanguageTag();
    if (!isAvailableLanguageTag(tag)) {
      throw new Error(`languageTag() didn't return a valid language tag. Check your setLanguageTag call`);
    }
    return tag;
  };
}
const onSetLanguageTag = (fn) => {
  _onSetLanguageTag = fn;
};
function isAvailableLanguageTag(thing) {
  return availableLanguageTags.includes(thing);
}
const runtime = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  availableLanguageTags,
  isAvailableLanguageTag,
  get languageTag() {
    return languageTag;
  },
  onSetLanguageTag,
  setLanguageTag,
  sourceLanguageTag
}, Symbol.toStringTag, { value: "Module" }));
function normaliseBase$1(baseValue, currentUrl) {
  if (baseValue === "")
    return "";
  const absoluteBase = new URL(baseValue, currentUrl).pathname;
  return absoluteBase.endsWith("/") ? absoluteBase.slice(0, -1) : absoluteBase;
}
function parseRoute(fullPath, normalizedBase) {
  const decodedPath = safeDecode(fullPath);
  const pathWithoutBase = removeBase(decodedPath, normalizedBase);
  const [path, dataSuffix] = removeDataSuffix(pathWithoutBase);
  return [path, dataSuffix];
}
const serializeRoute = (path, normalizedBase, dataSuffix) => [normalizedBase, path, dataSuffix ?? ""].filter((s) => s !== "/").join("") || "/";
function removeBase(absolutePath, normalizedBase) {
  const withoutBase = absolutePath.replace(normalizedBase, "");
  return withoutBase.startsWith("/") ? withoutBase : `/${withoutBase}`;
}
function removeDataSuffix(absolutePath) {
  const KNOWN_SUFFIXES = ["/.html__data.json", "/__data.json"];
  const dataSuffix = KNOWN_SUFFIXES.find((suffix) => absolutePath.endsWith(suffix));
  if (dataSuffix) {
    return [absolutePath.slice(0, -dataSuffix.length) || "/", dataSuffix];
  } else {
    return [absolutePath, void 0];
  }
}
function safeDecode(maybeEncoded) {
  try {
    return decodeURI(maybeEncoded);
  } catch {
    return maybeEncoded;
  }
}
function getHrefBetween(from, to) {
  if (from.protocol !== to.protocol) {
    return to.href;
  }
  if (to.password || to.username) {
    const credentials = [to.username, to.password].filter(Boolean).join(":");
    return "//" + credentials + "@" + to.host + to.pathname + to.search + to.hash;
  }
  if (from.host !== to.host) {
    return "//" + to.host + to.pathname + to.search + to.hash;
  }
  return to.pathname + to.search + to.hash;
}
class ALSContext {
  ctx;
  constructor(ALS) {
    this.ctx = new ALS();
  }
  get() {
    return this.ctx.getStore();
  }
  async callAsync(val, cb) {
    return await this.ctx.run(val, cb);
  }
}
class GlobalContext {
  value = void 0;
  get() {
    return this.value;
  }
  async callAsync(val, cb) {
    this.value = val;
    return await cb();
  }
}
const createHandle = (strategy, i18n2, options) => {
  let languageContext = void 0;
  function initializeLanguageContext(AsyncLocalStorage) {
    languageContext = AsyncLocalStorage ? new ALSContext(AsyncLocalStorage) : new GlobalContext();
    i18n2.runtime.setLanguageTag(() => {
      if (!languageContext)
        throw new Error("languageContext not initialized - This should never happen, please file an issue");
      const val = languageContext.get();
      return i18n2.runtime.isAvailableLanguageTag(val) ? val : i18n2.defaultLanguageTag;
    });
  }
  const langPlaceholder = options.langPlaceholder ?? "%paraglide.lang%";
  const dirPlaceholder = options.textDirectionPlaceholder ?? "%paraglide.textDirection%";
  return async ({ resolve, event }) => {
    if (!languageContext) {
      const als = options.disableAsyncLocalStorage ? void 0 : (await import("node:async_hooks")).AsyncLocalStorage;
      initializeLanguageContext(als);
    }
    const [localisedPath, suffix] = parseRoute(event.url.pathname, base);
    const langFromUrl = strategy.getLanguageFromLocalisedPath(localisedPath);
    const langCookie = event.cookies.get(LANG_COOKIE_NAME);
    const cookieLang = i18n2.runtime.isAvailableLanguageTag(langCookie) ? langCookie : void 0;
    const negotiatedLanguagePreferences = negotiateLanguagePreferences(event.request.headers.get("accept-language"), i18n2.runtime.availableLanguageTags);
    const negotiatedLanguage = negotiatedLanguagePreferences[0];
    const lang = langFromUrl ?? cookieLang ?? negotiatedLanguage ?? i18n2.defaultLanguageTag;
    if (lang !== langFromUrl && !i18n2.exclude(localisedPath)) {
      const localisedPathname = strategy.getLocalisedPath(localisedPath, lang);
      const fullPath = serializeRoute(localisedPathname, base, suffix);
      const to = new URL(event.url);
      to.pathname = fullPath;
      const href = getHrefBetween(event.url, to);
      return new Response(void 0, {
        status: 302,
        headers: {
          Location: href
        }
      });
    }
    if (lang !== cookieLang && !i18n2.exclude(event.url.pathname)) {
      event.cookies.set(LANG_COOKIE_NAME, lang, {
        maxAge: 31557600,
        sameSite: "lax",
        path: base || "/",
        httpOnly: false
      });
    }
    const textDirection = i18n2.textDirection[lang] ?? "ltr";
    const paraglideLocals = {
      lang,
      textDirection
    };
    event.locals.paraglide = paraglideLocals;
    if (!languageContext)
      throw new Error("languageContext not initialized - This should never happen, please file an issue");
    return languageContext.callAsync(paraglideLocals.lang, async () => {
      return await resolve(event, {
        transformPageChunk({ html, done }) {
          if (!done)
            return html;
          return html.replace(langPlaceholder, lang).replace(dirPlaceholder, textDirection);
        }
      });
    });
  };
};
const createReroute = (strategy) => {
  return ({ url }) => {
    try {
      const [localisedPath, dataSuffix] = parseRoute(url.pathname, base);
      const lang = strategy.getLanguageFromLocalisedPath(localisedPath);
      if (!lang)
        return url.pathname;
      const canonicalPath = strategy.getCanonicalPath(localisedPath, lang);
      return serializeRoute(canonicalPath, base, dataSuffix);
    } catch (e) {
      return url.pathname;
    }
  };
};
function normalize(path) {
  return `/${path.split("/").filter(Boolean).join("/")}`;
}
function createExclude(excludeConfig) {
  const checks = excludeConfig.map((exclude) => typeof exclude === "string" ? (path) => path === exclude : (path) => exclude.test(path));
  return (path) => checks.some((check) => check(normalize(path)));
}
const RTL = "rtl";
const LTR = "ltr";
function guessTextDir(lang) {
  try {
    const locale = new Intl.Locale(lang);
    if ("textInfo" in locale) {
      return locale.textInfo.direction === RTL ? RTL : LTR;
    }
    return locale.getTextInfo().direction === RTL ? RTL : LTR;
  } catch (e) {
    return LTR;
  }
}
function guessTextDirMap(langs) {
  const entries = langs.map((lang) => [lang, guessTextDir(lang)]);
  return Object.fromEntries(entries);
}
function PrefixStrategy(availableLanguageTags2, defaultLanguageTag, translations, matchers, prefixDefaultLanguage) {
  function getLanguageFromLocalisedPath(localisedPath) {
    const segments = localisedPath.split("/");
    const maybeLang = segments[1];
    if (availableLanguageTags2.includes(maybeLang) && (prefixDefaultLanguage === "always" || maybeLang !== defaultLanguageTag)) {
      return maybeLang;
    }
    if (prefixDefaultLanguage === "never")
      return defaultLanguageTag;
    else
      return void 0;
  }
  function getLocalisedPath(canonicalPath, languageTag2) {
    const trailingSlash = canonicalPath.endsWith("/") && canonicalPath !== "/";
    canonicalPath = trailingSlash ? canonicalPath.slice(0, -1) : canonicalPath;
    let translatedPath = turnIntoTranslatedPath(canonicalPath, languageTag2, translations, matchers);
    if (trailingSlash) {
      translatedPath += "/";
    }
    if (prefixDefaultLanguage === "always" || languageTag2 !== defaultLanguageTag) {
      translatedPath = `/${languageTag2}${translatedPath}`;
    }
    return translatedPath;
  }
  function getCanonicalPath(localisedPath, languageTag2) {
    const trailingSlahsBefore = localisedPath.endsWith("/") && localisedPath !== "/";
    if (prefixDefaultLanguage === "always" || languageTag2 !== defaultLanguageTag) {
      localisedPath = localisedPath.replace(`/${languageTag2}`, "") || "/";
    }
    const trailingSlash = trailingSlahsBefore;
    localisedPath = trailingSlash ? localisedPath.slice(0, -1) : localisedPath;
    let canonicalPath = turnIntoCanonicalPath(localisedPath, languageTag2, translations, matchers);
    if (trailingSlash) {
      canonicalPath += "/";
    }
    return canonicalPath;
  }
  return {
    getLanguageFromLocalisedPath,
    getLocalisedPath,
    getCanonicalPath
  };
}
function turnIntoCanonicalPath(translatedPath, lang, translations, matchers) {
  for (const [canonicalPathDefinition, translationsForPath] of Object.entries(translations)) {
    if (!(lang in translationsForPath))
      continue;
    const translatedPathDefinition = translationsForPath[lang];
    if (!translatedPathDefinition)
      continue;
    const match = bestMatch(translatedPath, [translatedPathDefinition], matchers);
    if (!match)
      continue;
    return resolveRoute(canonicalPathDefinition, match.params);
  }
  return translatedPath;
}
function turnIntoTranslatedPath(canonicalPath, lang, translations, matchers) {
  const match = bestMatch(canonicalPath, Object.keys(translations), matchers);
  if (!match)
    return canonicalPath;
  const translationsForPath = translations[match.id];
  if (!translationsForPath)
    return canonicalPath;
  const translatedPath = translationsForPath[lang];
  if (!translatedPath)
    return canonicalPath;
  return resolveRoute(translatedPath, match.params);
}
function createI18n(runtime2, options) {
  const translations = {};
  const excludeConfig = [];
  const defaultLanguageTag = runtime2.sourceLanguageTag;
  const config = {
    defaultLanguageTag,
    runtime: runtime2,
    translations,
    matchers: {},
    exclude: createExclude(excludeConfig),
    prefixDefaultLanguage: "never",
    textDirection: guessTextDirMap(runtime2.availableLanguageTags),
    seo: {
      noAlternateLinks: false
    }
  };
  const strategy = PrefixStrategy(runtime2.availableLanguageTags, defaultLanguageTag, config.translations, config.matchers, config.prefixDefaultLanguage);
  Object.freeze(translations);
  Object.freeze(config);
  return {
    /**
     * The configuration that was used to create this i18n instance.
     */
    config,
    /**
     * The routing strategy that's being used.
     *
     * @private Not part of the public API, may change in non-major versions
     */
    strategy,
    /**
     * Returns a `reroute` hook that applies the path translations to the paths.
     * Register it in your `src/hooks.js` file to enable path translations.
     *
     * @example
     * ```ts
     * // src/hooks.js
     * import { i18n } from "../lib/i18n.js"
     * export const reroute = i18n.reroute()
     * ```
     */
    reroute: () => createReroute(strategy),
    /**
     * Returns a `handle` hook that set's the correct `lang` attribute
     * on the `html` element
     *
     * SERVER ONLY
     */
    handle: (options2 = {}) => {
      return createHandle(strategy, config, options2);
    },
    /**
     * Takes in a URL and returns the language that should be used for it.
     *
     * @param url
     * @returns
     */
    getLanguageFromUrl(url) {
      const normalizedBase = normaliseBase(base);
      const [localizedPath] = parseRoute(url.pathname, normalizedBase);
      if (config.exclude(localizedPath))
        return config.defaultLanguageTag;
      return strategy.getLanguageFromLocalisedPath(localizedPath) || config.defaultLanguageTag;
    },
    /**
     * Takes in a route and returns a translated version of it.
     * This is useful for use in `goto` statements and `redirect` calls.
     *
     * The oposite of `i18n.route()`.
     *
     * @param canonicalPath The path to translate (eg _/base/about_)
     * @param lang The language to translate to - Defaults to the current language
     * @returns The translated path (eg _/base/de/ueber-uns_)
     *
     * @example
     * ```ts
     * redirect(i18n.resolveRoute("/base/about", "de"))
     * ```
     */
    resolveRoute(path, lang = void 0) {
      if (config.exclude(path))
        return path;
      const normalizedBase = normaliseBase(base);
      const [canonicalPath, dataSuffix] = parseRoute(path, normalizedBase);
      lang = lang ?? runtime2.languageTag();
      if (!path.startsWith(normalizedBase))
        return path;
      const localisedPath = strategy.getLocalisedPath(canonicalPath, lang);
      return serializeRoute(localisedPath, normalizedBase, dataSuffix);
    },
    /**
     * Takes in a path in one language and returns it's canonical version.
     * The oposite of `i18n.resolveRoute()`.
     * This is useful for use in:
     * - Language Switchers
     * - Navigation
     *
     * @param targetedPathSource The path to translate (eg _/base/de/ueber-uns_)
     * @returns The canonical version path (eg _/base/about_)
     *
     * @example
     * ```ts
     * <a
     *   href={i18n.route($page.url.pathname)}
     *   hreflang="en"
     * >
     * ```
     */
    route(translatedPath) {
      const normalizedBase = normaliseBase(base);
      const [localisedPath, dataSuffix] = parseRoute(translatedPath, normalizedBase);
      const lang = strategy.getLanguageFromLocalisedPath(localisedPath);
      const languageTag2 = lang || config.defaultLanguageTag;
      const canonicalPath = strategy.getCanonicalPath(localisedPath, languageTag2);
      return serializeRoute(canonicalPath, normalizedBase, dataSuffix);
    }
  };
}
function normaliseBase(base2) {
  if (base2 === "")
    return "";
  if (base2.startsWith("/"))
    return base2;
  return normaliseBase$1(base2, new URL(get(page).url));
}
const i18n = createI18n(runtime);
export {
  getHrefBetween as g,
  i18n as i,
  languageTag as l,
  normaliseBase$1 as n,
  parseRoute as p,
  serializeRoute as s
};
