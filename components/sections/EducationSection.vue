<script setup lang="ts">
import { GraduationCap, BookOpen, Network, BadgeCheck } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { education } = portfolioData

const getEduIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen':
      return BookOpen
    case 'Network':
      return Network
    case 'GraduationCap':
    default:
      return GraduationCap
  }
}
</script>

<template>
  <section id="educacion" class="section education-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Fundamentos Académicos</span>
        <h2 class="section-title">Educación & Certificaciones</h2>
        <p class="section-subtitle">
          Formación técnica integral y preparación universitaria en ciencias de la computación e ingeniería.
        </p>
      </div>

      <div class="education-cards-grid">
        <div
          v-for="item in education"
          :key="item.id"
          class="bento-card edu-card card-glow-hover"
        >
          <div class="edu-card-top">
            <div class="edu-icon-badge">
              <component :is="getEduIcon(item.icon)" :size="22" class="edu-svg" />
            </div>
            <div class="edu-status-pill">
              <span v-if="item.id === 'umg-ingenieria'" class="active-dot"></span>
              <span>{{ item.period }}</span>
            </div>
          </div>

          <div class="edu-body">
            <h3 class="edu-title">{{ item.title }}</h3>
            <p class="edu-institution">{{ item.institution }}</p>
            <p class="edu-description">{{ item.description }}</p>
          </div>

          <div class="edu-footer">
            <span class="edu-verified-tag">
              <BadgeCheck :size="15" class="badge-check-svg" />
              <span>Acreditado Oficialmente</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  padding: 6rem 0;
}

.education-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.75rem;
}

.edu-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  min-height: 270px;
}

.edu-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.edu-icon-badge {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
}

.edu-svg {
  color: var(--accent-primary);
}

.edu-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.35rem 0.8rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-full);
}

.active-dot {
  width: 7px;
  height: 7px;
  background: #10b981;
  border-radius: 50%;
  box-shadow: 0 0 8px #10b981;
  animation: pulseDot 2s infinite ease-in-out;
}

.edu-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.edu-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.edu-institution {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--accent-secondary);
}

.edu-description {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.edu-footer {
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.edu-verified-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #10b981;
}

.badge-check-svg {
  color: #10b981;
}

@media (max-width: 640px) {
  .education-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
