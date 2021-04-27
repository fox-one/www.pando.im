<template>
  <v-container>
    <h1 class="home-headline text-center mt-10 mb-4">I'm Pando</h1>
    <div class="mb-10">
      <div class="home-sub-headline text-center">
        a decentralized financial network built with the
        <a href="https://developers.mixin.one/document/mainnet/mtg">MTG</a
        ><br />
        that includes a series of De-Fi protocols.
      </div>
    </div>

    <div class="text-center f-headline mb-10">Products</div>
    <div class="products d-flex">
      <f-panel
        class="product text-center mb-10 pa-4"
        padding="0"
        v-for="product in products"
        :key="product.title"
      >
        <div class="right pa-4">
          <h3 class="f-title-1 product-title mb-2">{{ product.title }}</h3>
          <div class="f-text-2 product-status mb-4 f-greyscale-3">
            {{ product.status }}
          </div>
          <div class="f-text-2 product-subtitle mb-2">
            {{ product.subtitle }}
          </div>
          <f-button
            :disabled="!product.runnable"
            type="primary"
            class="button"
            @click="launch(product)"
            >Launch</f-button
          >
        </div>
      </f-panel>
    </div>
    <div class="f-text-2 text-center my-10">© 2021 Pando</div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  head() {
    return {
      title: this.title,
    };
  },
})
class IndexPage extends Vue {
  get title() {
    return "I'm Pando";
  }

  get products() {
    return [
      {
        title: "Lake",
        subtitle:
          "A fully decentralized protocol for automated liquidity provision.",
        status: "Open beta",
        url: "https://app.4swap.org",
        runnable: true,
      },
      {
        title: "Leaf",
        subtitle:
          "A decentralized financial network, implement a derivatives liquidity protocol.",
        status: "Open beta",
        url: "https://leaf.pando.im",
        runnable: true,
      },
      {
        title: "Rings",
        subtitle: "An algorithmic, autonomous interest rate protocol.",
        status: "Coming soon",
        url: "https://rings.4swap.org",
        runnable: false,
      },
      {
        title: "Root",
        subtitle: "The mystery project.",
        status: "Coming soon",
        url: "https://root.4swap.org",
        runnable: false,
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
.home-headline {
  font-size: 40px;
}
.home-sub-headline {
  font-size: 20px;
}
.products {
  flex-wrap: wrap;
  max-width: 720px;
  margin: 0 auto;
  justify-content: space-between;
}
.product {
  width: 30%;
  .product-title {
    font-size: 20px !important;
  }
  .product-subtitle {
    font-weight: normal !important;
    height: 140px;
  }
  .button {
    padding-left: 26px;
    padding-right: 26px;
  }
}
@media only screen and (max-width: 600px) {
  .products {
    justify-content: space-around;
  }
  .product {
    width: 46%;
  }
}
</style>
