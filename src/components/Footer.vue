<template>
  <div class="footer">
    <div class="footer-inner mt-4">
      <v-row>
        <v-col cols="12">
          <div class="d-flex social-icons">
            <a
              v-for="icon in socialIcons"
              :key="icon.label"
              :title="icon.label"
              :href="icon.url"
              class="social-icons mx-2"
              target="_blank"
            >
              <v-img
                :height="32"
                :width="32"
                :src="icon.icon"
                :alt="icon.alt"
              />
            </a>
          </div>
        </v-col>
      </v-row>
      <v-row class="meta-row">
        <v-col cols="12" md="3">
          <div class="f-caption f-greyscale-3">Copyright © 2021 Pando</div>
        </v-col>
        <v-col cols="12" md="9">
          <div class="links d-flex text-right">
            <a
              v-for="link in links"
              :key="link.label"
              :title="link.title"
              :href="link.url"
              class="link d-flex"
              target="_blank"
            >
              <span class="f-caption font-weight-bold">
                {{ link.label }}
              </span>
            </a>
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
        url: "https://discord.gg/CNS4QQ6w5u",
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
  margin-top: 100px;
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
