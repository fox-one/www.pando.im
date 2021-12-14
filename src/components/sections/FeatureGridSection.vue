<template>
  <div class="section">
    <div class="section-inner d-flex">
      <div class="content d-flex">
        <h3 v-if="title" class="section-title mb-5">{{ title }}</h3>
        <div class="features d-flex">
          <v-row class="feature">
            <v-col
              cols="12"
              md="6"
              lg="3"
              v-for="feat in features"
              :key="feat.name"
              class="feat d-flex"
            >
              <img :src="feat.icon" class="icon mb-4" />
              <div class="feat-content">
                <h4 class="feat-title f-title-2">{{ feat.title }}</h4>
                <div class="feat-text f-body-1 f-greyscale-3">
                  {{ feat.text }}
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FeatureListSection extends Vue {
  @Prop({ default: "" }) title!: string;
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
  flex-direction: column;
  .content {
    flex-direction: column;
    width: 100%;
    .features {
      list-style: none;
      padding: 0;
      .feat {
        flex-direction: column;
        text-align: left;
        .icon {
          width: 48px;
          height: 48px;
        }
        .feat-title {
          margin-bottom: 16px;
        }
        .feat-text {
          margin-bottom: 16px;
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
    text-align: center;
    .content {
      .features {
        .feat {
          align-items: center;
          padding: 0 20px 30px 20px;
          .feat-content {
            text-align: center;
          }
          .feat-title {
            margin-bottom: 8px;
          }
          .feat-text {
            margin-bottom: 8px;
          }
        }
      }
    }
  }
}
</style>
