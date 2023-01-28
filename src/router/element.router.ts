import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'
const elementRoutes: Array<RouteConfig> = [
  {
    path: '/element',
    name: 'Element',
    component: Layout,
    meta: {
      title: '产业地图',
      icon: 'yt-map',
      noCache: true
    },
    children: [
      {
        path: 'element-index',
        name: 'element-index',
        component: () => import('@/views/element/index.vue'),
        meta: { title: '产业地图', icon: '' }
      }
    ]
  }
]

export default elementRoutes
