<template>
  <v-container class="section">
    <div class="section-inner d-flex">
      <div class="left">
        <v-carousel
          v-model="carouselModel"
          :show-arrows="false"
          hide-delimiters
          :height="carouseHeight"
        >
          <v-carousel-item v-for="(item, ix) in items" :key="`carousel-${ix}`">
            <div class="fill-height">
              <img class="image" :src="item.image" />
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>

      <div class="right">
        <div class="content d-flex">
          <h2 class="slide-title">{{ title }}</h2>
          <div class="slide-text">
            <p v-for="(line, ix) in lines" :key="ix" v-html="line"></p>
          </div>
          <div class="tabs">
            <v-tabs vertical dark color="white">
              <v-tab
                v-for="(item, ix) in items"
                :key="`tab-${ix}`"
                :ripple="false"
                @click="switchTab(ix)"
              >
                {{ item.label }}
              </v-tab>
            </v-tabs>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class HlightSection extends Vue {
  @Prop({ default: "title" }) title!: string;
  @Prop({ default: "text" }) text!: string;
  @Prop({ default: [] }) items!: Array<any>;

  carouselModel = 0;

  get lines() {
    if (!this.text) return [];
    if (typeof this.text === "string") return [this.text];
    return this.text;
  }

  get carouseHeight() {
    return this.$utils.helper.isMobile() ? 360 : 716;
  }

  switchTab(ix) {
    this.carouselModel = ix;
  }
}
export default HlightSection;
</script>

<style lang="scss" scoped>
.section {
  padding-top: 48px;
  padding-bottom: 48px;
}
.section-inner {
  flex-wrap: wrap;
  max-width: 1280px;
  justify-content: space-between;
  background: linear-gradient(180deg, #473859 0%, #393453 100%);
  box-shadow: inset 0px -1px 0px #29253e, inset 0px 1px 0px #625375;
  border-radius: 16px;
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    .content {
      padding-right: 40px;
      flex-direction: column;
      .text,
      .launch-link {
        font-size: 14px;
      }
      .launch-link:hover {
        .launch-link-icon {
          transform: translateX(8px);
        }
      }
    }
  }
  .left {
    flex: 0;
    padding: 40px 0;
    .image {
      max-height: 716px;
    }
  }
  .slide-title {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 48px;
  }
  .slide-text {
    color: #706190;
    font-size: 24px;
    margin-bottom: 24px;
  }
}

.tabs {
  text-align: left;
  ::v-deep {
    .v-tabs-bar {
      background: transparent !important;
      .v-tab {
        justify-content: flex-start;
        padding-left: 48px;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 24px;
        color: #896fae !important;

        margin-bottom: 24px;
        &::before {
          display: none !important;
          opacity: 0 !important;
        }
        &.v-tab--active {
          color: #fff !important;
        }
      }
    }
    .v-slide-group__content {
      position: relative;
      &::before {
        position: absolute;
        border-radius: 2px;
        top: 14px;
        bottom: 38px;
        background: rgba(255, 255, 255, 0.2);
        width: 4px;
        content: " ";
        display: block;
      }
    }

    .v-tabs-slider {
      width: 4px;
      border-radius: 2px;
      height: 20px;
      transform: translateY(14px);
    }
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
    text-align: center;
    flex-direction: column;
    margin: 0;
    .right {
      padding: 20px;
      padding-left: 20px;
      .content {
        text-align: left;
        padding-right: 0px;
        padding-left: 0px;
        .launch-link {
          justify-content: center;
        }
      }
    }
    .left {
      padding: 20px 0 0 0;
      .image {
        width: 90%;
      }
    }
    .slide-title {
      font-size: 24px;
      margin-bottom: 24px;
    }
    .slide-text {
      font-size: 16px;
      margin-bottom: 0px;
    }
  }

  .tabs {
    text-align: left;
    ::v-deep {
      .v-tabs-bar {
        .v-tab {
          margin-bottom: 0px;
          font-size: 16px;
          padding-left: 24px;
        }
      }
      .v-slide-group__content {
        position: relative;
        &::before {
          position: absolute;
          border-radius: 2px;
          top: 14px;
          bottom: 14px;
          background: rgba(255, 255, 255, 0.2);
          width: 4px;
          content: " ";
          display: block;
        }
      }
    }
  }
}
</style>
