<template>
  <div class="page">
    <div class="head">
      <div class="head-image"></div>
      <div class="head-content">
        <h1 class="home-headline">{{ $t("headline") }}</h1>
        <h2 class="">
          <div
            class="home-sub-headline greyscale_3--text"
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

    <v-layout
      class="products-lots"
      :class="isMobile && 'px-4'"
      column
      align-center
      justify-center
    >
      <h3 class="text-center mb-6">{{ $t("product.lots.title") }}</h3>
      <h4 class="text-center greyscale_3--text mb-16">
        {{ $t("product.lots.subtitle") }}
      </h4>
      <v-layout wrap justify-space-around>
        <pando-lots
          v-for="lot in lots"
          class="products-lots-item"
          :key="lot.name"
          :group-id="lot.id"
          :theme-color="lot.theme"
          :api-base="lot.api_base"
          :ws-base="lot.ws_base"
          @error="handleError"
        />
      </v-layout>
    </v-layout>

    <dev-section />

    <wallet-section />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import ProductItem from "@/components/ProductItem.vue";
import DevSection from "@/components/sections/DevSection.vue";
import WalletSection from "@/components/sections/WalletSection.vue";
import mixins from "@/mixins";

@Component({
  components: {
    ProductItem,
    DevSection,
    WalletSection,
  },
})
class IndexPage extends Mixins(mixins.page) {
  get title() {
    return this.$t("title.home") as string;
  }

  get isMobile() {
    return this.$utils.helper.isMobile();
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
        // icon: require("~/assets/images/products/other.png"),
        // icon_hover: require("~/assets/images/products/other.png"),
      },
    ];
  }

  get lots() {
    const locale = this.$i18n.locale.toLowerCase();
    let ret: any = [];
    if (locale === "zh") {
      ret = [
        {
          name: "4wap-zh",
          id: "7000103578",
          theme: "#EE4596",
          api_base: "https://supergroup-api.mixin.fan/v1",
          ws_base: "wss://supergroup-ws.mixin.fan",
        },
        {
          name: "pando-zh",
          id: "7000104111",
          theme: "#000000",
          api_base: "https://supergroup-api.mixin.fan/v1",
          ws_base: "wss://supergroup-ws.mixin.fan",
        },
      ];
    } else {
      ret = [
        {
          name: "jpyc-ja",
          id: "7000104463",
          theme: "#000000",
          api_base: "https://supergroup-api.mixin.fan/v1",
          ws_base: "wss://supergroup-ws.mixin.fan",
        },
        {
          name: "4wap-en",
          id: "7000103925",
          theme: "#EE4596",
          api_base: "https://supergroup-api.mixin.fan/v1",
          ws_base: "wss://supergroup-ws.mixin.fan",
        },
        {
          name: "pando-en",
          id: "7000104110",
          theme: "#000000",
          api_base: "https://supergroup-api.mixin.fan/v1",
          ws_base: "wss://supergroup-ws.mixin.fan",
        },

        {
          name: "mob-en",
          id: "7000104464",
          theme: "#000000",
          api_base: "https://supergroup-api.mixin.fan/v1",
          ws_base: "wss://supergroup-ws.mixin.fan",
        },
      ];
    }
    return ret;
  }

  launch(prod) {
    if (prod.url) {
      window.open(prod.url);
    }
  }

  handleError(error) {
    console.log(error);
  }
}
export default IndexPage;
</script>

<style lang="scss" scoped>
.products {
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto 128px auto;
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
      font-size: 64px;
    }

    .home-sub-headline {
      font-size: 16px;
      max-width: 480px;
      font-weight: normal !important;
    }
  }
}

.products-lots {
  margin-bottom: 80px;
  &-item {
    margin-bottom: 32px;
    height: 96px;
  }
  h3 {
    font-weight: bold;
    font-size: 24px;
  }
  h4 {
    font-weight: 500;
    font-size: 14px;
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
