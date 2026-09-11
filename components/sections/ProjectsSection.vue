<script setup lang="ts">
import {
  FolderGit2,
  Github,
  ArrowUpRight,
  Code2
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'
import ProjectMockup from '~/components/common/ProjectMockup.vue'
</script>

<template>
  <section id="proyectos" class="py-20 md:py-28 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <!-- Technical Section Tag -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-xs uppercase tracking-technical text-accent-light bg-accent/5 border border-accent/20 mb-3">
            <FolderGit2 :size="13" />
            <span>01 // EVIDENCIA TÉCNICA</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary">
            Proyectos Realizados
          </h2>
          <p class="font-sans text-swiss-text-secondary dark:text-carbon-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Aplicaciones completas con frontend interactivo, APIs estructuradas en backend y persistencia en bases de datos reales.
          </p>
        </div>

        <!-- Meta Count Indicator -->
        <div class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
          TOTAL_REPOS: <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">03</strong>
        </div>
      </div>

      <!-- Projects Grid (3 Cards) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          v-for="project in portfolioData.projects"
          :key="project.id"
          class="group bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm overflow-hidden flex flex-col justify-between shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors duration-200 cad-corner-marks"
        >
          <div>
            <!-- Visual Mockup Container (16:10 Aspect Ratio) -->
            <ProjectMockup
              :image-url="project.imageUrl"
              :title="project.title"
              :project-id="project.id"
              :tags="project.tags"
            />

            <!-- Card Content Body -->
            <div class="p-5 sm:p-6">
              <!-- Title & Category -->
              <div class="flex items-start justify-between gap-3 mb-2.5">
                <h3 class="font-display text-lg font-bold text-swiss-text-primary dark:text-carbon-text-primary group-hover:text-accent-light transition-colors">
                  {{ project.title }}
                </h3>
                <span class="font-mono text-[10px] px-1.5 py-0.5 rounded-xs bg-swiss-muted dark:bg-carbon-surface text-swiss-text-muted dark:text-carbon-text-muted border border-swiss-border dark:border-carbon-border shrink-0">
                  FULL STACK
                </span>
              </div>

              <!-- Project Narrative -->
              <p class="font-sans text-xs sm:text-sm text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mb-5">
                {{ project.description }}
              </p>
            </div>
          </div>

          <!-- Bottom Action Bar & Tags -->
          <div class="p-5 sm:p-6 pt-0 mt-auto">
            <!-- Tech Stack Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="px-2 py-0.5 rounded-xs font-mono text-[10px] font-medium bg-swiss-ivory dark:bg-carbon-surface text-swiss-text-secondary dark:text-carbon-text-secondary border border-swiss-border dark:border-carbon-border"
              >
                {{ tag }}
              </span>
            </div>

            <!-- GitHub Repository CTA Button -->
            <a
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-sm font-sans text-xs font-semibold text-swiss-text-primary dark:text-carbon-text-primary bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border hover:border-accent-light hover:text-accent-light transition-colors shadow-swiss-xs"
            >
              <Github :size="14" />
              <span>Ver Código en GitHub</span>
              <ArrowUpRight :size="13" class="text-swiss-text-muted dark:text-carbon-text-muted group-hover:text-accent-light transition-colors" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
