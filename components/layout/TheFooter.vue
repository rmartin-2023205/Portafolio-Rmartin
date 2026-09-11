<script setup lang="ts">
import { computed } from 'vue'
import {
  Github,
  Linkedin,
  Mail,
  ArrowUp
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'
import BrandLogo from '~/components/common/BrandLogo.vue'

const currentYear = computed(() => new Date().getFullYear())

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="border-t border-swiss-border dark:border-carbon-border bg-swiss-ivory dark:bg-carbon-surface py-12 select-none">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <!-- Brand & Details -->
        <div class="text-center md:text-left">
          <BrandLogo size="md" :show-label="true" />
          <p class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted mt-2">
            {{ portfolioData.personal.role }} • Guatemala (GMT-6)
          </p>
        </div>

        <!-- Social Action Buttons & Scroll to Top -->
        <div class="flex items-center gap-2 font-mono text-xs">
          <a
            :href="portfolioData.personal.github"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-xs bg-swiss-bg dark:bg-carbon-card border border-swiss-border dark:border-carbon-border text-swiss-text-secondary dark:text-carbon-text-secondary hover:border-accent-light hover:text-accent-light flex items-center justify-center transition-colors shadow-swiss-xs"
            aria-label="GitHub"
          >
            <Github :size="15" />
          </a>

          <a
            :href="portfolioData.personal.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-xs bg-swiss-bg dark:bg-carbon-card border border-swiss-border dark:border-carbon-border text-swiss-text-secondary dark:text-carbon-text-secondary hover:border-accent-light hover:text-accent-light flex items-center justify-center transition-colors shadow-swiss-xs"
            aria-label="LinkedIn"
          >
            <Linkedin :size="15" />
          </a>

          <a
            :href="`mailto:${portfolioData.personal.email}`"
            class="w-8 h-8 rounded-xs bg-swiss-bg dark:bg-carbon-card border border-swiss-border dark:border-carbon-border text-swiss-text-secondary dark:text-carbon-text-secondary hover:border-accent-light hover:text-accent-light flex items-center justify-center transition-colors shadow-swiss-xs"
            aria-label="Email"
          >
            <Mail :size="15" />
          </a>

          <button
            type="button"
            class="w-8 h-8 rounded-xs bg-swiss-bg dark:bg-carbon-card border border-swiss-border dark:border-carbon-border text-swiss-text-secondary dark:text-carbon-text-secondary hover:border-accent-light hover:text-accent-light flex items-center justify-center transition-colors shadow-swiss-xs cursor-pointer ml-2"
            aria-label="Volver arriba"
            title="Volver al inicio"
            @click="scrollToTop"
          >
            <ArrowUp :size="15" />
          </button>
        </div>
      </div>

      <!-- Copyright & Stack Spec -->
      <div class="mt-8 pt-6 border-t border-swiss-border/60 dark:border-carbon-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
        <div>
          © {{ currentYear }} {{ portfolioData.personal.fullName }}. Todos los derechos reservados.
        </div>
        <div class="flex items-center gap-1.5 text-[11px]">
          <span>ARQ:</span>
          <span class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">NUXT 3</span>
          <span>//</span>
          <span class="text-accent-light font-bold">SWISS TECHNICAL DESIGN</span>
        </div>
      </div>
    </div>
  </footer>
</template>
