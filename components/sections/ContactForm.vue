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
  <div>
    <div class="mb-6">
      <h3 class="text-lg font-bold text-zinc-900 dark:text-white">Envíame un mensaje directo</h3>
      <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Completa los campos y te responderé en tu correo.</p>
    </div>

    <!-- Success Feedback Alert -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="status === 'success'" class="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6 flex items-start gap-3.5">
        <CheckCircle2 :size="24" class="text-emerald-500 shrink-0 mt-0.5" />
        <div>
          <h4 class="text-sm font-bold text-emerald-800 dark:text-emerald-300">¡Mensaje enviado con éxito!</h4>
          <p class="text-xs text-emerald-700 dark:text-emerald-400 mt-1 leading-relaxed">
            Gracias por contactarme. Ricardo Martín revisará tu mensaje y se comunicará contigo pronto.
          </p>
          <button
            type="button"
            class="mt-3 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            @click="resetStatus"
          >
            Redactar otro mensaje
          </button>
        </div>
      </div>
    </transition>

    <!-- Error Feedback Alert -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
    >
      <div v-if="status === 'error'" class="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 mb-6 flex items-start gap-3.5">
        <AlertCircle :size="24" class="text-rose-500 shrink-0 mt-0.5" />
        <div>
          <h4 class="text-sm font-bold text-rose-800 dark:text-rose-300">No se pudo procesar el envío</h4>
          <p class="text-xs text-rose-700 dark:text-rose-400 mt-1 leading-relaxed">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </transition>

    <!-- The Form -->
    <form v-if="status !== 'success'" class="space-y-4" @submit.prevent="handleSubmit" novalidate>
      <!-- AntiSpam Honeypot Field (Invisible) -->
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

      <!-- Nombre Completo -->
      <div>
        <label for="form-nombre" class="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
          Nombre completo *
        </label>
        <input
          id="form-nombre"
          v-model="form.nombre"
          type="text"
          class="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/5 border text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all"
          :class="[
            errors.nombre
              ? 'border-rose-500 focus:ring-rose-500/20 bg-rose-500/5'
              : 'border-zinc-200 dark:border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
          ]"
          placeholder="Ej. Alexander Hamilton"
          :disabled="status === 'loading'"
          required
        />
        <span v-if="errors.nombre" class="block text-[11px] font-medium text-rose-500 mt-1">
          {{ errors.nombre }}
        </span>
      </div>

      <!-- Correo Electrónico -->
      <div>
        <label for="form-email" class="block text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-1.5">
          Correo electrónico *
        </label>
        <input
          id="form-email"
          v-model="form.email"
          type="email"
          class="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/5 border text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all"
          :class="[
            errors.email
              ? 'border-rose-500 focus:ring-rose-500/20 bg-rose-500/5'
              : 'border-zinc-200 dark:border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
          ]"
          placeholder="tu.correo@empresa.com"
          :disabled="status === 'loading'"
          required
        />
        <span v-if="errors.email" class="block text-[11px] font-medium text-rose-500 mt-1">
          {{ errors.email }}
        </span>
      </div>

      <!-- Mensaje -->
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label for="form-mensaje" class="text-xs font-bold text-zinc-700 dark:text-zinc-300">
            Tu mensaje *
          </label>
          <span class="text-[11px] font-mono text-zinc-400">
            {{ form.mensaje.length }} / 3000
          </span>
        </div>
        <textarea
          id="form-mensaje"
          v-model="form.mensaje"
          rows="4"
          class="w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-white/5 border text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 transition-all resize-y min-h-[110px]"
          :class="[
            errors.mensaje
              ? 'border-rose-500 focus:ring-rose-500/20 bg-rose-500/5'
              : 'border-zinc-200 dark:border-white/10 focus:border-indigo-500 focus:ring-indigo-500/20'
          ]"
          placeholder="Cuéntame sobre tu propuesta laboral, proyecto o consulta..."
          :disabled="status === 'loading'"
          required
        ></textarea>
        <span v-if="errors.mensaje" class="block text-[11px] font-medium text-rose-500 mt-1">
          {{ errors.mensaje }}
        </span>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 hover:opacity-95 shadow-md shadow-indigo-500/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
        :disabled="status === 'loading'"
      >
        <span v-if="status === 'loading'" class="inline-flex items-center gap-2">
          <Loader2 :size="16" class="animate-spin" />
          <span>Enviando mensaje...</span>
        </span>
        <span v-else class="inline-flex items-center gap-2">
          <span>Enviar mensaje</span>
          <Send :size="15" />
        </span>
      </button>
    </form>
  </div>
</template>
