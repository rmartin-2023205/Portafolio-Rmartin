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
  <section id="inicio" class="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg bg-cad-grid">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <!-- Left Column: Value Proposition & CTAs (7 cols) -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs border border-swiss-border dark:border-carbon-border bg-swiss-ivory dark:bg-carbon-card text-swiss-text-primary dark:text-carbon-text-primary font-mono text-xs mb-6 shadow-swiss-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-vibrant opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
            </span>
            <span class="font-semibold tracking-tight">DISPONIBLE // JUNIOR FULL STACK</span>
            <span class="text-swiss-text-muted dark:text-carbon-text-muted">•</span>
            <span class="text-swiss-text-muted dark:text-carbon-text-muted flex items-center gap-1">
              <MapPin :size="11" />
              Guatemala
            </span>
          </div>

          <!-- Main Technical Headline -->
          <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary leading-[1.1] mb-6">
            Desarrollo de interfaces reactivas y
            <span class="text-accent-light">arquitecturas backend</span>
            confiables.
          </h1>

          <!-- Value Proposition Narrative -->
          <p class="font-sans text-base sm:text-lg text-swiss-text-secondary dark:text-carbon-text-secondary leading-relaxed mb-8 max-w-xl">
            Hola, soy <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-semibold">{{ personal.fullName }}</strong>. Conecto interfaces frontend intuitivas con APIs estructuradas en Node.js, Express y bases de datos relacionales y NoSQL, con foco en código limpio y mantenible.
          </p>

          <!-- Recruitment Action Strip (CV + Projects + Contact) -->
          <div class="flex flex-wrap items-center gap-3 mb-8 w-full sm:w-auto">
            <!-- Primary CTA: Projects -->
            <a
              href="#proyectos"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-hover transition-colors shadow-swiss-xs"
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
              class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm font-mono font-medium text-xs text-swiss-text-primary dark:text-carbon-text-primary bg-swiss-ivory dark:bg-carbon-card border border-swiss-border dark:border-carbon-border hover:border-accent-light hover:text-accent-light transition-all shadow-swiss-xs"
            >
              <Download :size="14" class="text-accent-light" />
              <span>Descargar CV (PDF)</span>
            </a>

            <!-- Secondary CTA: Contact -->
            <a
              href="#contacto"
              class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm font-sans font-medium text-xs text-swiss-text-secondary dark:text-carbon-text-secondary hover:text-swiss-text-primary dark:hover:text-carbon-text-primary border border-transparent hover:border-swiss-border dark:hover:border-carbon-border transition-colors"
            >
              <span>Contactar</span>
              <Send :size="13" />
            </a>
          </div>

          <!-- Social Proof & External Links -->
          <div class="flex items-center gap-3 pt-6 border-t border-swiss-border dark:border-carbon-border w-full text-xs font-mono text-swiss-text-muted dark:text-carbon-text-muted">
            <span class="uppercase tracking-technical text-[10px]">Redes //</span>
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-accent-light transition-colors"
            >
              <Github :size="13" />
              <span>GitHub</span>
            </a>
            <span>/</span>
            <a
              :href="personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 hover:text-accent-light transition-colors"
            >
              <Linkedin :size="13" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Right Column: Technical Blueprint Card (5 cols) -->
        <div class="lg:col-span-5">
          <div class="relative bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-6 shadow-swiss-sm cad-corner-marks">
            <!-- Card Header: CAD Spec Label -->
            <div class="flex items-center justify-between pb-4 mb-5 border-b border-swiss-border dark:border-carbon-border font-mono text-[11px]">
              <span class="text-swiss-text-primary dark:text-carbon-text-primary font-bold tracking-tight">
                SPEC.SYS // CORE CAPABILITIES
              </span>
              <span class="text-accent-light font-bold">REV 2026.01</span>
            </div>

            <!-- Architecture Capability Items -->
            <div class="space-y-4 font-sans">
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
                    Creación de aplicaciones web modulares con React, TypeScript, Vue y Nuxt 3, garantizando interfaces accesibles y fluidas.
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
                    Servicios Backend & Datos
                  </h2>
                  <p class="text-xs text-swiss-text-secondary dark:text-carbon-text-secondary mt-1 leading-relaxed">
                    Diseño e implementación de APIs RESTful con Node.js y Express. Persistencia y consultas estructuradas en MongoDB y SQL.
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
                    Tipado estricto, validaciones de esquema (Zod), control de versiones con Git y compromiso con buenas prácticas de arquitectura.
                  </p>
                </div>
              </div>
            </div>

            <!-- Card Footer: Academic Foundation Meta -->
            <div class="mt-5 pt-4 border-t border-swiss-border dark:border-carbon-border flex items-center justify-between text-[11px] font-mono text-swiss-text-muted dark:text-carbon-text-muted">
              <span class="flex items-center gap-1.5">
                <CheckCircle2 :size="12" class="text-accent-light" />
                <span>KINAL (Perito) & UMG (Sistemas)</span>
              </span>
              <span class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">READY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
