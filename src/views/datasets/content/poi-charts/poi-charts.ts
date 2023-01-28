import { reactive, onMounted } from 'vue'
import api from '@/api/datasets/content'
import { chartsDataType } from '../interface'
export const pieChartState = () => {
  // 内容类型饼状图
  const contentPieData: chartsDataType = reactive({
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: [],
        label: {
          formatter: '{b}: {d}%'
        }
      }
    ],
    title: '内容类型分布'
  })
  // 内容栏目饼状图
  const partPieData: chartsDataType = reactive({
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: []
      }
    ],
    title: '内容栏目分布'
  })
  // 内容数据汇总
  const contentCountObj = reactive({
    todayBrowseCount: '',
    todayBrowseUser: '',
    totalBrowseCount: '',
    totalBrowseUser: ''
  })
  // 内容类型接口
  const typeSummaryInquiry = async () => {
    const res = await api.adminNewsTypeSummaryInquiry({})
    contentPieData.series[0].data = res.body.dataList
  }
  // 内容栏目接口
  const summaryInquiry = async () => {
    const res = await api.adminNewsCategorySummaryInquiry({})
    partPieData.series[0].data = res.body.dataList
  }
  // 内容汇总接口
  const contentCountInfo = async () => {
    const res = await api.adminNewsBrowseSummaryInquiry({})
    contentCountObj.todayBrowseCount = res.body.todayBrowseCount
    contentCountObj.todayBrowseUser = res.body.todayBrowseUser
    contentCountObj.totalBrowseCount = res.body.totalBrowseCount
    contentCountObj.totalBrowseUser = res.body.totalBrowseUser
  }
  onMounted(() => {
    typeSummaryInquiry()
    summaryInquiry()
    contentCountInfo()
  })
  return {
    contentPieData,
    partPieData,
    contentCountObj
  }
}
