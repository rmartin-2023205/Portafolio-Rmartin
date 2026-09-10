<script setup lang="ts">
import {
  Armchair,
  Globe,
  MessageSquare,
  Github,
  ArrowUpRight,
  FolderGit2
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { projects } = portfolioData

const getProjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe':
      return Globe
    case 'MessageSquare':
      return MessageSquare
    case 'Armchair':
    default:
      return Armchair
  }
}
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
            <div class="window-slug">
              <FolderGit2 :size="12" class="slug-icon" />
              <span>{{ project.id }}.app</span>
            </div>
            <div class="window-spacer"></div>
          </div>

          <!-- Project Gradient Visual Banner with Lucide Icon -->
          <div class="project-banner" :style="{ background: project.gradient }">
            <div class="banner-overlay"></div>
            <div class="project-icon-badge">
              <component :is="getProjectIcon(project.icon)" :size="48" class="project-svg-icon" />
            </div>
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
                <div class="btn-left">
                  <Github :size="16" />
                  <span>Código en GitHub</span>
                </div>
                <ArrowUpRight :size="15" class="btn-arrow" />
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

.window-slug {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: var(--text-muted);
}

.slug-icon {
  color: var(--accent-primary);
}

.window-spacer {
  width: 32px;
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
  background: radial-gradient(circle at center, transparent 25%, rgba(0, 0, 0, 0.45) 100%);
}

.project-icon-badge {
  width: 88px;
  height: 88px;
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 1;
  transition: transform var(--transition-normal);
}

.project-card:hover .project-icon-badge {
  transform: scale(1.1) rotate(4deg);
}

.project-svg-icon {
  color: #ffffff;
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
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
  padding: 0.8rem 1.25rem;
}

.btn-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
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
