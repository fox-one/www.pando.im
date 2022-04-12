<template>
  <v-container class="footer">
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
              <v-icon size="32"> {{ icon.icon }} </v-icon>
            </a>
          </div>
        </v-col>
      </v-row>

      <v-row class="meta-row mb-3">
        <v-col cols="12" md="3" class="pa-4">
          <div class="body-2 copyright">Copyright © 2021 Pando</div>
        </v-col>

        <v-col cols="12" md="9" class="pa-4">
          <div class="links d-flex text-right">
            <a
              v-for="link in links"
              :key="link.label"
              :title="link.title"
              :href="link.url"
              class="link d-flex"
              target="_blank"
            >
              <span class="body-2 font-weight-bold">
                {{ link.label }}
              </span>
            </a>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
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
        icon: "$vuetify.icons.iconMetaTwitter",
        url: "https://twitter.com/pando_im",
      },
      {
        label: "Discord",
        alt: "Pando's official discord server",
        icon: "$vuetify.icons.iconMetaDiscord",
        url: "https://discord.gg/ek45g3Cymd",
      },
      {
        label: "Telegram",
        alt: "Pando's official telegram server",
        icon: "$vuetify.icons.iconMetaTelegram",
        url: "https://t.me/pandoim",
      },
      {
        label: "Reddit",
        alt: "Pando's official reddit server",
        icon: "$vuetify.icons.iconMetaReddit",
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
      {
        label: this.$t("footer.press_kit"),
        title: this.$t("footer.press_kit.title"),
        icon: require("~/assets/images/meta-blog.svg"),
        url:
          "https://www.figma.com/file/l5ziu1tjI0QfpmoyL4Te0p/Press-Kit?node-id=0%3A1",
      },
    ];
  }
}
export default ProductItem;
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 20px;
  padding-bottom: 40px;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  .copyright {
    opacity: 0.4;
  }
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
      }
    }
  }
}
</style>
