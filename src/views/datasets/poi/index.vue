<template>
  <div>
    <headerCard></headerCard>
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
        v-if="poichartsObj.series.length > 0"
        :x-axis-data="poichartsObj.xAxisData"
        :legend-data="poichartsObj.legendData"
        :series="poichartsObj.series"
        :title="poichartsObj.title"
        :legend-show="true"
        :height="'550px'"
        :width="'100%'"
      />
    </div>
    <el-card class="gwin-platform-table-card">
      <table-card></table-card>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import headerCard from './header/header.vue'
import SearchForm from '@/components/seachForm/index.vue'
import Charts from '@/components/charts/index.vue'
import tableCard from './table/table.vue'
import { poiState } from './poi'

const { chartsDataObj, poichartsObj, dateChange, yearMonthChange } = poiState()
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

@include b('table') {
  width: 100%;
  max-height: 400px;
  margin: 10px 20px;
}
.el-select {
  width: 10%;
  margin-left: 20px;
}
@include b('charts') {
  margin: 20px 0;
}
</style>
