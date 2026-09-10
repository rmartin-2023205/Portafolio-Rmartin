<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { experience } = portfolioData
</script>

<template>
  <section id="experiencia" class="section experience-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Trayectoria</span>
        <h2 class="section-title">Experiencia</h2>
        <p class="section-subtitle">Prácticas profesionales, proyectos integradores y colaboración activa en la comunidad.</p>
      </div>

      <div class="timeline">
        <div
          v-for="(item, index) in experience"
          :key="item.id"
          class="timeline-item"
        >
          <!-- Timeline connector & dot -->
          <div class="timeline-marker">
            <div class="timeline-dot"></div>
            <div v-if="index < experience.length - 1" class="timeline-line"></div>
          </div>

          <!-- Timeline Card -->
          <div class="timeline-content card">
            <div class="timeline-top">
              <span class="timeline-period">{{ item.period }}</span>
              <span class="timeline-company">{{ item.company }}</span>
            </div>

            <h3 class="timeline-role">{{ item.role }}</h3>
            <p class="timeline-description">{{ item.description }}</p>

            <div class="timeline-tags">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="tag-badge"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 5rem 0;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  position: relative;
}

.timeline-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 24px;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 3px solid var(--bg-surface);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  margin-top: 1.5rem;
  z-index: 2;
}

.timeline-line {
  position: absolute;
  top: 2.25rem;
  bottom: -2rem;
  width: 2px;
  background: var(--border-subtle);
}

.timeline-content {
  flex: 1;
}

.timeline-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.timeline-period {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.08);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
}

.timeline-company {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--accent-secondary);
}

.timeline-role {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.timeline-description {
  font-size: 0.9375rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.25rem;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .timeline-item {
    gap: 1rem;
  }
  .timeline-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>
