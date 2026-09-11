<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  RotateCcw
} from 'lucide-vue-next'

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
      errorMessage.value = res.message || 'No se pudo procesar el mensaje.'
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
  <div>
    <!-- Form Header -->
    <div class="pb-4 mb-5 border-b border-swiss-border dark:border-carbon-border">
      <h3 class="font-display font-bold text-base text-swiss-text-primary dark:text-carbon-text-primary">
        Enviar Mensaje
      </h3>
      <p class="font-sans text-xs text-swiss-text-secondary dark:text-carbon-text-secondary mt-1">
        Ingresa tus datos y te responderé directamente por correo electrónico.
      </p>
    </div>

    <!-- Success Feedback Alert -->
    <div
      v-if="status === 'success'"
      class="p-4 rounded-xs bg-swiss-ivory dark:bg-carbon-surface border border-swiss-border dark:border-carbon-border mb-6 flex items-start gap-3"
      role="alert"
    >
      <CheckCircle2 :size="20" class="text-accent-light shrink-0 mt-0.5" />
      <div>
        <h4 class="font-display font-bold text-xs uppercase tracking-wide text-swiss-text-primary dark:text-carbon-text-primary">
          Mensaje enviado correctamente
        </h4>
        <p class="font-sans text-xs text-swiss-text-secondary dark:text-carbon-text-secondary mt-1 leading-relaxed">
          Gracias por comunicarte. Ricardo Martín revisará tu solicitud y se pondrá en contacto contigo a la brevedad.
        </p>
        <button
          type="button"
          class="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs font-mono text-xs font-semibold bg-swiss-surface dark:bg-carbon-card border border-swiss-border dark:border-carbon-border text-swiss-text-primary dark:text-carbon-text-primary hover:border-accent-light hover:text-accent-light transition-colors cursor-pointer"
          @click="resetStatus"
        >
          <RotateCcw :size="12" />
          <span>Redactar otro mensaje</span>
        </button>
      </div>
    </div>

    <!-- Error Feedback Alert -->
    <div
      v-if="status === 'error'"
      class="p-4 rounded-xs bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 mb-6 flex items-start gap-3"
      role="alert"
    >
      <AlertCircle :size="20" class="text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
      <div>
        <h4 class="font-display font-bold text-xs uppercase tracking-wide text-red-900 dark:text-red-200">
          Error en el envío
        </h4>
        <p class="font-sans text-xs text-red-700 dark:text-red-300 mt-1 leading-relaxed">
          {{ errorMessage }}
        </p>
      </div>
    </div>

    <!-- Form Content -->
    <form v-if="status !== 'success'" class="space-y-4" @submit.prevent="handleSubmit" novalidate>
      <!-- AntiSpam Honeypot Field -->
      <div class="sr-only" aria-hidden="true">
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
      <div>
        <label for="form-nombre" class="block font-mono text-xs font-semibold text-swiss-text-primary dark:text-carbon-text-primary mb-1">
          NOMBRE COMPLETO <span class="text-accent-light">*</span>
        </label>
        <input
          id="form-nombre"
          v-model="form.nombre"
          type="text"
          class="w-full px-3 py-2 rounded-xs text-xs font-sans bg-swiss-ivory dark:bg-carbon-surface border text-swiss-text-primary dark:text-carbon-text-primary placeholder:text-swiss-text-muted dark:placeholder:text-carbon-text-muted focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-colors"
          :class="[
            errors.nombre
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-swiss-border dark:border-carbon-border'
          ]"
          placeholder="Ej. Alexander Hamilton"
          :disabled="status === 'loading'"
          required
        />
        <span v-if="errors.nombre" class="block font-sans text-xs text-red-700 dark:text-red-400 mt-1 font-medium">
          {{ errors.nombre }}
        </span>
      </div>

      <!-- Email -->
      <div>
        <label for="form-email" class="block font-mono text-xs font-semibold text-swiss-text-primary dark:text-carbon-text-primary mb-1">
          CORREO ELECTRÓNICO <span class="text-accent-light">*</span>
        </label>
        <input
          id="form-email"
          v-model="form.email"
          type="email"
          class="w-full px-3 py-2 rounded-xs text-xs font-sans bg-swiss-ivory dark:bg-carbon-surface border text-swiss-text-primary dark:text-carbon-text-primary placeholder:text-swiss-text-muted dark:placeholder:text-carbon-text-muted focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-colors"
          :class="[
            errors.email
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-swiss-border dark:border-carbon-border'
          ]"
          placeholder="tu.correo@empresa.com"
          :disabled="status === 'loading'"
          required
        />
        <span v-if="errors.email" class="block font-sans text-xs text-red-700 dark:text-red-400 mt-1 font-medium">
          {{ errors.email }}
        </span>
      </div>

      <!-- Mensaje -->
      <div>
        <div class="flex items-center justify-between mb-1 font-mono text-xs">
          <label for="form-mensaje" class="font-semibold text-swiss-text-primary dark:text-carbon-text-primary">
            PROPUESTA / MENSAJE <span class="text-accent-light">*</span>
          </label>
          <span class="text-[10px] text-swiss-text-muted dark:text-carbon-text-muted">
            {{ form.mensaje.length }} / 3000
          </span>
        </div>
        <textarea
          id="form-mensaje"
          v-model="form.mensaje"
          rows="4"
          class="w-full px-3 py-2 rounded-xs text-xs font-sans bg-swiss-ivory dark:bg-carbon-surface border text-swiss-text-primary dark:text-carbon-text-primary placeholder:text-swiss-text-muted dark:placeholder:text-carbon-text-muted focus:outline-none focus:border-accent-light focus:ring-1 focus:ring-accent-light transition-colors resize-y min-h-[100px]"
          :class="[
            errors.mensaje
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-swiss-border dark:border-carbon-border'
          ]"
          placeholder="Describe la oportunidad laboral, proyecto o consulta técnica..."
          :disabled="status === 'loading'"
          required
        ></textarea>
        <span v-if="errors.mensaje" class="block font-sans text-xs text-red-700 dark:text-red-400 mt-1 font-medium">
          {{ errors.mensaje }}
        </span>
      </div>

      <!-- Submit CTA Button (Accent Orange high-contrast 5.18:1) -->
      <button
        type="submit"
        class="w-full py-2.5 px-4 rounded-sm font-sans font-semibold text-xs text-white bg-accent hover:bg-accent-hover transition-colors shadow-swiss-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
        :disabled="status === 'loading'"
      >
        <span v-if="status === 'loading'" class="inline-flex items-center gap-2">
          <Loader2 :size="14" class="animate-spin" />
          <span>Procesando envío...</span>
        </span>
        <span v-else class="inline-flex items-center gap-2">
          <span>Enviar Mensaje</span>
          <Send :size="13" />
        </span>
      </button>
    </form>
  </div>
</template>
