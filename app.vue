<script setup lang="ts">
import { onMounted } from 'vue'
import TheNavbar from '~/components/layout/TheNavbar.vue'
import TheFooter from '~/components/layout/TheFooter.vue'
import { useTheme } from '~/composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="app-layout">
    <TheNavbar />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<style>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
