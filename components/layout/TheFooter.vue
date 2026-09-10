<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  if (import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="footer-wrap">
    <div class="container footer-inner">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-brand-col">
          <div class="footer-brand-header">
            <div class="footer-logo-badge">RM</div>
            <div class="brand-titles">
              <span class="brand-name">{{ portfolioData.personal.name }}</span>
              <span class="brand-sub">{{ portfolioData.personal.role }}</span>
            </div>
          </div>
          <p class="brand-summary">
            Soluciones web completas creadas con código limpio, arquitectura de backend en Nitro y experiencias de usuario de alto impacto.
          </p>
        </div>

        <!-- Navigation Column -->
        <div class="footer-col">
          <span class="col-title">Secciones</span>
          <ul class="col-links">
            <li v-for="item in portfolioData.navigation" :key="item.href">
              <a :href="item.href" class="col-link">{{ item.name }}</a>
            </li>
          </ul>
        </div>

        <!-- Social Channels Column -->
        <div class="footer-col">
          <span class="col-title">Conectar</span>
          <ul class="col-links">
            <li>
              <a :href="portfolioData.personal.github" target="_blank" rel="noopener noreferrer" class="col-link">
                GitHub ↗
              </a>
            </li>
            <li>
              <a :href="portfolioData.personal.linkedin" target="_blank" rel="noopener noreferrer" class="col-link">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a :href="`mailto:${portfolioData.personal.email}`" class="col-link">
                {{ portfolioData.personal.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom-bar">
        <p class="copyright-text">
          &copy; {{ currentYear }} <strong>{{ portfolioData.personal.fullName }}</strong>. Todos los derechos reservados.
        </p>

        <div class="footer-meta">
          <span class="stack-indicator">
            Construido con <em>Nuxt 3</em> + <em>Nitro</em> + <em>TypeScript</em>
          </span>

          <button
            type="button"
            class="back-to-top-btn"
            title="Volver arriba"
            @click="scrollToTop"
          >
            <span>Volver arriba</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-wrap {
  margin-top: 6rem;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 5rem 0 2.5rem;
  position: relative;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr;
  gap: 3.5rem;
}

.footer-brand-col {
  max-width: 440px;
}

.footer-brand-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 1rem;
}

.footer-logo-badge {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  color: #ffffff;
  font-weight: 800;
  font-size: 1rem;
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.brand-titles {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.brand-sub {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-primary);
}

.brand-summary {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.65;
}

.col-title {
  display: block;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.col-link {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--transition-fast), transform var(--transition-fast);
  display: inline-block;
}

.col-link:hover {
  color: var(--accent-primary);
  transform: translateX(3px);
}

/* Bottom Bar */
.footer-bottom-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 1.25rem;
}

.copyright-text {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.copyright-text strong {
  color: var(--text-primary);
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.stack-indicator {
  font-size: 0.8125rem;
  color: var(--text-muted);
}

.stack-indicator em {
  font-style: normal;
  font-weight: 600;
  color: var(--accent-primary);
}

.back-to-top-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.back-to-top-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

@media (max-width: 850px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .footer-bottom-bar {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
