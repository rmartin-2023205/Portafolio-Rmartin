<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  email: '',
  mensaje: '',
  website_hp: '' // Honeypot antispam
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
    errors.nombre = 'Por favor, ingresa tu nombre.'
    isValid = false
  } else if (form.nombre.trim().length < 2) {
    errors.nombre = 'El nombre debe tener al menos 2 caracteres.'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Por favor, ingresa tu correo electrónico.'
    isValid = false
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = 'Ingresa un formato de correo válido.'
    isValid = false
  }

  if (!form.mensaje.trim()) {
    errors.mensaje = 'Por favor, escribe un mensaje.'
    isValid = false
  } else if (form.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
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
      err?.data?.message || err?.message || 'Error de conexión al enviar el mensaje. Intenta de nuevo.'
  }
}

const resetStatus = () => {
  status.value = 'idle'
}
</script>

<template>
  <div class="contact-form-wrap">
    <h3 class="form-title">Envíame un mensaje</h3>

    <!-- Success Message Box -->
    <div v-if="status === 'success'" class="feedback-box success-box">
      <div class="feedback-icon">✓</div>
      <div>
        <h4>¡Mensaje enviado con éxito!</h4>
        <p>Gracias por contactarme, Ricardo Martín te responderá a la brevedad posible.</p>
        <button type="button" class="btn btn-secondary btn-sm" style="margin-top: 1rem;" @click="resetStatus">
          Enviar otro mensaje
        </button>
      </div>
    </div>

    <!-- Error Alert Banner -->
    <div v-if="status === 'error'" class="feedback-box error-box">
      <div class="feedback-icon">✕</div>
      <div>
        <h4>No se pudo enviar el mensaje</h4>
        <p>{{ errorMessage }}</p>
      </div>
    </div>

    <!-- The Form -->
    <form v-if="status !== 'success'" class="contact-form" @submit.prevent="handleSubmit" novalidate>
      <!-- Honeypot field (hidden from legitimate users) -->
      <div class="hp-field" aria-hidden="true">
        <label for="website_hp">Si eres humano deja esto en blanco</label>
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
      <div class="form-group" :class="{ 'has-error': errors.nombre }">
        <label for="form-nombre" class="form-label">Tu nombre</label>
        <input
          id="form-nombre"
          v-model="form.nombre"
          type="text"
          class="form-input"
          placeholder="Ej. Juan Pérez"
          :disabled="status === 'loading'"
          required
        />
        <span v-if="errors.nombre" class="error-text">{{ errors.nombre }}</span>
      </div>

      <!-- Email -->
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="form-email" class="form-label">Tu correo electrónico</label>
        <input
          id="form-email"
          v-model="form.email"
          type="email"
          class="form-input"
          placeholder="nombre@ejemplo.com"
          :disabled="status === 'loading'"
          required
        />
        <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
      </div>

      <!-- Mensaje -->
      <div class="form-group" :class="{ 'has-error': errors.mensaje }">
        <label for="form-mensaje" class="form-label">Tu mensaje</label>
        <textarea
          id="form-mensaje"
          v-model="form.mensaje"
          rows="5"
          class="form-input form-textarea"
          placeholder="Cuéntame sobre tu proyecto, propuesta laboral o consulta..."
          :disabled="status === 'loading'"
          required
        ></textarea>
        <span v-if="errors.mensaje" class="error-text">{{ errors.mensaje }}</span>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="btn btn-primary submit-btn"
        :disabled="status === 'loading'"
      >
        <svg
          v-if="status === 'loading'"
          class="spinner"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <span>{{ status === 'loading' ? 'Enviando mensaje...' : 'Enviar mensaje' }}</span>
        <svg
          v-if="status !== 'loading'"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      </button>
    </form>
  </div>
</template>

<style scoped>
.contact-form-wrap {
  display: flex;
  flex-direction: column;
}

.form-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 0.9375rem;
  font-family: inherit;
  color: var(--text-primary);
  background: var(--bg-surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  outline: none;
  transition: all var(--transition-fast);
}

.form-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.has-error .form-input {
  border-color: #ef4444;
}

.error-text {
  font-size: 0.8125rem;
  color: #ef4444;
  font-weight: 500;
}

.submit-btn {
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.875rem;
}

/* Honeypot field (hidden from real users) */
.hp-field {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: -1;
  pointer-events: none;
}

/* Feedback Boxes */
.feedback-box {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
}

.feedback-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 800;
  flex-shrink: 0;
}

.success-box {
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--text-primary);
}

.success-box .feedback-icon {
  background: #10b981;
  color: #ffffff;
}

.error-box {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: var(--text-primary);
}

.error-box .feedback-icon {
  background: #ef4444;
  color: #ffffff;
}

.feedback-box h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.feedback-box p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
