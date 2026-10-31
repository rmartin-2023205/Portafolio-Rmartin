# Portafolio Profesional — Ricardo Martín Quiché

Portafolio web para desarrollador **Full Stack**, construido sobre **Nuxt 3**, **Nitro**, **TypeScript** y **Tailwind CSS**, diseñado bajo los principios de **Swiss Engineering / Technical High-Contrast** con accesibilidad **WCAG 2.1 AA (100/100 en Lighthouse)**, jerarquía pensada para reclutadores técnicos y servicio de mensajería serverless integrado con **Resend**.

---

## 📐 Principios de Diseño: Swiss Engineering High-Contrast

1. **Austeridad y Claridad Suiza**:
   - Eliminación radical de clichés decorativos (sin ventanas falsas con `const developer = {...}`, sin barras de porcentaje inventadas, sin degradados morados/azules ni resplandores difusos).
   - Tipografía arquitectónica con [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) para encabezados, [Inter](https://fonts.google.com/specimen/Inter) para lectura continua y [Space Mono](https://fonts.google.com/specimen/Space+Mono) para metadatos técnicos, servidas de forma local y optimizada mediante `@nuxt/fonts`.
2. **Jerarquía Enfocada en Reclutadores**:
   - **Hero**: Propuesta de valor contundente, disponibilidad en tiempo real y panel de áreas de especialidad.
   - **Proyectos**: Evidencia de software con visores de mockup 16:10 y enlaces directos a GitHub.
   - **Habilidades**: Competencias evaluadas cualitativamente (*Nivel Sólido*, *Competente*, *En Práctica*) agrupadas por dominios técnicos.
   - **Experiencia**: Trayectoria como Desarrollador Full Stack (Node.js & React) y Desarrollador Frontend (Plus TI).
   - **Educación**: Formación técnica en el *Centro Educativo Técnico Laboral KINAL* (Perito en Informática y CCNAv7) y estudios universitarios en la *Universidad Mariano Gálvez* (Ingeniería en Sistemas).
   - **Contacto**: Canales directos, botón de copia rápida y formulario con validación estricta.
3. **Accesibilidad WCAG 2.1 AA Certificada**:
   - Puntuación de **100 / 100** en auditoría Lighthouse Accessibility.
   - Contraste medido superior a 5.1:1 en botones y hasta 19.9:1 en textos principales.
   - Micro-indicadores estables que respetan `prefers-reduced-motion`.
4. **Botón Dedicado de Descarga de CV**:
   - Presente en la barra de navegación superior y en el Hero, apuntando a `public/cv-placeholder.pdf` con descarga configurada.

---

## 🚀 Tecnologías Principales

* **Framework:** [Nuxt 3](https://nuxt.com/) (Vue 3, Vite 7, SSR / Nitro).
* **Motor Backend:** [Nitro](https://nitro.unjs.io/) (Serverless APIs en `server/api/`).
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) v3 con tokens de diseño dedicados.
* **Tipografía Optimizada:** [@nuxt/fonts](https://nuxt.com/modules/fonts) con descarga y caché local.
* **Envío de Correos:** [Resend](https://resend.com/) vía SDK en servidor con template HTML técnico.
* **Validación:** [Zod](https://zod.dev/) para esquemas de datos seguros.
* **Iconografía:** [lucide-vue-next](https://lucide.dev/).

---

## 🛠️ Instalación y Configuración Local

### 1. Clonar el repositorio e instalar dependencias

```bash
git clone https://github.com/rmartin-2023205/Portafolio-Rmartin.git
cd "Portafolio Nuxt"
npm install
```

### 2. Configurar Variables de Entorno

Copia la plantilla `.env.example` a un archivo `.env`:

```bash
cp .env.example .env
```

Edita tu archivo `.env`:

```env
# Clave API de Resend (obtenida gratis en https://resend.com)
RESEND_API_KEY=re_tu_clave_aqui

# Destinatario donde recibirás los mensajes de contacto
CONTACT_EMAIL_TO=martinricardo634@gmail.com

# Remitente de salida (por defecto onboarding@resend.dev para pruebas)
CONTACT_EMAIL_FROM=Portafolio Ricardo Martín <onboarding@resend.dev>
```

> **Nota de Seguridad:** Si `RESEND_API_KEY` se deja vacía o no empieza por `re_`, el backend activa automáticamente el **modo simulación**, registrando el mensaje en la consola del servidor sin romper el formulario. El archivo `.env` está protegido en `.gitignore` y **nunca** se expone en los bundles del cliente.

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`.

### 4. Compilar para Producción

```bash
npm run build
npm run preview
```

---

## 🌐 Despliegue en Producción (Vercel vs Netlify)

### 🥇 Recomendado: Despliegue en [Vercel](https://vercel.com/) (Compatibilidad Nativa)

Nuxt 3 y Nitro tienen integración nativa con Vercel. El motor detecta el entorno automáticamente (`preset: 'vercel'`), sirviendo los assets estáticos desde el Edge CDN y ejecutando `/api/contact` como una Serverless Function de baja latencia sin configuración extra.

#### Pasos para desplegar en Vercel:
1. Sube tu código a GitHub.
2. Inicia sesión en [Vercel](https://vercel.com/) e importa tu repositorio.
3. Vercel detectará el framework como **Nuxt.js**.
4. Ve a la sección **Environment Variables** y agrega:
   - `RESEND_API_KEY`: tu clave real de Resend (`re_...`).
   - `CONTACT_EMAIL_TO`: `martinricardo634@gmail.com`.
   - `CONTACT_EMAIL_FROM`: `Portafolio Ricardo Martín <onboarding@resend.dev>` *(o tu dominio propio verificado en Resend)*.
5. Haz clic en **Deploy**. El sitio se compilará y desplegará en segundos con HTTPS y dominio asignado.

---

### 🥈 Alternativa: Despliegue en [Netlify](https://www.netlify.com/)

Netlify también soporta Nuxt 3 usando el preset de Nitro para Netlify Functions:

1. Conecta tu repositorio en Netlify.
2. Configura el comando de build: `npm run build` y el directorio de publicación: `.output/public`.
3. En **Site configuration > Environment variables**, agrega `RESEND_API_KEY`, `CONTACT_EMAIL_TO` y `CONTACT_EMAIL_FROM`.
4. Despliega el proyecto.

---

## 📋 Reemplazo de Assets (Capturas de Proyectos y CV)

Para sustituir las capturas de los 3 proyectos y tu CV en PDF, consulta la guía paso a paso en [TODO-ASSETS.md](file:///c:/Users/marti/Desktop/Portafolio%20Nuxt/TODO-ASSETS.md).

---

## 🔒 Seguridad y Buenas Prácticas

- **Protección Antispam:** Campo honeypot oculto `website_hp` que descarta envíos automatizados de bots silenciosamente.
- **Rate Limiting:** Control en memoria por IP que permite un máximo de 4 peticiones cada 5 minutos (retorna error HTTP 429).
- **Sanitización HTML:** Escapado de caracteres especiales (`&`, `<`, `>`, `"`, `'`) antes de renderizar correos electrónicos.
- **Variables Privadas:** Credenciales de Resend encapsuladas estrictamente en el entorno Nitro de servidor (`runtimeConfig`), con cero fugas en el cliente.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](file:///c:/Users/marti/Desktop/Portafolio%20Nuxt/LICENSE) para más detalles.
