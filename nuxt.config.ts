// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  telemetry: false,

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/tailwind.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Ricardo Martín | Desarrollador Junior Full Stack',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portafolio profesional de Ricardo Martín Quiché — Desarrollador Junior Full Stack. Especializado en aplicaciones web modernas, React, Node.js, Express y bases de datos.'
        },
        { name: 'author', content: 'Ricardo Martín Quiché' },
        { property: 'og:title', content: 'Ricardo Martín | Desarrollador Junior Full Stack' },
        {
          property: 'og:description',
          content: 'Portafolio profesional de Ricardo Martín Quiché — Soluciones web innovadoras y funcionales.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    // Claves privadas accesibles solo en server/ (Nitro)
    resendApiKey: process.env.RESEND_API_KEY || '',
    contactEmailTo: process.env.CONTACT_EMAIL_TO || 'martinricardo634@gmail.com',
    contactEmailFrom: process.env.CONTACT_EMAIL_FROM || 'Portafolio Ricardo Martín <onboarding@resend.dev>',
    public: {
      contactEmail: 'martinricardo634@gmail.com'
    }
  },

  typescript: {
    strict: true
  }
})
