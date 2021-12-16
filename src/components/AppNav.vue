<template>
  <f-app-bar app dense elevation="0" :color="color">
    <div class="app-nav-inner d-flex is-mobile">
      <v-dialog
        v-model="dialog"
        fullscreen
        transition="dialog-top-transition"
        width="100vw"
      >
        <template v-slot:activator="{ on }">
          <v-btn depressed icon class="menu-toggle" v-on="on">
            <v-icon>$vuetify.icons.iconMenu</v-icon>
          </v-btn>
        </template>
        <v-card>
          <div class="pa-2">
            <v-btn depressed icon class="menu-toggle" @click="dialog = false">
              <v-icon>{{ $icons.mdiClose }}</v-icon>
            </v-btn>
          </div>
          <v-list>
            <v-list-item @click="goto('/')">
              <v-list-item-icon>
                <v-avatar size="32"
                  ><v-img :src="require('~/static/favicon.png')"
                /></v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <span
                  class="title"
                  :class="
                    currentRouteName === 'home'
                      ? 'greyscale_1--text'
                      : 'greyscale_3--text'
                  "
                  >{{ $t("home") }}</span
                >
              </v-list-item-content>
            </v-list-item>

            <v-list-item
              v-for="(item, ix) in navItems"
              :key="`nav-item-${ix}`"
              @click="goto(item.route)"
            >
              <v-list-item-icon>
                <v-avatar size="32"><v-img :src="item.icon" /></v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <span
                  class="title"
                  :class="
                    currentRouteName === item.name
                      ? 'greyscale_1--text'
                      : 'greyscale_3--text'
                  "
                >
                  {{ item.label }}
                </span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
    </div>
    <div class="app-nav-inner d-flex is-desktop">
      <nuxt-link to="/">
        <v-avatar size="24">
          <v-img src="/favicon.png" />
        </v-avatar>
      </nuxt-link>

      <v-spacer></v-spacer>

      <nuxt-link
        v-for="(item, ix) in navItems"
        :key="`nav-item-${ix}`"
        :to="item.route"
      >
        <span
          class="body-2 font-weight-bold mx-4 greyscale_3--text"
          :class="
            currentRouteName === item.name
              ? 'greyscale_1--text'
              : 'greyscale_4--text'
          "
        >
          {{ item.label }}
        </span>
      </nuxt-link>
    </div>
  </f-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
class AppNav extends Vue {
  dialog = false;

  get color() {
    return this.$store.state.app.pageBgColor || "white";
  }

  get navItems() {
    return [
      {
        name: "lake",
        icon: require("~/assets/images/products/lake.png"),
        label: this.$t("product.lake.title_short_both"),
        route: "/lake",
      },
      {
        name: "leaf",
        icon: require("~/assets/images/products/leaf.png"),
        label: this.$t("product.leaf.title_short"),
        route: "/leaf",
      },
      {
        name: "rings",
        icon: require("~/assets/images/products/rings.png"),
        label: this.$t("product.rings.title_short"),
        route: "/rings",
      },
      {
        name: "fennec",
        icon: require("~/assets/images/wallets/fennec.png"),
        label: this.$t("product.fennec.title"),
        route: "/fennec",
      },
    ];
  }

  get currentRouteName() {
    if (this.$route.name === "index") {
      return "home";
    }
    return this.$route.name;
  }

  goto(route) {
    this.dialog = false;
    this.$router.push(route);
  }
}
export default AppNav;
</script>

<style lang="scss" scoped>
.app-nav-inner {
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  &.is-desktop {
    display: flex !important;
  }
  &.is-mobile {
    display: none !important;
    .menu-toggle {
      transform: translateX(-16px);
      z-index: 10000;
    }
  }
}
@media only screen and (max-width: 600px) {
  .app-nav-inner {
    &.is-desktop {
      display: none !important;
    }
    &.is-mobile {
      display: flex !important;
    }
  }
}
</style>
