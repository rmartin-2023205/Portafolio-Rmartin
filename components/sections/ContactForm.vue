<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2
} from 'lucide-vue-next'

const form = reactive({
  nombre: '',
  email: '',
  mensaje: '',
  website_hp: '' // Honeypot
})

const errors = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const validate = () => {
  let isValid = true
  errors.nombre = ''
  errors.email = ''
  errors.mensaje = ''

  if (!form.nombre.trim()) {
    errors.nombre = 'El nombre es obligatorio.'
    isValid = false
  } else if (form.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres.'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'El correo electrónico es obligatorio.'
    isValid = false
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = 'Ingresa un correo electrónico con formato válido.'
    isValid = false
  }

  if (!form.mensaje.trim()) {
    errors.mensaje = 'Por favor escribe tu mensaje.'
    isValid = false
  } else if (form.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe contener al menos 10 caracteres.'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validate()) return

  status.value = 'loading'
  errorMessage.value = ''

  try {
    const res = await $fetch<{ success: boolean; message: string }>('/api/contact', {
      method: 'POST',
      body: form
    })

    if (res.success) {
      status.value = 'success'
      form.nombre = ''
      form.email = ''
      form.mensaje = ''
      form.website_hp = ''
    } else {
      status.value = 'error'
      errorMessage.value = res.message || 'No se pudo enviar el mensaje.'
    }
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value =
      err?.data?.message || err?.message || 'Error de conexión con el servidor. Intenta de nuevo.'
  }
}

const resetStatus = () => {
  status.value = 'idle'
}
</script>

<template>
  <div class="contact-form-container">
    <div class="form-header">
      <h3 class="form-title">Envíame un mensaje</h3>
      <p class="form-subtitle">Completa el formulario y te responderé a tu correo.</p>
    </div>

    <!-- Success Feedback Box -->
    <transition name="fade">
      <div v-if="status === 'success'" class="alert-box success-alert">
        <CheckCircle2 :size="28" class="success-icon" />
        <div class="alert-body">
          <h4>¡Mensaje transmitido con éxito!</h4>
          <p>Gracias por tu comunicación. Ricardo Martín revisará tu mensaje y se pondrá en contacto pronto.</p>
          <button type="button" class="btn btn-secondary btn-sm" style="margin-top: 1rem;" @click="resetStatus">
            Redactar otro mensaje
          </button>
        </div>
      </div>
    </transition>

    <!-- Error Alert Box -->
    <transition name="fade">
      <div v-if="status === 'error'" class="alert-box error-alert">
        <AlertCircle :size="28" class="error-icon" />
        <div class="alert-body">
          <h4>No se pudo procesar el envío</h4>
          <p>{{ errorMessage }}</p>
        </div>
      </div>
    </transition>

    <!-- The Form -->
    <form v-if="status !== 'success'" class="modern-form" @submit.prevent="handleSubmit" novalidate>
      <!-- Honeypot Field -->
      <div class="hp-input" aria-hidden="true">
        <label for="website_hp">No llenar este campo</label>
        <input
          id="website_hp"
          v-model="form.website_hp"
          type="text"
          name="website_hp"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <!-- Nombre -->
      <div class="field-wrap" :class="{ 'field-error': errors.nombre }">
        <label for="form-nombre" class="field-label">Nombre completo *</label>
        <div class="input-container">
          <input
            id="form-nombre"
            v-model="form.nombre"
            type="text"
            class="styled-input"
            placeholder="Ej. Alexander Hamilton"
            :disabled="status === 'loading'"
            required
          />
        </div>
        <span v-if="errors.nombre" class="field-msg">{{ errors.nombre }}</span>
      </div>

      <!-- Email -->
      <div class="field-wrap" :class="{ 'field-error': errors.email }">
        <label for="form-email" class="field-label">Correo electrónico *</label>
        <div class="input-container">
          <input
            id="form-email"
            v-model="form.email"
            type="email"
            class="styled-input"
            placeholder="tu.correo@empresa.com"
            :disabled="status === 'loading'"
            required
          />
        </div>
        <span v-if="errors.email" class="field-msg">{{ errors.email }}</span>
      </div>

      <!-- Mensaje -->
      <div class="field-wrap" :class="{ 'field-error': errors.mensaje }">
        <div class="field-label-row">
          <label for="form-mensaje" class="field-label">Tu mensaje *</label>
          <span class="char-counter">{{ form.mensaje.length }} / 3000</span>
        </div>
        <div class="input-container">
          <textarea
            id="form-mensaje"
            v-model="form.mensaje"
            rows="5"
            class="styled-input styled-textarea"
            placeholder="Cuéntame sobre la propuesta laboral, el proyecto o la consulta..."
            :disabled="status === 'loading'"
            required
          ></textarea>
        </div>
        <span v-if="errors.mensaje" class="field-msg">{{ errors.mensaje }}</span>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="btn btn-primary submit-action-btn"
        :disabled="status === 'loading'"
      >
        <span v-if="status === 'loading'" class="loading-state">
          <Loader2 :size="18" class="loading-spinner" />
          <span>Enviando mensaje...</span>
        </span>
        <span v-else class="normal-state">
          <span>Enviar mensaje</span>
          <Send :size="16" />
        </span>
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-container {
  display: flex;
  flex-direction: column;
}

.form-header {
  margin-bottom: 1.75rem;
}

.form-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: 0.35rem;
}

.form-subtitle {
  font-size: 0.875rem;
  color: var(--text-muted);
}

.modern-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.field-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.field-label {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--text-primary);
}

.char-counter {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
}

.styled-input {
  width: 100%;
  padding: 0.85rem 1.1rem;
  font-size: 0.9375rem;
  font-family: inherit;
  color: var(--text-primary);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  outline: none;
  transition: all var(--transition-fast);
}

.styled-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  background: var(--bg-surface);
}

.styled-textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.6;
}

.field-error .styled-input {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.03);
}

.field-msg {
  font-size: 0.75rem;
  font-weight: 600;
  color: #ef4444;
}

.submit-action-btn {
  width: 100%;
  padding: 0.95rem;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}

.loading-state,
.normal-state {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

/* Honeypot */
.hp-input {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
  pointer-events: none;
}

/* Alert Boxes */
.alert-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
}

.success-icon {
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

.error-icon {
  color: #ef4444;
  flex-shrink: 0;
  margin-top: 2px;
}

.success-alert {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--text-primary);
}

.error-alert {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--text-primary);
}

.alert-body h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.alert-body p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
