export function errorHandler(
  vue: Vue,
  error: { message: string; code: string | number },
) {
  const $toast = vue.$utils.helper.toast;
  const fallback = "未知错误";
  const message = `${error.code || ""} ${error.message || fallback}`;
  $toast(vue, { message, color: "error" });
}

export function toast(vue: Vue, data: { message: string; color?: string }) {
  vue.$store.commit("app/toast", data);
}

// device detection
export function isMobile() {
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
      navigator.userAgent,
    )
  ) {
    return true;
  }
  return false;
}

export function getLocale() {
  const lang = navigator.language.toLowerCase();
  const supportedLocales = ["en", "ja", "zh", "ko", "de", "fr", "es"];
  for (let ix = 0; ix < supportedLocales.length; ix++) {
    const locale = supportedLocales[ix];
    if (lang.includes(locale)) {
      return locale;
    }
  }
  return "en";
}
