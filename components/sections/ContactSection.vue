<script setup lang="ts">
import { ref } from 'vue'
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
          <!-- Guarantee Pill -->
          <div class="response-guarantee">
            <span class="guarantee-dot"></span>
            <span>Respuesta en menos de 24 horas</span>
          </div>

          <!-- Email Card with Copy Action -->
          <div class="bento-card channel-card card-glow-hover">
            <div class="channel-top">
              <div class="channel-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <button
                type="button"
                class="copy-action-btn"
                :class="{ copied: emailCopied }"
                :title="emailCopied ? '¡Email copiado!' : 'Copiar email al portapapeles'"
                @click="copyEmail"
              >
                <span v-if="emailCopied" class="copied-indicator">✓ Copiado</span>
                <span v-else class="copy-text">Copiar</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <span class="external-arrow">↗</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <span class="external-arrow">↗</span>
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

.guarantee-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
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
  font-size: 1.25rem;
  font-weight: 700;
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
