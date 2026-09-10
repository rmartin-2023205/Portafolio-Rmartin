<script setup lang="ts">
import { Briefcase, Calendar, BadgeCheck, GitBranch } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { experience } = portfolioData
</script>

<template>
  <section id="experiencia" class="section experience-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Trayectoria & Prácticas</span>
        <h2 class="section-title">Experiencia Profesional</h2>
        <p class="section-subtitle">
          Participación en entornos ágiles, desarrollo de interfaces frontend y contribuciones en proyectos de código abierto.
        </p>
      </div>

      <div class="timeline-container">
        <div
          v-for="(item, index) in experience"
          :key="item.id"
          class="timeline-block"
        >
          <!-- Timeline Spine Indicator -->
          <div class="timeline-spine">
            <div class="spine-node">
              <span class="spine-dot"></span>
            </div>
            <div v-if="index < experience.length - 1" class="spine-line"></div>
          </div>

          <!-- Timeline Content Card -->
          <div class="bento-card timeline-card card-glow-hover">
            <div class="timeline-header">
              <div class="company-wrap">
                <span class="company-badge">{{ item.company }}</span>
                <BadgeCheck :size="16" class="verified-check" />
              </div>
              <span class="period-pill">
                <Calendar :size="13" />
                <span>{{ item.period }}</span>
              </span>
            </div>

            <h3 class="role-title">{{ item.role }}</h3>
            <p class="role-description">{{ item.description }}</p>

            <div class="role-tags">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="role-tag"
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
  padding: 6rem 0;
}

.timeline-container {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.timeline-block {
  display: flex;
  gap: 2rem;
  position: relative;
}

/* Spine */
.timeline-spine {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 32px;
  flex-shrink: 0;
}

.spine-node {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-surface);
  border: 2px solid var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  z-index: 2;
  box-shadow: 0 0 16px -2px rgba(99, 102, 241, 0.5);
}

.spine-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-primary);
}

.spine-line {
  position: absolute;
  top: 3rem;
  bottom: -2rem;
  width: 2px;
  background: linear-gradient(180deg, var(--accent-primary) 0%, var(--border-subtle) 100%);
}

/* Card */
.timeline-card {
  flex: 1;
  padding: 2rem;
}

.timeline-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.company-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.company-badge {
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent-secondary);
}

.verified-check {
  color: #10b981;
}

.period-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.8rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.08);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: var(--radius-full);
}

.role-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.role-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.role-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.role-tag {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .timeline-block {
    gap: 1rem;
  }
  .timeline-card {
    padding: 1.5rem;
  }
}
</style>
