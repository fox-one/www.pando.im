<template>
  <div class="page">
    <section class="section" ref="section">
      <div class="section-inner">
        <div class="center">
          <div class="content">
            <h1 class="section-title text-center mb-10">
              {{ "Work at Pando" }}
            </h1>

            <div class="text body-1 greyscale_2--text mb-5">
              <div class="job mb-10">
                <h3 class="job-title mb-4 greyscale_1--text">
                  Front-end Developer
                </h3>

                <p>Base: Anywhere you want to be.</p>

                <p><em>What You’ll Do</em></p>

                <ul class="mb-4">
                  <li>
                    Conduct the front-end development for web-based projects
                  </li>
                  <li>
                    Collaborate remotely with a globally-based technical team
                  </li>
                  <li>
                    Collaborate with a squad of product manager, designer, QA
                    specialist and back-end developer on iterating on the
                    products to meet requirements
                  </li>
                  <li>
                    Research industry trends and new technologies to ensure our
                    standards and practices are current and poised to deliver
                    the best products possible
                  </li>
                </ul>

                <p><em>Required Qualifications</em></p>

                <ul class="mb-4">
                  <li>
                    Proficient understanding of the team development process.
                    Proficient in using Git for code management
                  </li>
                  <li>
                    Proficient knowledge of front-end tech stacks including but
                    not limited to Javascript and Typescript
                  </li>
                  <li>
                    Proficient understanding of front-end protocols such as
                    HTTP, etc.
                  </li>
                  <li>
                    Proficient knowledge of mainstream front-end frameworks
                    including but not limited to React and Vue (our work is
                    based on Vue)
                  </li>
                  <li>
                    Proficient knowledge of protocols including but not limited
                    to RESTful API and JSON-PRC
                  </li>
                  <li>Ability to conduct basic communications in English</li>
                </ul>

                <p><em>Preferred Qualifications</em></p>

                <ul class="mb-4">
                  <li>Experience with mobile and web development</li>
                  <li>Experience in collaborating remotely</li>
                  <li>Maintain long-term open-source project(s) of your own</li>
                  <li>
                    Contributed to well-known open-source front-end project(s)
                  </li>
                  <li>
                    If you are interested, please send your resume to
                    jobs@pando.im
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from "vue-property-decorator";
import mixins from "@/mixins";

@Component({
  components: {},
})
class JobsPage extends Mixins(mixins.page) {
  get title() {
    return "Work at Pando";
  }
}
export default JobsPage;
</script>

<style lang="scss" scoped>
.page {
  flex-direction: column;
  .section-inner {
    flex-wrap: wrap;
    max-width: 660px;
    margin: 0 auto;
    justify-content: space-between;
    .section-title {
      font-size: 32px;
    }
  }
  .job {
    .job-title {
      font-size: 22px;
    }
    em {
      font-style: normal;
      font-weight: bold;
    }
    ul {
      padding-left: 1em;
      line-height: 1.6;
    }
  }
}
</style>
