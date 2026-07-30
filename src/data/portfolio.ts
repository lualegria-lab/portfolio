export type Lang = 'en' | 'es';
export type LocalizedString = string | { en: string; es: string };
export type LocalizedAsset = string | { en: string; es: string };

export function getText(value: LocalizedString, lang: Lang = 'en') {
  return typeof value === 'string' ? value : value[lang];
}

export type ProjectSection =
  | {
      type: 'text';
      heading?: LocalizedString;
      body: LocalizedString;
      wide?: boolean;
    }
  | {
      type: 'media';
      heading?: LocalizedString;
      body?: LocalizedString;
      image: LocalizedAsset;
      alt: string;
      caption?: LocalizedString;
      wide?: boolean;
      display?: 'graphic-portrait' | 'writing-portrait';
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
      layout?: 'five-up';
      images: {
        src: string;
        alt: string;
      }[];
    }
  | {
      type: 'slider';
      heading?: LocalizedString;
      body?: LocalizedString;
      lang?: Lang;
      transparent?: boolean;
      display?: 'graphic-portrait' | 'writing-portrait';
      images: {
        src: LocalizedAsset;
        alt: string;
        caption?: LocalizedString;
      }[];
    }
  | {
      type: 'columns';
      columns: {
        heading: LocalizedString;
        note?: LocalizedString;
        body: LocalizedString;
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
  thumbnailMode?: 'phone' | 'web-devices';
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
  cvTitle: {
    en: 'Resume',
    es: 'Currículum'
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
    en: 'Hi, I\'m Lucía',
    es: 'Hola, soy Lucía'
  },
  introHeading: {
    en: ['Digital Communication', 'Strategist and', 'Content Designer.'],
    es: ['Estratega en Comunicación Digital', 'y Content Designer.']
  },
  introBody: {
    en: [
      'I help organizations create clearer,',
      'more useful digital products',
      'and people-centered experiences.'
    ],
    es: [
      'Ayudo a organizaciones a crear productos',
      'y experiencias digitales más claras,',
      'útiles y centradas en las personas.'
    ]
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
    thumbnail: ['/assets/buscarte-covermockup.webp'],
    heroImage: '/assets/cover-mockup1.webp',
    heroAlt: 'Buscarte app cover mockup',
    sections: [
      {
        type: 'screens',
        images: [
          {
            src: '/assets/primeravista-mockup.webp',
            alt: 'Buscarte event discovery screen'
          },
          {
            src: '/assets/elegiruser-mockup.webp',
            alt: 'Buscarte user choice screen'
          },
          {
            src: '/assets/gustosmockup.webp',
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
          en: '<p>When analyzing existing cultural event platforms in Buenos Aires, we found a fragmented ecosystem, especially regarding independent and underground events.</p><p>Information was scattered across multiple channels, making access difficult for users and event promotion difficult.</p><p>Based on this diagnosis, we carried out market research and benchmarking to understand existing solutions, identify opportunities, and define a differentiated value proposition.</p>',
          es: '<p>Al analizar las plataformas existentes de eventos culturales en la Ciudad de Buenos Aires, detectamos un ecosistema fragmentado, especialmente en lo que respecta a eventos independientes y under.</p><p>La información se encontraba dispersa en múltiples canales, lo que dificultaba tanto el acceso por parte de los usuarios como la difusión de los eventos.</p><p>A partir de este diagnóstico, realizamos un análisis de mercado y benchmarking para comprender las soluciones existentes, identificar oportunidades y definir una propuesta de valor diferenciada.</p>'
        },
        image: '/assets/project-buscarte-research.webp',
        alt: 'Market research board for Buscarte',
        caption: {
          en: 'We organized the research findings in FigJam so we could work collaboratively.',
          es: 'Organizamos la información relevada en Figjam para poder trabajar colaborativamente.'
        }
      },
      {
        type: 'split',
        heading: {
          en: 'User research',
          es: 'Investigación de usuarios'
        },
        body: {
          en: '<p>To validate whether this problem responded to a real need, we ran a digital survey with a total sample of <strong>74 people</strong>.</p><p>The results confirmed our initial hypothesis: the city has a broad cultural offer, but the information is often scattered, unclear, and not always accessible to users.</p><p>A key insight was that users rely on multiple platforms to find information and plan cultural outings.</p><h3>Key findings</h3><ul><li>Need for better visual communication</li><li>Low visibility of independent events</li><li>Lack of a unified platform</li></ul>',
          es: '<p>Para validar si esta problemática respondía a una necesidad real, realizamos una encuesta digital con una muestra total de <strong>74 personas</strong>.</p><p>Los resultados confirmaron nuestra hipótesis inicial: existe una gran oferta de eventos culturales en la ciudad, pero la información suele estar dispersa, poco clara y no siempre resulta accesible para los usuarios.</p><p>Un insight clave fue que los usuarios recurren a múltiples plataformas para informarse y planificar salidas culturales.</p><h3>Hallazgos clave</h3><ul><li>Necesidad de una mejor difusión visual</li><li>Baja visibilidad de eventos independientes</li><li>Falta de una plataforma unificada</li></ul>'
        },
        image: '/assets/project-buscarte-survey.webp',
        alt: 'Survey charts for Buscarte',
        caption: {
          en: 'Age groups and cultural consumption time ranges',
          es: 'Edades y rangos horarios de consumo'
        },
        reverse: true
      },
      {
        type: 'media',
        image: '/assets/usersurvey.webp',
        alt: 'Survey observations from Buscarte users',
        caption: {
          en: 'Main observations from survey respondents',
          es: 'Observaciones principales de los encuestados'
        },
        wide: true
      },
      {
        type: 'media',
        body: {
          en: '<div class="solution-columns"><div><h2>Solution approach</h2><p>Based on the research results and in-depth interviews, we identified the main pain points and began to ideate a solution aligned with the needs of both users and organizers.</p><p>We designed empathy maps and user personas to better understand motivations, behaviors, and expectations, and to guide design and functionality decisions.</p></div><div><h2>Value proposition</h2><h4>For users</h4><ul><li>Unified event search</li><li>Content that is easy to share</li><li>Personalized filters based on interests</li></ul><h4>For organizers</h4><ul><li>Simple event publishing</li><li>Free visibility</li><li>Ability to highlight relevant event information</li></ul></div></div>',
          es: '<div class="solution-columns"><div><h2>Planteo de solución</h2><p>A partir de los resultados de la investigación y entrevistas en profundidad, identificamos los principales puntos de dolor y comenzamos a idear una solución alineada tanto a las necesidades de los usuarios como de los organizadores.</p><p>Diseñamos mapas de empatía y user personas para comprender mejor motivaciones, comportamientos y expectativas, y así guiar las decisiones de diseño y funcionalidad.</p></div><div><h2>Propuesta de valor</h2><h4>Para el usuario</h4><ul><li>Unificación de la búsqueda de eventos</li><li>Contenidos fáciles de compartir</li><li>Filtros personalizados según intereses</li></ul><h4>Para el organizador</h4><ul><li>Publicación de eventos de forma simple</li><li>Visibilidad gratuita</li><li>Posibilidad de destacar información relevante del evento</li></ul></div></div>'
        },
        image: '/assets/project-buscarte-solution.webp',
        alt: 'Solution priorities for Buscarte',
        wide: true
      },
      {
        type: 'text',
        heading: {
          en: 'From insight to design opportunity',
          es: 'Del insight a la oportunidad de diseño'
        },
        body: {
          en: '<p>With the value proposition defined, we deepened our understanding of users to identify opportunities, limitations, and areas for improvement in the application.</p><p>Through synthesis tools such as affinity maps, empathy maps, and a SWOT analysis, we organized the research findings and analyzed the product context from both a user-centered and strategic perspective.</p><p>This process allowed us to detect real needs, anticipate possible friction points, and guide design decisions toward a relevant and viable solution.</p>',
          es: '<p>Con la propuesta de valor definida, profundizamos en la comprensión de las personas usuarias para identificar oportunidades, limitaciones y puntos de mejora de la aplicación.</p><p>A través de herramientas de síntesis como mapas de afinidad, mapas de empatía y un análisis FODA, organizamos los hallazgos de la investigación y analizamos el contexto del producto desde una perspectiva tanto centrada en el usuario como estratégica.</p><p>Este proceso nos permitió detectar necesidades reales, anticipar posibles fricciones y orientar las decisiones de diseño hacia una solución relevante y viable.</p>'
        }
      },
      {
        type: 'slider',
        images: [
          {
            src: '/assets/empathymap.webp',
            alt: 'Mapa de empatía de usuarios de Buscarte',
            caption: {
              en: 'Empathy map',
              es: 'Mapa de empatía'
            }
          },
          {
            src: '/assets/mapadeafinidad.webp',
            alt: 'Mapa de afinidad de la investigación de Buscarte',
            caption: {
              en: 'Affinity map',
              es: 'Mapa de afinidad'
            }
          },
          {
            src: '/assets/analisisdafo.png',
            alt: 'Análisis FODA de Buscarte',
            caption: {
              en: 'SWOT analysis',
              es: 'Análisis FODA'
            }
          },
          {
            src: '/assets/userflow.png',
            alt: 'Mapa de navegación de Buscarte',
            caption: {
              en: 'Navigation map',
              es: 'Mapa de navegación'
            }
          }
        ]
      },
      {
        type: 'slider',
        images: [
          {
            src: '/assets/buscarte-userpersona1.webp',
            alt: 'User persona Mateo, usuario que busca eventos culturales',
            caption: {
              en: 'User persona for someone looking for an event',
              es: 'User persona de usuario que busca evento'
            }
          },
          {
            src: '/assets/buscarte-userpersona2.webp',
            alt: 'User persona Luna, usuario que promociona eventos culturales',
            caption: {
              en: 'User persona for someone promoting an event',
              es: 'User persona de usuario que promociona evento'
            }
          }
        ]
      },
      {
        type: 'media',
        heading: {
          en: 'A/B Test',
          es: 'Test A/B'
        },
        body: {
          en: '<p>When defining the initial event view, we came up with two different formats that we wanted to test. We presented several users with different display options to make a better decision based on the feedback collected.</p><div class="test-ab-columns"><div><h4>Objective</h4><p>Determine which event-listing display format is more comfortable and functional.</p></div><div><h4>Steps</h4><ul><li>Explanation of the app</li><li>Selection of one option</li><li>User rating</li></ul></div></div>',
          es: '<p>A la hora de definir la vista inicial de los eventos se nos ocurrieron dos formatos diferentes que quisimos poner a prueba. Le presentamos a varios usuarios diferentes opciones de visualización y definir mejor en función del feedback obtenido.</p><div class="test-ab-columns"><div><h4>Objetivo</h4><p>Determinar qué formato de visualización de listado de eventos resulta más cómodo y funcional.</p></div><div><h4>Pasos</h4><ul><li>Explicación de la app</li><li>Elección de una de las opciones</li><li>Ponderación del usuario</li></ul></div></div>'
        },
        image: '/assets/project-buscarte-results.webp',
        alt: 'A/B test results for Buscarte',
        caption: {
          en: 'A/B test results',
          es: 'Resultados del Test A/B'
        },
        wide: true
      },
      {
        type: 'media',
        image: '/assets/buscarte-busquedaeventofinal.webp',
        alt: 'Resultado final de la búsqueda de evento en Buscarte',
        caption: {
          en: 'Final result based on the feedback collected in the A/B test',
          es: 'Resultado final a partir del feedback obtenido en el test A/B'
        },
        wide: true
      },
      {
        type: 'text',
        heading: {
          en: 'Monetization',
          es: 'Monetización'
        },
        body: {
          en: '<p>Our goal was to provide greater access to independent culture without major costs. For that reason, many options would remain free, with the optional possibility of obtaining statistics and insights on consumption patterns to guide proposals more effectively.</p><p>Organizers can pay to know how many times their event was viewed or opened, as well as the hours and days with the highest traffic.</p>',
          es: '<p>Nuestro objetivo era dar mayor acceso a la cultura independiente sin grandes costos. Por ello, una gran cantidad de opciones se mantendrían gratuitas, ofreciendo la posibilidad opcional de obtener estadísticas e insights sobre los consumos para orientar de manera más efectiva sus propuestas.</p><p>El organizador puede pagar para saber la cantidad de veces que se vio o se entró a su evento, así como los horarios y días de mayor tráfico.</p>'
        }
      },
      {
        type: 'screens',
        images: [
          {
            src: '/assets/buscarte-estadisticasmockup.webp',
            alt: 'Pantalla de estadísticas del evento en Buscarte'
          },
          {
            src: '/assets/buscarte-miseventosmockup.webp',
            alt: 'Pantalla de mis eventos en Buscarte'
          }
        ]
      },
      {
        type: 'split',
        heading: {
          en: 'Design system & UX writing',
          es: 'Sistema de diseño y UX writing'
        },
        body: {
          en: '<p>Because this application was designed exclusively for the City of Buenos Aires, we chose a visual style and communication tone that incorporated localisms and everyday expressions.</p><p>This decision aimed to create closeness, familiarity, and greater engagement, using UX writing as a key tool to connect with users.</p>',
          es: '<p>Al tratarse de una aplicación pensada exclusivamente para la Ciudad de Buenos Aires, optamos por un estilo visual y un tono comunicacional que incorporara localismos y expresiones propias del lenguaje cotidiano.</p><p>Esta decisión buscó generar cercanía, familiaridad y mayor engagement, utilizando el UX writing como una herramienta clave para conectar con los usuarios.</p>'
        },
        image: '/assets/project-buscarte-system.webp',
        alt: 'Buscarte design system'
      },
      {
        type: 'media',
        heading: {
          en: 'UX Kit',
          es: 'UX Kit'
        },
        body: {
          en: '<p>A lightweight design system was developed to ensure visual consistency throughout the product, including typography, color palette, component states, and iconography.</p>',
          es: '<p>Se desarrolló un sistema de diseño liviano para garantizar coherencia visual a lo largo del producto, incluyendo tipografías, paleta de colores, estados de componentes e iconografía.</p>'
        },
        image: '/assets/buscarte-uxkit.png',
        alt: 'UX kit de Buscarte con tipografías, colores, botones e iconografía',
        wide: true
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
          en: '<p>This project made it possible to understand in depth the difficulties that both users and organizers face when discovering and promoting independent cultural events in the City of Buenos Aires.</p><p>Through a research-centered process, scattered and hard-to-access information was transformed into a clear, unified proposal oriented around real user needs.</p><p>Among the main learnings, I highlight the importance of:</p><ul><li>Validating initial hypotheses with real research</li><li>Designing solutions that balance user and organizer goals</li><li>Using UX writing and cultural context as key tools to create closeness and engagement</li></ul><p>This case reinforced my interest in designing digital experiences with social impact, where research, communication, and design work in an integrated way.</p><h3>Next steps</h3><p>Usability testing, design iteration, and validation with cultural organizers.</p>',
          es: '<p>Este proyecto permitió comprender en profundidad las dificultades que enfrentan tanto los usuarios como los organizadores al momento de descubrir y difundir eventos culturales independientes en la Ciudad de Buenos Aires.</p><p>A través de un proceso centrado en la investigación, fue posible transformar información dispersa y poco accesible en una propuesta clara, unificada y orientada a las necesidades reales de las personas.</p><p>Entre los principales aprendizajes, destaco la importancia de:</p><ul><li>Validar hipótesis iniciales con investigación real</li><li>Diseñar soluciones que equilibren objetivos de usuarios y organizadores</li><li>Utilizar el UX writing y el contexto cultural como herramientas clave para generar cercanía y engagement</li></ul><p>Este caso reforzó mi interés por diseñar experiencias digitales con impacto social, donde la investigación, la comunicación y el diseño trabajan de forma integrada.</p><h3>Próximos pasos</h3><p>Realización testeo de usabilidad, iteración del diseño y validación con organizadores culturales.</p>'
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
      '/assets/bem-covermockup.webp',
      '/assets/bem-eventdisplaymockup.webp',
      '/assets/bem-searcheventmockup.webp'
    ],
    heroImage: '/assets/bem-covermockup.webp',
    heroAlt: 'BEM welcome screen',
    sections: [
      {
        type: 'media',
        heading: {
          en: 'Market & Cultural Context',
          es: 'Contexto de mercado y cultural'
        },
        body: {
          en: '<p>Barcelona is widely recognized as one of Europe’s most vibrant hubs for electronic music culture. The city hosts internationally acclaimed events such as Sónar, a leading electronic music and digital arts festival that attracts more than 150,000 attendees from over 90 countries each edition — positioning Barcelona as a global center for electronic music and innovation.</p><p>In addition, music consumption in Spain is predominantly digital and mobile-first. Over 70% of listeners use music streaming services via mobile apps, showing that mobile applications are central to how audiences engage with music content.</p><p>Beyond streaming, people increasingly rely on digital platforms to discover and plan live experiences. Globally, the concert & event discovery app market has surpassed USD 1.1 billion, indicating growing demand for tools that help users find events that match their tastes and location.</p><p>These trends suggest a strong opportunity for a digital solution that helps electronic music fans in Barcelona better discover, explore, and engage with local events — especially within the independent and underground scene.</p>',
          es: '<p>Barcelona es ampliamente reconocida como uno de los centros más vibrantes de Europa para la cultura de la música electrónica. La ciudad acoge eventos de reconocimiento internacional como Sónar, un festival líder de música electrónica y artes digitales que atrae a más de 150.000 asistentes de más de 90 países en cada edición, posicionando a Barcelona como un centro global de música electrónica e innovación.</p><p>Además, el consumo musical en España es predominantemente digital y centrado en el móvil. Más del 70% de los oyentes utiliza servicios de música en línea a través de aplicaciones móviles, lo que muestra que las aplicaciones móviles son centrales en la forma en que las audiencias interactúan con el contenido musical.</p><p>Más allá de la escucha en línea, las personas recurren cada vez más a plataformas digitales para descubrir y planificar experiencias en vivo. A nivel global, el mercado de aplicaciones de descubrimiento de conciertos y eventos superó los 1.100 millones de USD, lo que indica una demanda creciente de herramientas que ayuden a los usuarios a encontrar eventos alineados con sus gustos y ubicación.</p><p>Estas tendencias sugieren una oportunidad sólida para una solución digital que ayude a los aficionados de la música electrónica en Barcelona a descubrir, explorar e interactuar mejor con eventos locales, especialmente dentro de la escena independiente y alternativa.</p>'
        },
        image: {
          en: '/assets/project-bem-context.png',
          es: '/assets/BemHipotesis.png'
        },
        alt: 'BEM market context slide',
        wide: true
      },
      {
        type: 'media',
        heading: {
          en: 'Project brief',
          es: 'Resumen del proyecto'
        },
        image: {
          en: '/assets/project-bem-brief.webp',
          es: '/assets/Bem-Brief-es.webp'
        },
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
        },
        wide: true
      },
      {
        type: 'slider',
        images: [
          {
            src: {
              en: '/assets/bem-userpersona.webp',
              es: '/assets/Bem -User Persona 1- es.webp'
            },
            alt: 'BEM user persona Bruno'
          },
          {
            src: {
              en: '/assets/bem-userpersona2.webp',
              es: '/assets/Bem-user persona 2-es.webp'
            },
            alt: 'BEM user persona Clara'
          }
        ]
      },
      {
        type: 'media',
        heading: {
          en: 'Customer journey map',
          es: 'Mapa del recorrido del usuario'
        },
        body: {
          en: '<p>Discovering and deciding to attend an electronic music event is not a linear process. Users move between inspiration, exploration, hesitation, and confirmation before taking action.</p><p>This Customer Journey Map visualizes the end-to-end experience, capturing user goals, emotions, behaviors, and pain points at each stage. By mapping these moments, key opportunities were identified to reduce friction, support decision-making, and build trust throughout the journey.</p><p><em>This journey is based on qualitative assumptions and UX best practices derived from similar digital experiences.</em></p>',
          es: '<p>Descubrir y decidir asistir a un evento de música electrónica no es un proceso lineal. Los usuarios se mueven entre la inspiración, la exploración, la duda y la confirmación antes de pasar a la acción.</p><p>Este mapa del recorrido del usuario visualiza la experiencia completa, capturando objetivos, emociones, comportamientos y puntos de dolor en cada etapa. Al mapear estos momentos, se identificaron oportunidades clave para reducir fricciones, acompañar la toma de decisiones y construir confianza a lo largo del recorrido.</p><p><em>Este recorrido se basa en supuestos cualitativos y buenas prácticas de experiencia de usuario derivadas de experiencias digitales similares.</em></p>'
        },
        image: '/assets/project-bem-journey.webp',
        alt: 'BEM customer journey map',
        wide: true
      },
      {
        type: 'columns',
        columns: [
          {
            heading: {
              en: 'Key Insights',
              es: 'Hallazgos clave'
            },
            note: {
              en: '(What we learned from the journey)',
              es: '(Qué aprendimos a partir del recorrido)'
            },
            body: {
              en: '<ul><li>Event discovery is often inspiration-led, not task-driven.</li><li>Users struggle to identify independent events among mainstream offerings.</li><li>Decision-making relies heavily on social validation and contextual cues.</li><li>Lack of clarity around vibe, audience, and experience increases hesitation.</li><li>Trust and reassurance are critical at the moment of ticket purchase.</li></ul>',
              es: '<ul><li>El descubrimiento de eventos suele estar guiado por la inspiración, no por una tarea concreta.</li><li>Los usuarios tienen dificultades para identificar eventos independientes entre propuestas más comerciales.</li><li>La toma de decisiones depende en gran medida de la validación social y de señales contextuales.</li><li>La falta de claridad sobre el ambiente, el público y la experiencia aumenta la duda.</li><li>La confianza y la tranquilidad son críticas en el momento de comprar la entrada.</li></ul>'
            }
          },
          {
            heading: {
              en: 'Design Principles',
              es: 'Principios de diseño'
            },
            note: {
              en: '(How insights translated into design decisions)',
              es: '(Cómo los hallazgos se tradujeron en decisiones de diseño)'
            },
            body: {
              en: '<dl><dt>Design for exploration before commitment</dt><dd>Support casual browsing and inspiration without forcing early decisions.</dd><dt>Make independent events legible</dt><dd>Use clear tagging, visual cues, and editorial framing to differentiate events.</dd><dt>Reduce cognitive load through clarity</dt><dd>Prioritize essential information (date, price, genre, venue) at a glance.</dd><dt>Leverage social context</dt><dd>Surface social proof to support confidence and reduce decision anxiety.</dd><dt>Build trust at key moments</dt><dd>Reinforce security, transparency, and simplicity during ticketing.</dd></dl>',
              es: '<dl><dt>Diseñar para explorar antes de comprometerse</dt><dd>Facilitar la navegación casual y la inspiración sin forzar decisiones tempranas.</dd><dt>Hacer legibles los eventos independientes</dt><dd>Usar etiquetas claras, señales visuales y un enfoque editorial para diferenciar los eventos.</dd><dt>Reducir la carga cognitiva mediante claridad</dt><dd>Priorizar la información esencial (fecha, precio, género, sala) de un vistazo.</dd><dt>Aprovechar el contexto social</dt><dd>Mostrar validación social para reforzar la confianza y reducir la ansiedad en la decisión.</dd><dt>Construir confianza en momentos clave</dt><dd>Reforzar la seguridad, la transparencia y la simplicidad durante la compra de entradas.</dd></dl>'
            }
          },
          {
            heading: {
              en: 'Impact on the Final Solution',
              es: 'Impacto en la solución final'
            },
            note: {
              en: '(How the journey shaped the product)',
              es: '(Cómo el recorrido moldeó el producto)'
            },
            body: {
              en: '<ul><li>Curated discovery flows instead of purely chronological lists</li><li>Event cards focused on vibe, genre, and audience fit</li><li>Clear and consistent filtering system</li><li>Context-rich event detail pages</li><li>A streamlined, reassuring ticketing experience</li></ul>',
              es: '<ul><li>Flujos de descubrimiento curados en lugar de listas puramente cronológicas</li><li>Tarjetas de eventos enfocadas en ambiente, género y afinidad con la audiencia</li><li>Un sistema de filtros claro y consistente</li><li>Páginas de detalle de evento ricas en contexto</li><li>Una experiencia de compra de entradas simple, clara y tranquilizadora</li></ul>'
            }
          }
        ]
      },
      {
        type: 'media',
        heading: {
          en: 'User flow overview',
          es: 'Flujo de usuario'
        },
        body: {
          en: '<p>Based on the insights gathered during research, this user flow represents how people typically discover, evaluate and decide to attend electronic music events.</p><p>Rather than assuming a linear or goal-driven behavior, the flow is designed to support exploratory browsing, moments of hesitation, and social validation before committing to a ticket purchase.</p><p>The experience prioritizes flexibility: users can search, save events for later, compare options, and return to the decision when they feel confident. This approach reflects real user behavior and helps reduce friction at the most critical decision points.</p>',
          es: '<p>Basado en los hallazgos obtenidos durante la investigación, este flujo de usuario representa cómo las personas suelen descubrir, evaluar y decidir asistir a eventos de música electrónica.</p><p>En lugar de asumir un comportamiento lineal u orientado a un único objetivo, el flujo está diseñado para acompañar la exploración, los momentos de duda y la validación social antes de concretar la compra de una entrada.</p><p>La experiencia prioriza la flexibilidad: los usuarios pueden buscar, guardar eventos para más adelante, comparar opciones y volver a la decisión cuando se sienten seguros. Este enfoque refleja comportamientos reales y ayuda a reducir fricciones en los puntos de decisión más críticos.</p>'
        },
        image: '/assets/project-bem-flow.webp',
        alt: 'BEM user flow',
        wide: true
      },
      {
        type: 'screens',
        heading: {
          en: 'Wireframes',
          es: 'Bocetos de interfaz'
        },
        layout: 'five-up',
        images: [
          {
            src: '/assets/Welcome.png',
            alt: 'BEM welcome screen wireframe'
          },
          {
            src: '/assets/Login.png',
            alt: 'BEM login screen wireframe'
          },
          {
            src: '/assets/Home-1.png',
            alt: 'BEM home screen wireframe'
          },
          {
            src: '/assets/Home-2.png',
            alt: 'BEM event detail wireframe'
          },
          {
            src: '/assets/Checkout Flow.png',
            alt: 'BEM checkout cart wireframe'
          },
          {
            src: '/assets/Checkout Flow- Payment information.png',
            alt: 'BEM payment information wireframe'
          },
          {
            src: '/assets/Checkout Flow- Confirmation.png',
            alt: 'BEM checkout confirmation wireframe'
          },
          {
            src: '/assets/Search.png',
            alt: 'BEM search screen wireframe'
          },
          {
            src: '/assets/Favourites.png',
            alt: 'BEM favourites screen wireframe'
          },
          {
            src: '/assets/Profile.png',
            alt: 'BEM profile screen wireframe'
          }
        ]
      },
      {
        type: 'text',
        heading: {
          en: 'Design',
          es: 'Diseño'
        },
        body: {
          en: "<p>I used vibrant colors to match the concept of a festive enviroment and make the app playful and appealing for a young user. I used Nunito typeface for headings and body as it is simple, transmits a friendly feeling, a sense of approachability. Plus, is well balanced and it's known for its readability and legibility. For the cards I used Inter, a clean more neutral typeface also widely used in apps, to differienciate the content.</p>",
          es: '<p>Utilicé colores vibrantes para acompañar el concepto de un entorno festivo y hacer que la app resultara lúdica y atractiva para un usuario joven. Usé la tipografía Nunito para títulos y cuerpo de texto porque es simple, transmite una sensación amigable y cercana. Además, está bien equilibrada y es conocida por su legibilidad. Para las tarjetas utilicé Inter, una tipografía limpia y más neutral, también muy usada en aplicaciones, para diferenciar el contenido.</p>'
        }
      },
      {
        type: 'slider',
        lang: 'en',
        images: [
          {
            src: '/assets/Bem-Event card.png',
            alt: 'BEM event card anatomy'
          },
          {
            src: '/assets/Bem-Anatomy 1.png',
            alt: 'BEM event card layout and spacing'
          },
          {
            src: '/assets/Bem-Anatomy 2.png',
            alt: 'BEM event card nested elements'
          },
          {
            src: '/assets/Design System(1).png',
            alt: 'BEM design system'
          }
        ]
      },
      {
        type: 'embed',
        heading: {
          en: 'Final app design',
          es: 'Diseño final de la aplicación'
        },
        body: {
          en: '<p>I made the design entirely on Figma. I developed original items but also included images from Unsplashed, icons from Iconscout (using figma plugins) and mockups obtained from the community.</p><p>Credits for: @luongnd @duxica @mockuuups</p>',
          es: '<p>Realicé el diseño íntegramente en Figma. Desarrollé elementos originales, pero también incluí imágenes de Unsplashed, íconos de Iconscout (usando plugins de Figma) y mockups obtenidos de la comunidad.</p><p>Créditos: @luongnd @duxica @mockuuups</p>'
        },
        url: 'https://www.youtube.com/embed/7O2URhvk15g',
        title: 'BEM final app design video'
      },
      {
        type: 'split',
        heading: {
          en: 'Desktop version',
          es: 'Versión de escritorio'
        },
        body: {
          en: '<p>Although the application was originally intended for mobile use, users should be able to access it from other devices. The desktop version keeps discovery and event exploration available beyond mobile.</p>',
          es: '<p>Aunque la aplicación fue pensada originalmente para uso móvil, los usuarios también deberían poder acceder desde otros dispositivos. La versión de escritorio mantiene disponible la exploración de eventos más allá del móvil.</p>'
        },
        image: '/assets/bem-mockupdsk1.webp',
        alt: 'BEM desktop design'
      },
      {
        type: 'columns',
        columns: [
          {
            heading: {
              en: 'Design challenges',
              es: 'Desafíos de diseño'
            },
            body: {
              en: '<ul><li>Provide a seamless experience across multiple devices</li><li>Sustain consistency in user experience</li><li>Think in two dimensions instead of one</li></ul>',
              es: '<ul><li>Brindar una experiencia fluida en múltiples dispositivos</li><li>Mantener la consistencia en la experiencia de usuario</li><li>Pensar en dos dimensiones en lugar de una sola</li></ul>'
            }
          },
          {
            heading: {
              en: 'Implementation',
              es: 'Implementación'
            },
            body: {
              en: '<ul><li>Use of same design system to mantain identity</li><li>Element adaptation (such as buttons, icons, bars) having in mind the different screen size</li><li>Hierarchies to organize information effectively</li></ul>',
              es: '<ul><li>Uso del mismo sistema de diseño para mantener la identidad</li><li>Adaptación de elementos (como botones, íconos y barras) teniendo en cuenta los distintos tamaños de pantalla</li><li>Jerarquías para organizar la información de manera efectiva</li></ul>'
            }
          }
        ]
      },
      {
        type: 'slider',
        heading: 'Wireframes',
        images: [
          {
            src: '/assets/wireframe-Welcome.png',
            alt: 'BEM welcome page wireframe'
          },
          {
            src: '/assets/wireframe-Home - Explore.png',
            alt: 'BEM explore events page wireframe'
          },
          {
            src: '/assets/wireframe-Login.png',
            alt: 'BEM login page wireframe'
          },
          {
            src: '/assets/wireframe-Home - Explore -LOGGED.png',
            alt: 'BEM logged-in explore events page wireframe'
          },
          {
            src: '/assets/wireframe-Event details.png',
            alt: 'BEM event details page wireframe'
          },
          {
            src: '/assets/wiraframeCheckout flow-tickets.png',
            alt: 'BEM checkout ticket quantity wireframe'
          },
          {
            src: '/assets/wireframe-Checkout flow-attende info & payment.png',
            alt: 'BEM checkout attendee information and payment wireframe'
          },
          {
            src: '/assets/wireframe-Checkout flow-confirmation.png',
            alt: 'BEM checkout confirmation wireframe'
          },
          {
            src: '/assets/wireframe-Search.png',
            alt: 'BEM search page wireframe'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/bem-mockupdsk2.webp',
            alt: 'BEM desktop explore events mockup'
          },
          {
            src: '/assets/bem-mockupdsk3.webp',
            alt: 'BEM desktop event details mockup'
          },
          {
            src: '/assets/bem-mockupdsk4.webp',
            alt: 'BEM desktop confirmation mockup'
          }
        ]
      },
      {
        type: 'embed',
        url: 'https://www.youtube.com/embed/vzpieJcIxKM',
        title: 'BEM wireframes video'
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
    thumbnail: ['/assets/webmockupcover.webp', '/assets/webmockupcover1.webp'],
    thumbnailMode: 'web-devices',
    heroImage: '/assets/webmockupcover.webp',
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
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/web-bike1.webp',
            alt: 'Roar Bikes homepage design'
          },
          {
            src: '/assets/web-bike2.png',
            alt: 'Roar Bikes testimonials section'
          },
          {
            src: '/assets/web-yogurt1.webp',
            alt: 'Meat-flavoured yogurt homepage design'
          },
          {
            src: '/assets/web-yogurt2.webp',
            alt: 'Meat-flavoured yogurt product cards'
          },
          {
            src: '/assets/webrestaurante1.webp',
            alt: 'Adare restaurant homepage design'
          },
          {
            src: '/assets/webrestaurante2.webp',
            alt: 'Adare restaurant location section'
          },
          {
            src: '/assets/webportfolio2.webp',
            alt: 'Design and communication portfolio responsive layout'
          }
        ]
      },
      {
        type: 'embed',
        url: 'https://www.youtube.com/embed/ajaECYl7fuI',
        title: 'Static website projects video'
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
      },
      {
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/web-guessnum1.png',
            alt: 'Guess My Number game low guess state'
          },
          {
            src: '/assets/web-guessnum2.png',
            alt: 'Guess My Number game high guess state'
          },
          {
            src: '/assets/webguessnum3.png',
            alt: 'Guess My Number game correct number state'
          },
          {
            src: '/assets/web-rolldice1.png',
            alt: 'Roll Dice game rules modal'
          },
          {
            src: '/assets/web-rolldice2.png',
            alt: 'Roll Dice game starting state'
          },
          {
            src: '/assets/web-rolldice3.png',
            alt: 'Roll Dice game active player state'
          },
          {
            src: '/assets/web-pokeapp1.webp',
            alt: 'Pokemon Challenge homepage'
          },
          {
            src: '/assets/web-pokeapp2.png',
            alt: 'Pokemon Challenge cards grid'
          },
          {
            src: '/assets/web-pokeapp3.png',
            alt: 'Pokemon Challenge battle selection'
          }
        ]
      },
      {
        type: 'embed',
        url: 'https://www.youtube.com/embed/7bTPI5tvb1c',
        title: 'Interactive web apps video'
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
        image: '/assets/thumb-design.webp',
        alt: 'Sara Hebe graphic design',
        wide: true,
        display: 'graphic-portrait'
      },
      {
        type: 'slider',
        transparent: true,
        display: 'graphic-portrait',
        images: [
          {
            src: '/assets/interzona-flyer.png',
            alt: 'Interzona flyer design'
          },
          {
            src: '/assets/interzona2-flyer.webp',
            alt: 'Interzona discount flyer design'
          }
        ]
      },
      {
        type: 'media',
        image: '/assets/flyer-feli.webp',
        alt: 'Felícitas Rocha trombone lessons flyer',
        wide: true
      },
      {
        type: 'slider',
        transparent: true,
        display: 'graphic-portrait',
        images: [
          {
            src: '/assets/flyer-redsonante.webp',
            alt: 'Red Sonante music lessons flyer'
          },
          {
            src: '/assets/flyer-redsonante2.webp',
            alt: 'Red Sonante music lessons alternate flyer'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        display: 'graphic-portrait',
        images: [
          {
            src: '/assets/coso-flyer.webp',
            alt: 'Coso Hoy compass flyer'
          },
          {
            src: '/assets/coso-flyer2.webp',
            alt: 'Coso Hoy credits flyer'
          }
        ]
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
    heroAlt: 'Portrait of a dog near a rocky coastline',
    sections: [
      {
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/thumb-photo.webp',
            alt: 'Dog portrait near a rocky coastline'
          },
          {
            src: '/assets/dogpic1.webp',
            alt: 'Dog resting on a beach at sunset'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/imag-paisaje.jpg',
            alt: 'Cloudy landscape with trees silhouetted against the sky'
          },
          {
            src: '/assets/img-colonia2.webp',
            alt: 'Red colonial house on a cobblestone street'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/img- islandia.webp',
            alt: 'Turquoise river running through a rocky Icelandic landscape'
          },
          {
            src: '/assets/img-islandia2.webp',
            alt: 'Snowy mountain and frozen landscape in Iceland'
          },
          {
            src: '/assets/img-islandia3.webp',
            alt: 'Snow-covered waterfall and canyon in Iceland'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        images: [
          {
            src: '/assets/img-marcha1.jpg',
            alt: 'Black and white street protest with a drummer'
          },
          {
            src: '/assets/img-marcha2.webp',
            alt: 'Student assembly protest with banners and drums'
          },
          {
            src: '/assets/img-marseille1.webp',
            alt: 'Street musicians performing from a balcony in Marseille'
          },
          {
            src: '/assets/img-marseille2.webp',
            alt: 'Percussion group performing in the street in Marseille'
          }
        ]
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
        type: 'slider',
        transparent: true,
        display: 'writing-portrait',
        images: [
          {
            src: '/assets/nota-sara1.png',
            alt: 'Sara Hebe article page 1'
          },
          {
            src: '/assets/nota-sara2.png',
            alt: 'Sara Hebe article page 2'
          },
          {
            src: '/assets/nota-sara3.png',
            alt: 'Sara Hebe article page 3'
          },
          {
            src: '/assets/nota-sara4.png',
            alt: 'Sara Hebe article page 4'
          },
          {
            src: '/assets/nota-sara5.png',
            alt: 'Sara Hebe article page 5'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        display: 'writing-portrait',
        images: [
          {
            src: '/assets/nota-bfsunset1.png',
            alt: 'Before Sunset article page 1'
          },
          {
            src: '/assets/nota-bfsunset2.png',
            alt: 'Before Sunset article page 2'
          },
          {
            src: '/assets/nota-almodovar1.png',
            alt: 'Almodovar article page 1'
          },
          {
            src: '/assets/nota-alomodovar2.png',
            alt: 'Almodovar article page 2'
          }
        ]
      },
      {
        type: 'slider',
        transparent: true,
        display: 'writing-portrait',
        images: [
          {
            src: '/assets/nota-aborto1.webp',
            alt: 'Sera ley article page 1'
          },
          {
            src: '/assets/nota-aborto2.webp',
            alt: 'Sera ley article page 2'
          },
          {
            src: '/assets/nota-aborto3.png',
            alt: 'Sera ley article page 3'
          },
          {
            src: '/assets/nota-belen1.png',
            alt: 'Libertad para Belen article page 1'
          },
          {
            src: '/assets/nota-belen2.png',
            alt: 'Libertad para Belen article page 2'
          },
          {
            src: '/assets/nota-belen3.webp',
            alt: 'Acto por la libertad de Belen article page 1'
          },
          {
            src: '/assets/nota-belen4.webp',
            alt: 'Acto por la libertad de Belen article page 2'
          },
          {
            src: '/assets/nota-belen5.webp',
            alt: 'Acto por la libertad de Belen article page 3'
          },
          {
            src: '/assets/nota-docentes1.webp',
            alt: 'Docentes fueguinos article page 1'
          },
          {
            src: '/assets/nota-docentes2.webp',
            alt: 'Docentes fueguinos article page 2'
          }
        ]
      }
    ]
  }
];

export const certificates = [
  {
    src: '/assets/certificate-1.png',
    alt: 'Front End Web Developer specialization certificate from Universitat Oberta de Catalunya'
  },
  {
    src: '/assets/certificate-2.webp',
    alt: 'Figma Advanced Training with Distinction certificate'
  },
  {
    src: '/assets/certificate-3.webp',
    alt: 'Responsive Web Design Essentials Training certificate'
  },
  {
    src: '/assets/certificate-4.webp',
    alt: 'UX/UI design diploma approval certificate from UTN Buenos Aires'
  },
  {
    src: '/assets/certificate-5.webp',
    alt: 'User experience design and interaction design certificate from UTN Buenos Aires'
  },
  {
    src: '/assets/certificate-6.webp',
    alt: 'Social Communication degree certificate from the University of Buenos Aires'
  }
];

export const aboutSections = [
  {
    image: '/assets/about-barcelona.webp',
    alt: 'Lucía Alegria standing in Barcelona',
    html: {
      en: '<h2>About me</h2><p>I have a degree in Social Communication from the University of Buenos Aires, with a specialization in Communication Policies and Planning, and a UX/UI Design diploma from the National Technological University. I’ve been working in digital communication for over ten years, blending creativity, strategy, and user-centered design.</p><p>My experience spans media, publishing, and cultural projects. In recent years, I specialized in the tech field, working across communication, technical support, and infrastructure tasks.</p><p>I’m passionate about technology, design, and collaborative processes, and I believe in the power of clear, strategic, and purpose-driven communication.</p><p>Born and raised in Buenos Aires, Argentina, currently living in Barcelona.</p>',
      es: '<h2>Sobre mí</h2><p>Soy Licenciada en Ciencias de la Comunicación Social por la Universidad de Buenos Aires, con orientación en Políticas y Planificación de la Comunicación, y Diseñadora UX/UI por la Universidad Tecnológica Nacional. Hace más de diez años me dedico a la comunicación digital, combinando creatividad, estrategia y diseño centrado en las personas.</p><p>Trabajé en medios, editoriales y proyectos culturales, y en los últimos años me especialicé en el ámbito tecnológico, donde desarrollé tanto tareas de comunicación como de soporte técnico e infraestructura.</p><p>Me apasionan la tecnología, el diseño y los procesos colaborativos, y creo en el poder de una comunicación clara, estratégica y con propósito.</p><p>Nacida y criada en Buenos Aires, Argentina, actualmente viviendo en Barcelona.</p>'
    }
  },
  {
    image: '/assets/about-football.webp',
    alt: 'Football match with friends on an outdoor pitch',
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
