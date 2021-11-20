<template>
  <div class="page">
    <featured-header
      :title="$t('product.leaf.subtitle')"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'leaf'"
      :logo="require('~/assets/images/products/leaf-with-title.png')"
      :picture="'/screenshots/leaf-sideview.png'"
      :bg-color="'#F1FDF3'"
      :color="'#8FE613'"
    />
    <hlight-section
      :title="$t('product.leaf.hlight')"
      :text="$t('product.leaf.hlight_text1')"
      :label="$t('explore_label', { suffix: $t('product.leaf.title') })"
      :image="require('~/assets/images/products/leaf-hlight.png')"
      :url="'https://leaf.pando.im'"
    />
    <feature-list-section
      :title="$t('product.leaf.pusd_title')"
      :features="features"
      :image="require('~/assets/images/products/leaf-features.png')"
    />
    <table-section
      :title="$t('product.leaf.table_title')"
      :text="$t('product.leaf.table_text')"
      :header="table.header"
      :rows="table.rows"
    />
    <mtg-section
      :title="$t('powered_by_mtg')"
      :text="$t('product.leaf.mtg_text')"
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
import TableSection from "@/components/sections/TableSection.vue";
import mixins from "@/mixins";
import { mtgMembers } from "~/constants";

@Component({
  components: {
    FeaturedHeader,
    HlightSection,
    FeatureListSection,
    MtgSection,
    TableSection,
  },
})
class LeafPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("product.leaf.title") as string;
  }

  get buttons() {
    return [
      {
        label: this.$t("product.leaf.launch_label"),
        url: "https://leaf.pando.im",
      },
      {
        label: this.$t("documents"),
        url: "https://docs.pando.im/docs/leaf/intro",
      },
    ];
  }

  get features() {
    return [
      {
        icon: require("~/assets/images/products/leaf-feat-1.png"),
        title: this.$t("product.leaf.feat_title_1"),
        text: this.$t("product.leaf.feat_text_1"),
      },
      {
        icon: require("~/assets/images/products/leaf-feat-2.png"),
        title: this.$t("product.leaf.feat_title_2"),
        text: this.$t("product.leaf.feat_text_2"),
      },
      {
        icon: require("~/assets/images/products/leaf-feat-3.png"),
        title: this.$t("product.leaf.feat_title_3"),
        text: this.$t("product.leaf.feat_text_3"),
      },
    ];
  }

  get table() {
    const header = [
      { label: this.$t("product.leaf.table_val_stablecoin"), colHead: 1 },
      {
        label: "pUSD",
        hlight: 1,
        icon: require("~/assets/images/cryptos/pusd.png"),
      },
      { label: "DAI", icon: require("~/assets/images/cryptos/dai.png") },
      { label: "USDC", icon: require("~/assets/images/cryptos/usdc.png") },
      { label: "USDT", icon: require("~/assets/images/cryptos/usdt.png") },
    ];
    const rows = [
      [
        {
          label: this.$t("product.leaf.table_val_collateral_rate"),
          colHead: 1,
        },
        { label: "200%+", hlight: 1 },
        { label: "150%" },
        { label: "100%" },
        { label: "🤔🤔🤔" },
      ],
      [
        {
          label: this.$t("product.leaf.table_val_collateral_assets"),
          colHead: 1,
        },
        {
          label: this.$t("product.leaf.table_val_collateral_assets_1"),
          hlight: 1,
        },
        { label: this.$t("product.leaf.table_val_collateral_assets_2") },
        { label: this.$t("product.leaf.table_val_collateral_assets_3") },
        { label: this.$t("product.leaf.table_val_collateral_assets_4") },
      ],
      [
        {
          label: this.$t("product.leaf.table_val_decentralized"),
          colHead: 1,
        },
        { label: "✅", hlight: 1 },
        { label: "✅" },
        { label: "🚫" },
        { label: "🚫" },
      ],
    ];
    return {
      header,
      rows,
    };
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
