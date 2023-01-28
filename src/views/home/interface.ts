// echarts数据
export interface chartsDataType {
  xAxisData: string[]
  series: seriesObj[]
  legendData: string[]
  title: string
}
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
export interface collectObjType {
  todayUser: string | number
  totalUser: string | number
  todayNews: string | number
  totalNews: string | number
  todayWelfare: string | number
  totalWelfare: string | number
}

export interface tableType {
  id: string
  title: string
}
