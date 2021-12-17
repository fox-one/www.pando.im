<template>
  <div class="page">
    <featured-header
      :title="$t('product.lake.subtitle')"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'lake'"
      :logo="require('~/assets/images/products/lake-with-title.png')"
      :picture="'/screenshots/lake-sideview.png'"
      :bg-color="'#EDFBFC'"
      :color="'#0FC2FC'"
      :stat="statInfo"
    />
    <hlight-section
      :title="$t('product.lake.hlight')"
      :text="hlightTexts"
      :image="require('~/assets/images/products/lake-hlight.png')"
      :label="$t('explore_label', { suffix: $t('product.lake.title') })"
      :url="'https://lake.pando.im'"
      :label2="$t('explore_label', { suffix: $t('product.lake.title_4swap') })"
      :url2="'https://app.4swap.org'"
    />
    <feature-list-section
      :title="$t('features_of', { suffix: $t('product.lake.title_both') })"
      :features="features"
      :image="require('~/assets/images/products/lake-features.png')"
    />
    <mtg-section
      :title="$t('powered_by_mtg')"
      :text="$t('product.lake.mtg_text')"
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
  info: any = null;

  totalLiquidity = 0;

  totalAssets = 0;

  totalPairs = 0;

  get title() {
    return this.$t("product.lake.title") as string;
  }

  get hlightTexts() {
    return [
      this.$t("product.lake.hlight_text1"),
      this.$t("product.lake.hlight_text2"),
    ];
  }

  get buttons() {
    return [
      {
        label: this.$t("product.lake.launch_label"),
        url: "https://app.4swap.org",
      },
      {
        label: this.$t("documents"),
        icon: require("~/assets/images/button-icons/docs.svg"),
        url: "https://docs.pando.im/docs/lake/intro",
      },
    ];
  }

  get features() {
    return [
      {
        icon: require("~/assets/images/products/lake-feat-1.png"),
        title: this.$t("product.lake.feat_title_1"),
        text: this.$t("product.lake.feat_text_1"),
      },
      {
        icon: require("~/assets/images/products/lake-feat-2.png"),
        title: this.$t("product.lake.feat_title_2"),
        text: this.$t("product.lake.feat_text_2"),
      },
      {
        icon: require("~/assets/images/products/lake-feat-3.png"),
        title: this.$t("product.lake.feat_title_3"),
        text: this.$t("product.lake.feat_text_3"),
      },
    ];
  }

  get members() {
    const names = ["fox", "mixin", "b1", "poolin", "box"];
    return mtgMembers.filter((x) => {
      return names.includes(x.name);
    });
  }

  get statInfo() {
    if (this.info) {
      return [
        {
          label: this.$t("stat.total_liquidity"),
          value: this.$utils.helper.displayUsd(this.totalLiquidity.toString()),
        },
        {
          label: this.$t("stat.24h_volume"),
          value: this.$utils.helper.displayUsd(this.info.data.volume_24h),
        },
        {
          label: this.$t("stat.24h_trades"),
          value: this.info.data.transaction_count_24h,
        },
        { label: this.$t("stat.pools"), value: this.totalPairs },
      ];
    }
    return [];
  }

  async mounted() {
    this.info = await this.$apis.getLakeStat();
    if (this.info) {
      let totalLiquidity = 0;
      const assetSet = new Set();
      for (let ix = 0; ix < this.info?.data?.pairs.length; ix++) {
        const item = this.info?.data?.pairs[ix];
        totalLiquidity +=
          parseFloat(item.base_value) + parseFloat(item.quote_value);
        assetSet.add(item.base_asset_id);
        assetSet.add(item.quote_asset_id);
      }
      this.totalLiquidity = totalLiquidity;
      this.totalAssets = assetSet.size;
      this.totalPairs = this.info?.data?.pairs.length;
    }
  }
}
export default LakePage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
