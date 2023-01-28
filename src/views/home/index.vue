<template>
  <div class="gwin-platform-home">
    <div class="gwin-platform-header flex flex-between">
      <el-card class="gwin-platform-header-left">
        <p class="header-title">汇总统计</p>
        <div class="gwin-platform-header__chirld flex flex-around">
          <div class="gwin-platform-left-item flex">
            <div class="gwin-platform-left-item__item-icon">
              <img src="@/assets/img/home/user.png" />
            </div>
            <div class="gwin-platform-left-item__item-text">
              <p>用户数</p>
              <p>今日 {{ collectObj.todayUser }}</p>
              <p>总计 {{ collectObj.totalUser }}</p>
            </div>
          </div>
          <div class="gwin-platform-left-item flex">
            <div class="gwin-platform-left-item__item-icon">
              <img src="@/assets/img/home/content.png" />
            </div>
            <div class="gwin-platform-left-item__item-text">
              <p>内容数</p>
              <p>今日 {{ collectObj.todayNews }}</p>
              <p>总计 {{ collectObj.totalNews }}</p>
            </div>
          </div>
          <div class="gwin-platform-left-item flex">
            <div class="gwin-platform-left-item__item-icon">
              <img src="@/assets/img/home/poi.png" />
            </div>
            <div class="gwin-platform-left-item__item-text">
              <p>POI点数</p>

              <p>今日 {{ collectObj.todayWelfare }}</p>
              <p>总计 {{ collectObj.totalWelfare }}</p>
            </div>
          </div>
        </div>
      </el-card>
      <el-card class="gwin-platform-header-right">
        <p class="header-title">待办任务</p>
        <div v-if="tableData.length > 0" class="gwin-platform-header-right__table">
          <p v-for="(item, index) in tableData" :key="index" @click="goDetail(item.id)">
            {{ item.title }}
          </p>
        </div>
      </el-card>
    </div>
    <div class="gwin-platform-charts">
      <Charts
        v-if="chartsDataObj.series.length > 0"
        :x-axis-data="chartsDataObj.xAxisData"
        :series="chartsDataObj.series"
        :legend-data="chartsDataObj.legendData"
        :title="chartsDataObj.title"
        :legend-show="true"
        :height="'500px'"
        :width="'100%'"
      ></Charts>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import Charts from '@/components/charts/index.vue'
import { homeState } from './home'
const { collectObj, tableData, chartsDataObj, getInfo, getTaskList, getChartsData, goDetail } = homeState()
onMounted(() => {
  getInfo()
  getTaskList()
  getChartsData()
})
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@include b('header') {
  width: 100%;
  height: 250px;
}
@include b('header-left') {
  width: 69%;
  height: 100%;
}
@include b('header-right') {
  width: 30%;
  height: 100%;
}
@include e('table') {
  margin-left: 20px;
  margin-right: 20px;
  border-bottom: none;
  max-height: 180px;
  overflow: auto;
  p {
    border-bottom: 1px solid #d9d9d9;
    line-height: 42px;
    padding-left: 5px;
    font-size: 14px;
    font-weight: 400;
    color: #606a78;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  p:hover {
    cursor: pointer;
  }
}
@include b('left-item') {
  width: 30%;
  height: 100%;
  margin-top: 20px;
}

.header-title {
  margin: 20px;
  font-weight: bold;
}
@include e('item-icon') {
  padding: 10px 25px;
  img {
    width: 80px;
    height: 80px;
  }
  p {
    margin-left: 15px;
    margin-top: 8px;
  }
}
@include e('chirld') {
  align-items: center;
}

@include e('item-text') {
  padding-top: 10px;
  p {
    margin-top: 5px;
  }
  p:nth-of-type(1) {
    margin-top: 0;
    color: black;
    font-weight: 600;
  }
}
@include b('charts') {
  margin: 20px 0;
}
</style>
