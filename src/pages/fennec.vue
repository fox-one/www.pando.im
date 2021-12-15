<template>
  <div class="page">
    <featured-header
      layout="center"
      :title="$t('product.fennec.subtitle')"
      :text="$t('product.fennec.text')"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'fennec'"
      :logo="require('~/assets/images/products/fennec-with-title.png')"
    />

    <hlight-slide-section
      :title="$t('product.fennec.hlight')"
      :text="hlightTexts"
      :items="slideItems"
    />

    <feature-grid-section
      :features="features"
      :image="require('~/assets/images/products/lake-features.png')"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import FeaturedHeader from "@/components/FeaturedHeader.vue";
import HlightSlideSection from "@/components/sections/HlightSlideSection.vue";
import FeatureGridSection from "@/components/sections/FeatureGridSection.vue";
import mixins from "@/mixins";
import { fennecInstallURLs, mtgMembers } from "~/constants";

@Component({
  components: {
    FeaturedHeader,
    HlightSlideSection,
    FeatureGridSection,
  },
})
class FennecPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("product.fennec.title") as string;
  }

  get pageBgColor() {
    return "#24242F";
  }

  get isDark() {
    return true;
  }

  get hlightTexts() {
    return [this.$t("product.fennec.hlight_text1")];
  }

  get buttons() {
    return [
      {
        color: "fennec",
        label: this.launchLabel,
        icon: this.$icons.mdiPlus,
        url: this.fennecInstallUrl,
        disabled: this.$utils.helper.isMobile(),
      },
      {
        color: "darkmist",
        label: this.$t("other_versions"),
        icon: this.$icons.mdiOpenInNew,
        url: fennecInstallURLs.source,
      },
    ];
  }

  get slideItems() {
    return [
      {
        label: this.$t("product.fennec.slide_item_label_1"),
        image: require("~/assets/images/products/fennec-hlight-1.png"),
      },
      {
        label: this.$t("product.fennec.slide_item_label_2"),
        image: require("~/assets/images/products/fennec-hlight-2.png"),
      },
      {
        label: this.$t("product.fennec.slide_item_label_3"),
        image: require("~/assets/images/products/fennec-hlight-3.png"),
      },
    ];
  }

  get launchLabel() {
    if (this.$utils.helper.isMobile()) {
      return this.$t("product.fennec.not_support_mobile");
    }
    switch (this.$utils.helper.getBrowserName()) {
      case "chrome":
        return this.$t("product.fennec.launch_label_chrome");
      case "firefox":
        return this.$t("product.fennec.launch_label_firefox");
    }
    return this.$t("product.fennec.launch_label");
  }

  get fennecInstallUrl() {
    if (this.$utils.helper.isMobile()) {
      return fennecInstallURLs.source;
    }
    switch (this.$utils.helper.getBrowserName()) {
      case "chrome":
        return fennecInstallURLs.chrome;
      case "firefox":
        return fennecInstallURLs.firefox;
    }
    return fennecInstallURLs.source;
  }

  get fennecInstallLabel() {
    return this.$t("product.fennec.launch_label");
  }

  get features() {
    return [
      {
        icon: require("~/assets/images/products/fennec-feat-1.png"),
        title: this.$t("product.fennec.feat_title_1"),
        text: this.$t("product.fennec.feat_text_1"),
      },
      {
        icon: require("~/assets/images/products/fennec-feat-2.png"),
        title: this.$t("product.fennec.feat_title_2"),
        text: this.$t("product.fennec.feat_text_2"),
      },
      {
        icon: require("~/assets/images/products/fennec-feat-3.png"),
        title: this.$t("product.fennec.feat_title_3"),
        text: this.$t("product.fennec.feat_text_3"),
      },
      {
        icon: require("~/assets/images/products/fennec-feat-4.png"),
        title: this.$t("product.fennec.feat_title_4"),
        text: this.$t("product.fennec.feat_text_4"),
      },
    ];
  }

  get members() {
    const names = ["fox", "mixin", "b1", "poolin", "box"];
    return mtgMembers.filter((x) => {
      return names.includes(x.name);
    });
  }
}
export default FennecPage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
