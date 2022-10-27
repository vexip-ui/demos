import type { MenuOptions } from 'vexip-ui'

declare module 'vue-router' {
  interface RouteMeta extends Partial<MenuOptions> {
    menu?: boolean
  }
}

export {}
