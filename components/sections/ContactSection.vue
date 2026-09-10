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
  <section id="contacto" class="section contact-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Hablemos</span>
        <h2 class="section-title">Ponte en Contacto</h2>
        <p class="section-subtitle">
          ¿Tienes una vacante, una propuesta freelance o una consulta técnica? Conversemos sobre cómo puedo aportar a tu equipo.
        </p>
      </div>

      <div class="contact-layout">
        <!-- Direct Channels Panel -->
        <div class="contact-cards-column">
          <!-- Response Guarantee Pill -->
          <div class="response-guarantee">
            <Clock :size="14" class="clock-svg" />
            <span>Respuesta garantizada en menos de 24 horas</span>
          </div>

          <!-- Email Card with Copy Action -->
          <div class="bento-card channel-card card-glow-hover">
            <div class="channel-top">
              <div class="channel-icon">
                <Mail :size="20" />
              </div>
              <button
                type="button"
                class="copy-action-btn"
                :class="{ copied: emailCopied }"
                :title="emailCopied ? '¡Email copiado!' : 'Copiar email al portapapeles'"
                @click="copyEmail"
              >
                <template v-if="emailCopied">
                  <Check :size="13" />
                  <span class="copied-indicator">Copiado</span>
                </template>
                <template v-else>
                  <Copy :size="13" />
                  <span class="copy-text">Copiar</span>
                </template>
              </button>
            </div>
            <div class="channel-info">
              <span class="channel-label">Correo Electrónico</span>
              <a :href="`mailto:${personal.email}`" class="channel-val">
                {{ personal.email }}
              </a>
            </div>
          </div>

          <!-- GitHub Card -->
          <a
            :href="personal.github"
            target="_blank"
            rel="noopener noreferrer"
            class="bento-card channel-card card-glow-hover link-card"
          >
            <div class="channel-top">
              <div class="channel-icon">
                <Github :size="20" />
              </div>
              <ArrowUpRight :size="18" class="external-arrow" />
            </div>
            <div class="channel-info">
              <span class="channel-label">Perfil de GitHub</span>
              <span class="channel-val">github.com/rmartin-2023205</span>
            </div>
          </a>

          <!-- LinkedIn Card -->
          <a
            :href="personal.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="bento-card channel-card card-glow-hover link-card"
          >
            <div class="channel-top">
              <div class="channel-icon">
                <Linkedin :size="20" />
              </div>
              <ArrowUpRight :size="18" class="external-arrow" />
            </div>
            <div class="channel-info">
              <span class="channel-label">Red Profesional</span>
              <span class="channel-val">{{ personal.fullName }}</span>
            </div>
          </a>
        </div>

        <!-- Form Column -->
        <div class="bento-card contact-form-column">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 6rem 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.95fr 1.25fr;
  gap: 2.5rem;
  align-items: start;
}

/* Left Column */
.contact-cards-column {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.response-guarantee {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  align-self: flex-start;
}

.clock-svg {
  color: #10b981;
}

.channel-card {
  padding: 1.5rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-card {
  cursor: pointer;
}

.channel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.channel-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  border-radius: var(--radius-md);
}

.copy-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-full);
  padding: 0.35rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 600;
  font-family: inherit;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.copy-action-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.copy-action-btn.copied {
  background: rgba(16, 185, 129, 0.12);
  border-color: #10b981;
  color: #10b981;
}

.external-arrow {
  color: var(--text-muted);
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.link-card:hover .external-arrow {
  transform: translate(3px, -3px);
  color: var(--accent-primary);
}

.channel-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.channel-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

.channel-val {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.channel-val:hover {
  color: var(--accent-primary);
}

/* Right Column */
.contact-form-column {
  padding: 2.5rem;
}

@media (max-width: 992px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}
</style>
