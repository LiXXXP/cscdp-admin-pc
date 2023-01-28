<template>
  <div class="gwin-platform-pie-box flex flex-between">
    <div class="gwin-platform-pie-box__item">
      <el-card class="box-card">
        <Charts
          v-if="contentPieData.series.length > 0"
          :series="contentPieData.series"
          :title="contentPieData.title"
          :height="'200px'"
          :width="'100%'"
          :legend-show="false"
        ></Charts>
      </el-card>
    </div>
    <div class="gwin-platform-pie-box__item">
      <el-card class="box-card">
        <Charts
          :series="partPieData.series"
          :title="partPieData.title"
          :height="'200px'"
          :width="'100%'"
          :legend-show="false"
        ></Charts>
      </el-card>
    </div>
    <div class="gwin-platform-pie-box__item">
      <el-card class="box-card">
        <p class="gwin-platform-title">内容数据</p>
        <div class="gwin-platform-right-data flex flex-wrap">
          <div class="gwin-platform-right-data__item">
            <p>{{ contentCountObj.todayBrowseCount }}</p>
            <p>今日浏览次数</p>
          </div>
          <div class="gwin-platform-right-data__item">
            <p>{{ contentCountObj.todayBrowseUser }}</p>
            <p>今日浏览人数</p>
          </div>
          <div class="gwin-platform-right-data__item">
            <p>{{ contentCountObj.totalBrowseCount }}</p>
            <p>总浏览次数</p>
          </div>
          <div class="gwin-platform-right-data__item">
            <p>{{ contentCountObj.totalBrowseUser }}</p>
            <p>总浏览人数</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { pieChartState } from './poi-charts'
import Charts from '@/components/charts/index.vue'
const { contentPieData, partPieData, contentCountObj } = pieChartState()
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';

@include b('pie-box') {
  margin: 20px 0;
}

@include e('item') {
  width: 32%;
}
@include b('title') {
  margin: 20px 0 0 20px;
  font-weight: bold;
}
@include b('right-data') {
  width: 100%;
  height: 200px;
}
@include e('item') {
  width: 50%;
  height: 100px;
  text-align: center;
  p:nth-of-type(1) {
    padding-top: 20px;
    font-size: 24px;
    font-weight: 900;
  }
  p:nth-of-type(2) {
    padding-top: 10px;
    color: #999;
    font-size: 12px;
  }
}
</style>
