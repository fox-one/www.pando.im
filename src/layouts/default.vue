<template>
  <v-app :style="{ background: `${pageBgColor} !important` }">
    <app-nav />
    <v-main>
      <nuxt />
    </v-main>
    <toast />
    <global-footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";
import AppNav from "@/components/AppNav.vue";

@Component({
  components: {
    "global-footer": Footer,
    AppNav,
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
