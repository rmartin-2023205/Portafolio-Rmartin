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
      'Fuera del código, disfruto de aprender nuevas tecnologías, resolver problemas lógicos y contribuir a la comunidad open source.'
    ],
    email: 'martinricardo634@gmail.com',
    github: 'https://github.com/rmartin-2023205',
    linkedin: 'https://www.linkedin.com/in/ricardo-martín-quiché-005768349',
    cvUrl: '#contacto'
  },
  navigation: [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre' },
    { name: 'Educación', href: '#educacion' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Experiencia', href: '#experiencia' },
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
      title: 'Cursando Primer Semestre Ingeniería en Sistemas',
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
    { name: 'HTML5', level: 'Avanzado', percentage: 90, category: 'Frontend' },
    { name: 'CSS3 & Flexbox', level: 'Avanzado', percentage: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 'Intermedio', percentage: 75, category: 'Frontend' },
    { name: 'React', level: 'Intermedio', percentage: 70, category: 'Frontend' },
    { name: 'Node.js & Express', level: 'Intermedio', percentage: 70, category: 'Backend' },
    { name: 'SQL & Bases de Datos', level: 'Intermedio', percentage: 72, category: 'Backend' },
    { name: 'Git & GitHub', level: 'Intermedio', percentage: 80, category: 'Tools & Design' },
    { name: 'Responsive Design', level: 'Avanzado', percentage: 88, category: 'Frontend' },
    { name: 'REST APIs', level: 'Intermedio', percentage: 73, category: 'Backend' },
    { name: 'Figma & Diseño UI/UX', level: 'Básico', percentage: 60, category: 'Tools & Design' }
  ],
  projects: [
    {
      id: 'mobiexpress',
      title: 'MobiExpress',
      description: 'E-commerce de renta de mobiliarios. Plataforma frontend desarrollada en React con gestión de catálogo, carrito de compras y sistema de reservas. Integrado con MongoDB.',
      tags: ['React', 'MongoDB', 'Node.js'],
      githubUrl: 'https://github.com/jmarroquin-2023026/MobiExpress-React.git',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      icon: 'Armchair'
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
      id: 'exp-agencia-xyz',
      role: 'Desarrollador Frontend - Práctica',
      company: 'Agencia Digital XYZ',
      period: 'Junio 2024 - Presente',
      description: 'Desarrollo de interfaces de usuario responsivas, mantenimiento de código frontend, colaboración con diseñadores UX/UI y optimización de rendimiento web.',
      tags: ['React', 'HTML/CSS', 'Git']
    },
    {
      id: 'exp-proyecto-final',
      role: 'Proyecto Final de Técnico',
      company: 'Instituto Tecnológico',
      period: 'Abril 2024 - Mayo 2024',
      description: 'Desarrollo de plataforma educativa completa con backend en Node.js, base de datos SQL y frontend responsivo. Trabajo en equipo de 4 personas.',
      tags: ['Node.js', 'SQL', 'Teamwork']
    },
    {
      id: 'exp-open-source',
      role: 'Contribuidor Open Source',
      company: 'Comunidad GitHub',
      period: '2023 - Presente',
      description: 'Contribuciones en proyectos open source, reportes de bugs, mejoras de documentación y desarrollo de nuevas funcionalidades.',
      tags: ['GitHub', 'Colaboración', 'Código abierto']
    }
  ]
}
