<template>
  <div class="page">
    <div class="bg-image"></div>
    <featured-header
      layout="center"
      :title="$t('3rd_party_apps.title')"
      :text="$t('3rd_party_apps.text')"
      :primary-button="buttons[0]"
      :secondary-button="buttons[1]"
      :name="'3rd-party-apps'"
    />

    <div class="apps">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(app, ix) in apps"
          :key="`app-${ix}`"
        >
          <a :href="app.url" :title="app.title" target="_blank">
            <f-panel class="app" elevation="high">
              <div
                class="app-screenshot mb-4"
                :style="{
                  'background-image': `url(/3rd-party-apps-info/${app.name}/image.png)`,
                }"
              ></div>
              <div class="app-top mb-4">
                <v-avatar size="24"
                  ><v-img
                    width="24"
                    hidden="24"
                    :src="`/3rd-party-apps-info/${app.name}/icon.png`"
                /></v-avatar>
                <span class="subtitle-1 font-weight-bold">{{ app.title }}</span>
              </div>
              <div class="app-text body-1 greyscale_3--text">
                {{ app.text }}
              </div>
            </f-panel>
          </a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import FeaturedHeader from "@/components/FeaturedHeader.vue";
import HlightSection from "@/components/sections/HlightSection.vue";
import FeatureListSection from "@/components/sections/FeatureListSection.vue";
import MtgSection from "@/components/sections/MtgSection.vue";
import mixins from "@/mixins";

@Component({
  components: {
    FeaturedHeader,
    HlightSection,
    FeatureListSection,
    MtgSection,
  },
})
class LakePage extends Mixins(mixins.page) {
  thrdApps = [];
  get title() {
    return this.$t("3rd_party_apps.title") as string;
  }

  get buttons() {
    return [
      {
        icon: "$FIconAdd",
        label: this.$t("3rd_party_apps.launch_label"),
        url:
          "https://github.com/fox-one/www.pando.im/tree/master/src/static/3rd-party-apps-info/",
      },
      {
        icon: "$FIconDocumentFill",
        label: this.$t("3rd_party_apps.docs"),
        url: "https://docs.pando.im/developer/intro",
      },
    ];
  }

  get apps() {
    return this.thrdApps;
  }

  async mounted() {
    this.thrdApps = await this.$apis.getApps();
  }
}
export default LakePage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
}
.bg-image {
  background: transparent url("~/assets/images/3rd-party-apps-bg.png") center
    center no-repeat;
  background-size: contain;
  height: 571px;
  width: 100vw;
  left: 0;

  display: block;
  content: " ";
  position: absolute;
}

.apps {
  position: relative;
  margin-top: 60px;
  margin-bottom: 60px;
  z-index: 10;
  .app {
    border: 1px solid #f5f5f5;
    border-radius: 8px;
  }
  .app-screenshot {
    width: 100%;
    height: 207px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

@media only screen and (max-width: 600px) {
  .bg-image {
    background-size: cover;
  }
  .apps {
    margin-top: -40px;
    padding-left: 20px;
    padding-right: 20px;
    .app {
    }
  }
}
</style>
