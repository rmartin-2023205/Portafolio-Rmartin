<script setup lang="ts">
import { ref } from 'vue'
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUpRight,
  Clock
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
  <section id="contacto" class="py-20 md:py-28 relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Section Header -->
      <div class="mb-12 md:mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 mb-3">
          <Mail :size="13" />
          <span>Contacto Directo</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Iniciemos una conversación
        </h2>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
          ¿Tienes una oportunidad laboral, un proyecto o una consulta? Escríbeme y te responderé a la brevedad.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: Contact Cards -->
        <div class="lg:col-span-5 space-y-4">
          <!-- Email Copy Card -->
          <div class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:border-indigo-500/30 transition-all">
            <div class="flex items-center gap-3.5 mb-4">
              <div class="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Mail :size="20" />
              </div>
              <div>
                <h3 class="text-sm font-bold text-zinc-900 dark:text-white">Correo Electrónico</h3>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">Canal de comunicación principal</p>
              </div>
            </div>

            <div class="p-3 bg-zinc-50 dark:bg-white/5 rounded-xl border border-zinc-200/60 dark:border-white/5 flex items-center justify-between gap-2">
              <span class="font-mono text-xs text-zinc-800 dark:text-zinc-200 truncate select-all">
                {{ personal.email }}
              </span>

              <button
                type="button"
                class="shrink-0 flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                :class="[
                  emailCopied
                    ? 'bg-emerald-500 text-white'
                    : 'bg-zinc-200 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-white/20'
                ]"
                @click="copyEmail"
              >
                <Check v-if="emailCopied" :size="13" />
                <Copy v-else :size="13" />
                <span>{{ emailCopied ? 'Copiado' : 'Copiar' }}</span>
              </button>
            </div>
          </div>

          <!-- Social Links -->
          <div class="grid grid-cols-2 gap-4">
            <!-- GitHub Link -->
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-indigo-500/30 transition-all group flex flex-col justify-between"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="w-9 h-9 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-800 dark:text-zinc-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Github :size="18" />
                </div>
                <ArrowUpRight :size="14" class="text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <div class="text-xs font-bold text-zinc-900 dark:text-white">GitHub</div>
                <div class="text-[11px] text-zinc-500 dark:text-zinc-400">@rmartin-2023205</div>
              </div>
            </a>

            <!-- LinkedIn Link -->
            <a
              :href="personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm hover:border-indigo-500/30 transition-all group flex flex-col justify-between"
            >
              <div class="flex items-center justify-between mb-3">
                <div class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Linkedin :size="18" />
                </div>
                <ArrowUpRight :size="14" class="text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <div class="text-xs font-bold text-zinc-900 dark:text-white">LinkedIn</div>
                <div class="text-[11px] text-zinc-500 dark:text-zinc-400">Ricardo Martín</div>
              </div>
            </a>
          </div>

          <!-- Availability Card -->
          <div class="bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-5 shadow-sm flex items-center gap-3">
            <div class="relative flex h-3 w-3 shrink-0">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div class="text-xs text-zinc-600 dark:text-zinc-400">
              <strong class="text-zinc-900 dark:text-white font-semibold">Zona Horaria:</strong> GMT-6 (Guatemala) • Respuesta habitual en menos de 24 horas.
            </div>
          </div>
        </div>

        <!-- Right Column: Form Slot Card -->
        <div class="lg:col-span-7 bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-sm backdrop-blur-md">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
