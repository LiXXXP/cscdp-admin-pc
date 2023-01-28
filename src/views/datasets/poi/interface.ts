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
