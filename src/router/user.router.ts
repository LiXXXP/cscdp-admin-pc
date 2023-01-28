import Layout from '@/layout/index.vue'
import { RouteConfig } from '#/global'

const userRouter: Array<RouteConfig> = [
  {
    path: '/user',
    name: 'User',
    component: Layout,
    meta: { title: '用户中心', icon: 'users', keepAlive: false },
    redirect: '/user/management',
    children: [
      {
        path: 'management',
        name: 'Management',
        component: () => import('@/views/user-center/management.vue'),
        meta: { title: '用户管理', keepAlive: false }
      },
      {
        path: 'enterprise',
        name: 'Enterprise',
        component: () => import('@/views/user-center/enterprise.vue'),
        meta: { title: '企业管理', keepAlive: false }
      }
    ]
  }
]

export default userRouter
