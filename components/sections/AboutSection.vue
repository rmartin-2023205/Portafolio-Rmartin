<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { aboutParagraphs } = portfolioData.personal
</script>

<template>
  <section id="sobre" class="section about-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Perfil</span>
        <h2 class="section-title">Sobre mí</h2>
        <p class="section-subtitle">Conoce mi trayectoria, enfoque y filosofía de desarrollo.</p>
      </div>

      <div class="about-grid">
        <div class="about-card card">
          <div class="about-paragraphs">
            <p v-for="(paragraph, index) in aboutParagraphs" :key="index" class="about-text">
              {{ paragraph }}
            </p>
          </div>

          <div class="about-highlights">
            <div class="highlight-item">
              <span class="highlight-icon">⚡</span>
              <div>
                <h4>Aprendizaje Continuo</h4>
                <p>Curiosidad constante por dominar nuevas herramientas y arquitecturas.</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🤝</span>
              <div>
                <h4>Trabajo en Equipo</h4>
                <p>Comunicación clara, empatía y colaboración en entornos ágiles.</p>
              </div>
            </div>
            <div class="highlight-item">
              <span class="highlight-icon">🎯</span>
              <div>
                <h4>Calidad de Código</h4>
                <p>Enfoque en código limpio, modular y mantenible a largo plazo.</p>
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
  padding: 5rem 0;
}

.about-grid {
  max-width: 960px;
  margin: 0 auto;
}

.about-card {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.5rem;
}

.about-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.about-text {
  font-size: 1.0625rem;
  line-height: 1.75;
  color: var(--text-secondary);
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
}

.highlight-item {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.highlight-icon {
  font-size: 1.75rem;
  display: inline-block;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.highlight-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.highlight-item p {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-card {
    padding: 1.5rem;
  }
  .about-highlights {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
