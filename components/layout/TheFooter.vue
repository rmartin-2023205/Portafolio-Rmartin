<script setup lang="ts">
import { computed } from 'vue'
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="border-t border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#06080d]/80 py-12 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand & Description -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-2.5 mb-2">
            <div class="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
              RM
            </div>
            <span class="font-extrabold text-sm tracking-tight text-zinc-900 dark:text-white">
              {{ portfolioData.personal.fullName }}
            </span>
          </div>
          <p class="text-xs text-zinc-500 dark:text-zinc-400">
            {{ portfolioData.personal.role }} • Guatemala (GMT-6)
          </p>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-3">
          <a
            :href="portfolioData.personal.github"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors border border-zinc-200/60 dark:border-white/5"
            aria-label="GitHub"
          >
            <Github :size="16" />
          </a>

          <a
            :href="portfolioData.personal.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors border border-zinc-200/60 dark:border-white/5"
            aria-label="LinkedIn"
          >
            <Linkedin :size="16" />
          </a>

          <a
            :href="`mailto:${portfolioData.personal.email}`"
            class="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors border border-zinc-200/60 dark:border-white/5"
            aria-label="Email"
          >
            <Mail :size="16" />
          </a>

          <button
            type="button"
            class="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-colors border border-zinc-200/60 dark:border-white/5 cursor-pointer ml-2"
            aria-label="Volver arriba"
            title="Volver arriba"
            @click="scrollToTop"
          >
            <ArrowUp :size="16" />
          </button>
        </div>
      </div>

      <!-- Copyright Bottom Bar -->
      <div class="mt-8 pt-6 border-t border-zinc-200/60 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
        <div>
          © {{ currentYear }} {{ portfolioData.personal.fullName }}. Todos los derechos reservados.
        </div>
        <div class="flex items-center gap-1.5 font-mono text-[11px]">
          <span>Construido con</span>
          <span class="text-indigo-600 dark:text-indigo-400 font-semibold">Nuxt 3</span>
          <span>&</span>
          <span class="text-cyan-600 dark:text-cyan-400 font-semibold">Tailwind CSS</span>
        </div>
      </div>
    </div>
  </footer>
</template>
