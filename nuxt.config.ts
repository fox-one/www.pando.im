import { NuxtConfig } from "@nuxt/types";
import i18n from "./src/i18n";
import { isProduct, GA } from "./src/constants";

const config: NuxtConfig = {
  ssr: false,
  router: {
    mode: "history",
  },
  target: "static",
  srcDir: "./src",
  head: {
    title: "Pando Official Website",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content:
          "A decentralized financial network built with the MTG that includes a series of open financial protocols.",
      },
      {
        hid: "color-scheme",
        name: "color-scheme",
        content: "light only",
      },
    ],
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
  },
  loading: { color: "#fff" },
  css: ["~/styles/index.scss"],
  plugins: [
    "~/plugins/components.ts",
    "~/plugins/property.ts",
    "~/plugins/libs.ts",
    "~/plugins/persistedstate.ts",
    "~/plugins/ga.ts",
  ],
  buildModules: [
    "@nuxtjs/eslint-module",
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
    "@nuxtjs/vuetify",
  ],
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "@nuxtjs/dotenv",
    "@nuxtjs/sitemap",
  ],
  i18n: {
    baseUrl: "https://pando.im",
    locales: [
      { code: "en", iso: "en-US" },
      { code: "es", iso: "es-ES" },
      { code: "fr", iso: "fr-FR" },
      { code: "ja", iso: "ja-JP" },
      { code: "de", iso: "de-DE" },
      { code: "ko", iso: "ko-KR" },
      { code: "zh", iso: "zh-TW" },
    ],
    defaultLocale: "en",
    vueI18n: i18n,
  },
  sitemap: {
    hostname: "https://pando.im",
    i18n: {
      locales: ["en", "es", "fr", "ja", "de", "ko", "zh"],
    },
  },
  pwa: {
    manifest: {
      name: "Pando",
      short_name: "Pando",
      lang: "en",
      theme_color: "#FFF",
    },
  },
  vuetify: {
    customVariables: ["~/styles/variables.scss"],
    defaultAssets: false,
    treeShake: true,
    optionsPath: "./vuetify.options.ts",
  },
  build: {
    transpile: ["vuetify"],
  },
  env: {
    TOKEN: process.env.TOKEN || "",
    APP_ENV: process.env.APP_ENV || "",
  },
};

export default config;
