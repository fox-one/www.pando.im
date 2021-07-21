<template>
  <div class="footer">
    <div class="footer-inner d-flex align-center mt-4">
      <div class="social-icons">
        <v-icon color="black">{{ $icons.mdiTwitter }}</v-icon>
      </div>
      <v-spacer />
      <div class="f-caption f-greyscale-3">Copyright © 2021 Pando</div>
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
.footer {
  margin-top: 100px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  height: 150px;
}
.footer-inner {
  max-width: 960px;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .footer-inner {
    padding-left: 20px;
    padding-right: 20px;
  }
}
</style>
