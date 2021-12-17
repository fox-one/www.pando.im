<template>
  <v-container class="section" ref="section">
    <div class="section-inner" ref="inner">
      <h3 class="section-title mb-5">{{ title }}</h3>
      <div class="body-2 mb-5 greyscale_3--text px-5" v-html="text"></div>

      <div class="dummy-members-wrapper">
        <div class="members dummy-members">
          <div class="member mb-5"></div>
          <div class="member mb-5"></div>
          <div class="member mb-5"></div>
        </div>
        <div class="mask"></div>
      </div>

      <div class="members">
        <div
          class="member mb-5"
          :class="mem.dummy ? 'dummy-member' : ''"
          v-for="(mem, ix) in modifiedMembers"
          :key="`mem-${ix}`"
          @click="visit(mem)"
        >
          <template v-if="mem.dummy">
            <div class="body-2 greyscale_3--text">More MTG members...</div>
          </template>
          <template v-else>
            <img
              class="external-link-icon"
              :src="require('~/assets/images/external-link.svg')"
            />
            <img class="icon mb-2" :src="mem.icon" />
            <div class="body-2 font-weight-bold mb-2">
              <template v-if="mem.url">
                <a
                  :href="mem.url"
                  :title="mem.title"
                  target="_blank"
                  @click.stop="() => {}"
                  >{{ mem.title }}</a
                >
              </template>
              <template v-else>
                {{ mem.title }}
              </template>
            </div>
            <div class="body-2 greyscale_3--text">
              {{ mem.text }}
            </div>
          </template>
        </div>
      </div>

      <div class="dummy-members-wrapper">
        <div class="members dummy-members">
          <div class="member mb-5"></div>
          <div class="member mb-5"></div>
          <div class="member mb-5"></div>
        </div>
        <div class="mask invert"></div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class MtgSection extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: "" }) text!: string;
  @Prop({ default: [] }) members!: Array<any>;

  mounted() {
    setTimeout(() => {
      const section = this.$refs.section as any;
      const inner = this.$refs.inner as any;
      section.style.height = inner.offsetHeight + "px";
    }, 100);
  }

  visit(mem) {
    if (mem.url) {
      window.open(mem.url, "_blank");
    }
  }

  get modifiedMembers() {
    let mems = this.members.slice();
    if (mems.length % 3 === 1) {
      // insert 2 dummy members
      mems = mems.concat([{ dummy: true }, { dummy: true }]);
    } else if (mems.length % 3 === 2) {
      // insert one dummy member
      mems = mems.concat([{ dummy: true }]);
    }
    return mems;
  }
}
export default MtgSection;
</script>

<style lang="scss" scoped>
.section {
  max-width: 1280px;
  padding-top: 0;
  padding-bottom: 0;
}

.section-inner {
  background: #f9f9f9;
  padding: 72px 0;
  margin: 0;
  min-height: 100px;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .section-title {
    font-size: 32px;
  }

  .members {
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    .member {
      cursor: pointer;
      width: 416px;
      background: #fff;
      border-radius: 8px;
      position: relative;
      padding: 32px 16px;
      .icon {
        width: 44px;
        height: 44px;
        border-radius: 8px;
        filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.06));
      }
      .external-link-icon {
        position: absolute;
        top: 16px;
        right: 16px;
        height: 24px;
        width: 24px;
        display: none;
      }
    }
    .member:hover {
      .external-link-icon {
        display: block;
      }
    }
    .dummy-member {
      cursor: default;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .dummy-members {
    height: 62px;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 20px;
    .member {
      display: block;
      height: 62px;
    }
  }

  .dummy-members-wrapper {
    position: relative;

    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 62px;
      background: linear-gradient(
        180deg,
        #f9f9f9 0%,
        rgba(249, 249, 249, 0) 100%
      );
    }
    .mask.invert {
      transform: rotate(180deg);
      top: 3px;
    }
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
    padding: 40px 0;
    .section-title {
      font-size: 24px;
    }

    .members {
      flex-direction: column;
      align-items: center;
      padding-left: 20px;
      padding-right: 20px;
      .member {
        width: 100%;
        max-width: auto;
        margin: 0 0 20px 0;
      }
      .dummy-member {
        display: none;
      }
    }
    .dummy-members-wrapper {
      display: none;
    }
  }
}
</style>
