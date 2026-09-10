<script setup lang="ts">
import {
  Briefcase,
  Clock,
  ExternalLink
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'
</script>

<template>
  <section id="experiencia" class="py-20 md:py-28 relative">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-3">
          <Briefcase :size="13" />
          <span>Experiencia y Práctica</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Trayectoria Práctica
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
          Experiencia en proyectos colaborativos, desarrollo de software y participación open source.
        </p>
      </div>

      <!-- Vertical Timeline -->
      <div class="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        <div
          v-for="item in portfolioData.experience"
          :key="item.id"
          class="relative group"
        >
          <!-- Timeline Glowing Node -->
          <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-[#05070c] shadow-md shadow-indigo-500/40 group-hover:scale-125 transition-transform"></div>

          <!-- Card Content -->
          <div class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-indigo-500/30 transition-all duration-300">
            <!-- Period Badge + Role -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[11px] font-mono font-medium">
                <Clock :size="12" />
                <span>{{ item.period }}</span>
              </span>
              <span class="text-xs text-zinc-400 dark:text-zinc-500 font-mono">{{ item.id }}</span>
            </div>

            <!-- Role & Company -->
            <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ item.role }}
            </h3>
            <div class="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
              {{ item.company }}
            </div>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
              {{ item.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
