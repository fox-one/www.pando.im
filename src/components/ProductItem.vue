<template>
  <div class="product-wrapper">
    <div class="product" :class="product.name" :style="productStyles">
      <div class="product-icon">
        <v-img
          :width="32"
          :height="32"
          :src="product.icon"
          :alt="'icon of ' + product.title"
          class="product-icon-image mb-4"
        />
        <v-img
          :width="32"
          :height="32"
          :src="product.icon_hover"
          :alt="'icon of ' + product.title"
          class="product-icon-image product-icon-image-hover mb-4"
        />
      </div>
      <div class="product-title mb-4">{{ product.title }}</div>
      <div class="product-subtitle mb-4">{{ product.subtitle }}</div>
      <div class="product-buttons">
        <a
          v-if="product.launch_label"
          :href="product.url"
          class="product-button d-flex align-center"
          target="_blank"
        >
          {{ product.launch_label }}
          <v-icon :size="16" color="black" class="product-button-icon ml-2">{{
            $icons.mdiArrowRight
          }}</v-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class ProductItem extends Vue {
  @Prop() product: any;

  get productStyles() {
    return { "background-color": this.product?.bg_color || "#fafafa" };
  }
}
export default ProductItem;
</script>

<style lang="scss" scoped>
.product-wrapper {
  width: 50%;
  height: 340px;
  padding: 4px;
}
.product {
  background-color: #f1fdf3;
  height: 100%;
  padding: 48px;
  position: relative;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
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
}
.product-title {
  font-size: 24px;
  font-weight: bold;
}
.product-subtitle {
  font-size: 14px;
  max-width: 50%;
}
.product-buttons {
  position: absolute;
  bottom: 48px;
  left: 48px;
  .product-button {
    font-weight: 600;
    color: black;
    font-size: 14px;
    transition: all 0.2s ease-in-out;
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
}
@media only screen and (max-width: 600px) {
  .product-wrapper {
    width: 100%;
    padding: 20px;
    .product {
      padding: 24px;
      .product-buttons {
        position: absolute;
        bottom: 24px;
        left: 24px;
      }
    }
  }
}
</style>
