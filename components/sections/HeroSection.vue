<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
</script>

<template>
  <section id="inicio" class="hero-section">
    <div class="container hero-container">
      <div class="hero-badge-wrap">
        <span class="status-indicator">
          <span class="status-dot"></span>
          Disponible para nuevos proyectos
        </span>
      </div>

      <h1 class="hero-title">
        Hola, soy <span class="gradient-text">{{ personal.name }}</span>
      </h1>

      <p class="hero-role">
        {{ personal.role }}
      </p>

      <p class="hero-description">
        {{ personal.description }}
      </p>

      <div class="hero-ctas">
        <a href="#proyectos" class="btn btn-primary">
          <span>Ver mis proyectos</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>

        <a href="#contacto" class="btn btn-secondary">
          <span>Contáctame</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>

      <!-- Quick Social Links -->
      <div class="hero-social">
        <span class="social-label">Perfiles profesionales:</span>
        <div class="social-links">
          <a
            :href="personal.github"
            target="_blank"
            rel="noopener noreferrer"
            class="social-pill"
            title="GitHub de Ricardo Martín"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            :href="personal.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="social-pill"
            title="LinkedIn de Ricardo Martín"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  padding: 6rem 0 4rem;
  position: relative;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 820px;
}

.hero-badge-wrap {
  margin-bottom: 1.5rem;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: var(--shadow-xs);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
  animation: pulseGlow 2s infinite ease-in-out;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.hero-role {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 1.25rem;
}

.hero-description {
  font-size: 1.1875rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 640px;
  margin-bottom: 2.25rem;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2.5rem;
}

.hero-social {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
  width: 100%;
}

.social-label {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.9rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all var(--transition-fast);
}

.social-pill:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-xs);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.35rem;
  }
  .hero-role {
    font-size: 1.2rem;
  }
  .hero-description {
    font-size: 1.05rem;
  }
  .hero-ctas {
    flex-direction: column;
    width: 100%;
  }
  .hero-ctas .btn {
    width: 100%;
  }
}
</style>
