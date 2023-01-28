<template>
  <div>
    <console-menu :menu-list="state.menuList"></console-menu>
  </div>
</template>

<script setup lang="ts">
import { ConsoleMenu } from '@gwin/platform-menu-pc'
import { computed, onMounted, reactive } from 'vue-demi'
import { useRouter } from 'vue-router'
import { RouteConfig } from '#/global'
import { getUserId } from '@/utils/auth'
import LogApi from '@/api/user/login'

const router = useRouter()

interface MenuItem {
  title: string
  icon?: string
  router?: string
  child?: MenuItem[]
}

const state = reactive(<any>{
  menuList: []
})

onMounted(() => {
  getUserResourceList()
})

async function getUserResourceList() {
  const res: any = await LogApi.getUserResourceList({
    category: 'menu',
    userId: getUserId()
  })
  menuCompare(data.value, res.body.dataList)
}

function menuCompare(router: any[], newRouter: any[]) {
  const menu: any[] = []
  router.forEach((item, index) => {
    newRouter.forEach((element) => {
      if (item.title === element.label) {
        const list = JSON.parse(JSON.stringify(item))
        menu[index] = list
        menu[index].child = []
        item.child.forEach((list: { title: any }) => {
          if (element.children) {
            element.children.forEach((name: { label: any }) => {
              if (list.title === name.label) {
                menu[index].child.push(JSON.parse(JSON.stringify(list)))
              }
            })
          } else {
            menu[index].child.push(JSON.parse(JSON.stringify(list)))
          }
        })
      }
    })
  })

  const newList: any[] | undefined = []
  menu.forEach((item) => {
    newList.push(item)
  })
  state.menuList = newList
}

const data = computed(() => {
  const menuList: MenuItem[] = []
  router.options.routes.forEach((route) => {
    const menuItem: MenuItem | undefined = generateMenuItem(route as RouteConfig)
    if (menuItem) {
      menuList.push(menuItem)
    }
  })
  return menuList
})

function generateMenuItem(route: RouteConfig): MenuItem | undefined {
  if (!route.hidden && route.meta) {
    const menuItem: MenuItem = route.meta
    menuItem.router = route.path
    if (route.children) {
      menuItem.child = []
      route.children.forEach((r) => {
        const subMenuItem: MenuItem | undefined = generateMenuItem(r as RouteConfig)
        if (subMenuItem) {
          if (menuItem.router === '/') {
            subMenuItem.router = menuItem.router + subMenuItem.router
          } else {
            subMenuItem.router = menuItem.router + '/' + subMenuItem.router
          }
          menuItem.child?.push(subMenuItem)
        }
      })
    }
    return menuItem
  }
  return undefined
}
</script>

<style lang="scss" scoped></style>
