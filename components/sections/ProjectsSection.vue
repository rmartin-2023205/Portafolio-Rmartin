<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { projects } = portfolioData
</script>

<template>
  <section id="proyectos" class="section projects-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Portafolio</span>
        <h2 class="section-title">Proyectos Destacados</h2>
        <p class="section-subtitle">Aplicaciones y arquitecturas desarrolladas combinando frontend responsivo, APIs RESTful y bases de datos.</p>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card card"
        >
          <!-- Project Banner / Visual Top -->
          <div class="project-banner" :style="{ background: project.gradient }">
            <span class="project-icon">{{ project.icon }}</span>
          </div>

          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tags">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="tag-badge"
              >
                {{ tag }}
              </span>
            </div>

            <div class="project-actions">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-secondary btn-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                <span>Ver Código en GitHub</span>
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
  padding: 5rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.project-banner {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform var(--transition-normal);
}

.project-card:hover .project-banner {
  transform: scale(1.02);
}

.project-icon {
  font-size: 3.5rem;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.2));
}

.project-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.project-title {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.project-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
}

.project-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
}

.project-actions .btn {
  width: 100%;
}
</style>
