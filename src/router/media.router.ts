import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'

const appRoutes: Array<RouteConfig> = [
  {
    path: '/media',
    name: 'Media',
    component: Layout,
    meta: { title: '融媒体中心', icon: 'dynamic', keepAlive: false },
    children: [
      {
        path: 'classify',
        name: 'Classify',
        component: () => import('@/views/media/classify/index.vue'),
        meta: { title: '内容分类', keepAlive: false }
      },
      {
        path: 'manage',
        name: 'Manage',
        component: () => import('@/views/media/manage/index.vue'),
        meta: { title: '内容管理', keepAlive: false }
      }
    ]
  }
]

export default appRoutes
