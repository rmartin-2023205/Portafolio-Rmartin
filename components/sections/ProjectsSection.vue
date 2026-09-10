<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { projects } = portfolioData
</script>

<template>
  <section id="proyectos" class="section projects-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Trabajo Destacado</span>
        <h2 class="section-title">Proyectos & Aplicaciones</h2>
        <p class="section-subtitle">
          Soluciones de software desarrolladas con arquitecturas modernas, bases de datos no relacionales y REST APIs.
        </p>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card bento-card card-glow-hover"
        >
          <!-- Mockup Window Bar -->
          <div class="window-header">
            <div class="window-dots">
              <span class="window-dot dot-red"></span>
              <span class="window-dot dot-yellow"></span>
              <span class="window-dot dot-green"></span>
            </div>
            <span class="window-title">{{ project.id }}.app</span>
            <div class="window-spacer"></div>
          </div>

          <!-- Project Gradient Visual Banner -->
          <div class="project-banner" :style="{ background: project.gradient }">
            <div class="banner-overlay"></div>
            <span class="project-icon-large">{{ project.icon }}</span>
          </div>

          <!-- Project Details -->
          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <!-- Tech Badges -->
            <div class="project-tags-wrap">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tech-chip"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Footer Action -->
            <div class="project-actions">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary project-btn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Repositorio en GitHub</span>
                <svg class="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 6rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.25rem;
}

.project-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-xl);
}

.window-spacer {
  width: 40px;
}

.project-banner {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%);
}

.project-icon-large {
  font-size: 4rem;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.3));
  position: relative;
  z-index: 1;
  transition: transform var(--transition-normal);
}

.project-card:hover .project-icon-large {
  transform: scale(1.15) rotate(4deg);
}

.project-body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.45rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.project-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
}

.project-tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.tech-chip {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  transition: all var(--transition-fast);
}

.tech-chip:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.project-actions {
  margin-top: auto;
}

.project-btn {
  width: 100%;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
}

.btn-arrow {
  transition: transform var(--transition-fast);
}

.project-btn:hover .btn-arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
