<template>
  <div class="nav">
    <div class="nav-inner">
      <div class="nav-logo">PANDO</div>
      <div class="menu"></div>
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
.footer {
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 150px;
}
.footer-inner {
  max-width: 960px;
  margin: 0 auto 40px auto;
  .links {
    justify-content: flex-end;
    .link {
      margin-left: 24px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .footer-inner {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    .meta-row {
      display: flex;
      flex-direction: column-reverse;
    }
    .social-icons {
      justify-content: center;
    }
    .links {
      justify-content: center;
      .link {
        margin-left: 10px;
        margin-left: 10px;
      }
    }
  }
}
</style>
