<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '~/data/portfolio'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 30
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
    class="navbar"
    :class="{ 'navbar-scrolled': isScrolled, 'navbar-menu-open': isMenuOpen }"
  >
    <div class="container navbar-inner">
      <!-- Logo -->
      <a href="#inicio" class="navbar-logo" @click="closeMenu">
        <span class="logo-mark">RM</span>
        <span class="logo-text">Ricardo Martín</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="navbar-desktop-nav" aria-label="Navegación principal">
        <ul class="nav-links">
          <li v-for="item in portfolioData.navigation" :key="item.href">
            <a :href="item.href" class="nav-link">{{ item.name }}</a>
          </li>
        </ul>
      </nav>

      <!-- Action Controls -->
      <div class="navbar-actions">
        <!-- Theme Toggle Button -->
        <button
          type="button"
          class="theme-toggle-btn"
          :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          :title="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          @click="toggleTheme"
        >
          <!-- Sun Icon (shown in dark mode) -->
          <svg
            v-if="isDark"
            class="theme-icon"
            xmlns="http://www.w3.org/2000/svg"
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
          <!-- Moon Icon (shown in light mode) -->
          <svg
            v-else
            class="theme-icon"
            xmlns="http://www.w3.org/2000/svg"
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

        <!-- CTA Header Button (Desktop) -->
        <a href="#contacto" class="btn btn-primary btn-sm header-cta">
          Hablemos
        </a>

        <!-- Mobile Hamburger Button -->
        <button
          type="button"
          class="hamburger-btn"
          :class="{ active: isMenuOpen }"
          aria-label="Abrir menú de navegación"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="isMenuOpen"
      class="mobile-backdrop"
      @click="closeMenu"
    ></div>
    <transition name="mobile-menu">
      <div v-if="isMenuOpen" class="mobile-drawer">
        <nav aria-label="Navegación móvil">
          <ul class="mobile-links">
            <li v-for="item in portfolioData.navigation" :key="item.href">
              <a :href="item.href" class="mobile-link" @click="closeMenu">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="mobile-drawer-footer">
          <a href="#contacto" class="btn btn-primary" style="width: 100%;" @click="closeMenu">
            Ponte en contacto
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  background-color: transparent;
  border-bottom: 1px solid transparent;
}

.navbar-scrolled {
  background-color: var(--bg-surface-glass);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--border-subtle);
  box-shadow: var(--shadow-sm);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
}

/* Logo */
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
}

.logo-mark {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  color: #ffffff;
  font-weight: 800;
  font-size: 1.125rem;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.logo-text {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

/* Desktop Links */
.navbar-desktop-nav {
  display: flex;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  padding: 0.5rem 0.25rem;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-primary);
}

/* Actions */
.navbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  cursor: pointer;
  transition: all var(--transition-normal);
}

.theme-toggle-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: rotate(15deg);
}

.theme-icon {
  width: 20px;
  height: 20px;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

/* Hamburger */
.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 40px;
  padding: 10px 8px;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  cursor: pointer;
}

.hamburger-line {
  display: block;
  height: 2px;
  width: 100%;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.hamburger-btn.active .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-btn.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 40;
}

.mobile-drawer {
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  z-index: 45;
}

.mobile-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.mobile-link {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 1.0625rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-fast);
}

.mobile-link:hover {
  background: var(--bg-surface-elevated);
  color: var(--accent-primary);
}

.mobile-drawer-footer {
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

@media (max-width: 900px) {
  .navbar-desktop-nav,
  .header-cta {
    display: none;
  }
  .hamburger-btn {
    display: flex;
  }
}
</style>
