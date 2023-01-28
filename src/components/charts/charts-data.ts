import { reactive, ref } from 'vue'
/**
 * 不同vue模块中调用该方法处理数据
 * dataList: 后台数据
 * type： 各个组件中使用该方法的标识
 * legendData： 各个组件的筛选标题
 */
export const chartsMethod = (dataList: any, type: string, legendData: any) => {
  // 二维数组，循环后与legendData中的名称对应
  const listdata = reactive<any>({
    arrList: []
  })
  // series数据
  const seriesList = ref<any>([])
  // x轴数据
  const xAxisList = ref<any>([])
  // series对象的所有数据类型
  type sertype = {
    name: string
    type: string
    data: string[]
    label: serObj
  }
  // label的类型
  type serObj = {
    show: boolean
    postion: string
    color: string
  }
  let objSer = reactive<sertype>({
    name: '',
    type: '',
    data: [],
    label: {
      show: true,
      postion: '',
      color: ''
    }
  })
  xAxisList.value.push(dataList.map((item: any) => item.date))
  // 首页
  if (type === 'home') {
    listdata.arrList.push(dataList.map((item: any) => item.currentNews))
    listdata.arrList.push(dataList.map((item: any) => item.addedNews))
    listdata.arrList.push(dataList.map((item: any) => item.currentUser))
    listdata.arrList.push(dataList.map((item: any) => item.addedUser))
    listdata.arrList.push(dataList.map((item: any) => item.currentWelfare))
    listdata.arrList.push(dataList.map((item: any) => item.addedWelfare))
  }
  // 用户统计
  if (type === 'user') {
    listdata.arrList.push(dataList.map((item: any) => item.totalUser))
    listdata.arrList.push(dataList.map((item: any) => item.addedUser))
    listdata.arrList.push(dataList.map((item: any) => item.activeUser))
    listdata.arrList.push(dataList.map((item: any) => item.totalEnterprise))
    listdata.arrList.push(dataList.map((item: any) => item.addedEnterPrise))
  }
  // 内容统计（增长趋势）
  if (type === 'contentIncrease') {
    listdata.arrList.push(dataList.map((item: any) => item.totalNews))
    listdata.arrList.push(dataList.map((item: any) => item.addedNews))
    listdata.arrList.push(dataList.map((item: any) => item.totalText))
    listdata.arrList.push(dataList.map((item: any) => item.addedText))
    listdata.arrList.push(dataList.map((item: any) => item.totalVideo))
    listdata.arrList.push(dataList.map((item: any) => item.addedVideo))
  }
  // 内容消费趋势
  if (type === 'contentConsumption') {
    listdata.arrList.push(dataList.map((item: any) => item.totalBrowseCount))
    listdata.arrList.push(dataList.map((item: any) => item.addedBrowseCount))
    listdata.arrList.push(dataList.map((item: any) => item.totalBrowseUser))
    listdata.arrList.push(dataList.map((item: any) => item.addedBrowseUser))
  }
  // POI增长趋势
  if (type === 'poiIncrease') {
    listdata.arrList.push(dataList.map((item: any) => item.totalPoi))
    listdata.arrList.push(dataList.map((item: any) => item.addedPoi))
    listdata.arrList.push(dataList.map((item: any) => item.totalDonate))
    listdata.arrList.push(dataList.map((item: any) => item.addedDonate))
    listdata.arrList.push(dataList.map((item: any) => item.totalAed))
    listdata.arrList.push(dataList.map((item: any) => item.addedAed))
  }
  // POI点详情浏览趋势
  if (type === 'getPoiIncrease') {
    listdata.arrList.push(dataList.map((item: any) => item.totalBrowseCount))
    listdata.arrList.push(dataList.map((item: any) => item.addedBrowseCount))
    listdata.arrList.push(dataList.map((item: any) => item.totalBrowseUser))
    listdata.arrList.push(dataList.map((item: any) => item.addedBroseUser))
  }
  // 名称循环，二维数组循环给series每条线赋值
  legendData.forEach((label: any, index: number) => {
    listdata.arrList.forEach((element: any, elindex: number) => {
      if (index === elindex) {
        objSer = {
          name: label,
          type: 'line',
          data: element,
          label: {
            show: true,
            postion: 'middle',
            color: 'black'
          }
        }
        seriesList.value.push(objSer)
      }
    })
  })
  // console.log(seriesList, 'series数据')
  return {
    seriesList,
    xAxisList
  }
}
