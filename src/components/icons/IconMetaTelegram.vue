<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4743 4.65911C19.4743 4.65911 21.1393 4.00982 21 5.58653C20.9542 6.23582 20.538 8.50852 20.214 10.9664L19.1041 18.2478C19.1041 18.2478 19.0115 19.3145 18.1788 19.5C17.3465 19.6852 16.0977 18.8508 15.8662 18.6652C15.6811 18.5259 12.3974 16.4388 11.2412 15.4188C10.9172 15.1402 10.5469 14.5839 11.2875 13.9346L16.1435 9.29666C16.6985 8.74038 17.2535 7.44181 14.941 9.01852L8.46535 13.4242C8.46535 13.4242 7.72522 13.8884 6.33795 13.4709L3.33114 12.5431C3.33114 12.5431 2.22115 11.8475 4.11755 11.1519C8.74306 8.97223 14.4331 6.74624 19.4743 4.65911Z"
      :fill="colors[isDark ? 0 : 1]"
    />
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class IconMetaTwitter extends Vue {
  get isDark() {
    return this.$store.state.app.dark;
  }

  get colors() {
    return ["rgba(255,255,255,1)", "rgba(0,0,0,1)"];
  }
}
export default IconMetaTwitter;
</script>

<style lang="scss" scoped>
.icon {
  fill: currentColor;
}
</style>
