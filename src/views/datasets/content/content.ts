import { reactive, ref, onMounted } from 'vue'
import { chartsDataType } from './interface'
import api from '@/api/datasets/content'
import { chartsMethod } from '@/components/charts/charts-data'
export const contentState = () => {
  onMounted(() => {
    increaseChartsInfo()
    consumptionChartsInfo()
    limitTableInfo()
    personTableInfo()
  })
  const dateTime = reactive({
    startDate: '',
    endDate: ''
  })
  // 增长趋势
  const chartsDataObj: chartsDataType = reactive({
    xAxisData: [],
    series: [],
    legendData: ['总内容数', '新增内容数', '总图文数', '新增图文数', '总视频数', '新增视频数'],
    title: '增长趋势'
  })
  // 消费趋势
  const consumption: chartsDataType = reactive({
    xAxisData: [],
    series: [],
    legendData: ['总浏览次数', '新增浏览次数', '总浏览人数', '新增浏览人数'],
    title: '内容消费趋势'
  })
  // 两个表格数据
  const limitTable = ref([])
  const personTable = ref([])

  // 增长趋势接口
  const increaseChartsInfo = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate
    }
    const res = await api.adminNewsTrendListInquiry(params)
    const chartsDataList = res.body.dataList
    const chartsData = chartsMethod(chartsDataList, 'contentIncrease', chartsDataObj.legendData)
    chartsDataObj.series = chartsData.seriesList.value
    chartsDataObj.xAxisData = chartsData.xAxisList.value[0]
  }
  // 内容消费趋势接口
  const consumptionChartsInfo = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate
    }
    const res = await api.adminNewsBrowseListInquiry(params)
    const chartsDataList = res.body.dataList
    const chartsData = chartsMethod(chartsDataList, 'contentConsumption', consumption.legendData)
    consumption.series = chartsData.seriesList.value
    consumption.xAxisData = chartsData.xAxisList.value[0]
  }
  // 次数排名表格接口
  const limitTableInfo = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate,
      type: 1
    }
    const res = await api.adminNewsBrowseOrderListInquiry(params)
    limitTable.value = res.body.dataList
  }
  // 人次排名接口
  const personTableInfo = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate,
      type: 2
    }
    const res = await api.adminNewsBrowseOrderListInquiry(params)
    personTable.value = res.body.dataList
  }
  const dateChange = (form: any) => {
    dateTime.startDate = form[0]
    dateTime.endDate = form[1]
    increaseChartsInfo()
    consumptionChartsInfo()
    limitTableInfo()
    personTableInfo()
  }
  const yearMonthChange = (form: any) => {
    dateTime.startDate = form[0]
    dateTime.endDate = form[1]
    increaseChartsInfo()
    consumptionChartsInfo()
    limitTableInfo()
    personTableInfo()
  }
  return {
    chartsDataObj,
    consumption,
    limitTable,
    personTable,
    dateChange,
    yearMonthChange
  }
}
