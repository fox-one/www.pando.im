<template>
  <section class="section" ref="section">
    <div class="section-inner" ref="inner" :style="style">
      <template v-if="layout === 'center'">
        <div
          class="content d-flex flex-column justify-center align-center"
          :class="`layout-${layout}`"
        >
          <div class="top mb-2 text-center">
            <div :style="{ backgroundImage: `url(${logo})` }" class="logo" />
          </div>

          <h1 class="section-title text-center mb-5">{{ title }}</h1>

          <div v-if="text" class="section-text text-center f-greyscale-3">
            {{ text }}
          </div>

          <div class="buttons">
            <a :href="primaryButton.url" class="button-wrapper">
              <f-button
                class="button primary"
                color="fennec"
                :disabled="primaryButton.disabled"
              >
                <v-icon v-if="primaryButton.icon" size="16" class="mr-2">{{
                  primaryButton.icon
                }}</v-icon>
                <span>{{ primaryButton.label }}</span>
              </f-button>
            </a>

            <a :href="secondaryButton.url" class="button-wrapper">
              <f-button class="button primary" color="darkmist">
                <v-icon v-if="secondaryButton.icon" size="16" class="mr-2">{{
                  secondaryButton.icon
                }}</v-icon>
                <span>{{ secondaryButton.label }}</span>
              </f-button>
            </a>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="content d-flex" :class="`layout-${layout}`">
          <div class="left">
            <div class="top mb-10">
              <div :style="{ backgroundImage: `url(${logo})` }" class="logo" />
            </div>

            <h1 class="section-title mb-5">{{ title }}</h1>

            <div v-if="text" class="section-text mb-5">{{ text }}</div>

            <div class="buttons">
              <a :href="primaryButton.url" class="button-wrapper">
                <f-button class="button primary">{{
                  primaryButton.label
                }}</f-button>
              </a>
              <a :href="secondaryButton.url" class="button-wrapper secondary">
                <f-button class="button secondary" type="">{{
                  secondaryButton.label
                }}</f-button>
              </a>
            </div>
          </div>

          <div v-if="picture" class="right">
            <div
              :style="{ backgroundImage: `url(${picture})` }"
              class="picture"
            />
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FeaturedHeader extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) text!: string;
  @Prop({ default: "" }) name!: string;
  @Prop({ default: "" }) logo!: string;
  @Prop({ default: "" }) picture!: string;
  @Prop({ default: "" }) color!: string;
  @Prop({ default: "" }) bgColor!: string;
  @Prop({ default: null }) primaryButton!: any;
  @Prop({ default: null }) secondaryButton!: any;
  @Prop({ default: "left" }) layout!: string;

  mounted() {
    Vue.nextTick(() => {
      const section = this.$refs.section as any;
      const inner = this.$refs.inner as any;
      section.style.height = inner.offsetHeight + "px";
    });
  }

  get style() {
    return {
      "background-color": this.bgColor || "transparent",
    };
  }
}
export default FeaturedHeader;
</script>

<style lang="scss" scoped>
.section {
  clear: both;
  max-width: 960px;
  padding-top: 0;
  padding-bottom: 0;
}

.section-inner {
  padding: 72px 0 0 0;
  margin: 0;
  min-height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .content {
    max-width: 960px;
    margin: 0 auto;
    width: 100%;
  }
}
.content {
  flex: 1;
  .logo {
    height: 40px;
    display: inline-block;
    background-size: contain;
    width: 100%;
    min-width: 200px;
    background-position: left center;
  }
  .section-title {
    font-size: 32px;
  }
  .section-text {
    margin-bottom: 40px;
  }
  .buttons {
    margin-bottom: 20px;
  }
  .button-wrapper {
    &:first-child {
      margin-right: 20px;
    }
    .button {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
    .primary {
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.01), 0 8px 16px rgba(0, 0, 0, 0.16);
    }
    .secondary {
      color: #000 !important;
      background-color: #fff !important;
      box-shadow: 0 !important;
    }
  }
}
.right {
  .picture {
    width: 353px;
    height: 360px;
    background-size: cover;
  }
}
.content.layout-center {
  .logo {
    height: 77px;
    width: 300px;
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
    .content {
      flex-direction: column;
    }
  }
  .content {
    padding: 0 20px;
    .logo {
      background-position: center;
    }
    .section-text {
      margin-bottom: 20px;
    }

    .buttons {
      display: flex;
      padding: 20px;
      flex-direction: column;
      .button-wrapper {
        width: 100%;
        margin-bottom: 20px;
        .button {
          width: 100%;
        }
      }
    }
  }
  .content.layout-center {
    .logo {
      height: 32px;
      min-width: 120px;
    }
  }
  .right {
    .picture {
      margin: 0 auto;
      height: 260px;
      background-size: contain;
      background-position: center;
    }
  }
}
</style>
