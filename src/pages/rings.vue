<template>
  <div class="page">
    <featured-header
      :title="$t('product.rings.subtitle')"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'rings'"
      :logo="require('~/assets/images/products/rings-with-title.png')"
      :picture="'/screenshots/rings-sideview.png'"
      :bg-color="'#FEFAF3'"
      :stat="statInfo"
      :color="'#FF9E29'"
    />
    <hlight-section
      :title="$t('product.rings.hlight')"
      :text="$t('product.rings.hlight')"
      :label="$t('explore_label', { suffix: $t('product.rings.title') })"
      :image="require('~/assets/images/products/rings-hlight.png')"
      :url="'https://rings.pando.im'"
    />
    <feature-list-section
      :title="$t('features_of', { suffix: $t('product.rings.title') })"
      :features="features"
      :image="require('~/assets/images/products/rings-features.png')"
    />
    <div class="py-10" />
    <mtg-section
      :title="$t('powered_by_mtg')"
      :text="$t('product.rings.mtg_text')"
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
  info: any = null;

  get title() {
    return this.$t("product.rings.title") as string;
  }

  get buttons() {
    return [
      {
        label: this.$t("product.rings.launch_label"),
        url: "https://rings.pando.im",
      },
      {
        label: this.$t("documents"),
        icon: require("~/assets/images/button-icons/docs.svg"),
        url: "https://docs.pando.im/docs/rings/intro",
      },
    ];
  }

  get features() {
    return [
      {
        icon: require("~/assets/images/products/rings-feat-1.png"),
        title: this.$t("product.rings.feat_title_1"),
        text: this.$t("product.rings.feat_text_1"),
      },
      {
        icon: require("~/assets/images/products/rings-feat-2.png"),
        title: this.$t("product.rings.feat_title_2"),
        text: this.$t("product.rings.feat_text_2"),
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

  get statInfo() {
    if (this.info) {
      return [
        {
          label: this.$t("stat.total_supply"),
          value: this.$utils.helper.displayUsd(this.info.total_supply),
        },
        {
          label: this.$t("stat.total_borrowed"),
          value: this.$utils.helper.displayUsd(this.info.total_borrow),
        },
        {
          label: this.$t("stat.24h_supply_volume"),
          value: this.$utils.helper.displayUsd(this.info.supply_volume_of_24h),
        },
        {
          label: this.$t("stat.24h_borrow_volume"),
          value: this.$utils.helper.displayUsd(this.info.borrow_volume_of_24h),
        },
      ];
    }
    return [];
  }

  async mounted() {
    this.info = await this.$apis.getRingsStat();
  }
}
export default RingsPage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
</style>
