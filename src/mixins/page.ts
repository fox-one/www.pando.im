import Vue, { VNode } from "vue";
import { Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";

export interface Page extends Vue {
  htmlTitle?: string;
  setLang: () => void;
  setPageConfig: () => void;
}

@Component({
  head() {
    const vm = this as Page;

    return {
      title: vm.htmlTitle || vm.title || "Pando Official Website",
      meta: [
        {
          hid: "theme-color",
          name: "theme-color",
          content: vm.$store.state.app.dark ? "#000000" : "#FFFFFF",
        },
      ],
    };
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm: any) => {
      vm.setLang();
      vm.setPageConfig();
    });
  },
})
export default class PageView extends Vue {
  @Mutation("app/setPageBgColor") setPageBgColor;
  @Mutation("app/setDark") setDark;

  get appbar() {
    return {};
  }

  get bottomNav() {
    return "";
  }

  get pageBgColor() {
    return "white";
  }

  get isDark() {
    return false;
  }

  setLang() {
    const locale = this.$utils.helper.getLocale();
    this.$i18n.locale = locale;
  }

  setPageConfig() {
    if (this.pageBgColor) {
      this.setPageBgColor(this.pageBgColor);
    }

    setTimeout(() => {
      (this as any).$vuetify.theme.dark = this.isDark;
      this.setDark(this.isDark);
    }, 100);

    // this.setAppbar({ title: this.title, ...this.appbar });

    // setTimeout(() => {
    //   this.$utils.helper.loadMixinTheme();
    // }, 50);
  }
}
