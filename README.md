# Portafolio Web Full-Stack — Ricardo Martín

Portafolio web profesional de alto rendimiento desarrollado con **Nuxt 3**, **Nitro**, **TypeScript** y un sistema de diseño moderno basado en tendencias **2025/2026** (*Bento Grid*, estética IDE/código, micro-interacciones táctiles y modo oscuro/claro de alto contraste).

---

## 🚀 Tecnologías Principales

* **Framework Full-Stack:** [Nuxt 3](https://nuxt.com/) (Vue 3, Vite, SSR).
* **Motor de Servidor (Backend):** [Nitro](https://nitro.unjs.io/) con rutas de servidor en `server/api/`.
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) con tipado estricto.
* **Envío de Correos:** [Resend](https://resend.com/) vía API SDK en servidor.
* **Validación de Datos:** [Zod](https://zod.dev/) para validación en cliente y servidor.
* **Estilos:** CSS3 nativo avanzado con variables dinámicas, gradientes espaciales, *glassmorphism* y micro-animaciones.
* **Control de Estado:** Composables reactivos de Nuxt 3 y `@vueuse/core`.

---

## 🌟 Características Destacadas de la UI/UX

1. **Navegación Flotante Tipo Pill:**
   * Header redondeado con efecto *frosted glass* (`backdrop-filter: blur`).
   * Detección activa de la sección en pantalla durante el scroll.
   * Alternancia instantánea entre **Modo Oscuro** y **Modo Claro** con persistencia en `localStorage`.
   * Menú responsive animado para dispositivos móviles.

2. **Hero Section con Terminal Interactivo:**
   * Badge de disponibilidad en tiempo real con indicador verde pulsante.
   * Ventana estilo macOS (`ricardo.config.ts`) con resaltado de sintaxis y botón interactivo para **copiar el snippet de perfil al portapapeles** con confirmación visual.
   * Indicadores de impacto profesional (3+ proyectos full stack, 10+ tecnologías, formación técnica y universitaria).

3. **Arquitectura Bento Grid:**
   * **Sobre mí:** Estructura asimétrica que jerarquiza la historia profesional, mentalidad de desarrollo y pilares de trabajo.
   * **Educación:** Tarjetas visuales con acreditación para el *Centro Educativo Técnico Laboral KINAL* (Perito en Informática y CCNAv7) y la *Universidad Mariano Gálvez* (Ingeniería en Sistemas).

4. **Filtro Reactivo de Habilidades:**
   * Pestañas interactivas para filtrar por categorías: *Todos*, *Frontend*, *Backend* y *Tools & Design*.
   * Barras de progreso de dominio técnico con gradiente neón y etiquetas de nivel (*Avanzado*, *Intermedio*, *Básico*).

5. **Proyectos con Marcos Mockup de Aplicación:**
   * Tarjetas con barra superior de ventana de navegador (`.app`), banner con gradientes temáticos, chips tecnológicos y acceso directo a los repositorios en GitHub.

6. **Línea de Tiempo Luminosa de Experiencia:**
   * Nodos concéntricos brillantes que conectan cronológicamente la trayectoria profesional.

7. **Formulario de Contacto Full-Stack con Anti-Spam:**
   * Integración con endpoint propio en `/api/contact`.
   * **Honeypot antispam** invisible para neutralizar bots automáticamente.
   * **Rate limiting** por IP para prevenir saturación de peticiones.
   * Botón táctil para **copiar el correo electrónico** con feedback instantáneo (`✓ Copiado`).

---

## 📁 Estructura del Proyecto

```text
portafolio-nuxt/
├── assets/
│   └── css/
│       └── main.css              # Sistema de diseño, tokens de color, glassmorphism y reset
├── components/
│   ├── layout/
│   │   ├── TheNavbar.vue         # Barra de navegación flotante con theme toggle
│   │   └── TheFooter.vue         # Footer con branding y botón 'Volver arriba'
│   └── sections/
│       ├── HeroSection.vue       # Hero con terminal interactivo de código
│       ├── AboutSection.vue      # Bento Grid con biografía y pilares
│       ├── EducationSection.vue  # Tarjetas de formación técnica y académica
│       ├── SkillsSection.vue     # Filtro reactivo por categorías de habilidades
│       ├── ProjectsSection.vue   # Muestrario de proyectos en formato mockup
│       ├── ExperienceSection.vue # Línea de tiempo luminosa
│       ├── ContactSection.vue    # Panel de canales directos y botón de copiar
│       └── ContactForm.vue       # Formulario con validación Zod y estados
├── composables/
│   └── useTheme.ts               # Lógica reactiva de modo claro/oscuro
├── data/
│   └── portfolio.ts              # Contenido real centralizado y tipado
├── public/
│   └── favicon.svg               # Favicon vectorial con iniciales RM
├── server/
│   ├── api/
│   │   └── contact.post.ts       # Endpoint Nitro con validación Zod, Resend y Honeypot
│   ├── shims.d.ts                # Shims de tipado de servidor
│   └── tsconfig.json             # Configuración TypeScript del runtime de Nitro
├── types/
│   └── portfolio.ts              # Interfaces TypeScript del portafolio
├── .env.example                  # Plantilla de variables de entorno
├── app.vue                       # Layout principal de la aplicación
├── nuxt.config.ts                # Configuración de Nuxt, metadatos SEO y fuentes
└── package.json                  # Dependencias y scripts
```

---

## 🛠️ Instalación y Configuración Local

### 1. Requisitos Previos
* Node.js v18 o superior (probado y compatible con Node v23).
* Gestor de paquetes `npm`.

### 2. Clonar / Descargar el Proyecto
Abre tu terminal en la carpeta del proyecto:
```bash
cd "Portafolio Nuxt"
```

### 3. Instalar Dependencias
```bash
npm install --legacy-peer-deps
```

### 4. Configurar Variables de Entorno
Copia el archivo `.env.example` a un archivo `.env`:
```bash
cp .env.example .env
```

Edita `.env` con tus credenciales:
```env
# Obtén tu API Key gratuita en https://resend.com/api-keys
RESEND_API_KEY=re_tu_api_key_aqui

# Correo donde Ricardo Martín recibirá los mensajes
CONTACT_EMAIL_TO=martinricardo634@gmail.com

# Remitente (en desarrollo se usa onboarding@resend.dev)
CONTACT_EMAIL_FROM=Portafolio Ricardo Martín <onboarding@resend.dev>
```

> [!NOTE]
> **Modo Simulación (Desarrollo Local):** Si ejecutas el proyecto sin configurar una `RESEND_API_KEY` o con el valor por defecto, el endpoint de servidor `/api/contact` activará automáticamente el modo de simulación, registrando el mensaje en la consola del servidor y respondiendo con éxito para que puedas probar la experiencia visual y funcional del formulario sin requerir una cuenta de Resend activa inmediatamente.

---

## 💻 Comandos de Ejecución

### Modo Desarrollo
Inicia el servidor de desarrollo local con recarga rápida (HMR):
```bash
npm run dev
```
Accede en tu navegador a: **`http://localhost:3000`**

### Compilación para Producción
Genera la versión optimizada de producción tanto para cliente como para el servidor Nitro:
```bash
npm run build
```

### Vista Previa de Producción
Prueba localmente el bundle compilado de Nitro:
```bash
npm run preview
```

---

## ☁️ Despliegue en la Nube

El proyecto utiliza Nitro, lo que permite despliegues automáticos con cero configuración en las principales plataformas serverless:

### Opción 1: Despliegue en Vercel (Recomendado)
1. Sube tu repositorio a GitHub.
2. Inicia sesión en [Vercel](https://vercel.com/) y selecciona **Add New Project**.
3. Importa el repositorio `Portafolio Nuxt`. Vercel detectará automáticamente que es un proyecto Nuxt.
4. En la sección **Environment Variables**, agrega:
   * `RESEND_API_KEY`: Tu clave de API de Resend.
   * `CONTACT_EMAIL_TO`: `martinricardo634@gmail.com`
   * `CONTACT_EMAIL_FROM`: Tu remitente configurado (o `onboarding@resend.dev`).
5. Haz clic en **Deploy**.

### Opción 2: Despliegue en Netlify
1. Conecta tu repositorio en [Netlify](https://www.netlify.com/).
2. El comando de compilación es `npm run build` y el directorio de publicación es `.output/public`.
3. Configura las variables de entorno en **Site configuration > Environment variables**.
4. Despliega el sitio.

---

## 👤 Autor

**Ricardo Martín (Ricardo Martín Quiché)**
* **Rol:** Desarrollador Junior Full Stack
* **Email:** [martinricardo634@gmail.com](mailto:martinricardo634@gmail.com)
* **GitHub:** [@rmartin-2023205](https://github.com/rmartin-2023205)
* **LinkedIn:** [Ricardo Martín Quiché](https://www.linkedin.com/in/ricardo-martín-quiché-005768349)
