export default function ({ app }) {
  const locale = navigator.language.includes("ja") ? "ja" : "en";
  app.i18n.setLocale(locale);
}
