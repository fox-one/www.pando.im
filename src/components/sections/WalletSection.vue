<template>
  <div class="section">
    <div class="section-inner d-flex">
      <div class="content d-flex">
        <h3 class="section-title mb-5">{{ title }}</h3>
        <div class="mb-5 f-greyscale-3 px-5" v-html="text"></div>

        <div class="wallets d-flex">
          <v-row justify="center">
            <v-col
              cols="12"
              md="6"
              lg="4"
              v-for="wallet in wallets"
              :key="wallet.name"
              class="wallet d-flex"
            >
              <img :src="wallet.icon" class="icon mb-4" />
              <nuxt-link v-if="wallet.route" :to="wallet.route">
                <f-button>{{ wallet.label }}</f-button>
              </nuxt-link>
              <a v-else :href="wallet.url" :title="wallet.label">
                <f-button>{{ wallet.label }}</f-button>
              </a>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { supportedWallets } from "@/constants";

@Component
class FeatureListSection extends Vue {
  get title() {
    return this.$t("wallet.title") as string;
  }

  get text() {
    return this.$t("wallet.text") as string;
  }

  get wallets() {
    return supportedWallets.map((x: any) => {
      x.label = this.$t("wallet." + x.name);
      x.icon = require(`~/assets/images/wallets/${x.name}.png`);
      return x;
    });
  }
}
export default FeatureListSection;
</script>

<style lang="scss" scoped>
.section-inner {
  flex-wrap: wrap;
  max-width: 960px;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: column;
  .content {
    flex-direction: column;
    width: 100%;
    text-align: center;
    .wallets {
      list-style: none;
      padding: 0;
      .wallet {
        flex-direction: column;
        text-align: center;
        align-items: center;
        .icon {
          width: 96px;
          height: 96px;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
    text-align: center;
    .content {
      .wallets {
        .wallet {
        }
      }
    }
  }
}
</style>
