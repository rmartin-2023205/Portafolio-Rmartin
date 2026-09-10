<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'
import { useTheme } from '~/composables/useTheme'

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
        if (rect.top <= 150 && rect.bottom >= 150) {
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
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4"
    :class="isScrolled ? 'py-3' : 'py-5'"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="backdrop-blur-xl border rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300"
        :class="[
          isScrolled
            ? 'bg-white/85 dark:bg-[#090d16]/85 border-zinc-200 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/40'
            : 'bg-white/60 dark:bg-[#090d16]/60 border-zinc-200/60 dark:border-white/5 shadow-sm'
        ]"
      >
        <!-- Logo -->
        <a href="#inicio" class="flex items-center gap-2.5 group" @click="closeMenu">
          <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs tracking-wider shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            RM
          </div>
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-sm tracking-tight text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ portfolioData.personal.name }}
            </span>
            <span class="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-white/10 text-zinc-600 dark:text-zinc-400 font-semibold">
              Dev
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1" aria-label="Navegación principal">
          <a
            v-for="item in portfolioData.navigation"
            :key="item.href"
            :href="item.href"
            class="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            :class="[
              activeSection === item.href.replace('#', '')
                ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 font-semibold shadow-xs'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/5'
            ]"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- Right Actions -->
        <div class="flex items-center gap-2">
          <!-- Theme Switcher -->
          <button
            type="button"
            class="w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
            :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" :size="16" class="transition-transform hover:rotate-45" />
            <Moon v-else :size="16" class="transition-transform hover:-rotate-12" />
          </button>

          <!-- Contact Quick CTA -->
          <a
            href="#contacto"
            class="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Hablemos</span>
            <ArrowUpRight :size="13" />
          </a>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
            :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
            @click="toggleMenu"
          >
            <X v-if="isMenuOpen" :size="18" />
            <Menu v-else :size="18" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        @click="closeMenu"
      ></div>
    </transition>

    <!-- Mobile Drawer Content -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        class="absolute top-full left-4 right-4 mt-2 p-4 bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-xl z-50 md:hidden flex flex-col gap-1"
      >
        <a
          v-for="item in portfolioData.navigation"
          :key="item.href"
          :href="item.href"
          class="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
          :class="[
            activeSection === item.href.replace('#', '')
              ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 font-semibold'
              : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5'
          ]"
          @click="closeMenu"
        >
          {{ item.name }}
        </a>

        <div class="pt-3 mt-2 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
          <a
            href="#contacto"
            class="w-full py-2.5 rounded-xl text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            @click="closeMenu"
          >
            Contactar a Ricardo
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>
