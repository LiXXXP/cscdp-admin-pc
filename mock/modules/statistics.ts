import { MockMethod } from 'vite-plugin-mock'

const statisticsMock: MockMethod[] = [
  {
    url: '/api/pwm/v1/datas',
    method: 'post',
    response: {
      body: {
        dataList: [
          {
            name: 'PV(页面浏览量)',
            data: 10000
          },
          {
            name: 'UV(独立访客)',
            data: 10000
          },
          {
            name: '内容发布数',
            data: 10000
          },
          {
            name: '内容浏览数',
            data: 10000
          },
          {
            name: '用户数',
            data: 10000
          },
          {
            name: 'POI点数',
            data: 10000
          },
          {
            name: '企业数',
            data: 10000
          }
        ]
      },
      status: {
        appName: 'web-component-admin-ui',
        duration: '10',
        errorCode: '',
        memo: '',
        replyCode: '',
        replyText: '',
        success: true
      }
    }
  }
]

export default statisticsMock
