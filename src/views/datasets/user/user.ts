import { reactive, ref, onMounted } from 'vue'
import { chartsDataType, totalObjType, tableType } from './interface'
import api from '@/api/datasets/user'
import { chartsMethod } from '@/components/charts/charts-data'
import { nextTick } from 'process'

export const userState = () => {
  const dateTime = reactive({
    startDate: '',
    endDate: ''
  })
  const totalObj: totalObjType = reactive({
    totalUser: '',
    totalEnterprise: ''
  })
  // echarts数据
  const chartsDataObj: chartsDataType = reactive({
    xAxisData: [],
    series: [],
    legendData: ['总个人用户数(人)', '新增个人用户数(人)', '日活个人用户数(人)', '总企业数', '新增企业数'],
    title: '用户增长趋势'
  })
  const tableData = ref<tableType[]>([])
  // 汇总统计
  const getInfo = async () => {
    const res = await api.adminUserSummaryInquiry({})
    totalObj.totalUser = res.body.totalUser
    totalObj.totalEnterprise = res.body.totalEnterprise
  }
  // 趋势图和表格
  const getChartsData = async () => {
    const params = {
      startDate: dateTime.startDate,
      endDate: dateTime.endDate
    }
    const res = await api.adminUserTrendListInquiry(params)
    tableData.value = res.body.dataList
    const chartsDataList = res.body.dataList
    const chartsData = chartsMethod(chartsDataList, 'user', chartsDataObj.legendData)
    chartsDataObj.series = chartsData.seriesList.value
    chartsDataObj.xAxisData = chartsData.xAxisList.value[0]
  }

  const dateChange = (form: any) => {
    dateTime.startDate = form[0]
    dateTime.endDate = form[1]
    getChartsData()
  }
  const yearMonthChange = (form: any) => {
    dateTime.startDate = form[0]
    dateTime.endDate = form[1]
    getChartsData()
  }
  onMounted(() => {
    getInfo()
    getChartsData()
  })
  return { totalObj, chartsDataObj, tableData, dateChange, yearMonthChange }
}
