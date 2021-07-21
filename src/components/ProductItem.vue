<template>
  <div class="product-wrapper">
    <div
      class="product"
      :class="product.name"
      :style="productStyles"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    >
      <div class="product-content">
        <div class="product-icon mb-3">
          <v-img
            :width="32"
            :height="32"
            :src="product.icon"
            :alt="'icon of ' + product.title"
            class="product-icon-image"
          />
          <v-img
            :width="32"
            :height="32"
            :src="product.icon_hover"
            :alt="'icon of ' + product.title"
            class="product-icon-image product-icon-image-hover"
          />
        </div>
        <div class="product-title mb-2">{{ product.title }}</div>
        <div class="product-subtitle mb-3">{{ product.subtitle }}</div>
        <a
          v-if="product.help_label"
          :href="product.help_url"
          class="product-help-link d-flex align-center"
          target="_blank"
        >
          {{ product.help_label }}
          <v-icon :size="16" color="black" class="product-button-icon ml-1">{{
            $icons.mdiArrowRight
          }}</v-icon>
        </a>
        <div class="product-buttons">
          <f-button
            v-if="product.launch_label"
            :href="product.launch_url"
            class="product-button d-flex align-center"
            target="_blank"
          >
            {{ product.launch_label }}
          </f-button>
        </div>
      </div>
      <div class="product-screenshot">
        <v-img
          class="product-screenshot-image"
          :src="`/screenshots/${product.name}.png`"
        />
        <v-img
          class="product-screenshot-frame-image"
          :src="`/screenshots/outline.png`"
        />
      </div>
      <div ref="ani" class="product-ani"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import lottie from "lottie-web";

@Component
class ProductItem extends Vue {
  @Prop() product: any;

  animation: any = null;

  hover = false;

  get productStyles() {
    return { "background-color": this.product?.bg_color || "#fafafa" };
  }

  mouseover() {
    this.hover = true;
    this.animation.play();
  }

  mouseleave() {
    this.hover = false;
    this.animation.stop();
  }

  mounted() {
    const ele = (this.$refs as any).ani;
    if (this.animation === null) {
      this.animation = lottie.loadAnimation({
        container: ele as Element, // the dom element that will contain the animation
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: `/animations/${this.product.name}.json`, // the path to the animation json
      });
    }
  }
}
export default ProductItem;
</script>

<style lang="scss" scoped>
.product-wrapper {
  width: 50%;
  height: 350px;
  padding: 4px;
}
.product {
  background-color: #f1fdf3;
  height: 100%;
  padding: 40px;
  position: relative;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: default;

  .product-icon-image {
    display: block;
  }
  .product-icon-image.product-icon-image-hover {
    display: none;
  }
  &.leaf {
    background: linear-gradient(139.54deg, #f1fdf3 55.1%, #f1fdf3 87.88%);
  }
  &.lake {
    background: linear-gradient(139.54deg, #edfbfc 55.1%, #edfbfc 87.88%);
  }
  &.rings {
    background: linear-gradient(139.54deg, #fefaf3 55.1%, #fefaf3 87.88%);
  }
  .product-screenshot-image,
  .product-screenshot-frame-image {
    width: 240px;
    height: 470px;
    position: absolute;
    right: -30px;
    bottom: -200px;
    transform: rotateZ(7deg);
  }
  .product-screenshot-image {
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }
  .product-screenshot-frame-image {
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  .product-ani {
    height: 100px;
    width: 100px;
    position: absolute;
    top: 160px;
    right: 40px;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  .product-title {
    font-size: 24px;
    font-weight: bold;
  }
  .product-subtitle {
    font-size: 14px;
    max-width: 60%;
  }
  .product-help-link {
    font-weight: 600;
    color: black;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
  }
  .product-buttons {
    position: absolute;
    bottom: 40px;
    left: 40px;
    .product-button {
      padding-left: 24px;
      padding-right: 24px;
      ::v-deep {
        .v-btn__content {
          font-size: 14px;
        }
      }
    }
  }
}
.product:hover {
  .product-icon-image {
    display: none;
  }
  .product-icon-image.product-icon-image-hover {
    display: block;
  }
  &.leaf {
    background: linear-gradient(139.54deg, #bff142 55.1%, #e6f48a 87.88%);
  }
  &.lake {
    background: linear-gradient(139.54deg, #6ee9f5 55.1%, #c4eaff 87.88%);
  }
  &.rings {
    background: linear-gradient(139.54deg, #fbd644 55.1%, #ffdaa3 87.88%);
  }
  .product-button-icon {
    transform: translateX(10px);
  }
  .product-screenshot-image {
    transform: rotateZ(0deg);
    opacity: 0;
  }
  .product-screenshot-frame-image {
    opacity: 1;
    transform: rotateZ(0deg);
  }
  .product-ani {
    opacity: 1;
  }
}
@media only screen and (max-width: 600px) {
  .product-wrapper {
    width: 100%;
    padding: 20px;
    .product {
      padding: 24px;
      .product-title {
        font-size: 20px;
        font-weight: bold;
      }
      .product-subtitle {
        font-size: 12px;
        max-width: 65%;
      }
      .product-buttons {
        position: absolute;
        bottom: 24px;
        left: 24px;
      }
      .product-screenshot-image,
      .product-screenshot-frame-image {
        width: 168px;
        height: 330px;
        position: absolute;
        right: -40px;
        bottom: -80px;
        transform: rotateZ(7deg);
      }
    }
  }
}
</style>
