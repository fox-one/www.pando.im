<template>
  <v-container class="section">
    <div class="section-inner d-flex">
      <div class="left">
        <img class="image" :src="image" />
      </div>

      <div class="right d-flex">
        <div class="content d-flex">
          <h3 class="section-title mb-5">{{ title }}</h3>
          <ul class="features">
            <li
              v-for="feat in features"
              :key="feat.name"
              class="feat d-flex py-2"
            >
              <div class="feat-content mb-5">
                <h4 class="title-2 mb-0">{{ feat.title }}</h4>
                <div class="body-2 greyscale_3--text">{{ feat.text }}</div>
              </div>
              <img :src="feat.icon" class="icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FeatureListSection extends Vue {
  @Prop({ default: "title" }) title!: string;
  @Prop({ default: [] }) features!: string;
  @Prop({ default: "" }) image!: string;
}
export default FeatureListSection;
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
  .left {
    flex: 1;
    .image {
      max-height: 400px;
    }
  }
  .right {
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    .content {
      flex-direction: column;
      width: 100%;
      .section-title {
        font-size: 32px;
      }
      .features {
        list-style: none;
        padding: 0;
        .feat {
          flex-direction: row;
          text-align: left;
          justify-content: space-between;
          .icon {
            width: 48px;
            height: 48px;
          }
          .text {
            font-size: 14px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .section {
    padding-top: 48px;
    padding-bottom: 48px;
  }
  .section-inner {
    flex-direction: column;
    .left {
      text-align: center;
      .image {
        width: 80%;
      }
    }
    .right {
      margin-top: 40px;
      .content {
        padding-left: 20px;
        padding-right: 20px;
        .section-title {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
