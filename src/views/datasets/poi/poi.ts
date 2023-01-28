import { reactive, onMounted } from 'vue'
import { chartsDataType } from './interface'
import api from '@/api/datasets/poi'
import { chartsMethod } from '@/components/charts/charts-data'
export const poiState = () => {
  const dateTime = reactive({
    startDate: '',
    endDate: ''
  })
  // 增长趋势数据
  const chartsDataObj: chartsDataType = reactive({
    xAxisData: [],
    series: [],
    legendData: ['总POI点数', '新增POI点数', '捐助点数', '新增捐助点数', 'AED点数', '新增AED点数'],
    title: '增长趋势'
  })
  // POI详情浏览趋势数据
  const poichartsObj: chartsDataType = reactive({
    xAxisData: [],
    series: [],
    legendData: ['总浏览次数', '新增浏览次数', '总浏览人数', '新增浏览人数'],
    title: 'POI点详情浏览趋势'
  })

  // 增长趋势接口
  const getChartsData = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate
    }
    const res = await api.adminWelfareTrendListInquiry(params)
    const chartsDataList = res.body.dataList
    const chartsData = chartsMethod(chartsDataList, 'poiIncrease', chartsDataObj.legendData)
    chartsDataObj.series = chartsData.seriesList.value
    chartsDataObj.xAxisData = chartsData.xAxisList.value[0]
  }
  // POI详情浏览趋势接口
  const getPoiIncrease = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate
    }
    const res = await api.adminWelfareBrowseListInquiry(params)
    const chartsDataList = res.body.dataList
    const chartsData = chartsMethod(chartsDataList, 'getPoiIncrease', poichartsObj.legendData)
    poichartsObj.series = chartsData.seriesList.value
    poichartsObj.xAxisData = chartsData.xAxisList.value[0]
  }

  const dateChange = (form: any) => {
    dateTime.startDate = form[0]
    dateTime.endDate = form[1]
    getChartsData()
    getPoiIncrease()
  }
  const yearMonthChange = (form: any) => {
    dateTime.startDate = form[0]
    dateTime.endDate = form[1]
    getChartsData()
    getPoiIncrease()
  }

  onMounted(() => {
    getChartsData()
    getPoiIncrease()
  })
  return {
    chartsDataObj,
    poichartsObj,
    dateChange,
    yearMonthChange
  }
}
