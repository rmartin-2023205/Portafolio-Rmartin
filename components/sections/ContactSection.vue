<script setup lang="ts">
import { ref } from 'vue'
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  MapPin
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
const emailCopied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(personal.email)
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2500)
  } catch {
    // Fallback
  }
}
</script>

<template>
  <section id="contacto" class="py-20 md:py-28 border-b border-swiss-border dark:border-carbon-border bg-swiss-bg dark:bg-carbon-bg">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
        <div>
          <!-- Section Tag -->
          <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs font-mono text-xs uppercase tracking-technical text-accent-light bg-accent/5 border border-accent/20 mb-3">
            <Mail :size="13" />
            <span>05 // CONTACTO DIRECTO</span>
          </div>
          <h2 class="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-swiss-text-primary dark:text-carbon-text-primary">
            Iniciemos una conversación
          </h2>
          <p class="font-sans text-swiss-text-secondary dark:text-carbon-text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            ¿Tienes una vacante técnica, un proyecto o una propuesta de desarrollo? Escríbeme y coordinamos.
          </p>
        </div>

        <div class="font-mono text-xs text-swiss-text-muted dark:text-carbon-text-muted">
          RESPONSE_TIME // <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">&lt; 24H</strong>
        </div>
      </div>

      <!-- Contact Grid (5 cols info / 7 cols form) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Channels & Coordinates (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Email Direct Card -->
          <div class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-5 shadow-swiss-xs cad-corner-marks">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-8 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border text-accent-light flex items-center justify-center">
                <Mail :size="16" />
              </div>
              <div>
                <h3 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                  Bandeja Principal
                </h3>
                <span class="font-mono text-[11px] text-swiss-text-muted dark:text-carbon-text-muted">
                  Contacto para reclutamiento
                </span>
              </div>
            </div>

            <!-- Email Display & Copy Action -->
            <div class="p-2.5 bg-swiss-ivory dark:bg-carbon-surface rounded-xs border border-swiss-border dark:border-carbon-border flex items-center justify-between gap-2">
              <span class="font-mono text-xs text-swiss-text-primary dark:text-carbon-text-primary truncate select-all">
                {{ personal.email }}
              </span>

              <button
                type="button"
                class="shrink-0 inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-1 rounded-xs border transition-colors cursor-pointer"
                :class="[
                  emailCopied
                    ? 'bg-accent text-white border-accent'
                    : 'bg-swiss-bg dark:bg-carbon-card text-swiss-text-secondary dark:text-carbon-text-secondary border-swiss-border dark:border-carbon-border hover:border-accent-light hover:text-accent-light'
                ]"
                @click="copyEmail"
              >
                <Check v-if="emailCopied" :size="11" />
                <Copy v-else :size="11" />
                <span>{{ emailCopied ? 'Copiado' : 'Copiar' }}</span>
              </button>
            </div>
          </div>

          <!-- Social Links Row -->
          <div class="grid grid-cols-2 gap-4">
            <!-- GitHub Link -->
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-4 shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group flex flex-col justify-between"
            >
              <div class="flex items-center justify-between mb-2">
                <Github :size="16" class="text-swiss-text-primary dark:text-carbon-text-primary" />
                <ArrowUpRight :size="13" class="text-swiss-text-muted dark:text-carbon-text-muted group-hover:text-accent-light transition-colors" />
              </div>
              <div>
                <div class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                  GitHub
                </div>
                <div class="font-mono text-[10px] text-swiss-text-muted dark:text-carbon-text-muted">
                  @rmartin-2023205
                </div>
              </div>
            </a>

            <!-- LinkedIn Link -->
            <a
              :href="personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-4 shadow-swiss-xs hover:border-accent-light dark:hover:border-accent-light transition-colors group flex flex-col justify-between"
            >
              <div class="flex items-center justify-between mb-2">
                <Linkedin :size="16" class="text-swiss-text-primary dark:text-carbon-text-primary" />
                <ArrowUpRight :size="13" class="text-swiss-text-muted dark:text-carbon-text-muted group-hover:text-accent-light transition-colors" />
              </div>
              <div>
                <div class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
                  LinkedIn
                </div>
                <div class="font-mono text-[10px] text-swiss-text-muted dark:text-carbon-text-muted">
                  Ricardo Martín
                </div>
              </div>
            </a>
          </div>

          <!-- Location & Availability Badge -->
          <div class="bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-4 shadow-swiss-xs flex items-center gap-3 font-mono text-xs">
            <span class="relative flex h-2 w-2 shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-vibrant opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
            </span>
            <div class="text-swiss-text-secondary dark:text-carbon-text-secondary text-[11px] leading-relaxed">
              <strong class="text-swiss-text-primary dark:text-carbon-text-primary font-bold">Guatemala (GMT-6)</strong> • Disponible para trabajo presencial o remoto.
            </div>
          </div>
        </div>

        <!-- Right: Contact Form Slot (7 cols) -->
        <div class="lg:col-span-7 bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border rounded-sm p-6 sm:p-8 shadow-swiss-xs cad-corner-marks">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
