<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Code2,
  Layers,
  Database,
  Wrench
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { skills } = portfolioData
const activeCategory = ref('Todos')

const categories = [
  { id: 'Todos', label: 'Todos', icon: Layers },
  { id: 'Frontend', label: 'Frontend', icon: Code2 },
  { id: 'Backend', label: 'Backend', icon: Database },
  { id: 'Tools & Design', label: 'Tools & Design', icon: Wrench }
]

const filteredSkills = computed(() => {
  if (activeCategory.value === 'Todos') {
    return skills
  }
  return skills.filter((s) => s.category === activeCategory.value)
})

const getCategoryCount = (category: string) => {
  if (category === 'Todos') return skills.length
  return skills.filter((s) => s.category === category).length
}

const getLevelBadgeClass = (level: string) => {
  switch (level) {
    case 'Avanzado':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
    case 'Intermedio':
      return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
    default:
      return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20'
  }
}
</script>

<template>
  <section id="habilidades" class="py-20 md:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-10 md:mb-14">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-3">
          <Code2 :size="13" />
          <span>Stack Técnico</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Habilidades y Tecnologías
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Herramientas, frameworks y tecnologías con las que construyo soluciones web diariamente.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 mb-8">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer"
          :class="[
            activeCategory === cat.id
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 scale-102'
              : 'bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-white/10'
          ]"
          @click="activeCategory = cat.id"
        >
          <component :is="cat.icon" :size="14" />
          <span>{{ cat.label }}</span>
          <span
            class="ml-0.5 px-1.5 py-0.2 rounded-full text-[10px] font-mono"
            :class="activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-zinc-200 dark:bg-white/10 text-zinc-500 dark:text-zinc-400'"
          >
            {{ getCategoryCount(cat.id) }}
          </span>
        </button>
      </div>

      <!-- Skills Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-indigo-500/30 transition-all group"
        >
          <!-- Skill Info Header -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2.5">
              <span class="font-bold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {{ skill.name }}
              </span>
              <span
                class="px-2 py-0.5 rounded-md text-[10px] font-medium border"
                :class="getLevelBadgeClass(skill.level)"
              >
                {{ skill.level }}
              </span>
            </div>

            <!-- Percentage Display -->
            <span class="text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300">
              {{ skill.percentage }}%
            </span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full h-2 rounded-full bg-zinc-100 dark:bg-white/5 overflow-hidden">
            <div
              class="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 transition-all duration-700 ease-out"
              :style="{ width: `${skill.percentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
