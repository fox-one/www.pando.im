<template>
  <div class="section">
    <div class="section-inner d-flex">
      <div class="left">
        <img class="image" :src="image" />
      </div>

      <div class="right d-flex">
        <div class="content d-flex">
          <h3 class="section-title mb-5">{{ title }}</h3>
          <ul class="features">
            <li v-for="feat in features" :key="feat.name" class="feat d-flex">
              <img :src="feat.icon" class="icon mr-4" />
              <div class="feat-content mb-5">
                <h4 class="f-title-2 mb-0">{{ feat.title }}</h4>
                <div class="f-body-2 f-greyscale-3">{{ feat.text }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
.section-inner {
  flex-wrap: wrap;
  max-width: 960px;
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
    .content {
      flex-direction: column;
      padding-left: 80px;
      width: 100%;
      .features {
        list-style: none;
        padding: 0;
        .feat {
          flex-direction: row;
          text-align: left;
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
  .section-inner {
    text-align: center;
    flex-direction: column-reverse;
    .left {
      padding-top: 40px;
      .image {
        width: 80%;
      }
    }
    .right {
      .content {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
}
</style>
