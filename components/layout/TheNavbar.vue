<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, X, Download, ArrowUpRight } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'
import { useTheme } from '~/composables/useTheme'
import BrandLogo from '~/components/common/BrandLogo.vue'

const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('inicio')

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 20

    const sections = ['inicio', 'sobre', 'educacion', 'habilidades', 'proyectos', 'experiencia', 'contacto']
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          activeSection.value = sectionId
          break
        }
      }
    }
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b"
    :class="[
      isScrolled
        ? 'bg-swiss-bg/95 dark:bg-carbon-bg/95 backdrop-blur-md border-swiss-border dark:border-carbon-border shadow-swiss-xs'
        : 'bg-swiss-bg/85 dark:bg-carbon-bg/85 backdrop-blur-sm border-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      <!-- Left: CAD Monogram & Identity -->
      <a href="#inicio" class="flex items-center" @click="closeMenu">
        <BrandLogo size="md" :show-label="true" />
      </a>

      <!-- Center: Technical Navigation Links (Desktop) -->
      <nav class="hidden md:flex items-center gap-1 font-sans" aria-label="Navegación principal">
        <a
          v-for="item in portfolioData.navigation"
          :key="item.href"
          :href="item.href"
          class="relative px-3 py-1.5 text-xs font-medium transition-colors"
          :class="[
            activeSection === item.href.replace('#', '')
              ? 'text-accent-light dark:text-accent-light font-semibold'
              : 'text-swiss-text-secondary dark:text-carbon-text-secondary hover:text-swiss-text-primary dark:hover:text-carbon-text-primary'
          ]"
        >
          {{ item.name }}
          <!-- Active technical underline dot -->
          <span
            v-if="activeSection === item.href.replace('#', '')"
            class="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-light rounded-none"
          ></span>
        </a>
      </nav>

      <!-- Right: Action Bar (CV Download, Theme, Contact CTA, Mobile Toggle) -->
      <div class="flex items-center gap-2.5">
        <!-- Dedicated CV Download Button -->
        <a
          href="/CV_Ricardo_Martin_Quiche.pdf"
          download="CV_Ricardo_Martin_Quiche.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-sm border border-swiss-border dark:border-carbon-border bg-swiss-ivory dark:bg-carbon-card text-swiss-text-primary dark:text-carbon-text-primary hover:border-accent-light hover:text-accent-light transition-all shadow-swiss-xs"
          title="Descargar Curriculum Vitae en PDF"
        >
          <Download :size="13" class="text-accent-light" />
          <span>CV</span>
        </a>

        <!-- Primary CTA Contact -->
        <a
          href="#contacto"
          class="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-sm bg-accent text-white hover:bg-accent-hover transition-colors shadow-swiss-xs"
        >
          <span>Contactar</span>
          <ArrowUpRight :size="13" />
        </a>

        <!-- Theme Toggle -->
        <button
          type="button"
          class="w-8 h-8 rounded-sm flex items-center justify-center border border-swiss-border dark:border-carbon-border bg-swiss-ivory dark:bg-carbon-card text-swiss-text-secondary dark:text-carbon-text-secondary hover:text-swiss-text-primary dark:hover:text-carbon-text-primary transition-colors cursor-pointer"
          :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
          @click="toggleTheme"
        >
          <Sun v-if="isDark" :size="15" />
          <Moon v-else :size="15" />
        </button>

        <!-- Mobile Menu Trigger -->
        <button
          type="button"
          class="md:hidden w-8 h-8 rounded-sm flex items-center justify-center border border-swiss-border dark:border-carbon-border text-swiss-text-primary dark:text-carbon-text-primary hover:border-accent-light transition-colors cursor-pointer"
          :aria-label="isMenuOpen ? 'Cerrar navegación' : 'Abrir navegación'"
          @click="toggleMenu"
        >
          <X v-if="isMenuOpen" :size="17" />
          <Menu v-else :size="17" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Overlay and Panel -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 top-16 bg-black/50 backdrop-blur-xs z-40 md:hidden"
      @click="closeMenu"
    ></div>

    <div
      v-if="isMenuOpen"
      class="relative border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg p-4 z-50 md:hidden flex flex-col gap-1 shadow-swiss-md font-sans"
    >
      <a
        v-for="item in portfolioData.navigation"
        :key="item.href"
        :href="item.href"
        class="px-3 py-2 text-sm font-medium rounded-sm transition-colors"
        :class="[
          activeSection === item.href.replace('#', '')
            ? 'bg-accent/10 text-accent-light font-semibold border-l-2 border-accent'
            : 'text-swiss-text-secondary dark:text-carbon-text-secondary hover:bg-swiss-muted dark:hover:bg-carbon-surface'
        ]"
        @click="closeMenu"
      >
        {{ item.name }}
      </a>

      <div class="pt-3 mt-2 border-t border-swiss-border dark:border-carbon-border flex flex-col gap-2">
        <a
          href="/CV_Ricardo_Martin_Quiche.pdf"
          download="CV_Ricardo_Martin_Quiche.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full py-2.5 px-3 flex items-center justify-center gap-2 rounded-sm border border-swiss-border dark:border-carbon-border bg-swiss-ivory dark:bg-carbon-card text-xs font-mono font-medium text-swiss-text-primary dark:text-carbon-text-primary"
          @click="closeMenu"
        >
          <Download :size="14" class="text-accent-light" />
          <span>Descargar Curriculum Vitae (PDF)</span>
        </a>

        <a
          href="#contacto"
          class="w-full py-2.5 text-center text-xs font-semibold rounded-sm bg-accent text-white hover:bg-accent-hover transition-colors"
          @click="closeMenu"
        >
          Iniciar Contacto Directo
        </a>
      </div>
    </div>
  </header>
</template>
