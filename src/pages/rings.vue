<template>
  <div class="page">
    <featured-header
      :title="'An algorithmic, autonomous interest rate protocol'"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'rings'"
      :logo="require('~/assets/images/products/rings-with-title.png')"
      :picture="'/screenshots/rings-sideview.png'"
      :bg-color="'#FEFAF3'"
      :color="'#FF9E29'"
    />
    <hlight-section
      :title="'A place where you can lend or borrow cryptocurrencies'"
      :text="'Pando Rings lets users deposit cryptocurrencies and earn interest, or borrow other cryptoassets against them.'"
      :label="'Explore Rings'"
      :image="require('~/assets/images/products/rings-hlight.png')"
      :url="'https://rings.pando.im'"
    />
    <feature-list-section
      :title="'Features of Pando Rings'"
      :features="features"
      :image="require('~/assets/images/products/rings-features.png')"
    />
    <div class="py-10" />
    <mtg-section
      :title="'Powered by MTG'"
      :text="'Rings is built with Mixin Trusted Group. At present, there are 6 genesis nodes who serve the service.'"
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
class RingsPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("title.rings") as string;
  }

  get buttons() {
    return [
      {
        label: "Go For A Loan",
        url: "https://rings.pando.im",
      },
      {
        label: "Documents",
        url: "https://docs.pando.im/docs/rings/intro",
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
export default RingsPage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
