<template>
  <section class="section mb-10" ref="section">
    <div class="bg-image" />
    <div class="section-inner" ref="inner">
      <h3 class="section-title mb-5">{{ $t("dev.title") }}</h3>
      <div class="mb-5 f-greyscale-3 px-5">
        {{ $t("dev.text") }}
      </div>
      <div class="buttons mt-4 d-flex">
        <nuxt-link to="/3rd-party-apps" class="button-wrapper">
          <f-button color="primary" x-large class="button">{{
            $t("showcases")
          }}</f-button>
        </nuxt-link>
        <a href="https://docs.pando.im/developer/intro" class="button-wrapper">
          <f-button color="secondary" x-large class="button">{{
            $t("learn_more")
          }}</f-button>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class DevSection extends Vue {}
export default DevSection;
</script>

<style lang="scss" scoped>
.section {
  max-width: 960px;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
}
.bg-image {
  background: transparent url(~/assets/images/dev-bg.png) no-repeat center
    center;
  background-size: cover;
  height: 100%;
  width: 100vw;
  position: absolute;
  display: block;
  content: " ";
  left: 50%;
  transform: translateX(-50%);
}
.section-inner {
  padding: 72px 0;
  margin: 0;
  min-height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  .buttons {
    text-align: center;
    justify-content: center;
    .button-wrapper {
      padding-left: 24px;
      padding-right: 24px;
      margin: 0 8px;
    }
  }
  .secondary {
    background: white !important;
    color: #000;
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
    padding: 20px 0 20px 0;
    margin-left: 20px;
    margin-right: 20px;
    .section-title {
      padding: 0 20px;
    }
    .buttons {
      flex-direction: column;
      .button-wrapper {
        padding: 0 20px;
        margin-bottom: 20px;
        .button {
          width: 100%;
          margin: 0 !important;
        }
      }
    }
  }
}
</style>
