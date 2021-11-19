<template>
  <section class="section" ref="section">
    <div class="section-inner" ref="inner">
      <h3 class="section-title mb-5">{{ title }}</h3>
      <div class="mb-5 f-greyscale-3">{{ text }}</div>

      <div class="dummy-members-wrapper">
        <div class="members dummy-members">
          <div class="member mb-5 pa-4"></div>
          <div class="member mb-5 pa-4"></div>
          <div class="member mb-5 pa-4"></div>
        </div>
        <div class="mask"></div>
      </div>

      <div class="members">
        <div
          class="member mb-5 pa-4"
          v-for="(mem, ix) in members"
          :key="`mem-${ix}`"
        >
          <img class="icon" :src="mem.icon" />
          <div class="f-title-2">
            <template v-if="mem.url">
              <a :href="mem.url" :title="mem.title" target="_blank">{{
                mem.title
              }}</a>
            </template>
            <template v-else>
              {{ mem.title }}
            </template>
          </div>
          <div class="f-body-2 f-greyscale-3">
            {{ mem.text }}
          </div>
        </div>
        <div class="member dummy-member mb-5 pa-4">
          <div class="f-body-2 f-greyscale-3">More MTG members...</div>
        </div>
      </div>

      <div class="dummy-members-wrapper">
        <div class="members dummy-members">
          <div class="member mb-5 pa-4"></div>
          <div class="member mb-5 pa-4"></div>
          <div class="member mb-5 pa-4"></div>
        </div>
        <div class="mask invert"></div>
      </div>
    </div>
  </section>
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
}
export default MtgSection;
</script>

<style lang="scss" scoped>
.section {
  clear: both;
  max-width: 960px;
  padding-top: 0;
  padding-bottom: 0;
  // position: relative;
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
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .members {
    display: flex;
    flex-wrap: wrap;
    max-width: 960px;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    .member {
      width: 309px;
      background: #fff;
      border-radius: 8px;
      .icon {
        width: 48px;
        height: 48px;
      }
    }
    .dummy-member {
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
    }
  }
}
@media only screen and (max-width: 600px) {
  .section-inner {
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
