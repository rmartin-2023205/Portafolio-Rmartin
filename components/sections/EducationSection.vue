<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { education } = portfolioData
</script>

<template>
  <section id="educacion" class="section education-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Formación</span>
        <h2 class="section-title">Educación</h2>
        <p class="section-subtitle">Bases técnicas y formación académica universitaria en informática y sistemas.</p>
      </div>

      <div class="education-grid">
        <div
          v-for="item in education"
          :key="item.id"
          class="edu-card card"
        >
          <div class="edu-card-top">
            <span class="edu-icon">{{ item.icon }}</span>
            <span class="edu-period">{{ item.period }}</span>
          </div>

          <h3 class="edu-title">{{ item.title }}</h3>
          <p class="edu-institution">{{ item.institution }}</p>
          <p class="edu-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  padding: 5rem 0;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.75rem;
}

.edu-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.edu-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.edu-icon {
  font-size: 1.75rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.edu-period {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.08);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.edu-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: var(--text-primary);
}

.edu-institution {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent-secondary);
  margin-bottom: 0.75rem;
}

.edu-description {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-top: auto;
}
</style>
