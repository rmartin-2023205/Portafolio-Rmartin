<script setup lang="ts">
import {
  ArrowRight,
  Download,
  Send,
  Github,
  Linkedin,
  Layers,
  Server,
  ShieldCheck,
  MapPin,
  CheckCircle2
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
</script>

<template>
  <section id="inicio" class="relative pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg bg-cad-grid">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Left Column: Value Proposition & CTAs (7 cols) -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <!-- Availability Badge (Calm LED without continuous distracting ping, respects prefers-reduced-motion) -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs border border-swiss-border dark:border-carbon-border bg-swiss-ivory dark:bg-carbon-card text-swiss-text-primary dark:text-carbon-text-primary font-mono text-xs mb-5 sm:mb-6 shadow-swiss-xs">
            <span class="relative flex h-2 w-2 items-center justify-center shrink-0" aria-hidden="true">
              <span class="w-2 h-2 rounded-full bg-accent-light ring-2 ring-accent/20"></span>
            </span>
            <span class="font-semibold tracking-tight text-[11px] sm:text-xs">DISPONIBLE PARA PROYECTOS</span>
            <span class="text-swiss-text-muted dark:text-carbon-text-muted">•</span>
            <span class="text-swiss-text-secondary dark:text-carbon-text-secondary flex items-center gap-1 text-[11px] sm:text-xs">
              <MapPin :size="11" class="text-accent-light shrink-0" />
              Guatemala
            </span>
          </div>

          <!-- Main Technical Headline (Mobile-first typography scale) -->
          <h1 class="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary leading-[1.15] mb-5 sm:mb-6">
            Desarrollo de interfaces reactivas y
            <span class="text-accent-light">arquitecturas backend</span>
            confiables.
          </h1>

          <!-- Value Proposition Narrative -->
          <p class="font-sans text-sm sm:text-base md:text-lg text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mb-6 sm:mb-8 max-w-xl">
            Hola, soy <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-semibold">{{ personal.fullName }}</strong>. Construyo aplicaciones web integrando frontends modernos en React y TypeScript con APIs en Node.js, Express y bases de datos estructuradas.
          </p>

          <!-- Recruitment Action Strip (Full width on mobile, inline on desktop) -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
            <!-- Primary CTA: Projects -->
            <a
              href="#proyectos"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-sm font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-hover transition-colors shadow-swiss-xs min-h-[44px]"
            >
              <span>Ver Proyectos</span>
              <ArrowRight :size="14" />
            </a>

            <!-- Dedicated CV Download Button -->
            <a
              href="/cv-placeholder.pdf"
              download="CV_Ricardo_Martin_Quiche.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-sm font-mono font-medium text-xs text-swiss-text-primary dark:text-carbon-text-primary bg-swiss-ivory dark:bg-carbon-card border border-swiss-border dark:border-carbon-border hover:border-accent-light hover:text-accent-light transition-all shadow-swiss-xs min-h-[44px]"
            >
              <Download :size="14" class="text-accent-light" />
              <span>Descargar CV (PDF)</span>
            </a>

            <!-- Secondary CTA: Contact -->
            <a
              href="#contacto"
              class="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-sm font-sans font-medium text-xs text-swiss-text-secondary dark:text-carbon-text-secondary hover:text-swiss-text-primary dark:hover:text-carbon-text-primary border border-swiss-border/50 sm:border-transparent hover:border-swiss-border dark:hover:border-carbon-border transition-colors min-h-[44px]"
            >
              <span>Contactar</span>
              <Send :size="13" />
            </a>
          </div>

          <!-- Social Proof & External Links -->
          <div class="flex items-center gap-3 pt-4 sm:pt-6 border-t border-swiss-border dark:border-carbon-border w-full text-xs font-mono text-swiss-text-secondary dark:text-carbon-text-secondary">
            <span class="uppercase tracking-technical text-[10px] text-swiss-text-muted dark:text-carbon-text-muted">Redes //</span>
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-accent-light transition-colors py-1"
            >
              <Github :size="13" />
              <span>GitHub</span>
            </a>
            <span class="text-swiss-text-muted dark:text-carbon-text-muted">/</span>
            <a
              :href="personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-accent-light transition-colors py-1"
            >
              <Linkedin :size="13" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Clean Technical Capability Panel (5 cols) -->
        <div class="lg:col-span-5 w-full">
          <div class="relative bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 sm:p-6 shadow-swiss-sm cad-corner-marks">
            <!-- Card Header: Clean Title without excessive theatrical jargon -->
            <div class="flex items-center justify-between pb-3.5 mb-4 border-b border-swiss-border dark:border-carbon-border">
              <span class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                Enfoque Técnico
              </span>
              <span class="font-mono text-[11px] text-swiss-text-muted dark:text-carbon-text-muted">
                Full Stack
              </span>
            </div>

            <!-- Architecture Capability Items -->
            <div class="space-y-3 font-sans">
              <!-- Pillar 1 -->
              <div class="flex items-start gap-3 p-3 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border/60 dark:border-carbon-border/60">
                <div class="w-8 h-8 rounded-xs bg-accent/10 border border-accent/20 text-accent-light flex items-center justify-center shrink-0 mt-0.5">
                  <Layers :size="16" />
                </div>
                <div>
                  <h2 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                    Desarrollo Frontend Reactivo
                  </h2>
                  <p class="text-xs text-swiss-text-secondary dark:text-carbon-text-secondary mt-1 leading-relaxed">
                    Aplicaciones modulares con React, TypeScript, Vue y Nuxt 3, garantizando interfaces accesibles y fluidas.
                  </p>
                </div>
              </div>

              <!-- Pillar 2 -->
              <div class="flex items-start gap-3 p-3 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border/60 dark:border-carbon-border/60">
                <div class="w-8 h-8 rounded-xs bg-accent/10 border border-accent/20 text-accent-light flex items-center justify-center shrink-0 mt-0.5">
                  <Server :size="16" />
                </div>
                <div>
                  <h2 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                    Servicios Backend & APIs
                  </h2>
                  <p class="text-xs text-swiss-text-secondary dark:text-carbon-text-secondary mt-1 leading-relaxed">
                    Diseño e implementación de APIs RESTful en Node.js y Express con persistencia en MongoDB y SQL.
                  </p>
                </div>
              </div>

              <!-- Pillar 3 -->
              <div class="flex items-start gap-3 p-3 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border/60 dark:border-carbon-border/60">
                <div class="w-8 h-8 rounded-xs bg-accent/10 border border-accent/20 text-accent-light flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck :size="16" />
                </div>
                <div>
                  <h2 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                    Estándares & Calidad
                  </h2>
                  <p class="text-xs text-swiss-text-secondary dark:text-carbon-text-secondary mt-1 leading-relaxed">
                    Validación estricta de datos (Zod), control de versiones con Git y buenas prácticas de mantenibilidad.
                  </p>
                </div>
              </div>
            </div>

            <!-- Card Footer: Academic Foundation Meta -->
            <div class="mt-4 pt-3.5 border-t border-swiss-border dark:border-carbon-border flex items-center justify-between text-xs font-sans text-swiss-text-secondary dark:text-carbon-text-secondary">
              <span class="flex items-center gap-1.5 font-medium">
                <CheckCircle2 :size="13" class="text-accent-light shrink-0" />
                <span>Formación: KINAL & UMG</span>
              </span>
              <span class="font-mono text-[11px] text-swiss-text-muted dark:text-carbon-text-muted">
                Guatemala
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
