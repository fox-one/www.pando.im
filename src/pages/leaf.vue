<template>
  <div class="page">
    <featured-header
      :title="'A fully decentralized protocol for automated liquidity provision'"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'leaf'"
      :logo="require('~/assets/images/products/leaf-with-title.png')"
      :picture="'/screenshots/leaf-sideview.png'"
      :bg-color="'#F1FDF3'"
      :color="'#8FE613'"
    />
    <hlight-section
      :title="'Deposit collateral to generate pUSD in Pando Leaf'"
      :text="'Pando USD is considered a stablecoin pegged to the US Dollar'"
      :label="'Explore Leaf'"
      :image="require('~/assets/images/products/leaf-hlight.png')"
      :url="'https://leaf.pando.im'"
    />
    <feature-list-section
      :title="'Features of Pando Leaf'"
      :features="features"
      :image="require('~/assets/images/products/leaf-features.png')"
    />
    <div class="py-10" />
    <mtg-section
      :title="'Powered by MTG'"
      :text="'Leaf is built with Mixin Trusted Group. At present, there are 6 genesis nodes who serve the service.'"
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
class LeafPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("title.leaf") as string;
  }

  get buttons() {
    return [
      {
        label: "Go To Mortgage",
        url: "https://leaf.pando.im",
      },
      {
        label: "Documents",
        url: "https://docs.pando.im/docs/leaf/intro",
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
    const names = ["fox", "mixin", "b1", "poolin", "exin", "cedric"];
    const ret = mtgMembers.filter((x) => {
      return names.includes(x.name);
    });
    return ret;
  }
}
export default LeafPage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
