<template>
  <div class="section"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class FeaturedHeader extends Vue {
  @Prop({ default: "" }) title!: string;
}
export default FeaturedHeader;
</script>

<style lang="scss" scoped></style>
