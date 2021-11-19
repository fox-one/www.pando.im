<template>
  <div class="page">
    <featured-header />
    <hlight-section
      :title="'4swap is the community editon of Pando Lake'"
      :text="'4swap is another decentralized protocol for automated liquidity provision on Mixin Network'"
      :label="'Explore 4swap'"
      :image="require('~/assets/images/products/lake-hlight.png')"
      :url="'https://app.4swap.org'"
    />
    <feature-list-section
      :title="'Features of Pando Lake'"
      :features="features"
      :image="require('~/assets/images/products/lake-features.png')"
    />
    <mtg-section
      :title="'Powered by MTG'"
      :text="'4swap is built with Mixin Trusted Group Right now, there are 5 genesis nodes who serve the trades'"
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
    return [
      {
        icon: require("~/assets/images/mtg-members/pando-mtg-member-fox.png"),
        title: "Fox.One",
        text: "The main develop team of Pando",
      },
      {
        icon: require("~/assets/images/mtg-members/pando-mtg-member-mixin.png"),
        title: "Mixin",
        text: "The core develop team of Mixin Network",
        url: "https://mixin.one",
      },
      {
        icon: require("~/assets/images/mtg-members/pando-mtg-member-poolin.png"),
        title: "Poolin",
        text: "Industry-leading mining service provider",
        url: "https://poolin.com",
      },
      {
        icon: require("~/assets/images/mtg-members/pando-mtg-member-b1.png"),
        title: "Big.ONE",
        text:
          "A trading platform provides users with the secure and trusteeship services",
        url: "https://big.one",
      },
      {
        icon: require("~/assets/images/mtg-members/pando-mtg-member-ri.png"),
        title: "BOX Group",
        text: "BOX investment community",
      },
    ];
  }
}
export default LakePage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
