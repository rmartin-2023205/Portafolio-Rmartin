<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '~/data/portfolio'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('inicio')

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 20

    // Detect active section for indicator
    const sections = ['inicio', 'sobre', 'educacion', 'habilidades', 'proyectos', 'experiencia', 'contacto']
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
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
          <span class="logo-name">{{ portfolioData.personal.name }}</span>
        </a>

        <!-- Desktop Links -->
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
            <!-- Sun -->
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
            <!-- Moon -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>

          <!-- Contact Quick CTA -->
          <a href="#contacto" class="btn btn-primary btn-nav-cta">
            <span>Hablemos</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
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
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
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
            Iniciar Conversación
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
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.navbar-scrolled .navbar-pill {
  border-color: var(--border-hover);
  box-shadow: var(--shadow-md), 0 0 20px -5px rgba(99, 102, 241, 0.15);
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
  box-shadow: 0 2px 10px rgba(79, 70, 229, 0.35);
}

.logo-name {
  font-weight: 700;
  font-size: 1.0625rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* Nav Links */
.navbar-nav {
  display: flex;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 0.35rem;
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
  background: rgba(99, 102, 241, 0.12);
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

.btn-nav-cta {
  padding: 0.5rem 1.1rem;
  font-size: 0.875rem;
  border-radius: var(--radius-full);
}

/* Hamburger Button */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  padding: 8px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  cursor: pointer;
}

.bar {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.2s ease;
}

.hamburger-btn.active .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger-btn.active .bar:nth-child(2) {
  opacity: 0;
}
.hamburger-btn.active .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(6px);
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

/* Animations */
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
