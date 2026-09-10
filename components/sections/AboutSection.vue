<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
</script>

<template>
  <section id="sobre" class="section about-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Trayectoria & Enfoque</span>
        <h2 class="section-title">Sobre mí</h2>
        <p class="section-subtitle">
          Perfil profesional, filosofía de desarrollo y vocación por la ingeniería de software.
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="about-bento-grid">
        <!-- Main Story Tile (Spans 2 columns) -->
        <div class="bento-card bento-main card-glow-hover">
          <div class="bento-tag">
            <span class="tag-icon">👨‍💻</span>
            <span>Biografía Profesional</span>
          </div>

          <h3 class="bento-headline">
            Pasión por la resolución de problemas y la ingeniería web
          </h3>

          <div class="story-paragraphs">
            <p v-for="(paragraph, index) in personal.aboutParagraphs" :key="index" class="story-text">
              {{ paragraph }}
            </p>
          </div>

          <div class="bento-footer-metrics">
            <div class="metric-pill">
              <span class="metric-icon">🚀</span>
              <span class="metric-label">Full Stack Mindset</span>
            </div>
            <div class="metric-pill">
              <span class="metric-icon">✨</span>
              <span class="metric-label">Clean Code First</span>
            </div>
            <div class="metric-pill">
              <span class="metric-icon">🌍</span>
              <span class="metric-label">Open Source Ready</span>
            </div>
          </div>
        </div>

        <!-- Bento Secondary Tile 1: Valores & Filosofía -->
        <div class="bento-card bento-card-side card-glow-hover">
          <div class="bento-tag">
            <span class="tag-icon">🎯</span>
            <span>Pilares de Trabajo</span>
          </div>

          <div class="pillars-list">
            <div class="pillar-item">
              <div class="pillar-icon">⚡</div>
              <div>
                <h4>Aprendizaje Ágil</h4>
                <p>Capacidad para asimilar nuevos frameworks, librerías y estándares en tiempo récord.</p>
              </div>
            </div>

            <div class="pillar-item">
              <div class="pillar-icon">🤝</div>
              <div>
                <h4>Colaboración Efectiva</h4>
                <p>Comunicación transparente, sincronización con equipos de diseño y control de versiones ordenado.</p>
              </div>
            </div>

            <div class="pillar-item">
              <div class="pillar-icon">💎</div>
              <div>
                <h4>Calidad y Mantenibilidad</h4>
                <p>Estructura modular, código limpio y buenas prácticas para proyectos que escalan con solidez.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 6rem 0;
}

.about-bento-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 1.75rem;
}

.bento-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-primary);
  margin-bottom: 1.25rem;
}

.bento-headline {
  font-size: 1.625rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.25;
  margin-bottom: 1.5rem;
}

.story-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.story-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.bento-footer-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

.metric-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.85rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-primary);
}

/* Side Card */
.pillars-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pillar-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.pillar-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  font-size: 1.2rem;
  flex-shrink: 0;
}

.pillar-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.pillar-item p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.55;
}

@media (max-width: 992px) {
  .about-bento-grid {
    grid-template-columns: 1fr;
  }
}
</style>
