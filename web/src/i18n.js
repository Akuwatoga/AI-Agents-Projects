import en from "./locales/en.json";
import zhCN from "./locales/zh-CN.json";

export const supportedLocales = ["en", "zh-CN"];

const dictionaries = { en, "zh-CN": zhCN };

function detectLocale() {
  const saved = window.localStorage.getItem("atlas-locale");
  if (supportedLocales.includes(saved)) return saved;
  const configured = import.meta.env.VITE_DEFAULT_LOCALE;
  if (supportedLocales.includes(configured)) return configured;
  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

export const currentLocale = detectLocale();

function getPath(object, path) {
  return path.split(".").reduce((value, key) => value?.[key], object);
}

export function t(key, variables = {}) {
  const value = getPath(dictionaries[currentLocale], key) ?? getPath(en, key) ?? key;
  return Object.entries(variables).reduce(
    (text, [name, replacement]) => text.replaceAll(`{${name}}`, String(replacement)),
    String(value),
  );
}

export function localeData(path, fallback) {
  return getPath(dictionaries[currentLocale], path) ?? fallback;
}

export function setLocale(locale) {
  if (!supportedLocales.includes(locale) || locale === currentLocale) return;
  window.localStorage.setItem("atlas-locale", locale);
  window.location.reload();
}
