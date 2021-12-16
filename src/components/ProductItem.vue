<template>
  <div class="product-wrapper">
    <div
      class="product"
      :class="`${product.name} ${disableAni ? 'no-ani' : 'ani'}`"
      :style="productStyles"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
      @click="goto(product)"
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

        <h3 class="product-title mb-2">{{ product.title }}</h3>

        <div class="product-subtitle mb-3">{{ product.subtitle }}</div>

        <div v-if="product.route" class="product-buttons">
          <nuxt-link :to="product.route">
            <a
              v-if="product.help_label"
              :href="product.help_url"
              class="product-help-link d-flex align-center"
              target="_blank"
            >
              {{ product.help_label }}
              <v-icon
                :size="16"
                color="black"
                class="product-button-icon ml-1"
                >{{ $icons.mdiArrowRight }}</v-icon
              >
            </a>
          </nuxt-link>
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

  get disableAni() {
    if (!this.product.runnable || this.$utils.helper.isMobile()) {
      return true;
    }
    return false;
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

  goto(item) {
    if (item.route) {
      this.$router.push(item.route);
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
.product.no-ani {
  cursor: default;
  .product-screenshot-image {
    transform: rotateZ(5deg) !important;
  }
  .product-screenshot-frame-image {
    display: none !important;
  }
}
.product {
  background-color: #f1fdf3;
  height: 100%;
  padding: 40px;
  position: relative;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  .product-icon-image {
    display: block;
  }
  .product-icon-image.product-icon-image-hover {
    display: none;
  }
  &.leaf {
    background: linear-gradient(139.54deg, #f1fdf3 55.1%, #f1fdf3 87.88%);
    .product-button:hover {
      ::v-deep {
        .v-btn__content {
          color: #c0f243;
        }
      }
    }
  }
  &.lake {
    background: linear-gradient(139.54deg, #edfbfc 55.1%, #edfbfc 87.88%);
    .product-button:hover {
      ::v-deep {
        .v-btn__content {
          color: #6feaf6;
        }
      }
    }
  }
  &.rings {
    background: linear-gradient(139.54deg, #fefaf3 55.1%, #fefaf3 87.88%);
    .product-button:hover {
      ::v-deep {
        .v-btn__content {
          color: #fbd644;
        }
      }
    }
  }
  .product-screenshot-image,
  .product-screenshot-frame-image {
    width: 200px;
    height: 391px;
    position: absolute;
    right: -14px;
    bottom: -120px;
    transform: rotateZ(5deg);
    transition: all 0.2s ease-in-out;
  }
  .product-screenshot-image {
    opacity: 1;
  }
  .product-screenshot-frame-image {
    opacity: 0;
  }
  .product-ani {
    height: 120px;
    width: 120px;
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
  .product-help-link:hover {
    .product-button-icon {
      transform: translateX(8px);
    }
  }
}
.product.ani:hover {
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
  .product-screenshot-image,
  .product-screenshot-frame-image {
    right: 0px;
    bottom: -120px;
    transform: rotateZ(0deg);
  }
  .product-screenshot-image {
    opacity: 0;
  }
  .product-screenshot-frame-image {
    opacity: 1;
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
