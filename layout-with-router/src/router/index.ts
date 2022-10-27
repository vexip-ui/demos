import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      menu: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      label: 'home',
      name: 'Home',
      icon: IHouse
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      label: 'about',
      name: 'About',
      icon: IUsers
    }
  },
  {
    path: '/page',
    redirect: './one',
    meta: {
      label: 'page',
      name: 'Page',
      icon: IPaperPlane
    },
    children: [
      {
        path: 'one',
        name: 'PageOne',
        component: () => import('../views/PageOne.vue'),
        meta: {
          label: 'page-one',
          name: 'PageOne'
        }
      },
      {
        path: 'two',
        name: 'PageTwo',
        component: () => import('../views/PageTwo.vue'),
        meta: {
          label: 'page-two',
          name: 'PageTwo'
        }
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
