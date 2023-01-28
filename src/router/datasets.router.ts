import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'

const appRoutes: Array<RouteConfig> = [
  {
    path: '/datasets',
    name: 'Datasets',
    component: Layout,
    meta: { title: '数据中心', icon: 'gwin-management', keepAlive: false },
    redirect: '/datasets/users',
    children: [
      {
        path: 'users',
        name: 'Users',
        component: () => import('@/views/datasets/user/index.vue'),
        meta: { title: '用户统计', keepAlive: false }
      },
      {
        path: 'content',
        name: 'Content',
        component: () => import('@/views/datasets/content/index.vue'),
        meta: { title: '内容统计', keepAlive: false }
      },
      {
        path: 'poi',
        name: 'Poi',
        component: () => import('@/views/datasets/poi/index.vue'),
        meta: { title: 'POI点统计', keepAlive: false }
      },
      {
        path: 'screen',
        name: 'Screen',
        component: () => import('@/views/datasets/screen/index.vue'),
        meta: { title: '数据大屏', keepAlive: false }
      }
    ]
  }
]

export default appRoutes
