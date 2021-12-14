<template>
  <div class="nav">
    <div class="nav-inner">
      <nuxt-link class="nav-logo" to="/">PANDO</nuxt-link>
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
.nav {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 44px;
  z-index: 10;
}
.nav-inner {
  // max-width: 960px;
  margin: 0 auto 40px auto;
  padding: 20px;
  .nav-logo {
    background: transparent url(/favicon.png) no-repeat center center;
    background-size: contain;
    width: 32px;
    height: 32px;
    text-indent: -1000em;
    overflow: hidden;
  }
}
@media only screen and (max-width: 600px) {
}
</style>
