import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { chartsDataType, collectObjType, tableType } from './interface'
import api from '@/api/home/index'
import { chartsMethod } from '@/components/charts/charts-data'

export const homeState = () => {
  const router = useRouter()

  const tableData = ref<tableType[]>([])
  const collectObj: collectObjType = reactive({
    todayUser: '',
    totalUser: '',
    todayNews: '',
    totalNews: '',
    todayWelfare: '',
    totalWelfare: ''
  })
  // echarts数据
  const chartsDataObj: chartsDataType = reactive({
    xAxisData: [],
    series: [],
    legendData: ['当前内容数', '新增内容数', '当前用户量', '新增用户量', '当前POI点数', '新增POI点数'],
    title: '趋势分布'
  })
  // 汇总统计
  const getInfo = async () => {
    const res = await api.adminHomeSummaryInquiry({})
    collectObj.todayUser = res.body.todayUser
    collectObj.totalUser = res.body.totalUser
    collectObj.todayNews = res.body.todayNews
    collectObj.totalNews = res.body.totalNews
    collectObj.todayWelfare = res.body.todayWelfare
    collectObj.totalWelfare = res.body.totalWelfare
  }
  // 代办任务列表
  const getTaskList = async () => {
    const res = await api.adminHomeUpcomingListInquiry({})
    tableData.value = res.body.dataList
  }
  const getChartsData = async () => {
    const res = await api.adminHomeTrendListInquiry({})
    const chartsDataList = res.body.dataList
    const chartsData = chartsMethod(chartsDataList, 'home', chartsDataObj.legendData)
    chartsDataObj.series = chartsData.seriesList.value
    chartsDataObj.xAxisData = chartsData.xAxisList.value[0]
  }
  // 代办列表跳转
  const goDetail = (id: any) => {
    router.push({
      path: '/operate/feedback',
      query: { id: id }
    })
  }
  return { collectObj, tableData, chartsDataObj, getInfo, getTaskList, getChartsData, goDetail }
}
