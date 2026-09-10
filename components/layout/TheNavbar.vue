<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from 'lucide-vue-next'
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
    class="navbar-wrapper"
    :class="{ 'navbar-scrolled': isScrolled }"
  >
    <div class="container navbar-container">
      <div class="navbar-pill">
        <!-- Logo -->
        <a href="#inicio" class="navbar-logo" @click="closeMenu">
          <div class="logo-badge">
            <span>RM</span>
          </div>
          <div class="logo-text-group">
            <span class="logo-name">{{ portfolioData.personal.name }}</span>
            <span class="logo-tag">Dev</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="navbar-nav" aria-label="Navegación principal">
          <ul class="nav-list">
            <li v-for="item in portfolioData.navigation" :key="item.href">
              <a
                :href="item.href"
                class="nav-link"
                :class="{ active: activeSection === item.href.replace('#', '') }"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>

        <!-- Right Controls -->
        <div class="navbar-actions">
          <!-- Theme Switcher -->
          <button
            type="button"
            class="theme-btn"
            :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            @click="toggleTheme"
          >
            <Sun v-if="isDark" :size="17" class="theme-icon-lucide" />
            <Moon v-else :size="17" class="theme-icon-lucide" />
          </button>

          <!-- Contact Quick CTA -->
          <a href="#contacto" class="btn btn-primary btn-nav-cta">
            <span>Hablemos</span>
            <ArrowUpRight :size="15" />
          </a>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="hamburger-btn"
            :class="{ active: isMenuOpen }"
            aria-label="Abrir menú de navegación"
            :aria-expanded="isMenuOpen"
            @click="toggleMenu"
          >
            <X v-if="isMenuOpen" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
    </transition>
    <transition name="slide-down">
      <div v-if="isMenuOpen" class="mobile-drawer">
        <nav aria-label="Navegación móvil">
          <ul class="mobile-nav-list">
            <li v-for="item in portfolioData.navigation" :key="item.href">
              <a
                :href="item.href"
                class="mobile-nav-link"
                :class="{ active: activeSection === item.href.replace('#', '') }"
                @click="closeMenu"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="mobile-drawer-bottom">
          <a href="#contacto" class="btn btn-primary" style="width: 100%;" @click="closeMenu">
            <span>Iniciar Conversación</span>
            <ArrowUpRight :size="16" />
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all var(--transition-normal);
}

.navbar-container {
  display: flex;
  justify-content: center;
}

.navbar-pill {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.85rem 0.5rem 1rem;
  background: var(--bg-surface-glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.navbar-scrolled .navbar-pill {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-md), 0 0 25px -5px rgba(99, 102, 241, 0.2);
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-badge {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  color: #ffffff;
  font-weight: 800;
  font-size: 0.9375rem;
  border-radius: var(--radius-full);
  box-shadow: 0 3px 12px rgba(79, 70, 229, 0.4);
}

.logo-text-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.logo-name {
  font-weight: 700;
  font-size: 1.0625rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.logo-tag {
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  background: rgba(99, 102, 241, 0.12);
  color: var(--accent-primary);
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

/* Nav Links */
.navbar-nav {
  display: flex;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(99, 102, 241, 0.08);
}

.nav-link.active {
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.14);
  font-weight: 600;
}

/* Actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.theme-btn {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.theme-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: rotate(15deg);
}

.theme-icon-lucide {
  transition: transform var(--transition-fast);
}

.btn-nav-cta {
  padding: 0.5rem 1.15rem;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
}

/* Hamburger */
.hamburger-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  cursor: pointer;
}

/* Mobile Drawer */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  z-index: 45;
}

.mobile-drawer {
  position: fixed;
  top: 5rem;
  left: 1.25rem;
  right: 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  z-index: 50;
}

.mobile-nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav-link {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.mobile-nav-link:hover,
.mobile-nav-link.active {
  background: var(--bg-surface-elevated);
  color: var(--accent-primary);
}

.mobile-drawer-bottom {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-15px) scale(0.98);
  opacity: 0;
}

@media (max-width: 992px) {
  .navbar-nav,
  .btn-nav-cta {
    display: none;
  }
  .hamburger-btn {
    display: flex;
  }
}
</style>
