import type { PortfolioData } from '~/types/portfolio'

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Ricardo Martín',
    fullName: 'Ricardo Martín Quiché',
    role: 'Desarrollador Junior Full Stack',
    shortRole: 'Desarrollador Jr',
    description: 'Creando soluciones web innovadoras y funcionales. Apasionado por el código limpio y la experiencia del usuario.',
    aboutParagraphs: [
      'Soy un desarrollador junior apasionado por la programación y el desarrollo web. Tengo experiencia en la creación de aplicaciones web responsivas y funcionales utilizando tecnologías modernas. Me caracterizo por ser un aprendiz constante, colaborativo y comprometido con la calidad del código.',
      'Mi objetivo es convertirme en un desarrollador full stack competente, capaz de enfrentar desafíos complejos y contribuir significativamente a proyectos innovadores. Busco oportunidades donde pueda crecer profesionalmente, aprender nuevas tecnologías y crear soluciones que impacten positivamente.',
      'Fuera del código, disfruto de aprender nuevas tecnologías, resolver problemas lógicos y seguir ampliando mis conocimientos técnicos.'
    ],
    email: 'martinricardo634@gmail.com',
    github: 'https://github.com/rmartin-2023205',
    linkedin: 'https://www.linkedin.com/in/ricardo-martín-quiché-005768349',
    cvUrl: '/CV_Ricardo_Martin_Quiche.pdf'
  },
  navigation: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Sobre mí', href: '#sobre' },
    { name: 'Contacto', href: '#contacto' }
  ],
  education: [
    {
      id: 'kinal-perito',
      title: 'Perito en Informática',
      institution: 'Centro Educativo Técnico Laboral KINAL',
      period: '2023 - 2025',
      description: 'Formación en HTML, CSS, JavaScript, bases de datos y desarrollo de aplicaciones web.',
      icon: 'GraduationCap'
    },
    {
      id: 'umg-ingenieria',
      title: 'Cursando Segundo Semestre Ingeniería en Sistemas',
      institution: 'Universidad Mariano Gálvez',
      period: '2026',
      description: 'Mantenimiento de sistemas operativos y equipos de cómputo.',
      icon: 'BookOpen'
    },
    {
      id: 'kinal-ccna',
      title: 'CCNAv7: Introducción a Redes',
      institution: 'Centro Educativo Técnico Laboral KINAL',
      period: '2023',
      description: 'Introducción a redes de computadoras, protocolos y topologías básicas.',
      icon: 'Network'
    }
  ],
  skills: [
    { name: 'TypeScript (TS)', level: 'Intermedio', percentage: 80, category: 'Frontend' },
    { name: 'JavaScript (JS)', level: 'Avanzado', percentage: 88, category: 'Frontend' },
    { name: 'React', level: 'Intermedio', percentage: 82, category: 'Frontend' },
    { name: 'Next.js', level: 'Intermedio', percentage: 78, category: 'Frontend' },
    { name: 'Vue', level: 'Intermedio', percentage: 78, category: 'Frontend' },
    { name: 'Nuxt', level: 'Intermedio', percentage: 80, category: 'Frontend' },
    { name: 'React Native', level: 'Intermedio', percentage: 72, category: 'Mobile' },
    { name: 'Node.js', level: 'Intermedio', percentage: 80, category: 'Backend' },
    { name: 'Java', level: 'Intermedio', percentage: 75, category: 'Backend' },
    { name: 'Spring Boot', level: 'Intermedio', percentage: 72, category: 'Backend' },
    { name: 'PostgreSQL', level: 'Intermedio', percentage: 76, category: 'Backend' },
    { name: 'MongoDB', level: 'Intermedio', percentage: 78, category: 'Backend' },
    { name: 'MySQL', level: 'Intermedio', percentage: 78, category: 'Backend' },
    { name: 'Git & GitHub', level: 'Avanzado', percentage: 85, category: 'Tools & Design' }
  ],
  projects: [
    {
      id: 'citapro',
      title: 'CitaPro',
      description: 'Plataforma web para gestión y agendamiento de citas en línea con arquitectura multi-rol (Administrador, Profesional y Cliente). Incluye flujo de reserva en 4 pasos, consulta de disponibilidad en tiempo real, agendas dinámicas, control de horarios y panel administrativo con métricas.',
      tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Zod'],
      githubUrl: 'https://github.com/rmartin-2023205/CitaPro.git',
      demoUrl: 'https://cita-pro.vercel.app/',
      imageUrl: '/projects/citapro.png',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
      icon: 'Calendar'
    },
    {
      id: 'stockflow',
      title: 'StockFlow',
      description: 'Sistema SPA para control de inventarios, existencias y punto de venta (POS) para comercios. Incluye catálogo de productos, gestión de categorías, trazabilidad de existencias en almacenes, módulo de ventas con carrito y panel analítico con métricas.',
      tags: ['React 19', 'Tailwind CSS', 'Vite', 'React Router', 'REST APIs'],
      githubUrl: 'https://github.com/rmartin-2023205/Stockflow.git',
      demoUrl: 'https://stockflow-alpha-green.vercel.app/',
      imageUrl: '/projects/stockflow.png',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      icon: 'Boxes'
    },
    {
      id: 'blog-personal',
      title: 'Blog Personal',
      description: 'Blog personal full stack con sistema de autenticación, CRUD de publicaciones y comentarios. Frontend en React, backend en Node.js y base de datos MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/rmartin-2023205/BlogPersonalFrontEnd.git',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      icon: 'Globe'
    },
    {
      id: 'gestor-opiniones',
      title: 'Gestor de Opiniones',
      description: 'Sistema backend para gestión de opiniones y reseñas. API REST desarrollada en Node.js con Express y base de datos MongoDB. Incluye autenticación y validaciones.',
      tags: ['Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/rmartin-2023205',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0891b2 100%)',
      icon: 'MessageSquare'
    }
  ],
  experience: [
    {
      id: 'exp-fullstack-current',
      role: 'Desarrollador Full Stack (Node.js & React)',
      company: 'Empresa de Tecnología',
      period: '3 de Diciembre 2025 - Presente',
      description: 'Desarrollo e implementación de soluciones full stack con Node.js en el backend y React en el frontend. Creación de APIs RESTful, gestión de estado y persistencia de datos eficiente.',
      tags: ['Node.js', 'React', 'JavaScript', 'REST APIs', 'Full Stack']
    },
    {
      id: 'exp-plus-ti',
      role: 'Desarrollador Frontend',
      company: 'Plus TI',
      period: '1 de Agosto 2025 - 31 de Octubre 2025',
      description: 'Desarrollo y optimización de interfaces de usuario web responsivas, componentes interactivos y colaboración técnica en equipo.',
      tags: ['React', 'Frontend', 'JavaScript', 'CSS3']
    },
    {
      id: 'exp-proyecto-final',
      role: 'Proyecto Final de Técnico',
      company: 'Centro Educativo Técnico Laboral KINAL',
      period: 'Abril 2024 - Mayo 2024',
      description: 'Desarrollo de plataforma educativa completa con backend en Node.js, base de datos SQL y frontend responsivo. Trabajo en equipo de 4 personas.',
      tags: ['Node.js', 'SQL', 'Teamwork']
    }
  ]
}
