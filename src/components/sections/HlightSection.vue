<template>
  <v-container class="section">
    <div class="section-inner d-flex">
      <div class="left">
        <div class="content d-flex">
          <h3 class="section-title mb-5">{{ title }}</h3>
          <div class="text body-1 greyscale_3--text mb-5">
            <p v-for="(line, ix) in lines" :key="ix" v-html="line"></p>
          </div>
          <div class="">
            <a
              v-if="url"
              :href="url"
              class="launch-link d-flex align-center font-weight-bold"
              target="_blank"
            >
              {{ label }}
              <v-icon
                :size="16"
                color="primary"
                class="launch-link-icon ml-1"
                >{{ $icons.mdiArrowRight }}</v-icon
              >
            </a>
            <br />
            <a
              v-if="url2"
              :href="url2"
              class="launch-link d-flex align-center font-weight-bold"
              target="_blank"
            >
              {{ label2 }}
              <v-icon
                :size="16"
                color="primary"
                class="launch-link-icon ml-1"
                >{{ $icons.mdiArrowRight }}</v-icon
              >
            </a>
          </div>
        </div>
      </div>

      <div class="right">
        <img class="image" :src="image" />
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
  @Prop({ default: "" }) image!: string;
  @Prop({ default: "label" }) label!: string;
  @Prop({ default: "" }) url!: string;
  @Prop({ default: "label" }) label2!: string;
  @Prop({ default: "" }) url2!: string;

  get lines() {
    if (!this.text) return [];
    if (typeof this.text === "string") return [this.text];
    return this.text;
  }
}
export default HlightSection;
</script>

<style lang="scss" scoped>
.section {
  max-width: 1280px;
  padding-top: 72px;
  padding-bottom: 72px;
}
.section-inner {
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: space-between;
  .section-title {
    font-size: 32px;
  }
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    .image {
      max-height: 400px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .section {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .section-inner {
    text-align: center;
    flex-direction: column-reverse;
    .section-title {
      font-size: 24px;
    }
    .left {
      text-align: left;
      .content {
        padding-right: 20px;
        padding-left: 20px;
        .launch-link {
          justify-content: flex-start;
        }
      }
    }
    .right {
      padding-bottom: 20px;
      .image {
        width: 90%;
      }
    }
  }
}
</style>
