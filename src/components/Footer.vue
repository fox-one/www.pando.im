<template>
  <div class="footer">
    <div class="footer-inner d-flex align-center mt-4">
      <v-row>
        <v-col cols="12" md="9">
          <div class="d-flex">
            <a
              v-for="link in links"
              :key="link.label"
              :title="link.label"
              :src="link.url"
              class="social-icons mr-4"
              target="_blank"
            >
              <v-img
                :height="32"
                :width="32"
                :src="link.icon"
                :alt="link.alt"
              />
            </a>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <div class="f-caption f-greyscale-3 text-right">
            Copyright © 2021 Pando
          </div>
        </v-col>
      </v-row>
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

  get links() {
    return [
      {
        label: "Docs",
        alt: "Pando's documents for users and developers",
        icon: require("~/assets/images/meta-docs.svg"),
        url: "https://docs.pando.im",
      },
      {
        label: "Blog",
        alt: "Pando's official blog",
        icon: require("~/assets/images/meta-blog.svg"),
        url: "https://blog.pando.im",
      },
      {
        label: "Twitter",
        alt: "Pando's official Twitter account",
        icon: require("~/assets/images/meta-twitter.svg"),
        url: "https://twitter.com",
      },
      {
        label: "Discord",
        alt: "Pando's official discord server",
        icon: require("~/assets/images/meta-discord.svg"),
        url: "https://discord.gg/CNS4QQ6w5u",
      },
    ];
  }
}
export default ProductItem;
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 150px;
}
.footer-inner {
  max-width: 960px;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .footer-inner {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
