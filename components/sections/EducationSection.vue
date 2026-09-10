<script setup lang="ts">
import {
  GraduationCap,
  BookOpen,
  Network,
  Clock,
  BadgeCheck
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'GraduationCap':
      return GraduationCap
    case 'BookOpen':
      return BookOpen
    case 'Network':
      return Network
    default:
      return GraduationCap
  }
}
</script>

<template>
  <section id="educacion" class="py-20 md:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-3">
          <GraduationCap :size="13" />
          <span>Formación Académica</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Educación y Certificaciones
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Bases formales en ciencias de la computación, desarrollo web y redes informáticas.
        </p>
      </div>

      <!-- Education Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in portfolioData.education"
          :key="item.id"
          class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between group"
        >
          <div>
            <!-- Top Row: Icon + Period Badge -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <div class="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                <component :is="getIcon(item.icon)" :size="22" />
              </div>

              <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5 text-[11px] font-mono text-zinc-600 dark:text-zinc-300">
                <Clock :size="11" />
                <span>{{ item.period }}</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-base font-bold text-zinc-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ item.title }}
            </h3>

            <!-- Institution -->
            <div class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
              {{ item.institution }}
            </div>

            <!-- Description -->
            <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom Status Badge -->
          <div class="pt-5 mt-5 border-t border-zinc-200/60 dark:border-white/5 flex items-center justify-between text-[11px]">
            <span class="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <BadgeCheck :size="12" />
              <span>{{ item.period.includes('2026') ? 'En curso actual' : 'Acreditado' }}</span>
            </span>
            <span class="text-zinc-400 dark:text-zinc-500 font-mono">ID: {{ item.id }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
