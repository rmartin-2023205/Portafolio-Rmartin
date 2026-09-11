import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './data/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        // Acento Principal: Naranja Técnico (Acción / CTA exclusivo en todo el sitio)
        accent: {
          DEFAULT: '#c2410c', // Naranja técnico de contraste garantizado (5.18:1 con texto blanco para WCAG AA)
          hover: '#9a3412',   // Estado interactivo hover más profundo (7.31:1)
          light: '#ea580c',   // Variante para bordes técnicos, iconos y headings grandes
          vibrant: '#f97316', // Indicadores de estado activo y micro-leds
          subtle: '#fff7ed',  // Fondo tenue en modo claro
          muted: 'rgba(194, 65, 12, 0.12)' // Tinte para borders técnicos y selecciones
        },

        // Acento Secundario: Ámbar de Precisión (Exclusivo para metadatos y badges de estado CAD)
        precision: {
          DEFAULT: '#b45309', // Ámbar de precisión (5.02:1 en modo claro)
          hover: '#92400e',
          light: '#f59e0b',   // Para puntos de status en modo oscuro
          textLight: '#92400e', // Texto de badge sobre fondo ámbar tenue (6.37:1)
          textDark: '#fcd34d',  // Texto de badge sobre superficie carbón (12.18:1)
          subtle: '#fef3c7',  // Fondo de badge modo claro
          muted: 'rgba(245, 158, 11, 0.12)'
        },

        // Modo Claro — Swiss Pure White & Technical Ivory
        swiss: {
          bg: '#ffffff',          // Fondo blanco puro
          ivory: '#f9fafb',       // Marfil técnico / fondo alternado
          surface: '#ffffff',     // Superficie de tarjetas y contenedores
          muted: '#f3f4f6',       // Fondos secundarios y chips
          border: '#e5e7eb',      // Borde técnico gris grafito
          'border-subtle': '#f3f4f6',
          text: {
            primary: '#09090b',   // Negro tinta de máximo contraste (19.9:1)
            secondary: '#52525b', // Zinc neutro 600 para párrafos (7.73:1)
            muted: '#71717a'      // Zinc neutro 500 para metadatos (4.83:1)
          }
        },

        // Modo Oscuro — Carbon Matte & Zinc Pure Neutral (Sin tinte azul marino)
        carbon: {
          bg: '#0c0d0e',          // Negro carbón mate
          surface: '#121316',     // Superficie base
          card: '#18191d',        // Tarjetas y paneles técnicos zinc
          elevated: '#222328',    // Elementos elevados y dropdowns
          border: '#27272a',      // Borde sutil grafito
          'border-subtle': '#1a1b1f',
          text: {
            primary: '#f4f4f5',   // Blanco platino de alta legibilidad (17.7:1)
            secondary: '#a1a1aa', // Zinc claro 400 (7.59:1)
            muted: '#9ca3af'      // Gris/Zinc 400 de alto contraste en modo oscuro (6.8:1, supera 4.5:1 AA)
          }
        }
      },

      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace']
      },

      letterSpacing: {
        technical: '0.08em',
        tight: '-0.025em',
        tighter: '-0.04em'
      },

      borderRadius: {
        none: '0px',
        xs: '2px',
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        full: '9999px'
      },

      boxShadow: {
        'swiss-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.04)',
        'swiss-sm': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px -1px rgba(0, 0, 0, 0.08)',
        'swiss-md': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
        'cad-border': '0 0 0 1px #e5e7eb',
        'cad-border-dark': '0 0 0 1px #27272a',
        'cad-accent': '0 0 0 1px #c2410c',
        'cad-focus': '0 0 0 2px rgba(194, 65, 12, 0.35)'
      },

      transitionTimingFunction: {
        swiss: 'cubic-bezier(0.16, 1, 0.3, 1)'
      }
    }
  },
  plugins: []
} satisfies Config
