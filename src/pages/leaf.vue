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
      :stat="statInfo"
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
    <pando-lots
      class="products-lots"
      type="button"
      :group-id="lots.id"
      :theme-color="lots.theme"
      :api-base="lots.api_base"
      :ws-base="lots.ws_base"
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
  info: any = null;
  totalSupply = 0;
  totalCollateral = 0;
  collateralRatio = 0;

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
        icon: "$FIconDocumentFill",
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
        { label: "350%+", hlight: 1 },
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

  get lots() {
    const zh = {
      name: "pando-zh",
      id: "7000104111",
      theme: "#000000",
      api_base: "https://supergroup-api.mixin.fan/v1",
      ws_base: "wss://supergroup-ws.mixin.fan",
    };
    const en = {
      name: "pando-en",
      id: "7000104110",
      theme: "#000000",
      api_base: "https://supergroup-api.mixin.fan/v1",
      ws_base: "wss://supergroup-ws.mixin.fan",
    };
    return this.$utils.helper.getLocale() === "en" ? en : zh;
  }

  get members() {
    const names = ["fox", "mixin", "b1", "poolin", "exin", "cedric"];
    const ret = mtgMembers.filter((x) => {
      return names.includes(x.name);
    });
    return ret;
  }

  get statInfo() {
    if (this.info) {
      return [
        {
          label: this.$t("stat.total_collateral"),
          value: this.$utils.helper.displayUsd(this.totalCollateral.toString()),
        },
        {
          label: this.$t("stat.total_supply"),
          value: this.$utils.helper.displayUsd(this.totalSupply.toString()),
        },
        {
          label: this.$t("stat.collateral_ratio"),
          value: this.collateralRatio.toFixed(2) + "%",
        },
      ];
    }
    return [];
  }
  async mounted() {
    this.info = await this.$apis.getLeafStat();
    if (this.info) {
      const collaterals = this.info.data.collaterals;
      for (let ix = 0; ix < collaterals.length; ix++) {
        const cat: any = collaterals[ix];
        this.totalCollateral += parseFloat(cat.ink) * parseFloat(cat.price);
        this.totalSupply += parseFloat(cat.debt);
      }
      this.collateralRatio = (this.totalCollateral / this.totalSupply) * 100;
    }
  }
}
export default LeafPage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;

  .products-lots {
    position: fixed;
    right: 32px;
    bottom: 32px;
  }
}
</style>
