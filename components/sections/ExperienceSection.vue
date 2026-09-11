<script setup lang="ts">
import {
  Briefcase,
  Calendar,
  Building2,
  GitPullRequest
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'
</script>

<template>
  <section id="experiencia" class="py-20 md:py-28 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <!-- Section Tag -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-xs uppercase tracking-technical text-accent-light bg-accent/5 border border-accent/20 mb-3">
            <Briefcase :size="13" />
            <span>03 // TRAYECTORIA PRÁCTICA</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary">
            Experiencia Laboral y Práctica
          </h2>
          <p class="font-sans text-swiss-text-secondary dark:text-carbon-text-secondary text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
            Desarrollo colaborativo en agencias, plataformas técnicas completas y actividad en la comunidad de código abierto.
          </p>
        </div>

        <div class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
          TIMELINE // <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">2023 - 2026</strong>
        </div>
      </div>

      <!-- Technical Architecture Timeline -->
      <div class="relative border-l border-swiss-border dark:border-carbon-border ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
        <article
          v-for="(item, idx) in portfolioData.experience"
          :key="item.id"
          class="relative group"
        >
          <!-- Technical Square Node on Timeline (No purple glows) -->
          <div
            class="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 bg-swiss-bg dark:bg-carbon-bg border-2 border-accent-light rounded-none group-hover:bg-accent-light transition-colors"
            aria-hidden="true"
          ></div>

          <!-- Card Content -->
          <div class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 sm:p-6 shadow-swiss-xs group-hover:border-accent-light dark:group-hover:border-accent-light transition-colors cad-corner-marks">
            <!-- Top Line: Period Badge & Experience ID -->
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
              <!-- Period with Precision Status Badge for Active Role -->
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 text-swiss-text-secondary dark:text-carbon-text-secondary font-medium">
                  <Calendar :size="12" class="text-accent-light" />
                  <span>{{ item.period }}</span>
                </span>

                <!-- Precision Amber Badge (Status: En curso / Concluido) -->
                <span
                  v-if="item.period.includes('Presente')"
                  class="px-2 py-0.5 rounded-xs font-mono text-[10px] font-semibold bg-precision-subtle dark:bg-carbon-surface text-precision-textLight dark:text-precision-textDark border border-precision/30"
                >
                  ACTUALMENTE EN CURSO
                </span>
              </div>

              <span class="text-[10px] text-swiss-text-muted dark:text-carbon-text-muted uppercase">
                EXP_NODE.0{{ idx + 1 }}
              </span>
            </div>

            <!-- Role Title -->
            <h3 class="font-display text-base sm:text-lg font-bold text-swiss-text-primary dark:text-carbon-text-primary mt-1">
              {{ item.role }}
            </h3>

            <!-- Company -->
            <div class="flex items-center gap-1.5 font-sans text-xs font-semibold text-accent-light mt-0.5 mb-3">
              <Building2 :size="13" />
              <span>{{ item.company }}</span>
            </div>

            <!-- Description -->
            <p class="font-sans text-xs sm:text-sm text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mb-4">
              {{ item.description }}
            </p>

            <!-- Tech Stack Chips -->
            <div class="flex flex-wrap gap-1.5 pt-3 border-t border-swiss-border/60 dark:border-carbon-border/60">
              <span
                v-for="tag in item.tags"
                :key="tag"
                class="px-2 py-0.5 rounded-xs font-mono text-[10px] bg-swiss-ivory dark:bg-carbon-surface text-swiss-text-secondary dark:text-carbon-text-secondary border border-swiss-border dark:border-carbon-border"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
