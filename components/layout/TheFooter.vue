<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-content">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-mark">RM</span>
          <span class="logo-text">{{ portfolioData.personal.name }}</span>
        </div>
        <p class="footer-tagline">
          {{ portfolioData.personal.role }} — Enfocado en código limpio, escalabilidad y experiencias web excepcionales.
        </p>
      </div>

      <div class="footer-nav">
        <span class="footer-heading">Navegación</span>
        <ul class="footer-links">
          <li v-for="item in portfolioData.navigation" :key="item.href">
            <a :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
      </div>

      <div class="footer-social">
        <span class="footer-heading">Conectar</span>
        <ul class="footer-links">
          <li>
            <a :href="portfolioData.personal.github" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a :href="portfolioData.personal.linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a :href="`mailto:${portfolioData.personal.email}`">
              {{ portfolioData.personal.email }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <p class="copyright">
        &copy; {{ currentYear }} {{ portfolioData.personal.fullName }}. Todos los derechos reservados.
      </p>
      <p class="tech-badge">
        Construido con <span>Nuxt 3</span>, <span>Nitro</span> & <span>TypeScript</span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 4rem 0 2rem;
  margin-top: 5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.logo-mark {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  color: #ffffff;
  font-weight: 800;
  font-size: 1rem;
  border-radius: var(--radius-sm);
}

.logo-text {
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--text-primary);
}

.footer-tagline {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.footer-heading {
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-primary);
  margin-bottom: 1.25rem;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9375rem;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--accent-primary);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  font-size: 0.875rem;
  color: var(--text-muted);
}

.tech-badge span {
  color: var(--accent-primary);
  font-weight: 600;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }
}
</style>
