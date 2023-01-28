<template>
  <el-card class="gwin-platform-card-box">
    <div>
      <p class="gwin-platform-title">{{ title }}</p>
    </div>
    <div id="myChart" ref="charts" :style="{ height: height, width: width }"></div>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import * as echarts from 'echarts/core'
import { BarChart, LineChart, PieChart } from 'echarts/charts'

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { watchEffect, watch } from '@vue/runtime-core'
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LegendComponent
])
/**
 *xAxisData: 横向X轴数据
 * series 每一项数据
 * legendShow  表头筛选展示
 * legendData 表头展示数据
 * title 标题
 * grid 调整图表距上下左右位置
 */
interface Props {
  xAxisData?: string[]
  series: seriesObj[]
  legendShow?: boolean
  legendData?: string[] | any
  title?: string
  height?: string
  width?: string
  grid?: gridObject
  xAxis?: any
  yAxis?: any
}
/**
 *name: 定义legendData筛选时必填
 * type 图表类型
 * data  图表数据
 * label 点上的文字展示
 */
interface seriesObj {
  name: string
  type: string
  data: number[]
  label: labelObj
}

interface labelObj {
  show: boolean
  postion: string
  color: string
}

interface gridObject {
  show?: boolean
  top?: number
  left?: number
  right?: number
  bottom?: number
  height?: string
}

const charts = ref()
const props = defineProps<Props>()
const axisLabel = reactive({
  interval: 0,
  rotate: 0
})
// charts各项数据
let setOptionObj = reactive(<Props>{
  // title每项筛选
  legend: {
    show: props.legendShow,
    data: props.legendData,
    itemGap: 30,
    textStyle: {
      fontSize: 14
    }
  },
  grid: props.grid,
  tooltip: {},
  xAxis: {
    data: props.xAxisData,
    axisLabel: axisLabel
  },
  yAxis: {},
  series: props.series
})

watchEffect(() => {
  // x轴过长字体旋转
  if (props.xAxisData && props.xAxisData.length > 10) {
    axisLabel.rotate = 30
  } else {
    axisLabel.rotate = 0
  }
  // 饼状图删掉X,Y轴
  if (props.series[0]?.type === 'pie' && charts.value !== undefined) {
    delete setOptionObj.xAxis
    delete setOptionObj.yAxis
    setOptionObj = reactive(<Props>{
      // 饼图数据
      series: props.series,
      tooltip: {}
    })
    chartInit()
  }
  // 数据改变更新试图
  if (props.xAxisData && charts.value !== undefined) {
    setOptionObj = reactive(<Props>{
      // title每项筛选
      legend: {
        show: props.legendShow,
        data: props.legendData,
        itemGap: 30,
        // left: 'center',
        // top: 'bottom'
        textStyle: {
          fontSize: 14
        }
      },
      grid: props.grid,
      // 鼠标移入点上提示框
      tooltip: {},
      // x轴数据
      xAxis: {
        data: props.xAxisData,
        // 字体旋转
        axisLabel: axisLabel
      },
      yAxis: {},
      // 折线数据
      series: props.series
    })
    chartInit()
  }
})
// 图表初始化
const chartInit = () => {
  const myChart = echarts.init(charts.value)
  window.onresize = function () {
    myChart.resize()
  }
  window.addEventListener('resize', function () {
    myChart.resize()
  })

  // 绘制图表
  myChart.setOption(setOptionObj, true)
}
</script>
<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@include b('title') {
  margin: 20px 0 0 20px;
  font-weight: bold;
}
</style>
