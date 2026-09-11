<script setup lang="ts">
import {
  GraduationCap,
  BookOpen,
  Network,
  Clock,
  CheckCircle2,
  Calendar
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'GraduationCap':
      return GraduationCap
    case 'BookOpen':
      return BookOpen
    case 'Network':
      return Network
    default:
      return GraduationCap
  }
}
</script>

<template>
  <section id="educacion" class="py-20 md:py-28 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <!-- Section Tag -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-xs uppercase tracking-technical text-accent-light bg-accent/5 border border-accent/20 mb-3">
            <GraduationCap :size="13" />
            <span>04 // FORMACIÓN ACADÉMICA</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary">
            Educación y Certificaciones
          </h2>
          <p class="font-sans text-swiss-text-secondary dark:text-carbon-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Fundamentos rigurosos en ciencias de la computación, desarrollo web y redes informáticas.
          </p>
        </div>

        <div class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
          ACADEMIC_RECORDS: <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">03</strong>
        </div>
      </div>

      <!-- Education Cards Grid (3 Columns) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="item in portfolioData.education"
          :key="item.id"
          class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 sm:p-6 flex flex-col justify-between shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group cad-corner-marks"
        >
          <div>
            <!-- Top Line: Icon & Period -->
            <div class="flex items-center justify-between gap-3 mb-5">
              <div class="w-10 h-10 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border text-accent-light flex items-center justify-center group-hover:border-accent-light transition-colors">
                <component :is="getIcon(item.icon)" :size="20" />
              </div>

              <!-- Period with Precision Status Badge for Active Studies -->
              <div class="flex items-center gap-1.5 font-mono text-[11px] text-swiss-text-secondary dark:text-carbon-text-secondary">
                <Calendar :size="12" class="text-accent-light" />
                <span>{{ item.period }}</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="font-display text-base font-bold text-swiss-text-primary dark:text-carbon-text-primary mb-1 group-hover:text-accent-light transition-colors">
              {{ item.title }}
            </h3>

            <!-- Institution -->
            <div class="font-sans text-xs font-semibold text-swiss-text-secondary dark:text-carbon-text-secondary mb-3">
              {{ item.institution }}
            </div>

            <!-- Description -->
            <p class="font-sans text-xs sm:text-sm text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed">
              {{ item.description }}
            </p>
          </div>

          <!-- Bottom Status Line -->
          <div class="pt-4 mt-5 border-t border-swiss-border/60 dark:border-carbon-border/60 flex items-center justify-between text-[11px] font-mono">
            <!-- Precision amber badge for active studies, technical muted for completed -->
            <span
              v-if="item.period.includes('2026')"
              class="px-2 py-0.5 rounded-xs font-semibold bg-precision-subtle dark:bg-carbon-surface text-precision-textLight dark:text-precision-textDark border border-precision/30 flex items-center gap-1"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-precision-light animate-pulse"></span>
              <span>EN CURSO ACTUAL</span>
            </span>
            <span
              v-else
              class="px-2 py-0.5 rounded-xs font-medium bg-swiss-muted dark:bg-carbon-surface text-swiss-text-secondary dark:text-carbon-text-secondary border border-swiss-border dark:border-carbon-border flex items-center gap-1"
            >
              <CheckCircle2 :size="11" class="text-accent-light" />
              <span>ACREDITADO</span>
            </span>

            <span class="text-swiss-text-muted dark:text-carbon-text-muted">
              {{ item.id }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
