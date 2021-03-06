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
          <v-btn depressed icon class="menu-toggle" v-on="on" aria-label="menu">
            <v-icon>$FIconMenuBold</v-icon>
          </v-btn>
        </template>
        <v-card>
          <div class="pa-2">
            <v-btn
              depressed
              icon
              class="menu-toggle"
              @click="dialog = false"
              aria-label="menu"
            >
              <v-icon>$FIconClose</v-icon>
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
              @click="goto(item)"
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
      <nuxt-link :to="localePath('/')">
        <v-avatar size="24">
          <v-img src="/favicon.png" />
        </v-avatar>
      </nuxt-link>

      <v-spacer></v-spacer>

      <div v-for="(item, ix) in navItems" :key="`nav-item-${ix}`">
        <nuxt-link v-if="item.route" :to="localePath(item.route)">
          <span
            class="nav-item-text body-2 font-weight-bold greyscale_3--text"
            :class="
              currentRouteName === item.name
                ? 'greyscale_1--text'
                : 'greyscale_4--text'
            "
          >
            {{ item.label }}
          </span>
        </nuxt-link>
        <a v-else :href="item.url" target="_blank">
          <span
            class="nav-item-text body-2 font-weight-bold greyscale_3--text"
            :class="
              currentRouteName === item.name
                ? 'greyscale_1--text'
                : 'greyscale_4--text'
            "
          >
            {{ item.label }}
          </span>
        </a>
      </div>
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
        name: "catkin",
        icon: require("~/assets/images/products/catkin.png"),
        label: this.$t("product.catkin.title_short"),
        url: "https://catkin.pando.im",
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

  goto(item) {
    this.dialog = false;
    if (item.router) {
      this.$router.push(item.route);
    } else {
      window.location.href = item.url;
    }
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
  .nav-item-text {
    font-size: 16px;
    margin: 0 24px;
    letter-spacing: 0;
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
