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

export interface totalObjType {
  totalUser: string | number
  totalEnterprise: string | number
}
export interface tableType {
  activeUser: string | number
  addedEnterPrise: string | number
  addedUser: string | number
  date: string
  totalEnterprise: string | number
  totalUser: string | number
}
