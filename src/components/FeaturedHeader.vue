<template>
  <section class="section" ref="section">
    <div class="section-inner" ref="inner" :style="style">
      <div class="content d-flex">
        <div class="left">
          <div class="top mb-10">
            <div :style="{ backgroundImage: `url(${logo})` }" class="logo" />
          </div>
          <h1 class="section-title mb-5">{{ title }}</h1>
          <div class="buttons">
            <a :href="primaryButton.url" class="button-wrapper">
              <f-button class="button primary">{{
                primaryButton.label
              }}</f-button>
            </a>
            <a :href="secondaryButton.url" class="button-wrapper">
              <f-button class="button secondary" type="">{{
                secondaryButton.label
              }}</f-button>
            </a>
          </div>
        </div>
        <div class="right">
          <div
            :style="{ backgroundImage: `url(${picture})` }"
            class="picture"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FeaturedHeader extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) name!: string;
  @Prop({ default: "" }) logo!: string;
  @Prop({ default: "" }) picture!: string;
  @Prop({ default: "" }) color!: string;
  @Prop({ default: "" }) bgColor!: string;
  @Prop({ default: null }) primaryButton!: any;
  @Prop({ default: null }) secondaryButton!: any;

  mounted() {
    setTimeout(() => {
      const section = this.$refs.section as any;
      const inner = this.$refs.inner as any;
      section.style.height = inner.offsetHeight + "px";
    }, 100);
  }

  get style() {
    return {
      "background-color": this.bgColor,
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
.left {
  flex: 1;
  .logo {
    height: 40px;
    display: inline-block;
    background-size: contain;
    width: 100%;
  }
  .section-title {
    font-size: 32px;
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
@media only screen and (max-width: 600px) {
  .section-inner {
    .content {
      flex-direction: column;
    }
  }
  .left {
    padding: 0 20px;
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
