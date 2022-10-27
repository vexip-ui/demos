<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import type { LayoutExposed } from 'vexip-ui'

const router = useRouter()
const route = useRoute()

const layout = ref<LayoutExposed>()
const active = ref('')

watch(
  () => route.fullPath,
  () => {
    active.value = route.meta.label || 'home'
    layout.value?.expandMenuByLabel(active.value)
  },
  { immediate: true }
)
</script>

<template>
  <Layout
    ref="layout"
    logo="/vexip-ui.svg"
    sign-name="Vexip UI"
    :menu-props="{ active, router }"
    @menu-select="active = $event"
  >
    <template #main>
      <router-view></router-view>
    </template>
  </Layout>
</template>
