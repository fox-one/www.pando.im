<template>
  <div class="page">
    <div class="head">
      <div class="head-image"></div>
      <div class="head-content">
        <h1 class="home-headline">{{ $t("headline") }}</h1>
        <h2 class="">
          <div
            class="home-sub-headline f-greyscale-3"
            v-html="$t('description')"
          ></div>
        </h2>
      </div>
    </div>

    <div class="products d-flex">
      <product-item
        v-for="(product, ix) in products"
        :product="product"
        :key="`product-${ix}`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import ProductItem from "@/components/ProductItem.vue";
import mixins from "@/mixins";

@Component({
  components: {
    ProductItem,
  },
})
class IndexPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("title.home") as string;
  }

  get products() {
    return [
      {
        name: "lake",
        title: this.$t("product.lake.title"),
        subtitle: this.$t("product.lake.subtitle"),
        runnable: true,
        icon: require("~/assets/images/products/lake.png"),
        icon_hover: require("~/assets/images/products/lake-white.png"),
        route: "/lake",
        launch_label: this.$t("product.lake.launch_label"),
        launch_url: "https://lake.pando.im",
        help_label: this.$t("product.lake.help_label"),
        help_url: "https://docs.pando.im/docs/lake/intro",
      },
      {
        name: "leaf",
        title: this.$t("product.leaf.title"),
        subtitle: this.$t("product.leaf.subtitle"),
        runnable: true,
        icon: require("~/assets/images/products/leaf.png"),
        icon_hover: require("~/assets/images/products/leaf-white.png"),
        route: "/leaf",
        launch_label: this.$t("product.leaf.launch_label"),
        launch_url: "https://leaf.pando.im",
        help_label: this.$t("product.leaf.help_label"),
        help_url: "https://docs.pando.im/docs/leaf/intro",
      },
      {
        name: "rings",
        title: this.$t("product.rings.title"),
        subtitle: this.$t("product.rings.subtitle"),
        runnable: true,
        icon: require("~/assets/images/products/rings.png"),
        icon_hover: require("~/assets/images/products/rings-white.png"),
        route: "/rings",
        launch_label: this.$t("product.rings.launch_label"),
        launch_url: "https://rings.pando.im",
        help_label: this.$t("product.rings.help_label"),
        help_url: "https://docs.pando.im/docs/rings/intro",
      },
      {
        name: "other",
        title: this.$t("product.root.title"),
        subtitle: this.$t("product.root.subtitle"),
        runnable: false,
        icon: require("~/assets/images/products/other.png"),
        icon_hover: require("~/assets/images/products/other.png"),
      },
    ];
  }
  launch(prod) {
    if (prod.url) {
      window.open(prod.url);
    }
  }
}
export default IndexPage;
</script>

<style lang="scss" scoped>
.products {
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto 100px auto;
  justify-content: space-between;
}

.head {
  height: 340px;
  background: transparent url(~/assets/images/head-bg.png) 100px center
    no-repeat;
  background-size: contain;
  margin-bottom: 96px;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row-reverse;
  display: flex;
  overflow: hidden;
  .head-image {
    width: 242px;
    height: 285px;
    background: transparent url(~/assets/images/head-image.png) center center
      no-repeat;
    background-size: contain;
    display: block;
    transform: translate(2px, 25px);
  }
  .head-content {
    .home-headline {
      font-size: 40px;
    }

    .home-sub-headline {
      font-size: 16px;
      max-width: 480px;
      font-weight: normal !important;
    }
  }
}

@media only screen and (max-width: 600px) {
  .head {
    padding: 20px 20px 2px 20px;
    display: block;
    height: auto;
    margin-bottom: 0px;
    background: transparent url(~/assets/images/head-bg-small.png) center 0
      no-repeat;
    background-size: contain;
    .head-image {
      height: 165px;
      margin: 10px auto 16px auto;
      transform: translate(0px, 0px);
    }
    .head-content {
      .home-headline {
        font-size: 24px;
        margin-bottom: 12px;
      }
      .home-sub-headline {
        font-size: 14px;
      }
    }
  }
}
</style>
