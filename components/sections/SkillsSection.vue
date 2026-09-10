<script setup lang="ts">
import { portfolioData } from '~/data/portfolio'

const { skills } = portfolioData

const getLevelClass = (level: string) => {
  switch (level.toLowerCase()) {
    case 'avanzado':
      return 'badge-advanced'
    case 'intermedio':
      return 'badge-intermediate'
    case 'básico':
    default:
      return 'badge-basic'
  }
}
</script>

<template>
  <section id="habilidades" class="section skills-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Stack Técnico</span>
        <h2 class="section-title">Habilidades y Tecnologías</h2>
        <p class="section-subtitle">Competencias técnicas en desarrollo frontend, backend, bases de datos y herramientas de flujo de trabajo.</p>
      </div>

      <div class="skills-grid">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="skill-card card"
        >
          <div class="skill-header">
            <h3 class="skill-name">{{ skill.name }}</h3>
            <span class="skill-badge" :class="getLevelClass(skill.level)">
              {{ skill.level }}
            </span>
          </div>

          <div class="skill-bar-wrapper">
            <div class="skill-track">
              <div
                class="skill-fill"
                :style="{ width: `${skill.percentage}%` }"
              ></div>
            </div>
            <span class="skill-percentage">{{ skill.percentage }}%</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 5rem 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
  padding: 1.5rem;
}

.skill-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.skill-name {
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-full);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-advanced {
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.badge-intermediate {
  background: rgba(59, 130, 246, 0.12);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.badge-basic {
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.skill-bar-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-track {
  flex: 1;
  height: 8px;
  background: var(--bg-surface-elevated);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-percentage {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  min-width: 36px;
  text-align: right;
}
</style>
