<template>
  <v-app :style="{ background: `${pageBgColor} !important` }">
    <!-- <f-app-bar app align="center" title=""></f-app-bar> -->
    <v-content>
      <nuxt />
    </v-content>
    <toast />
    <global-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";

@Component({
  middleware: "i18n",
  components: {
    "global-footer": Footer,
  },
})
class DefaultLayout extends Vue {
  get pageBgColor() {
    return this.$store.state.app.pageBgColor;
  }
}
export default DefaultLayout;
</script>

<style lang="scss" scoped></style>
