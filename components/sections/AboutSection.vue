<script setup lang="ts">
import {
  Code2,
  Sparkles,
  Network,
  BadgeCheck,
  User
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
</script>

<template>
  <section id="sobre" class="py-20 md:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-3">
          <User :size="13" />
          <span>Trayectoria & Filosofía</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Sobre mí
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          Conoce mi trasfondo técnico, forma de trabajo y metas en el desarrollo de software.
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Main Bio Card -->
        <div class="lg:col-span-8 bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-indigo-500/30 transition-all duration-300 relative group overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
              <Code2 :size="20" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-zinc-900 dark:text-white">Perfil Profesional</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 font-mono">{{ personal.role }} • {{ personal.fullName }}</p>
            </div>
          </div>

          <div class="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
            <p v-for="(paragraph, index) in personal.aboutParagraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <!-- Bottom Pillars Row -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-zinc-200 dark:border-white/10">
            <div class="p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5">
              <div class="text-xs font-bold text-zinc-900 dark:text-white">Full Stack Mindset</div>
              <div class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Frontend reactivo + APIs robustas</div>
            </div>
            <div class="p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5">
              <div class="text-xs font-bold text-zinc-900 dark:text-white">Clean Code First</div>
              <div class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Mantenibilidad y buenas prácticas</div>
            </div>
            <div class="p-3 rounded-xl bg-zinc-50 dark:bg-white/5 border border-zinc-200/60 dark:border-white/5">
              <div class="text-xs font-bold text-zinc-900 dark:text-white">Open Source</div>
              <div class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">Colaboración comunitaria</div>
            </div>
          </div>
        </div>

        <!-- Side Cards Column: Work Pillars -->
        <div class="lg:col-span-4 flex flex-col gap-4">
          <!-- Pillar 1 -->
          <div class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-indigo-500/30 transition-all flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles :size="20" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-zinc-900 dark:text-white mb-1">Aprendizaje Ágil</h4>
              <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Capacidad comprobada para asimilar nuevas librerías, stacks y metodologías de trabajo con rapidez.
              </p>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-indigo-500/30 transition-all flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Network :size="20" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-zinc-900 dark:text-white mb-1">Colaboración Efectiva</h4>
              <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Experiencia en trabajo en equipo, control de versiones con Git y comunicación técnica asertiva.
              </p>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-indigo-500/30 transition-all flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <BadgeCheck :size="20" />
            </div>
            <div>
              <h4 class="text-sm font-bold text-zinc-900 dark:text-white mb-1">Calidad y Compromiso</h4>
              <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Pasión por la experiencia del usuario, accesibilidad web y arquitecturas limpias y escalables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
