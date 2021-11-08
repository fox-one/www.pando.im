export default function ({ app }) {
  const lang = navigator.language.toLowerCase();
  const supportedLocales = ["en", "ja", "zh", "ko", "de", "fr", "es"];
  for (let ix = 0; ix < supportedLocales.length; ix++) {
    const locale = supportedLocales[ix];
    if (lang.includes(locale)) {
      app.i18n.setLocale(locale);
      return;
    }
  }
  app.i18n.setLocale("en");
}
