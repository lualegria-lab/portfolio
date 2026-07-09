export type Lang = 'en' | 'es';
export type LocalizedString = string | { en: string; es: string };

export function getText(value: LocalizedString, lang: Lang = 'en') {
  return typeof value === 'string' ? value : value[lang];
}

export type ProjectSection =
  | {
      type: 'text';
      heading?: LocalizedString;
      body: LocalizedString;
    }
  | {
      type: 'media';
      heading?: LocalizedString;
      body?: LocalizedString;
      image: string;
      alt: string;
      caption?: LocalizedString;
      wide?: boolean;
    }
  | {
      type: 'split';
      heading: LocalizedString;
      body: LocalizedString;
      image: string;
      alt: string;
      caption?: LocalizedString;
      reverse?: boolean;
    }
  | {
      type: 'embed';
      heading?: LocalizedString;
      body?: LocalizedString;
      url: string;
      title: string;
    }
  | {
      type: 'screens';
      heading?: LocalizedString;
      body?: LocalizedString;
      images: {
        src: string;
        alt: string;
      }[];
    };

export type Project = {
  slug: string;
  sourceId: string;
  title: LocalizedString;
  summary: LocalizedString;
  category: LocalizedString;
  tags: LocalizedString[];
  thumbnail: string[];
  thumbnailMode?: 'phone';
  heroImage?: string;
  heroAlt?: string;
  sections: ProjectSection[];
};

export const ui = {
  footerCta: {
    en: 'Would you like to get in touch? Drop me a line at',
    es: '¿Te gustaría ponerte en contacto? Escríbeme a'
  },
  selectedWork: {
    en: 'Selected work',
    es: 'Trabajos seleccionados'
  },
  aboutTitle: {
    en: 'About',
    es: 'Sobre mí'
  },
  certificatesEyebrow: {
    en: 'Learning and credentials',
    es: 'Formación y certificaciones'
  },
  certificatesTitle: {
    en: 'Certificates',
    es: 'Certificados'
  },
  cvEyebrow: {
    en: 'Experience and education',
    es: 'Experiencia y formación'
  },
  contactEyebrow: {
    en: 'Get in touch',
    es: 'Contacto'
  },
  contactTitle: {
    en: 'Do you have a product idea, want to discuss a project, or need a designer?',
    es: '¿Tienes una idea de producto, quieres conversar sobre un proyecto o necesitas una diseñadora?'
  },
  contactBody: {
    en: 'Drop me an email and I will get back to you.',
    es: 'Envíame un email y te responderé.'
  },
  labels: {
    email: { en: 'Email', es: 'Email' },
    name: { en: 'Name', es: 'Nombre' },
    message: { en: 'Message', es: 'Mensaje' },
    send: { en: 'Send email', es: 'Enviar email' }
  },
  moreWork: {
    en: 'Read more of my case studies',
    es: 'Ver más trabajos'
  }
} as const;

export const navItems = [
  { href: '/', label: { en: 'Home', es: 'Inicio' }, key: 'home' },
  { href: '/about/', label: { en: 'About', es: 'Sobre mí' }, key: 'about' },
  { href: '/certificates/', label: { en: 'Certificates', es: 'Certificados' }, key: 'certificates' },
  { href: '/cv/', label: { en: 'CV', es: 'CV' }, key: 'cv' },
  { href: '/contact/', label: { en: 'Contact', es: 'Contacto' }, key: 'contact' }
] as const;

export const profile = {
  name: 'Lucía Alegria',
  role: {
    en: 'Communications specialist & UX designer',
    es: 'Especialista en comunicación y diseñadora UX'
  },
  location: 'Barcelona',
  email: 'alegria.lu@gmail.com',
  heroImage: '/assets/hero-portrait.webp',
  introEyebrow: {
    en: 'Hey there!',
    es: '¡Hola!'
  },
  intro: {
    en: 'I’m Lucía Alegria, Communications specialist & UX designer based in BCN.',
    es: 'Soy Lucía Alegria, especialista en comunicación y diseñadora UX basada en BCN.'
  }
};

export const projects: Project[] = [
  {
    slug: 'buscarte-app',
    sourceId: '647bc021',
    title: 'Buscarte APP',
    category: {
      en: 'UX/UI case study',
      es: 'Caso de estudio UX/UI'
    },
    summary: {
      en: 'Case study for an app that makes cultural events and spaces easier to discover, designed around users’ needs.',
      es: 'Caso de estudio: una app para facilitar el acceso a eventos y espacios culturales, pensada y diseñada para los usuarios.'
    },
    tags: [
      { en: 'UX research', es: 'Investigación UX' },
      { en: 'Mobile app', es: 'App mobile' },
      { en: 'Culture', es: 'Cultura' }
    ],
    thumbnail: ['/assets/thumb-buscarte.webp'],
    thumbnailMode: 'phone',
    heroImage: '/assets/1. INICIO A(1).png',
    heroAlt: 'Buscarte app screen',
    sections: [
      {
        type: 'screens',
        heading: {
          en: 'Sample screens',
          es: 'Pantallas de ejemplo'
        },
        body: {
          en: '<p>A quick view of the discovery flow: browsing events, choosing a user path, and selecting preferences.</p>',
          es: '<p>Una vista rápida del flujo de descubrimiento: explorar eventos, elegir el tipo de usuario y seleccionar preferencias.</p>'
        },
        images: [
          {
            src: '/assets/primer-vista-eventos.png',
            alt: 'Buscarte event discovery screen'
          },
          {
            src: '/assets/elegir-user.png',
            alt: 'Buscarte user choice screen'
          },
          {
            src: '/assets/elegir-gustos.png',
            alt: 'Buscarte preferences screen'
          }
        ]
      },
      {
        type: 'text',
        heading: {
          en: 'Why think about a cultural events app?',
          es: '¿Por qué pensar en una aplicación de eventos culturales?'
        },
        body: {
          en: '<p>We started with the hypothesis that young people have limited and biased knowledge of the independent cultural offer available in Buenos Aires, while they have greater exposure to large-scale, private, or government-promoted events.</p><p>The design question was: <strong>what needs are not being covered by current cultural-discovery platforms for young audiences?</strong></p>',
          es: '<p>Partimos de la hipótesis de que los y las jóvenes presentan un conocimiento limitado y sesgado de la oferta cultural independiente disponible en la Ciudad de Buenos Aires, mientras tienen mayor exposición a eventos de gran escala, privados o promovidos por organismos gubernamentales.</p><p>La pregunta de diseño fue: <strong>¿qué necesidades no están siendo cubiertas por las plataformas actuales de difusión cultural para el público joven?</strong></p>'
        }
      },
      {
        type: 'split',
        heading: {
          en: 'Market research',
          es: 'Investigación de mercado'
        },
        body: {
          en: '<p>When analyzing existing cultural event platforms in Buenos Aires, we found a fragmented ecosystem, especially around independent and underground events.</p><p>Information was scattered across multiple channels, making access difficult for users and promotion difficult for organizers.</p>',
          es: '<p>Al analizar las plataformas existentes de eventos culturales en la Ciudad de Buenos Aires, detectamos un ecosistema fragmentado, especialmente para eventos independientes y under.</p><p>La información se encontraba dispersa en múltiples canales, lo que dificultaba el acceso para usuarios y la difusión para organizadores.</p>'
        },
        image: '/assets/project-buscarte-research.webp',
        alt: 'Market research board for Buscarte',
        caption: {
          en: 'Information organized collaboratively in FigJam.',
          es: 'Información organizada colaborativamente en FigJam.'
        }
      },
      {
        type: 'split',
        heading: {
          en: 'User research',
          es: 'Investigación con usuarios'
        },
        body: {
          en: '<p>To validate whether this problem responded to a real need, we ran a digital survey with a sample of <strong>74 people</strong>.</p><p>The results confirmed that there is a wide cultural offer in the city, but information is often scattered, unclear, and not always accessible.</p><ul><li>Need for better visual communication.</li><li>Low visibility for independent events.</li><li>Lack of a unified platform.</li></ul>',
          es: '<p>Para validar si esta problemática respondía a una necesidad real, realizamos una encuesta digital con una muestra de <strong>74 personas</strong>.</p><p>Los resultados confirmaron que existe una gran oferta de eventos culturales, pero la información suele estar dispersa, poco clara y no siempre accesible.</p><ul><li>Necesidad de mejor difusión visual.</li><li>Baja visibilidad de eventos independientes.</li><li>Falta de una plataforma unificada.</li></ul>'
        },
        image: '/assets/project-buscarte-survey.webp',
        alt: 'Survey charts for Buscarte',
        reverse: true
      },
      {
        type: 'split',
        heading: {
          en: 'Solution approach',
          es: 'Planteo de solución'
        },
        body: {
          en: '<p>Based on research and interviews, we identified pain points and began ideating a solution aligned with the needs of both users and organizers.</p><p>The proposal combines unified event search, easily shareable content, and personalized filters based on interests.</p>',
          es: '<p>A partir de la investigación y entrevistas, identificamos puntos de dolor y comenzamos a idear una solución alineada con las necesidades de usuarios y organizadores.</p><p>La propuesta combina búsqueda unificada de eventos, contenidos fáciles de compartir y filtros personalizados según intereses.</p>'
        },
        image: '/assets/project-buscarte-solution.webp',
        alt: 'Solution priorities for Buscarte'
      },
      {
        type: 'media',
        heading: 'Test A/B',
        body: {
          en: '<p>We tested different visual approaches for the initial event view and refined the design based on user feedback.</p>',
          es: '<p>Se pusieron a prueba diferentes visualizaciones para la vista inicial de eventos y se ajustó el diseño en función del feedback recibido.</p>'
        },
        image: '/assets/project-buscarte-results.webp',
        alt: 'A/B test results for Buscarte',
        wide: true
      },
      {
        type: 'split',
        heading: 'Design system & UX writing',
        body: {
          en: '<p>Because the app was designed for Buenos Aires, the visual style and tone incorporate everyday local expressions to create closeness and familiarity.</p><p>We also developed a light design system with typography, color, component states, and iconography.</p>',
          es: '<p>Al tratarse de una aplicación pensada para la Ciudad de Buenos Aires, el estilo visual y el tono incorporan expresiones propias del lenguaje cotidiano para generar cercanía y familiaridad.</p><p>También se desarrolló un sistema liviano de tipografías, colores, estados de componentes e iconografía.</p>'
        },
        image: '/assets/project-buscarte-system.webp',
        alt: 'Buscarte design system'
      },
      {
        type: 'embed',
        heading: {
          en: 'Final design',
          es: 'Diseño final'
        },
        url: 'https://www.youtube.com/embed/nJ1uvlCKFzw',
        title: 'Buscarte final app design video'
      },
      {
        type: 'text',
        heading: {
          en: 'Conclusions and learnings',
          es: 'Conclusiones y aprendizajes'
        },
        body: {
          en: '<p>This project helped us understand the difficulties users and organizers face when discovering and promoting independent cultural events.</p><p>The process reinforced the importance of validating initial hypotheses with real research, balancing user and organizer goals, and using cultural context as a design tool.</p>',
          es: '<p>Este proyecto permitió comprender las dificultades que enfrentan usuarios y organizadores al descubrir y difundir eventos culturales independientes.</p><p>El proceso reforzó la importancia de validar hipótesis con investigación real, equilibrar objetivos de usuarios y organizadores, y usar el contexto cultural como herramienta de diseño.</p>'
        }
      }
    ]
  },
  {
    slug: 'bem',
    sourceId: '2b7b30b2',
    title: 'BEM!',
    category: {
      en: 'UX/UI case study',
      es: 'Caso de estudio UX/UI'
    },
    summary: {
      en: 'I designed this case study for an electronic music festival to develop complex components and interactions.',
      es: 'Diseñé este caso de estudio para un festival de música electrónica, con foco en componentes complejos e interacciones.'
    },
    tags: ['UX/UI', { en: 'Design system', es: 'Sistema de diseño' }, { en: 'Events', es: 'Eventos' }],
    thumbnail: [
      '/assets/thumb-bem-1.webp',
      '/assets/thumb-bem-2.webp',
      '/assets/thumb-bem-3.webp'
    ],
    heroImage: '/assets/project-bem-hero.webp',
    heroAlt: 'BEM app screen',
    sections: [
      {
        type: 'split',
        heading: {
          en: 'Market & cultural context',
          es: 'Contexto cultural y de mercado'
        },
        body: {
          en: '<p>Barcelona is widely recognized as one of Europe’s most vibrant hubs for electronic music culture. The project explores a digital solution for fans to discover, evaluate, and attend local electronic music events.</p><p>Music consumption is strongly mobile-first, and people increasingly rely on digital platforms to discover and plan live experiences.</p>',
          es: '<p>Barcelona es reconocida como uno de los centros europeos más activos de cultura electrónica. El proyecto explora una solución digital para que los fans puedan descubrir, evaluar y asistir a eventos locales de música electrónica.</p><p>El consumo musical es cada vez más mobile-first y las personas dependen de plataformas digitales para descubrir y planificar experiencias en vivo.</p>'
        },
        image: '/assets/project-bem-context.png',
        alt: 'BEM market context slide'
      },
      {
        type: 'media',
        heading: {
          en: 'Project brief',
          es: 'Brief del proyecto'
        },
        image: '/assets/project-bem-brief.webp',
        alt: 'BEM project brief',
        wide: true
      },
      {
        type: 'text',
        heading: {
          en: 'Personas',
          es: 'Personas'
        },
        body: {
          en: '<p>I made two personas to better understand users’ needs, goals, and pain points. Personas helped translate assumptions into a more user-driven experience.</p>',
          es: '<p>Creé dos personas para comprender mejor las necesidades, objetivos y puntos de dolor de los usuarios. Esta herramienta ayudó a transformar supuestos en una experiencia más centrada en las personas.</p>'
        }
      },
      {
        type: 'media',
        heading: {
          en: 'Customer journey map',
          es: 'Customer journey map'
        },
        body: {
          en: '<p>Discovering and deciding to attend an electronic music event is not linear. Users move between inspiration, exploration, hesitation, and confirmation before taking action.</p>',
          es: '<p>Descubrir y decidir asistir a un evento de música electrónica no es un proceso lineal. Los usuarios pasan por momentos de inspiración, exploración, duda y confirmación antes de actuar.</p>'
        },
        image: '/assets/project-bem-journey.png',
        alt: 'BEM customer journey map',
        wide: true
      },
      {
        type: 'media',
        heading: {
          en: 'User flow overview',
          es: 'User flow'
        },
        body: {
          en: '<p>The flow supports exploratory browsing, moments of hesitation, social validation, saving events, and returning to the decision when the user feels confident.</p>',
          es: '<p>El flujo contempla la exploración, los momentos de duda, la validación social, la posibilidad de guardar eventos y volver a decidir cuando el usuario se siente seguro.</p>'
        },
        image: '/assets/project-bem-flow.png',
        alt: 'BEM user flow',
        wide: true
      },
      {
        type: 'text',
        heading: {
          en: 'Design',
          es: 'Diseño'
        },
        body: {
          en: '<p>The design uses vibrant colors to match the festive environment and make the app playful for a young audience. The interface explores complex components, event cards, filters, and responsive adaptations.</p>',
          es: '<p>El diseño utiliza colores vibrantes para acompañar el concepto festivo y hacer que la app resulte atractiva para un público joven. La interfaz explora componentes complejos, cards de eventos, filtros y adaptaciones responsive.</p>'
        }
      },
      {
        type: 'embed',
        heading: {
          en: 'Final app design',
          es: 'Diseño final de la app'
        },
        url: 'https://www.youtube.com/embed/7O2URhvk15g',
        title: 'BEM final app design video'
      },
      {
        type: 'split',
        heading: {
          en: 'Desktop version',
          es: 'Versión desktop'
        },
        body: {
          en: '<p>Although the application was originally intended for mobile use, users should be able to access it from other devices. The desktop version keeps discovery and event exploration available beyond mobile.</p>',
          es: '<p>Aunque la aplicación fue pensada originalmente para uso mobile, los usuarios también deberían poder acceder desde otros dispositivos. La versión desktop mantiene disponible la exploración de eventos más allá del móvil.</p>'
        },
        image: '/assets/project-bem-desktop.webp',
        alt: 'BEM desktop design'
      }
    ]
  },
  {
    slug: 'web-design',
    sourceId: '862bbc6e',
    title: {
      en: 'Web Design',
      es: 'Diseño web'
    },
    category: {
      en: 'Frontend',
      es: 'Frontend'
    },
    summary: {
      en: 'Web design projects built with HTML, CSS, and frameworks like React and Vue. I focus on creating simple, clear, and responsive layouts that prioritize accessibility and user needs.',
      es: 'Proyectos de diseño web construidos con HTML, CSS y frameworks como React y Vue. Me enfoco en crear interfaces simples, claras y responsive, priorizando accesibilidad y necesidades de usuario.'
    },
    tags: ['HTML', 'CSS', 'React', 'Vue'],
    thumbnail: ['/assets/thumb-web.webp'],
    heroImage: '/assets/thumb-web.webp',
    heroAlt: 'Responsive web design mockups',
    sections: [
      {
        type: 'text',
        heading: {
          en: 'Static & layout-driven websites',
          es: 'Sitios estáticos y centrados en layout'
        },
        body: {
          en: '<p>Projects focused on clean, responsive layouts built with semantic HTML, CSS, and selected Bootstrap components. These works emphasize structure, visual clarity, accessibility, and solid front-end fundamentals.</p>',
          es: '<p>Proyectos enfocados en layouts limpios y responsive, construidos con HTML semántico, CSS y algunos componentes de Bootstrap. Estos trabajos priorizan estructura, claridad visual, accesibilidad y bases sólidas de frontend.</p>'
        }
      },
      {
        type: 'text',
        heading: {
          en: 'Interactive web apps',
          es: 'Aplicaciones web interactivas'
        },
        body: {
          en: '<p>More dynamic projects developed with JavaScript and Vue.js, focusing on component-based architecture, interactivity, and state-driven user interfaces.</p>',
          es: '<p>Proyectos más dinámicos desarrollados con JavaScript y Vue.js, con foco en arquitectura basada en componentes, interactividad e interfaces guiadas por estado.</p>'
        }
      }
    ]
  },
  {
    slug: 'design',
    sourceId: '85a70f84',
    title: {
      en: 'Design',
      es: 'Diseño'
    },
    category: {
      en: 'Graphic design',
      es: 'Diseño gráfico'
    },
    summary: {
      en: 'Graphic design pieces made in Adobe suite.',
      es: 'Piezas gráficas realizadas con Adobe suite.'
    },
    tags: ['Adobe', { en: 'Visual design', es: 'Diseño visual' }, { en: 'Editorial', es: 'Editorial' }],
    thumbnail: ['/assets/thumb-design.webp'],
    heroImage: '/assets/thumb-design.webp',
    heroAlt: 'Sara Hebe graphic design piece',
    sections: [
      {
        type: 'media',
        heading: 'Sara Hebe - rapera argentina',
        body: {
          en: '<p>A visual design piece built around music, texture, contrast, and expressive typography.</p>',
          es: '<p>Una pieza visual construida alrededor de música, textura, contraste y tipografía expresiva.</p>'
        },
        image: '/assets/thumb-design.webp',
        alt: 'Sara Hebe graphic design',
        wide: true
      }
    ]
  },
  {
    slug: 'fotografia',
    sourceId: '85a9526f',
    title: {
      en: 'Photography',
      es: 'Fotografía'
    },
    category: {
      en: 'Photography',
      es: 'Fotografía'
    },
    summary: {
      en: 'Photography work focused on travel, everyday scenes, and visual atmosphere.',
      es: 'Trabajo fotográfico enfocado en viajes, escenas cotidianas y atmósferas visuales.'
    },
    tags: [
      { en: 'Photography', es: 'Fotografía' },
      { en: 'Travel', es: 'Viajes' },
      { en: 'Observation', es: 'Observación' }
    ],
    thumbnail: ['/assets/thumb-photo.webp'],
    heroImage: '/assets/thumb-photo.webp',
    heroAlt: 'Photography thumbnail',
    sections: [
      {
        type: 'media',
        heading: {
          en: 'Selected photography',
          es: 'Fotografía seleccionada'
        },
        body: {
          en: '<p>A small selection from the original photography gallery. More images can be migrated into this page as the portfolio is refined.</p>',
          es: '<p>Una pequeña selección de la galería original de fotografía. Se pueden migrar más imágenes a esta página a medida que se refine el portfolio.</p>'
        },
        image: '/assets/thumb-photo.webp',
        alt: 'Selected photography',
        wide: true
      }
    ]
  },
  {
    slug: 'redaccion',
    sourceId: '85b027b4',
    title: {
      en: 'Writing',
      es: 'Redacción'
    },
    category: {
      en: 'Writing',
      es: 'Redacción'
    },
    summary: {
      en: 'Cultural articles and journalistic coverage.',
      es: 'Notas culturales y coberturas periodísticas.'
    },
    tags: [
      { en: 'Writing', es: 'Redacción' },
      { en: 'Culture', es: 'Cultura' },
      { en: 'Journalism', es: 'Periodismo' }
    ],
    thumbnail: ['/assets/thumb-writing.webp'],
    heroImage: '/assets/thumb-writing.webp',
    heroAlt: 'Writing work on a laptop mockup',
    sections: [
      {
        type: 'media',
        heading: {
          en: 'Cultural notes and coverage',
          es: 'Notas culturales y coberturas'
        },
        body: {
          en: '<p>Writing work across cultural notes, music coverage, and journalistic pieces.</p>',
          es: '<p>Trabajos de escritura vinculados a notas culturales, cobertura musical y piezas periodísticas.</p>'
        },
        image: '/assets/thumb-writing.webp',
        alt: 'Writing work preview',
        wide: true
      }
    ]
  }
];

export const certificates = [
  '/assets/certificate-1.png',
  '/assets/certificate-2.webp',
  '/assets/certificate-3.webp',
  '/assets/certificate-4.webp',
  '/assets/certificate-5.webp',
  '/assets/certificate-6.webp'
];

export const aboutSections = [
  {
    image: '/assets/about-barcelona.webp',
    alt: 'Lucía standing in Barcelona',
    html: {
      en: '<h2>About me</h2><p>I have a degree in Social Communication from the University of Buenos Aires, with a specialization in Communication Policies and Planning, and a UX/UI Design diploma from the National Technological University. I’ve been working in digital communication for over ten years, blending creativity, strategy, and user-centered design.</p><p>My experience spans media, publishing, and cultural projects. In recent years, I specialized in the tech field, working across communication, technical support, and infrastructure tasks.</p><p>I’m passionate about technology, design, and collaborative processes, and I believe in the power of clear, strategic, and purpose-driven communication.</p><p>Born and raised in Buenos Aires, Argentina, currently living in Barcelona.</p>',
      es: '<h2>Sobre mí</h2><p>Soy Licenciada en Ciencias de la Comunicación Social por la Universidad de Buenos Aires, con orientación en Políticas y Planificación de la Comunicación, y Diseñadora UX/UI por la Universidad Tecnológica Nacional. Hace más de diez años me dedico a la comunicación digital, combinando creatividad, estrategia y diseño centrado en las personas.</p><p>Trabajé en medios, editoriales y proyectos culturales, y en los últimos años me especialicé en el ámbito tecnológico, donde desarrollé tanto tareas de comunicación como de soporte técnico e infraestructura.</p><p>Me apasionan la tecnología, el diseño y los procesos colaborativos, y creo en el poder de una comunicación clara, estratégica y con propósito.</p><p>Nacida y criada en Buenos Aires, Argentina, actualmente viviendo en Barcelona.</p>'
    }
  },
  {
    image: '/assets/about-football.webp',
    alt: 'Football match with friends',
    caption: {
      en: 'Every Friday I play football with friends.',
      es: 'Todos los viernes juego partidos de fútbol con amigas.'
    },
    html: {
      en: '<h3>Not everything is about work</h3><p>I love to travel. I’m into pretty much every sport, but football is my favorite. I’ve tried boxing, I do a bit of acrobatics, and I’m totally into biking. I also write fiction, mostly short stories, but there’s a novel in the works.</p><ul><li>Some people call me Hacha.</li><li>I’m a River fan, but my partner supports Boca, eternal rivals.</li><li>My favorite meal is asado.</li></ul>',
      es: '<h3>No todo es trabajo</h3><p>Amo viajar. Me gustan casi todos los deportes pero sobre todo el fútbol. También hice boxeo, practico acrobacia y soy fan de la bici. Escribo ficción, en general cuentos, pero tengo una novela en proceso.</p><ul><li>Me dicen Hacha.</li><li>Soy de River pero mi pareja es de Boca, rivales eternos.</li><li>Mi comida favorita es el asado.</li></ul>'
    }
  }
];
