<template>
  <div>
    <div class="gwin-platform-header">
      <el-card class="gwin-platform-header-card">
        <p class="header-title">汇总统计</p>
        <div class="gwin-platform-header-card__item">
          <p>{{ totalObj.totalUser }}</p>
          <p>总个人用户数（人）</p>
        </div>
        <div class="gwin-platform-header-card__item right">
          <p>{{ totalObj.totalEnterprise }}</p>
          <p>总企业数</p>
        </div>
      </el-card>
    </div>
    <SearchForm @date-change="dateChange" @year-month-change="yearMonthChange" />
    <div class="gwin-platform-charts">
      <Charts
        v-if="chartsDataObj.series.length > 0"
        :legend-data="chartsDataObj.legendData"
        :x-axis-data="chartsDataObj.xAxisData"
        :series="chartsDataObj.series"
        :title="chartsDataObj.title"
        :legend-show="true"
        :height="'550px'"
        :width="'100%'"
      />
    </div>
    <el-card class="gwin-platform-table-card">
      <p class="header-title">用户增长列表</p>
      <div class="gwin-platform-table">
        <el-table :data="tableData" max-height="400" stripe>
          <el-table-column prop="date" label="日期"> </el-table-column>
          <el-table-column prop="totalUser" label="当前个人用户"> </el-table-column>
          <el-table-column prop="addedUser" label="新增个人用户"> </el-table-column>
          <el-table-column prop="activeUser" label="日活个人用户"> </el-table-column>
          <el-table-column prop="totalEnterprise" label="总企业数"> </el-table-column>
          <el-table-column prop="addedEnterPrise" label="新增企业数"> </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import SearchForm from '@/components/seachForm/index.vue'
import Charts from '@/components/charts/index.vue'
import { userState } from './user'
const { totalObj, chartsDataObj, tableData, dateChange, yearMonthChange } = userState()
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@include b('header') {
  width: 100%;
  height: 200px;
}
@include b('header-card') {
  width: 100%;
  height: 100%;
  .right {
    margin-left: 200px;
  }
}

@include e('item') {
  display: inline-block;
  text-align: center;
  margin: 30px 80px 0;
  p:nth-of-type(1) {
    font-size: 24px;
    font-weight: 600;
  }
  p:nth-of-type(2) {
    font-size: 12px;
    margin-top: 10px;
  }
}
.header-title {
  margin: 20px;
  font-weight: bold;
}
@include b('table') {
  width: 100%;
  padding: 10px 20px;
}
@include b('charts') {
  margin: 20px 0;
}
</style>
