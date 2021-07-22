<template>
  <div class="page">
    <div class="head">
      <div class="head-image"></div>
      <div class="head-content">
        <h1 class="home-headline">I'm Pando</h1>
        <div class="">
          <div class="home-sub-headline f-greyscale-3">
            A decentralized financial network built with the
            <a href="https://developers.mixin.one/document/mainnet/mtg">MTG</a>
            that includes a series of open financial protocols.
          </div>
        </div>
      </div>
    </div>

    <div class="products d-flex">
      <product-item
        v-for="product in products"
        :product="product"
        :key="product.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductItem from "@/components/ProductItem.vue";

@Component({
  head() {
    return {
      title: this.title,
    };
  },
  components: {
    ProductItem,
  },
})
class IndexPage extends Vue {
  get title() {
    return "I'm Pando";
  }

  get products() {
    return [
      {
        name: "lake",
        title: "Pando Lake",
        subtitle:
          "A fully decentralized protocol for automated liquidity provision.",
        runnable: true,
        icon: require("~/assets/images/products/lake.png"),
        icon_hover: require("~/assets/images/products/lake-white.png"),
        launch_label: "Swap coins",
        launch_url: "https://lake.pando.im",
        help_label: "Learn more",
        help_url: "https://blog.pando.im/pando-lake/",
      },
      {
        name: "leaf",
        title: "Pando Leaf",
        subtitle:
          "A decentralized financial network, implement a derivatives liquidity protocol.",
        runnable: true,
        icon: require("~/assets/images/products/leaf.png"),
        icon_hover: require("~/assets/images/products/leaf-white.png"),
        launch_label: "Go to mortgage",
        launch_url: "https://leaf.pando.im",
        help_label: "Learn more",
        help_url: "https://blog.pando.im/pando-leaf/",
      },
      {
        name: "rings",
        title: "Pando Rings",
        subtitle: "An algorithmic, autonomous interest rate protocol.",
        runnable: true,
        icon: require("~/assets/images/products/rings.png"),
        icon_hover: require("~/assets/images/products/rings-white.png"),
        launch_label: "Go for a loan",
        launch_url: "https://rings.pando.im",
        help_label: "Learn more",
        help_url: "https://blog.pando.im/pando-rings/",
      },
      {
        name: "other",
        title: "Pando Root",
        subtitle: "The mystery project, coming soon",
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
  margin: 0 auto;
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
