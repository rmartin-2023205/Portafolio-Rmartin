<script setup lang="ts">
import { ref, computed } from 'vue'
import { Sparkles, Code2, Database, Wrench, Layers } from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { skills } = portfolioData
const activeCategory = ref<'Todos' | 'Frontend' | 'Backend' | 'Tools & Design'>('Todos')

const categories: Array<{ id: 'Todos' | 'Frontend' | 'Backend' | 'Tools & Design'; label: string; icon: any }> = [
  { id: 'Todos', label: 'Todos', icon: Sparkles },
  { id: 'Frontend', label: 'Frontend', icon: Code2 },
  { id: 'Backend', label: 'Backend', icon: Database },
  { id: 'Tools & Design', label: 'Tools & Design', icon: Wrench }
]

const filteredSkills = computed(() => {
  if (activeCategory.value === 'Todos') {
    return skills
  }
  return skills.filter((s) => s.category === activeCategory.value)
})

const getCategoryCount = (category: string) => {
  if (category === 'Todos') return skills.length
  return skills.filter((s) => s.category === category).length
}

const getLevelBadgeClass = (level: string) => {
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
        <span class="section-badge">Stack de Desarrollo</span>
        <h2 class="section-title">Habilidades Técnicas</h2>
        <p class="section-subtitle">
          Herramientas y tecnologías dominadas para crear productos robustos, escalables y visualmente atractivos.
        </p>
      </div>

      <!-- Interactive Category Filter Tabs with Lucide Icons -->
      <div class="skills-tabs-wrap">
        <div class="skills-tabs">
          <button
            v-for="cat in categories"
            :key="cat.id"
            type="button"
            class="tab-btn"
            :class="{ active: activeCategory === cat.id }"
            @click="activeCategory = cat.id"
          >
            <component :is="cat.icon" :size="14" class="tab-icon-svg" />
            <span>{{ cat.label }}</span>
            <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
          </button>
        </div>
      </div>

      <!-- Skills Cards Grid -->
      <transition-group name="list" tag="div" class="skills-grid">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="bento-card skill-card card-glow-hover"
        >
          <div class="skill-top">
            <div class="skill-identity">
              <h3 class="skill-title">{{ skill.name }}</h3>
              <span class="skill-category-tag">{{ skill.category }}</span>
            </div>
            <span class="skill-level-pill" :class="getLevelBadgeClass(skill.level)">
              {{ skill.level }}
            </span>
          </div>

          <!-- Progress Bar & Meter -->
          <div class="skill-meter-wrap">
            <div class="meter-track">
              <div
                class="meter-fill"
                :style="{ width: `${skill.percentage}%` }"
              ></div>
            </div>
            <div class="meter-label">
              <span class="meter-caption">Nivel de dominio</span>
              <span class="meter-percent">{{ skill.percentage }}%</span>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: 6rem 0;
}

/* Category Filter Tabs */
.skills-tabs-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.skills-tabs {
  display: inline-flex;
  padding: 0.35rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  gap: 0.35rem;
  box-shadow: var(--shadow-xs);
  flex-wrap: wrap;
  justify-content: center;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.tab-icon-svg {
  transition: transform var(--transition-fast);
}

.tab-btn:hover {
  color: var(--text-primary);
}

.tab-btn.active {
  color: #ffffff;
  background: var(--gradient-brand);
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.4);
}

.tab-btn.active .tab-icon-svg {
  transform: scale(1.1);
}

.tab-count {
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  background: rgba(0, 0, 0, 0.18);
  border-radius: var(--radius-full);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  min-height: 140px;
}

.skill-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.skill-identity {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.skill-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-category-tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.skill-level-pill {
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

/* Progress Meter */
.skill-meter-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meter-track {
  width: 100%;
  height: 8px;
  background: var(--bg-surface-elevated);
  border-radius: var(--radius-full);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
}

.meter-fill {
  height: 100%;
  background: var(--gradient-brand);
  border-radius: var(--radius-full);
  transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.meter-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
}

.meter-caption {
  color: var(--text-muted);
}

.meter-percent {
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: var(--accent-primary);
}

/* Transitions */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.96);
}
</style>
