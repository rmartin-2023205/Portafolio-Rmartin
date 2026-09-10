<script setup lang="ts">
import {
  FolderGit2,
  Github,
  ExternalLink,
  ChevronRight,
  Armchair,
  Globe,
  MessageSquare,
  Layers
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'Armchair':
      return Armchair
    case 'Globe':
      return Globe
    case 'MessageSquare':
      return MessageSquare
    default:
      return Layers
  }
}
</script>

<template>
  <section id="proyectos" class="py-20 md:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-3">
          <FolderGit2 :size="13" />
          <span>Trabajo Destacado</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Proyectos Realizados
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Aplicaciones completas con frontend interactivo, arquitecturas backend y bases de datos reales.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="project in portfolioData.projects"
          :key="project.id"
          class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-sm hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
        >
          <!-- App Window Header Mockup -->
          <div class="px-4 py-2.5 bg-zinc-100/80 dark:bg-white/5 border-b border-zinc-200 dark:border-white/5 flex items-center justify-between">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span class="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
              {{ project.id }}.app
            </span>
          </div>

          <!-- Project Body Content -->
          <div class="p-6 flex-1 flex flex-col justify-between">
            <div>
              <!-- Icon & Title -->
              <div class="flex items-center gap-3.5 mb-4">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600/15 via-indigo-500/10 to-cyan-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 border border-indigo-500/20">
                  <component :is="getProjectIcon(project.icon)" :size="24" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {{ project.title }}
                  </h3>
                  <span class="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">Full Stack Project</span>
                </div>
              </div>

              <!-- Description -->
              <p class="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                {{ project.description }}
              </p>
            </div>

            <!-- Tech Tags & Action Button -->
            <div>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-white/5"
                >
                  {{ tag }}
                </span>
              </div>

              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/5 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white border border-zinc-200 dark:border-white/10 transition-all duration-200 group/btn"
              >
                <Github :size="14" />
                <span>Ver Código en GitHub</span>
                <ChevronRight :size="14" class="group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
