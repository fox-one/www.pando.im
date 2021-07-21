import zh from "vuetify/es5/locale/zh-Hans";
import en from "vuetify/es5/locale/en";
import ja from "vuetify/es5/locale/ja";
import enUikit from "@foxone/uikit/src/locales/en";
import jaUikit from "@foxone/uikit/src/locales/ja";
import zhUikit from "@foxone/uikit/src/locales/zh-Hans";

export default function ({ store }) {
  // const isDark = store.state.app?.dark || false;

  return {
    icons: {},
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: "#000000",
          accent: "#ee4596",
          // greyscale
          greyscale_1: "#000000",
          greyscale_2: "#333333",
          greyscale_3: "#666666",
          greyscale_4: "#cccccc",
          greyscale_5: "#ebebeb",
          greyscale_6: "#f5f5f5",
          // error & warning
          error: "#f44c4c",
          success: "#00c7af",
          warning: "#FC8A22",
        },
        dark: {
          primary: "#ffffff",
          accent: "#f16aab",
          // greyscale
          greyscale_1: "#ffffff",
          greyscale_2: "#d2d3d3",
          greyscale_3: "#9b9c9d",
          greyscale_4: "#636466",
          greyscale_5: "#36383b",
          greyscale_6: "#191919",
          // error & warning
          error: "#f67070",
          success: "#33d2bf",
          warning: "#FC8A22",
        },
      },
    },
    lang: {
      locales: {
        zh: {
          ...zh,
          ...zhUikit,
        },
        en: {
          ...en,
          ...enUikit,
        },
        ja: {
          ...ja,
          ...jaUikit,
        },
      },
    },
  };
}
