<script setup lang="ts">
import {
  User,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
  GitBranch,
  ShieldCheck
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
</script>

<template>
  <section id="sobre" class="py-20 md:py-28 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <!-- Section Tag -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-xs uppercase tracking-technical text-accent-light bg-accent/5 border border-accent/20 mb-3">
            <User :size="13" />
            <span>00 // PERFIL PROFESIONAL</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary">
            Sobre mí
          </h2>
          <p class="font-sans text-swiss-text-secondary dark:text-carbon-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Conoce mi trasfondo técnico, metodología de trabajo y compromiso con el desarrollo de software de calidad.
          </p>
        </div>

        <div class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
          STATUS // <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">READY TO BUILD</strong>
        </div>
      </div>

      <!-- Main Layout: Editorial Narrative & Principles (Grid 12 cols) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Bio Paragraphs (7 cols) -->
        <div class="lg:col-span-7 bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-6 sm:p-8 shadow-swiss-xs cad-corner-marks">
          <div class="flex items-center justify-between pb-4 mb-6 border-b border-swiss-border dark:border-carbon-border font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
            <span class="text-swiss-text-primary dark:text-carbon-text-primary font-bold uppercase tracking-technical">
              BIO.LOG // RICARDO MARTÍN
            </span>
            <span class="text-accent-light">GUATEMALA (GMT-6)</span>
          </div>

          <!-- Paragraphs -->
          <div class="space-y-4 font-sans text-sm sm:text-base text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed">
            <p v-for="(paragraph, index) in personal.aboutParagraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <!-- Engineering Commitments Footer -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-swiss-border dark:border-carbon-border font-mono text-xs">
            <div class="p-3 bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border rounded-xs">
              <div class="font-bold text-swiss-text-primary dark:text-carbon-text-primary">FULL STACK</div>
              <div class="text-[11px] text-swiss-text-muted dark:text-carbon-text-muted mt-0.5">Frontend + REST APIs</div>
            </div>
            <div class="p-3 bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border rounded-xs">
              <div class="font-bold text-swiss-text-primary dark:text-carbon-text-primary">CLEAN CODE</div>
              <div class="text-[11px] text-swiss-text-muted dark:text-carbon-text-muted mt-0.5">Mantenible y tipado</div>
            </div>
            <div class="p-3 bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border rounded-xs">
              <div class="font-bold text-swiss-text-primary dark:text-carbon-text-primary">OPEN SOURCE</div>
              <div class="text-[11px] text-swiss-text-muted dark:text-carbon-text-muted mt-0.5">Colaboración activa</div>
            </div>
          </div>
        </div>

        <!-- Right: Work Pillars / Principles (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Pillar 1 -->
          <div class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group">
            <div class="flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border text-accent-light flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent-light transition-colors">
                <Sparkles :size="16" />
              </div>
              <div>
                <h3 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary group-hover:text-accent-light transition-colors">
                  Aprendizaje Ágil y Continuo
                </h3>
                <p class="font-sans text-xs text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mt-1">
                  Capacidad comprobada para asimilar nuevas librerías, stacks y metodologías de trabajo con rapidez y disciplina.
                </p>
              </div>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group">
            <div class="flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border text-accent-light flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent-light transition-colors">
                <GitBranch :size="16" />
              </div>
              <div>
                <h3 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary group-hover:text-accent-light transition-colors">
                  Colaboración y Control de Versiones
                </h3>
                <p class="font-sans text-xs text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mt-1">
                  Experiencia en trabajo en equipo, ramas en Git, revisión de código y comunicación técnica asertiva.
                </p>
              </div>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group">
            <div class="flex items-start gap-3.5">
              <div class="w-8 h-8 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border text-accent-light flex items-center justify-center shrink-0 mt-0.5 group-hover:border-accent-light transition-colors">
                <ShieldCheck :size="16" />
              </div>
              <div>
                <h3 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary group-hover:text-accent-light transition-colors">
                  Compromiso con la Calidad
                </h3>
                <p class="font-sans text-xs text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mt-1">
                  Enfoque en accesibilidad web WCAG AA, usabilidad y arquitecturas que no requieran parches constantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
