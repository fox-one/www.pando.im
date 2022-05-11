import UIKit from "@foxone/uikit";
import { mergeDeep } from "vuetify/lib/util/helpers";
import icons from "@/utils/icons";

export default function () {
  const options = {
    icons: {
      values: icons,
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#000000",
          accent: "#ee4596",
          fennec: "#FA7A4F",
          darkmist: "#2D2D38",
          // error & warning
          error: "#f44c4c",
          success: "#00c7af",
          warning: "#FC8A22",
        },
        dark: {
          primary: "#ffffff",
          accent: "#f16aab",
          fennec: "#FA7A4F",
          darkmist: "#2D2D38",
          // error & warning
          error: "#f67070",
          success: "#33d2bf",
          warning: "#FC8A22",
        },
      },
    },
  };

  return mergeDeep(UIKit.preset, options);
}
