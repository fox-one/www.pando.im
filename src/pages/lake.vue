<template>
  <div class="page">
    <featured-header
      :title="'A decentralized protocol implement for automated liquidity provision'"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'lake'"
      :logo="require('~/assets/images/products/lake-with-title.png')"
      :picture="'/screenshots/lake-sideview.png'"
      :bg-color="'#EDFBFC'"
      :color="'#0FC2FC'"
    />
    <hlight-section
      :title="'4swap is the community editon of Pando Lake'"
      :text="'4swap is another decentralized protocol for automated liquidity provision on Mixin Network'"
      :label="'Explore 4swap'"
      :image="require('~/assets/images/products/lake-hlight.png')"
      :url="'https://app.4swap.org'"
    />
    <feature-list-section
      :title="'Features of Pando Lake & 4swap'"
      :features="features"
      :image="require('~/assets/images/products/lake-features.png')"
    />
    <div class="py-10" />
    <mtg-section
      :title="'Powered by MTG'"
      :text="'4swap is built with Mixin Trusted Group. At present, there are 5 genesis nodes who serve the trades.'"
      :members="members"
    />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import FeaturedHeader from "@/components/FeaturedHeader.vue";
import HlightSection from "@/components/sections/HlightSection.vue";
import FeatureListSection from "@/components/sections/FeatureListSection.vue";
import MtgSection from "@/components/sections/MtgSection.vue";
import mixins from "@/mixins";
import { mtgMembers } from "~/constants";

@Component({
  components: {
    FeaturedHeader,
    HlightSection,
    FeatureListSection,
    MtgSection,
  },
})
class LakePage extends Mixins(mixins.page) {
  get title() {
    return this.$t("title.lake") as string;
  }

  get buttons() {
    return [
      {
        label: "Swap Coins",
        url: "https://lake.pando.im",
      },
      {
        label: "Documents",
        url: "https://docs.pando.im/docs/lake/intro",
      },
    ];
  }

  get features() {
    return [
      {
        icon: require("~/assets/images/products/lake-feat-1.png"),
        title: "Zero Gas Fees",
        text: "Trade without the need for gas fees",
      },
      {
        icon: require("~/assets/images/products/lake-feat-2.png"),
        title: "Lightning Fast",
        text: "Trades will be confirmed in seconds",
      },
      {
        icon: require("~/assets/images/products/lake-feat-3.png"),
        title: "Cross Chains",
        text: "Supports all mainstream blockchains",
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
export default LakePage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
