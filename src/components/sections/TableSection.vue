<template>
  <v-container class="section">
    <div class="section-inner d-flex">
      <h3 class="section-title mb-5">{{ title }}</h3>
      <div v-if="text" class="f-body-2 f-greyscale-3 mb-5">{{ text }}</div>
      <div class="table-wrapper py-10">
        <table class="table" border="0" cellspacing="0">
          <thead>
            <tr>
              <th
                v-for="(th, ix) in header"
                :key="`th-${ix}`"
                :class="
                  getCellCls(
                    th,
                    true,
                    true,
                    true,
                    ix === 1,
                    ix === header.length - 1,
                  )
                "
              >
                <div class="cell-inner d-flex">
                  <img v-if="th.icon" :src="th.icon" />
                  <span>{{ th.label }}</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, iz) in rows" :key="`tr-${iz}`">
              <td
                v-for="(td, ix) in row"
                :key="`td-${ix}`"
                :class="
                  getCellCls(
                    td,
                    false,
                    iz === 0,
                    iz === rows.length - 1,
                    ix === 1,
                    ix === row.length - 1,
                  )
                "
              >
                {{ td.label }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
class TableSection extends Vue {
  @Prop({ default: "title" }) title!: string;
  @Prop({ default: "" }) text!: string;
  @Prop({ default: [] }) header!: string;
  @Prop({ default: [] }) rows!: string;

  getCellCls(cell, isHeader, isFirstRow, isLastRow, isFirst, isLast) {
    const cls: Array<string> = ["cell"];
    if (cell.colHead) {
      cls.push("col-head f-greyscale-3 f-body-2");
    }
    if (cell.hlight) {
      cls.push("hlight");
    }
    if (isHeader) {
      if (isFirst) {
        cls.push("radius-top-left");
      }
      if (isLast) {
        cls.push("radius-top-right");
      }
    } else {
      if (isLastRow) {
        cls.push("last-row");
        if (isFirst) {
          cls.push("radius-bottom-left");
        }
        if (isLast) {
          cls.push("radius-bottom-right");
        }
      }
    }
    return cls.join(" ");
  }
}
export default TableSection;
</script>

<style lang="scss" scoped>
.section-inner {
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  .table-wrapper {
    width: 100%;
    overflow-x: auto;
    padding: 0 20px;
  }
}
.table {
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
  table-layout: fixed;
}
.cell {
  padding: 20px 16px;
  background-color: #f9f9f9;
  .cell-inner {
    justify-content: center;
  }
  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  &.col-head {
    text-align: left;
    background-color: #fff;
    min-width: 160px;
    padding: 20px 0;
    .cell-inner {
      justify-content: flex-start;
    }
  }
  &.hlight {
    background-color: #2d2d2d;
    color: #fff;
    font-weight: bold;
  }
  &.radius-top-left {
    border-top-left-radius: 8px;
  }
  &.radius-bottom-left {
    border-bottom-left-radius: 8px;
  }
  &.radius-top-right {
    border-top-right-radius: 8px;
  }
  &.radius-bottom-right {
    border-bottom-right-radius: 8px;
  }
}
@media only screen and (max-width: 600px) {
}
</style>
