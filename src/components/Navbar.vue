<template>
  <div class="nav">
    <div class="nav-inner">
      <nuxt-link class="nav-logo" to="/">PANDO</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class ProductItem extends Vue {
  @Prop() product: any;

  get productStyles() {
    return { "background-color": this.product?.bg_color || "#fafafa" };
  }

  get socialIcons() {
    return [
      {
        label: "Twitter",
        alt: "Pando's official Twitter account",
        icon: require("~/assets/images/meta-twitter.svg"),
        url: "https://twitter.com/pando_im",
      },
      {
        label: "Discord",
        alt: "Pando's official discord server",
        icon: require("~/assets/images/meta-discord.svg"),
        url: "https://discord.gg/ek45g3Cymd",
      },
      {
        label: "Telegram",
        alt: "Pando's official telegram server",
        icon: require("~/assets/images/meta-telegram.svg"),
        url: "https://t.me/pandoim",
      },
      {
        label: "Reddit",
        alt: "Pando's official reddit server",
        icon: require("~/assets/images/meta-reddit.svg"),
        url: "https://www.reddit.com/r/pando/",
      },
    ];
  }

  get links() {
    return [
      {
        label: this.$t("footer.documents"),
        title: this.$t("footer.documents.title"),
        icon: require("~/assets/images/meta-docs.svg"),
        url: "https://docs.pando.im",
      },
      {
        label: this.$t("footer.blog"),
        title: this.$t("footer.blog.title"),
        icon: require("~/assets/images/meta-blog.svg"),
        url: "https://docs.pando.im/blog",
      },
    ];
  }
}
export default ProductItem;
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  z-index: 10;
}
.nav-inner {
  // max-width: 960px;
  margin: 0 auto 40px auto;
  padding: 20px;
  .nav-logo {
    background: transparent url(/favicon.png) no-repeat center center;
    background-size: contain;
    width: 32px;
    height: 32px;
    text-indent: -1000em;
    overflow: hidden;
  }
}
@media only screen and (max-width: 600px) {
}
</style>
