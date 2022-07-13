import Vue, { VNode } from "vue";
import { Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";

export interface Page extends Vue {
  htmlTitle?: string;
  readonly title?: string | VNode | any;
  shortDesc?: string;
  desc?: string;

  setPageConfig: () => void;
}

@Component({
  head() {
    const vm = this as Page;
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: `${vm.htmlTitle || vm.title} - ${vm.shortDesc}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: vm.desc,
        },
        {
          hid: "og:title",
          name: "og:title",
          title: vm.htmlTitle || vm.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: vm.desc,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          title: vm.htmlTitle || vm.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: vm.desc,
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: vm.$store.state.app.dark ? "#000000" : "#FFFFFF",
        },
        ...i18nHead.meta,
      ],
      link: [...i18nHead.link],
    } as any;
  },
  beforeRouteEnter(_to, _from, next) {
    next((vm: any) => {
      // vm.setLang();
      vm.setPageConfig();
    });
  },
})
export default class PageView extends Vue {
  @Mutation("app/setPageBgColor") setPageBgColor;
  @Mutation("app/setDark") setDark;

  get desc() {
    return "";
  }

  get shortDesc() {
    return "";
  }

  get jsonLd() {
    return {};
  }

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

  setPageConfig() {
    if (this.pageBgColor) {
      this.setPageBgColor(this.pageBgColor);
    }

    setTimeout(() => {
      (this as any).$vuetify.theme.dark = this.isDark;
      this.setDark(this.isDark);
    }, 100);
  }
}
