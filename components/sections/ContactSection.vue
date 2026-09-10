<script setup lang="ts">
import { ref } from 'vue'
import { portfolioData } from '~/data/portfolio'

const { personal } = portfolioData

const copied = ref(false)
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(personal.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch {
    // Fallback si clipboard API no está disponible
  }
}
</script>

<template>
  <section id="contacto" class="section contact-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Contacto</span>
        <h2 class="section-title">Ponte en Contacto</h2>
        <p class="section-subtitle">¿Tienes una propuesta, proyecto o pregunta? Me encantaría saber de ti.</p>
      </div>

      <div class="contact-grid">
        <!-- Contact Channels Info -->
        <div class="contact-info-panel card">
          <h3 class="panel-title">Información directa</h3>
          <p class="panel-subtitle">Puedes comunicarte a través de cualquiera de estos canales o mediante el formulario.</p>

          <div class="contact-items">
            <!-- Email -->
            <div class="contact-item">
              <div class="item-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div class="item-details">
                <span class="item-label">Email</span>
                <a :href="`mailto:${personal.email}`" class="item-value">{{ personal.email }}</a>
              </div>
              <button
                type="button"
                class="copy-btn"
                :title="copied ? '¡Copiado!' : 'Copiar email al portapapeles'"
                @click="copyEmail"
              >
                <span v-if="copied" class="copied-badge">¡Copiado!</span>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </button>
            </div>

            <!-- GitHub -->
            <div class="contact-item">
              <div class="item-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div class="item-details">
                <span class="item-label">GitHub</span>
                <a :href="personal.github" target="_blank" rel="noopener noreferrer" class="item-value">
                  github.com/rmartin-2023205
                </a>
              </div>
            </div>

            <!-- LinkedIn -->
            <div class="contact-item">
              <div class="item-icon-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div class="item-details">
                <span class="item-label">LinkedIn</span>
                <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer" class="item-value">
                  Ricardo Martín Quiché
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Slot / Placeholder for Phase 3 integration -->
        <div class="contact-form-panel card">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 5rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2.5rem;
}

.contact-info-panel {
  display: flex;
  flex-direction: column;
}

.panel-title {
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.panel-subtitle {
  font-size: 0.9375rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  position: relative;
}

.item-icon-wrap {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  border-radius: var(--radius-sm);
  flex-shrink: 0;
}

.item-details {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;
}

.item-label {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.item-value {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--transition-fast);
}

.item-value:hover {
  color: var(--accent-primary);
}

.copy-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}

.copy-btn:hover {
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.08);
}

.copied-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: #10b981;
}

.contact-form-panel {
  display: flex;
  flex-direction: column;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
