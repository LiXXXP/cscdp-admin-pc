export interface chartsDataType {
  xAxisData?: string[]
  series: seriesObj[] | any
  legendData?: string[]
  title?: string
}
interface seriesObj {
  name?: string
  type: string
  label?: labelObj
  data: number[]
  radius: string
}
interface labelObj {
  show?: boolean
  postion?: string
  color?: string
  formatter?: string
}
