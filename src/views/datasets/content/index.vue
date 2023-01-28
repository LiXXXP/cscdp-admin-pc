<template>
  <div>
    <div>
      <headerCard />
    </div>
    <div>
      <pieCharts></pieCharts>
    </div>
    <SearchForm @date-change="dateChange" @year-month-change="yearMonthChange" />
    <div class="gwin-platform-charts">
      <Charts
        v-if="chartsDataObj.series.length > 0"
        :x-axis-data="chartsDataObj.xAxisData"
        :legend-data="chartsDataObj.legendData"
        :series="chartsDataObj.series"
        :title="chartsDataObj.title"
        :legend-show="true"
        :height="'550px'"
        :width="'100%'"
      />
    </div>
    <div class="gwin-platform-charts">
      <Charts
        v-if="consumption.series.length > 0"
        :x-axis-data="consumption.xAxisData"
        :legend-data="consumption.legendData"
        :series="consumption.series"
        :title="consumption.title"
        :legend-show="true"
        :height="'550px'"
        :width="'100%'"
      />
    </div>
    <el-card class="box-card">
      <table-card></table-card>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import headerCard from './header-card/header.vue'
import SearchForm from '@/components/seachForm/index.vue'
import Charts from '@/components/charts/index.vue'
import tableCard from './table.vue'
import pieCharts from './poi-charts/pie-charts.vue'

import { contentState } from './content'
const { chartsDataObj, consumption, dateChange, yearMonthChange } = contentState()
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

.header-title {
  margin: 20px;
  font-weight: bold;
}
@include b('table') {
  width: 100%;
  max-height: 400px;
  margin: 10px 20px;
}
@include b('charts') {
  margin: 20px 0;
}
</style>
