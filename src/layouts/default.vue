<template>
  <v-app>
    <!-- <f-app-bar app align="center" title=""></f-app-bar> -->
    <v-content>
      <nuxt />
    </v-content>
    <toast />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  middleware: "i18n",
})
class DefaultLayout extends Vue {}
export default DefaultLayout;
</script>

<style lang="scss" scoped></style>
