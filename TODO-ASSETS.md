# 📋 Guía de Reemplazo de Assets y Personalización (TODO-ASSETS.md)

Este documento detalla exactamente **dónde, cómo y con qué especificaciones** reemplazar los archivos placeholder (capturas de proyectos y Curriculum Vitae) en cuanto tengas listos tus archivos finales.

---

## 1. Capturas de Pantalla de Proyectos (Screenshots / Mockups)

Los componentes de proyectos están configurados con un visor con relación de aspecto **16:10**. Si no hay imagen, muestran un mockup técnico en estilo Swiss Blueprint sin romperse.

### Especificaciones Recomendadas:
- **Formato**: PNG o WebP (optimizado para web).
- **Dimensiones sugeridas**: `1280 × 800 px` o `1600 × 1000 px` (proporción 16:10).
- **Ubicación de archivos**: Carpeta `public/projects/`.

### Rutas Exactas de Archivos:

| Proyecto | Ruta del Archivo en el Repositorio | Archivo de Configuración |
| :--- | :--- | :--- |
| **MobiExpress** | `public/projects/mobiexpress.png` | `data/portfolio.ts` (id: `'mobiexpress'`) |
| **Blog Personal** | `public/projects/blog-personal.png` | `data/portfolio.ts` (id: `'blog-personal'`) |
| **Gestor de Opiniones** | `public/projects/gestor-opiniones.png` | `data/portfolio.ts` (id: `'gestor-opiniones'`) |

### Cómo vincular la imagen una vez guardada:
Abre el archivo [data/portfolio.ts](file:///c:/Users/marti/Desktop/Portafolio%20Nuxt/data/portfolio.ts) y añade la propiedad `imageUrl` al proyecto correspondiente:

```ts
// En data/portfolio.ts -> projects: [...]
{
  id: 'mobiexpress',
  title: 'MobiExpress',
  description: 'E-commerce de renta de mobiliarios...',
  tags: ['React', 'MongoDB', 'Node.js'],
  githubUrl: 'https://github.com/jmarroquin-2023026/MobiExpress-React.git',
  imageUrl: '/projects/mobiexpress.png' // <-- Solo agrega esta línea
}
```

---

## 2. Curriculum Vitae (CV en PDF)

El botón **"Descargar CV"** está presente tanto en el **Navbar** como en la sección principal del **Hero**.

### Ruta Exacta del Archivo:
- **Ruta actual**: `public/cv-placeholder.pdf`

### Opciones de Reemplazo:

#### Opción A (La más rápida y directa):
1. Exporta tu CV definitivo en formato PDF.
2. Nómbralo exactamente `cv-placeholder.pdf` y sobrescribe el archivo en:
   ```text
   public/cv-placeholder.pdf
   ```
   *(Al hacer clic en el botón, el navegador descargará automáticamente tu CV con el nombre amigable `CV_Ricardo_Martin_Quiche.pdf`).*

#### Opción B (Con nombre personalizado de archivo):
1. Guarda tu CV en `public/` con el nombre que prefieras (ejemplo: `public/CV_Ricardo_Martin_2026.pdf`).
2. Abre [data/portfolio.ts](file:///c:/Users/marti/Desktop/Portafolio%20Nuxt/data/portfolio.ts) y actualiza la línea 18:
   ```ts
   // En personal: { ... }
   cvUrl: '/CV_Ricardo_Martin_2026.pdf'
   ```
3. En [components/layout/TheNavbar.vue](file:///c:/Users/marti/Desktop/Portafolio%20Nuxt/components/layout/TheNavbar.vue) y [components/sections/HeroSection.vue](file:///c:/Users/marti/Desktop/Portafolio%20Nuxt/components/sections/HeroSection.vue), actualiza el enlace `href` a `/CV_Ricardo_Martin_2026.pdf`.

---

## 3. Imagen para Redes Sociales (Open Graph / Twitter Card)

Para que cuando compartas tu portafolio en LinkedIn, WhatsApp, Telegram o X aparezca una tarjeta gráfica atractiva:

- **Ruta**: `public/og-image.png`
- **Dimensiones recomendadas**: `1200 × 630 px`
- **Formato**: PNG o JPG

---

## 4. Verificación Rápida tras Reemplazar Assets

Una vez reemplazados tus archivos, ejecuta en tu terminal:

```bash
npm run build
npm run preview
```

Visita `http://localhost:3000` para comprobar que las capturas y la descarga del CV se visualizan correctamente.
