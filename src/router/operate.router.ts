import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'

const operateRoutes: Array<RouteConfig> = [
  {
    path: '/operate',
    name: 'Operate',
    component: Layout,
    meta: { title: '运营中心', icon: 'guide', keepAlive: false },
    children: [
      {
        path: 'feedback',
        name: 'Feedback',
        component: () => import('@/views/operate/feedback/index.vue'),
        meta: { title: '反馈管理', keepAlive: false }
      },
      {
        path: 'notice',
        name: 'Notice',
        component: () => import('@/views/operate/notice/index.vue'),
        meta: { title: '公告管理', keepAlive: false }
      }
    ]
  }
]

export default operateRoutes
