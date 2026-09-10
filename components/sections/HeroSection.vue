<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData
const codeCopied = ref(false)

const copyProfileCode = async () => {
  const codeSnippet = `const developer = {
  name: '${personal.name}',
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
  <section id="inicio" class="hero-section">
    <div class="container hero-grid">
      <!-- Left Column: Copy & CTAs -->
      <div class="hero-content">
        <!-- Status Indicator Pill -->
        <div class="hero-status-wrap">
          <div class="status-pill">
            <span class="status-dot"></span>
            <span class="status-text">Disponible para nuevos proyectos</span>
          </div>
        </div>

        <!-- Main Title -->
        <h1 class="hero-headline">
          Construyendo aplicaciones web <span class="gradient-text">escalables, modernas y funcionales</span>.
        </h1>

        <!-- Subheading -->
        <p class="hero-subheading">
          Hola, soy <strong class="text-highlight">{{ personal.name }}</strong> ({{ personal.fullName }}), {{ personal.role.toLowerCase() }}.
          {{ personal.description }}
        </p>

        <!-- CTAs -->
        <div class="hero-cta-group">
          <a href="#proyectos" class="btn btn-primary">
            <span>Explorar Proyectos</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>

          <a href="#contacto" class="btn btn-secondary">
            <span>Contactar</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        <!-- Social & Quick Proof Links -->
        <div class="hero-social-strip">
          <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="social-chip" title="Ver GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>

          <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="social-chip" title="Ver LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LinkedIn</span>
          </a>

          <div class="social-chip email-chip" title="Email directo">
            <span>{{ personal.email }}</span>
          </div>
        </div>

        <!-- Highlights Stats Banner -->
        <div class="hero-stats-banner">
          <div class="stat-cell">
            <span class="stat-number gradient-text">3+</span>
            <span class="stat-desc">Proyectos Full Stack</span>
          </div>
          <div class="stat-separator"></div>
          <div class="stat-cell">
            <span class="stat-number gradient-text">10+</span>
            <span class="stat-desc">Habilidades & Tecnologías</span>
          </div>
          <div class="stat-separator"></div>
          <div class="stat-cell">
            <span class="stat-number gradient-text">KINAL / UMG</span>
            <span class="stat-desc">Formación Técnica & Univ.</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive Code Profile Widget -->
      <div class="hero-visual">
        <div class="code-window card card-glow-hover">
          <!-- Window Header (macOS style) -->
          <div class="window-header">
            <div class="window-dots">
              <span class="window-dot dot-red"></span>
              <span class="window-dot dot-yellow"></span>
              <span class="window-dot dot-green"></span>
            </div>
            <div class="window-tab">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span>ricardo.config.ts</span>
            </div>
            <button
              type="button"
              class="copy-code-btn"
              :title="codeCopied ? '¡Copiado!' : 'Copiar snippet'"
              @click="copyProfileCode"
            >
              <span v-if="codeCopied" class="copied-text">✓ Copiado</span>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </button>
          </div>

          <!-- Code Content -->
          <div class="code-body">
            <pre class="code-pre"><code><span class="token-keyword">const</span> <span class="token-def">developer</span>: <span class="token-type">FullStackDev</span> = {
  <span class="token-prop">name</span>: <span class="token-string">'Ricardo Martín'</span>,
  <span class="token-prop">role</span>: <span class="token-string">'Junior Full Stack Developer'</span>,
  <span class="token-prop">stack</span>: [
    <span class="token-string">'React'</span>, <span class="token-string">'Node.js'</span>, <span class="token-string">'Express'</span>,
    <span class="token-string">'MongoDB'</span>, <span class="token-string">'SQL'</span>, <span class="token-string">'TypeScript'</span>
  ],
  <span class="token-prop">education</span>: {
    <span class="token-prop">technical</span>: <span class="token-string">'KINAL (Perito Informática)'</span>,
    <span class="token-prop">university</span>: <span class="token-string">'UMG (Ingeniería en Sistemas)'</span>
  },
  <span class="token-prop">focus</span>: <span class="token-string">'Clean Code & Responsive UI'</span>,
  <span class="token-prop">available</span>: <span class="token-bool">true</span>
};</code></pre>
          </div>

          <!-- Floating Badge -->
          <div class="floating-tech-badge animate-float">
            <div class="badge-icon">⚡</div>
            <div class="badge-text">
              <strong>100% Código Limpio</strong>
              <span>Orientado a soluciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8.5rem 0 5rem;
  position: relative;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  align-items: center;
}

/* Left Column */
.hero-content {
  display: flex;
  flex-direction: column;
}

.hero-status-wrap {
  margin-bottom: 1.5rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-xs);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
  animation: pulseDot 2s infinite ease-in-out;
}

.status-text {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.02em;
}

.hero-headline {
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.035em;
  margin-bottom: 1.25rem;
}

.hero-subheading {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2.25rem;
  max-width: 580px;
}

.text-highlight {
  color: var(--text-primary);
  font-weight: 700;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

/* Social Strip */
.hero-social-strip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.social-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.8125rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.social-chip:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-xs);
}

.email-chip {
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
}

/* Stats Banner */
.hero-stats-banner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 1.5rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  max-width: fit-content;
}

.stat-cell {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.1;
  font-family: 'JetBrains Mono', monospace;
}

.stat-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.stat-separator {
  width: 1px;
  height: 32px;
  background: var(--border-subtle);
}

/* Right Column: Code Window */
.hero-visual {
  position: relative;
}

.code-window {
  padding: 0;
  overflow: hidden;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.window-tab {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.8125rem;
  color: var(--text-primary);
  font-weight: 500;
}

.copy-code-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-xs);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.75rem;
}

.copy-code-btn:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.08);
}

.copied-text {
  color: #10b981;
  font-weight: 600;
}

.code-body {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.35);
}

.code-pre {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  line-height: 1.7;
  color: #e2e8f0;
  overflow-x: auto;
}

/* Syntax Highlighting */
.token-keyword { color: #f43f5e; font-weight: 600; }
.token-def { color: #38bdf8; font-weight: 600; }
.token-type { color: #a855f7; }
.token-prop { color: #94a3b8; }
.token-string { color: #34d399; }
.token-bool { color: #fbbf24; }

/* Floating Tech Badge */
.floating-tech-badge {
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border-hover);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg), 0 0 25px -5px rgba(99, 102, 241, 0.3);
}

.badge-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-brand);
  border-radius: var(--radius-md);
  font-size: 1.1rem;
}

.badge-text {
  display: flex;
  flex-direction: column;
}

.badge-text strong {
  font-size: 0.8125rem;
  color: var(--text-primary);
}

.badge-text span {
  font-size: 0.75rem;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-headline {
    font-size: 2.75rem;
  }
}

@media (max-width: 640px) {
  .hero-headline {
    font-size: 2.15rem;
  }
  .hero-cta-group {
    flex-direction: column;
  }
  .hero-cta-group .btn {
    width: 100%;
  }
  .hero-stats-banner {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: none;
    gap: 1rem;
  }
  .stat-separator {
    display: none;
  }
  .floating-tech-badge {
    position: static;
    margin-top: 1rem;
  }
}
</style>
