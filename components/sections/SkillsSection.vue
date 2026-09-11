<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  Layers,
  Wrench,
  CheckCircle2
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { skills } = portfolioData
const activeCategory = ref<'Todos' | 'Frontend' | 'Backend' | 'Tools & Design'>('Todos')

const categories = [
  { id: 'Todos' as const, label: 'Todos los dominios', count: skills.length },
  { id: 'Frontend' as const, label: 'Frontend & UI', count: skills.filter(s => s.category === 'Frontend').length },
  { id: 'Backend' as const, label: 'Backend & Bases de Datos', count: skills.filter(s => s.category === 'Backend').length },
  { id: 'Tools & Design' as const, label: 'Herramientas & Flujo', count: skills.filter(s => s.category === 'Tools & Design').length }
]

const filteredSkills = computed(() => {
  if (activeCategory.value === 'Todos') return skills
  return skills.filter((s) => s.category === activeCategory.value)
})

const getSkillDetail = (name: string): string => {
  switch (name) {
    case 'HTML5':
      return 'Semántica web accesible, SEO técnico y estructura de documentos.'
    case 'CSS3 & Flexbox':
      return 'Maquetación responsiva moderna, Grid, animaciones fluidas y Tailwind CSS.'
    case 'JavaScript':
      return 'ES6+, manipulación del DOM, asincronía (Promises/Async-Await) y modularidad.'
    case 'React':
      return 'Componentes funcionales, custom hooks, gestión de estado y consumo de APIs.'
    case 'Node.js & Express':
      return 'Servidores HTTP, middlewares, enrutamiento modular y manejo de errores.'
    case 'SQL & Bases de Datos':
      return 'Modelado relacional y NoSQL con MongoDB; consultas, índices y CRUD.'
    case 'Git & GitHub':
      return 'Control de versiones, flujos de ramas (Git Flow), pull requests y colaboración.'
    case 'Responsive Design':
      return 'Estrategia mobile-first, media queries y adaptación multiplataforma.'
    case 'REST APIs':
      return 'Endpoints estructurados, códigos de estado HTTP y serialización JSON.'
    case 'Figma & Diseño UI/UX':
      return 'Interpretación de wireframes, design systems y prototipado visual.'
    default:
      return 'Implementación técnica en proyectos de desarrollo.'
  }
}
</script>

<template>
  <section id="habilidades" class="py-20 md:py-28 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <!-- Section Tag -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-xs uppercase tracking-technical text-accent-light bg-accent/5 border border-accent/20 mb-3">
            <Cpu :size="13" />
            <span>02 // CAPACIDAD TÉCNICA</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary">
            Competencias y Tecnologías
          </h2>
          <p class="font-sans text-swiss-text-secondary dark:text-carbon-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Evaluación cualitativa de las herramientas con las que resuelvo requerimientos reales, sin métricas porcentuales subjetivas.
          </p>
        </div>

        <!-- Meta Summary -->
        <div class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
          STACK_VERSION: <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">2026.1</strong>
        </div>
      </div>

      <!-- Technical Filter Tabs -->
      <div class="flex flex-wrap items-center gap-2 mb-8 font-mono text-xs" role="group" aria-label="Filtro de habilidades por categoría">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          :aria-pressed="activeCategory === cat.id"
          class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs border transition-colors cursor-pointer"
          :class="[
            activeCategory === cat.id
              ? 'bg-swiss-text-primary text-swiss-bg dark:bg-carbon-text-primary dark:text-carbon-bg border-swiss-text-primary dark:border-carbon-text-primary font-bold'
              : 'bg-swiss-ivory dark:bg-carbon-card border-swiss-border dark:border-carbon-border text-swiss-text-secondary dark:text-carbon-text-secondary hover:border-accent-light hover:text-swiss-text-primary dark:hover:text-carbon-text-primary'
          ]"
          @click="activeCategory = cat.id"
        >
          <span>{{ cat.label }}</span>
          <span
            class="px-1.5 py-0.2 rounded-xs text-[10px] font-mono font-bold"
            :class="activeCategory === cat.id ? 'bg-accent text-white' : 'bg-swiss-muted dark:bg-carbon-surface text-swiss-text-secondary dark:text-carbon-text-secondary'"
          >
            {{ cat.count }}
          </span>
        </button>
      </div>

      <!-- Skills Grid (Qualitative Cards, Zero Percentage Bars) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="skill in filteredSkills"
          :key="skill.name"
          class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group"
        >
          <!-- Skill Top Line: Name + Qualitative Level Badge -->
          <div class="flex items-center justify-between gap-3 mb-2">
            <div class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-none bg-accent-light"></span>
              <h3 class="font-display font-bold text-sm text-swiss-text-primary dark:text-carbon-text-primary group-hover:text-accent-light transition-colors">
                {{ skill.name }}
              </h3>
            </div>

            <!-- Qualitative Badge (No percentage numbers) -->
            <span
              class="font-mono text-[10px] font-semibold px-2 py-0.5 rounded-xs border uppercase tracking-wider"
              :class="[
                skill.level === 'Avanzado'
                  ? 'bg-swiss-muted dark:bg-carbon-surface text-swiss-text-primary dark:text-carbon-text-primary border-swiss-border dark:border-carbon-border'
                  : 'bg-swiss-ivory dark:bg-carbon-surface text-swiss-text-secondary dark:text-carbon-text-secondary border-swiss-border/70 dark:border-carbon-border/70'
              ]"
            >
              {{ skill.level === 'Avanzado' ? 'Nivel Sólido' : (skill.level === 'Intermedio' ? 'Competente' : 'En Práctica') }}
            </span>
          </div>

          <!-- Qualitative Implementation Scope -->
          <p class="font-sans text-xs text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed pl-3.5">
            {{ getSkillDetail(skill.name) }}
          </p>

          <!-- Domain Tag Footer -->
          <div class="mt-3 pt-2.5 border-t border-swiss-border/50 dark:border-carbon-border/50 flex items-center justify-between text-[10px] font-mono text-swiss-text-muted dark:text-carbon-text-muted pl-3.5">
            <span>DOMINIO: {{ skill.category }}</span>
            <span class="flex items-center gap-1 text-accent-light font-bold">
              <CheckCircle2 :size="10" />
              VERIFICADO
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
