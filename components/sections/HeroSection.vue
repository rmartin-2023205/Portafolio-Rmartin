<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRight,
  Send,
  Github,
  Linkedin,
  Copy,
  Check,
  FileCode2,
  Terminal
} from 'lucide-vue-next'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
const codeCopied = ref(false)

const copyProfileCode = async () => {
  const codeSnippet = `const developer = {
  name: '${personal.name}',
  fullName: '${personal.fullName}',
  role: '${personal.role}',
  location: 'Guatemala',
  education: [
    'KINAL - Perito en Informática (2023-2025)',
    'UMG - Ingeniería en Sistemas (2026)'
  ],
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'TypeScript'],
  status: 'Ready to build'
};`

  try {
    await navigator.clipboard.writeText(codeSnippet)
    codeCopied.value = true
    setTimeout(() => {
      codeCopied.value = false
    }, 2000)
  } catch {
    // Fallback
  }
}
</script>

<template>
  <section id="inicio" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Atmospheric Background Radial Lights -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/15 via-cyan-500/10 to-transparent blur-[120px] pointer-events-none -z-10"></div>
    <div class="absolute top-12 right-10 w-72 h-72 bg-purple-500/10 blur-[100px] pointer-events-none -z-10"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <!-- Left Column: Copy & Actions -->
        <div class="lg:col-span-7 flex flex-col items-start">
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponible para nuevos proyectos</span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.12] mb-6">
            Construyendo soluciones web
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-cyan-400">
              escalables, modernas y funcionales
            </span>.
          </h1>

          <!-- Subtitle -->
          <p class="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 max-w-xl">
            Hola, soy <strong class="text-zinc-900 dark:text-white font-semibold">{{ personal.name }}</strong> ({{ personal.fullName }}), {{ personal.role.toLowerCase() }}.
            {{ personal.description }}
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
            <a
              href="#proyectos"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explorar Proyectos</span>
              <ArrowRight :size="16" />
            </a>

            <a
              href="#contacto"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 transition-all transform hover:-translate-y-0.5"
            >
              <span>Contactar</span>
              <Send :size="15" />
            </a>
          </div>

          <!-- Social Strip -->
          <div class="flex flex-wrap items-center gap-2.5 mb-10 text-xs">
            <a
              :href="personal.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 transition-colors"
            >
              <Github :size="14" />
              <span>GitHub</span>
            </a>

            <a
              :href="personal.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-white/10 border border-zinc-200 dark:border-white/10 transition-colors"
            >
              <Linkedin :size="14" />
              <span>LinkedIn</span>
            </a>

            <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 font-mono">
              <span>{{ personal.email }}</span>
            </div>
          </div>

          <!-- Proof Metrics Bar -->
          <div class="w-full grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-white/10">
            <div>
              <div class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                3+
              </div>
              <div class="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Proyectos Full Stack</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                10+
              </div>
              <div class="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Habilidades Técnicas</div>
            </div>
            <div>
              <div class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-400">
                KINAL / UMG
              </div>
              <div class="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Educación & Formación</div>
            </div>
          </div>
        </div>

        <!-- Right Column: Interactive Code Terminal Card -->
        <div class="lg:col-span-5">
          <div class="relative group">
            <!-- Glow background effect -->
            <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div class="relative bg-white dark:bg-[#0c1220] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md">
              <!-- Window Header -->
              <div class="px-4 py-3 bg-zinc-100/80 dark:bg-white/5 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>

                <div class="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <FileCode2 :size="13" />
                  <span>ricardo.config.ts</span>
                </div>

                <!-- Copy Snippet Button -->
                <button
                  type="button"
                  class="flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded bg-zinc-200/70 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-white/20 transition-colors"
                  :title="codeCopied ? 'Copiado al portapapeles' : 'Copiar código'"
                  @click="copyProfileCode"
                >
                  <Check v-if="codeCopied" :size="12" class="text-emerald-500" />
                  <Copy v-else :size="12" />
                  <span>{{ codeCopied ? 'Copiado' : 'Copiar' }}</span>
                </button>
              </div>

              <!-- Code Content -->
              <div class="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-zinc-800 dark:text-zinc-200">
                <p><span class="text-purple-600 dark:text-purple-400 font-semibold">const</span> <span class="text-blue-600 dark:text-blue-400">developer</span> = {</p>
                <p class="pl-4"><span class="text-zinc-500 dark:text-zinc-400">name:</span> <span class="text-emerald-600 dark:text-emerald-400">'{{ personal.name }}'</span>,</p>
                <p class="pl-4"><span class="text-zinc-500 dark:text-zinc-400">role:</span> <span class="text-emerald-600 dark:text-emerald-400">'{{ personal.role }}'</span>,</p>
                <p class="pl-4"><span class="text-zinc-500 dark:text-zinc-400">education:</span> [</p>
                <p class="pl-8 text-zinc-600 dark:text-zinc-400"><span class="text-emerald-600 dark:text-emerald-400">'KINAL - Perito en Informática'</span>,</p>
                <p class="pl-8 text-zinc-600 dark:text-zinc-400"><span class="text-emerald-600 dark:text-emerald-400">'UMG - Ingeniería en Sistemas'</span></p>
                <p class="pl-4">],</p>
                <p class="pl-4"><span class="text-zinc-500 dark:text-zinc-400">stack:</span> [</p>
                <p class="pl-8 text-indigo-600 dark:text-indigo-400">'React', 'Node.js', 'Express', 'MongoDB', 'SQL'</p>
                <p class="pl-4">],</p>
                <p class="pl-4"><span class="text-zinc-500 dark:text-zinc-400">mindset:</span> <span class="text-amber-600 dark:text-amber-400">'Clean Code & Continuous Learning'</span>,</p>
                <p class="pl-4"><span class="text-zinc-500 dark:text-zinc-400">available:</span> <span class="text-emerald-600 dark:text-emerald-400 font-bold">true</span></p>
                <p>};</p>
              </div>

              <!-- Terminal Footer Bar -->
              <div class="px-4 py-2 bg-zinc-50 dark:bg-black/20 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                <div class="flex items-center gap-1.5">
                  <Terminal :size="12" class="text-indigo-500" />
                  <span>TypeScript 5.7 • Node.js</span>
                </div>
                <div class="flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>En línea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
