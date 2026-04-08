import { createContext, useContext, useState, useEffect } from 'react'

// Language translations
const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      biography: 'Biography',
      dictionary: 'Dictionary',
      news: 'News',
      multimedia: 'Multimedia',
      agenda: 'Agenda',
      centers: 'Study Centers',
      resources: 'Resources'
    },
    // HomePage
    hero: {
      title: 'Fundación Prof. Lisendra Germosen Fondeur',
      subtitle: 'For education and the environment',
      learnMore: 'Learn More',
      latestNews: 'Latest News'
    },
    news: {
      latest: 'Latest News: Education and Environment',
      loading: 'Loading news...',
      noNews: 'No news available at this time.',
      tryLater: 'Try refreshing the page later.',
      showing: 'Latest news about education and environment'
    },
    // AboutPage
    about: {
      title: 'About Funpligef',

      mission: 'Our Mission',
      missionText: 'To foster the development of educational strategies and methods that enhance the abilities of children and youth in the Dominican Republic, turning them into key actors in national development and in the design and implementation of public and private environmental policies.',

      vision: 'Our Vision',
      visionText: 'To build, through education, a locally responsible citizenship with global awareness, capable of protecting and regenerating the environment.',

      objectives: 'Our Objectives',
      objectivesList: [
        'Promote and support educational and environmental training for children and youth in the Dominican Republic without discrimination based on religion, race, gender, or affiliation.',
        'Emphasize educational and environmental programs.',
        'Participate in educational and environmental activities aimed at fostering and contributing to the positive social development of youth in the Dominican Republic.',
        'Organize workshops, courses, and seminars.'
      ],

      values: 'Our Values',
      valuesList: {
        critical: {
          title: 'Critical Awareness',
          desc: 'We promote an education that not only informs but also shapes citizens capable of analyzing reality, questioning unsustainable models, and understanding the complexities of environmental and social challenges.'
        },
        integrity: {
          title: 'Environmental Integrity',
          desc: 'We act with consistency. Our projects, internal operations, and partnerships demonstrate a genuine commitment to sustainability. We lead by example by minimizing our ecological footprint and maximizing our positive impact.'
        },
        responsibility: {
          title: 'Intergenerational Responsibility',
          desc: 'We recognize that our actions today define the world of tomorrow. We are guided by the ethical responsibility to protect natural resources and biodiversity for future generations, ensuring their right to a healthy environment.'
        },
        empowerment: {
          title: 'Empowerment and Collaboration',
          desc: 'We believe real change happens when communities take the lead. We promote networking, the exchange of knowledge (scientific, traditional, and local), and the collective development of solutions, empowering educators, youth, and local leaders.'
        },
        optimism: {
          title: 'Transformative Optimism',
          desc: 'We believe that change is possible through education. We foster hope that leads to action, celebrating achievements, scaling practical solutions, and inspiring others to join with energy and determination.'
        },
        excellence: {
          title: 'Excellence and Transparency',
          desc: 'We are committed to the highest standards in our educational and conservation programs. We manage resources with honesty, transparency, and rigor, remaining accountable to the communities, donors, and partners who trust our work.'
        }
      },

      areas: 'Focus Areas',
      areasList: [
        'Education and sustainability',
        'Public policy research',
        'Technical training',
        'Ecosystem conservation',
        'Community development',
        'International partnerships'
      ],

      leadership: 'Our Leadership',
      president: 'President',
      director: 'Executive Director'
    },
    // BiographyPage
    biography: {
      title: 'Biography',
      subtitle: 'Professor Lisendra Germosén Fondeur',

      paragraphs: [
        'There are those who read history in books; others, like Professor Lisendra Eninia Germosén Fondeur, dedicated their lives to writing it in the hearts of their students.',

        'Born on June 21, 1938, in the municipality of Tamboril, Santiago province, she devoted her life to teaching, shaping generations of children and young people in Villa González—her adopted hometown—and in the city of Santiago de los Caballeros, where she graduated both as a high school student and as a primary school teacher.',

        'Today, her name transcends the classrooms of the Fernando Valerio Primary and Intermediate School to become the spirit of the Foundation for Education and the Environment that bears her name. A tribute to someone who, in life, made pedagogy a bridge between the past of ancient civilizations, the history of the country, and the promising future she envisioned for Dominican children and youth.',

        'For more than 30 years, Professor Lisendra Germosén Fondeur held in her hands the most beautiful responsibility: teaching students in 3rd and 8th grade where they came from so they could decide where to go.',

        'In her classes on World History and Dominican History, battles were not just dates to memorize; they were lessons in dignity. Heroes ceased to be marble statues and became real human beings.',

        'But as deep as her vocation for history was, her humanitarian spirit was infinite. She understood the reality of each family, the silent struggles of her students, and the concerns of parents who saw in her not only a teacher, but a trusted advisor.',

        'How many times, upon noticing a distracted or sad student, did she take extra minutes to listen and lend a helping hand. How many times, at the end of the day, did she sit with parents to find solutions so that no child would be left behind.',

        'Today, by giving her name to this foundation that unites education with environmental protection, we celebrate the coherence of her life.',

        'The Professor Lisendra Germosén Fondeur Foundation was created to cultivate historical and ecological awareness in new generations.',

        'Today, her legacy does not rest in a book: it walks with us, ready to continue shaping guardians of historical memory and defenders of nature.'
      ],

      quote1: '"They gave their lives so that you could be here today, thinking and speaking freely."',

      quote2: '"Those who do not know their history cannot love their land; and those who do not love their land will never protect it."'
    },
    // Footer
    footer: {
      about: 'About',
      links: 'Links',
      contact: 'Contact',
      contactEmail: 'Email: funpligef@gmail.com',
      copyright: '© 2026 Fundación P. Lisendra Germosen Fondeur. All rights reserved.'
    },
    // DictionaryPage
    dictionary: {
      title: 'Dictionary',
      subtitle: 'Syntropic Agriculture',

      beforeDefinition: 'Before defining syntropic agriculture, it is important to understand syntropy. The term comes from the Greek "syntropia" and refers to the tendency toward organization, integration, and increasing complexity—essentially the opposite of entropy. Developed by Ernst Götsch over more than 40 years in Brazil, syntropic agriculture represents a profound paradigm shift. Rather than relying on fixed recipes, it is based on observing and cooperating with natural processes. As Götsch explains, "we are not the intelligent ones; we are part of an intelligent system." This approach invites us to reclaim a balanced and beneficial role within the living systems that sustain life.',

      definition: 'Syntropic Agriculture',
      definitionText: 'A regenerative approach to agriculture that works in alignment with natural ecosystems to create highly productive, self-sustaining systems. By mimicking natural succession and maximizing biodiversity, it enhances both ecological health and agricultural output over time.',

      principles: 'Key Principles',
      principlesList: [
        'Work with natural succession and ecological processes',
        'Maximize photosynthesis and biodiversity at all levels',
        'Design stratified systems that increase resilience and efficiency',
        'Use pruning and biomass management to accelerate regeneration',
        'Continuously build and improve soil fertility',
        'Produce food while restoring and enhancing ecosystems'
      ],

      benefits: 'Benefits',
      benefitsList: [
        'Increased productivity through diversified outputs',
        'Soil regeneration and improved fertility over time',
        'Enhanced carbon sequestration and climate mitigation',
        'Better water retention and reduced need for irrigation',
        'Greater resilience to climate variability and extreme conditions',
        'Long-term economic potential through system diversity'
      ],

      applications: 'Applications',
      applicationsList: [
        'Agroforestry and food forest systems',
        'Regenerative pasture and livestock integration',
        'Organic and ecological crop production',
        'Reforestation and ecosystem restoration projects',
        'Urban, peri-urban, and small-scale farming systems'
      ]
    },
    // Common
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      viewAll: 'View All',
      backToHome: 'Back to Home',
      loading: 'Loading...',
      error: 'Error',
      retry: 'Retry'
    }
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      biography: 'Biografía',
      dictionary: 'Diccionario',
      news: 'Noticias',
      multimedia: 'Multimedia',
      agenda: 'Agenda',
      centers: 'Centros de Estudio',
      resources: 'Recursos'
    },
    // HomePage
    hero: {
      title: 'Fundación Prof. Lisendra Germosen Fondeur',
      subtitle: 'Por la educación y el medio ambiente',
      learnMore: 'Conócenos',
      latestNews: 'Últimas Noticias'
    },
    news: {
      latest: 'Últimas Noticias: Educación y Medio Ambiente',
      loading: 'Cargando noticias...',
      noNews: 'No hay noticias disponibles en este momento.',
      tryLater: 'Intente actualizar la página más tarde.',
      showing: 'Ultimas noticias sobre educación y medio ambiente'
    },
    // AboutPage
    about: {
      title: 'Sobre Funpligef',

      mission: 'Nuestra Misión',
      missionText: 'Fomentar el desarrollo de estrategias y métodos educativos que potencien las capacidades de la niñez y la juventud en la República Dominicana, convirtiéndolos en actores clave del desarrollo nacional y en el diseño e implementación de políticas ambientales públicas y privadas.',

      vision: 'Nuestra Visión',
      visionText: 'Construir, a través de la educación, una ciudadanía localmente responsable con conciencia global, capaz de proteger y regenerar el medio ambiente.',

      objectives: 'Nuestros Objetivos',
      objectivesList: [
        'Promover y fomentar las formaciones educativas y medio ambientales de los niños y jóvenes de la República Dominicana sin distinción de religión, color, sexo o afinidad.',
        'Hacer hincapié en los programas educativos y medioambientales.',
        'Participar en actividades educativas y medio ambientales con el proposito de formar y contribuir a la socialización positiva de los jóvenes en la República Dominicana.',
        'Organizar talleres, cursos y seminarios.'
      ],

      values: 'Nuestros Valores',
      valuesList: {
        critical: {
          title: 'Conciencia Crítica',
          desc: 'Promovemos una educación que no solo informa, sino que forma ciudadanos capaces de analizar la realidad, cuestionar modelos insostenibles y comprender las complejidades de los desafíos ambientales y sociales.'
        },
        integrity: {
          title: 'Integridad Ambiental',
          desc: 'Actuamos con coherencia. Nuestros proyectos, operaciones internas y alianzas demuestran un compromiso genuino con la sostenibilidad. Predicamos con el ejemplo, minimizando nuestra huella ecológica y maximizando nuestro impacto positivo.'
        },
        responsibility: {
          title: 'Responsabilidad Intergeneracional',
          desc: 'Reconocemos que nuestras acciones de hoy definen el mundo del mañana. Nos guía la responsabilidad ética de proteger los recursos y la biodiversidad para las futuras generaciones, garantizando su derecho a un ambiente sano.'
        },
        empowerment: {
          title: 'Empoderamiento y Colaboración',
          desc: 'Creemos que el cambio real ocurre cuando las comunidades son protagonistas. Fomentamos el trabajo en red, el diálogo de saberes (científico, tradicional, local) y la construcción colectiva de soluciones, empoderando a educadores, jóvenes y líderes locales.'
        },
        optimism: {
          title: 'Optimismo Transformador',
          desc: 'Partimos de la premisa de que el cambio es posible a través de la educación. Fomentamos la esperanza que nace de la educación para la acción, celebrando los logros, escalando soluciones prácticas e inspirando a otros a sumarse con energía y determinación.'
        },
        excellence: {
          title: 'Excelencia y Transparencia',
          desc: 'Nos comprometemos con la más alta calidad en nuestros programas educativos y de conservación. Gestionamos los recursos con honestidad, transparencia y rigor, rindiendo cuentas a las comunidades, donantes y aliados que confían en nuestra labor.'
        }
      },

      areas: 'Áreas de Enfoque',
      areasList: [
        'Educación y sostenibilidad',
        'Investigación en políticas públicas',
        'Capacitación técnica',
        'Conservación de ecosistemas',
        'Desarrollo comunitario',
        'Alianzas internacionales'
      ],

      leadership: 'Nuestro Liderazgo',
      president: 'Presidente',
      director: 'Directora Ejecutiva'
    },
    // BiographyPage
    biography: {
      title: 'Biografía',
      subtitle: 'Profesora Lisendra Germosén Fondeur',

      paragraphs: [
        'Hay quienes leen la Historia en los libros; otros, como la Profesora Lisendra Eninia Germosén Fondeur, dedicaron su vida a escribirla en el corazón de sus alumnos.',

        'Nacida un 21 de junio de 1938 en el municipio de Tamboril, provincia Santiago, dedicó su vida al magisterio formando generaciones de niños y jóvenes de Villa González, su patria chica adoptiva, y de la ciudad de Santiago de los Caballeros, donde se graduó tanto de bachiller como de Maestra Normal primaria.',

        'Hoy, su nombre trasciende las aulas de la Escuela Primaria e Intermedia Fernando Valerio para convertirse en el espíritu de la Fundación por la Educación y el Medioambiente, que lleva su nombre. Un homenaje a quien en vida hizo de la pedagogía un puente entre el pasado de las antiguas civilizaciones, la historia del país, y el futuro promisorio al que aspiraba para la niñez y la juventud dominicanas.',

        'Durante más de 30 años, la Profesora Lisendra Germosén Fondeur tuvo en sus manos la tarea más hermosa: explicarles a jóvenes de 3er y 8vo grado de dónde venían para que pudieran decidir hacia dónde ir.',

        'En sus clases de Historia Universal e Historia Dominicana, las batallas no eran solo fechas para memorizar; eran lecciones de dignidad. Los héroes dejaban de ser estatuas de mármol para convertirse en personas de carne y hueso.',

        'Pero si profunda era su vocación por la historia, infinito era su humanitarismo. Conocía la realidad de cada familia, las penas calladas de sus alumnos y las angustias de padres y madres que veían en ella no solo a la maestra, sino a una consejera de confianza.',

        'Cuántas veces, al notar a un alumno distraído o triste, dedicaba esos minutos extras para escuchar y tender una mano. Cuántas veces, al terminar la jornada, se sentaba con un padre o una madre a buscar juntos soluciones para que ningún niño se quedara rezagado.',

        'Hoy, al poner su nombre a esta fundación que une la educación con la defensa del medioambiente, celebramos la coherencia de su vida.',

        'La Fundación Profesora Lisendra Germosén Fondeur nace para sembrar conciencia histórica y ecológica en las nuevas generaciones.',

        'Hoy, su legado no descansa en un libro: camina con nosotros, listo para seguir formando guardianes de la memoria histórica y defensores de la naturaleza.'
      ],

      quote1: '"Dieron su vida para que ustedes hoy puedan estar aquí, discutiendo y pensando libremente."',

      quote2: '"Quien no conoce su historia, no puede amar su tierra; y quien no ama su tierra, no la cuidará jamás."'
    },
    // Footer
    footer: {
      about: 'Acerca de',
      links: 'Enlaces',
      contact: 'Contacto',
      contactEmail: 'Email: funpligef@gmail.com',
      copyright: '© 2026 Fundación P. Lisendra Germosen Fondeur. Todos los derechos reservados.'
    },
    // DictionaryPage
    dictionary: {
      title: 'Diccionario',
      subtitle: 'Agricultura Sintrópica',

      beforeDefinition: 'Antes de definir la agricultura sintrópica, es importante entender qué es la sintropía. El término proviene del griego "syntropia" y se refiere a la tendencia hacia la organización, la integración y el aumento de la complejidad, siendo esencialmente lo opuesto a la entropía. Desarrollada por Ernst Götsch durante más de 40 años en Brasil, la agricultura sintrópica representa un cambio profundo de paradigma. En lugar de basarse en recetas fijas, se fundamenta en la observación y la cooperación con los procesos naturales. Como explica Götsch: "no somos los inteligentes; somos parte de un sistema inteligente". Este enfoque nos invita a recuperar un rol equilibrado y beneficioso dentro de los sistemas vivos que sustentan la vida.',

      definition: 'Agricultura Sintrópica',
      definitionText: 'Un enfoque regenerativo de la agricultura que trabaja en armonía con los ecosistemas naturales para crear sistemas altamente productivos y autosostenibles. Al imitar la sucesión natural y maximizar la biodiversidad, mejora tanto la salud ecológica como la producción agrícola a lo largo del tiempo.',

      principles: 'Principios Clave',
      principlesList: [
        'Trabajar con la sucesión natural y los procesos ecológicos',
        'Maximizar la fotosíntesis y la biodiversidad en todos los niveles',
        'Diseñar sistemas estratificados que aumenten la resiliencia y eficiencia',
        'Utilizar la poda y el manejo de biomasa para acelerar la regeneración',
        'Construir y mejorar continuamente la fertilidad del suelo',
        'Producir alimentos mientras se restauran y fortalecen los ecosistemas'
      ],

      benefits: 'Beneficios',
      benefitsList: [
        'Mayor productividad a través de sistemas diversificados',
        'Regeneración del suelo y mejora de la fertilidad con el tiempo',
        'Mayor captura de carbono y contribución a la mitigación climática',
        'Mejor retención de agua y menor necesidad de riego',
        'Mayor resiliencia frente a variabilidad y eventos climáticos extremos',
        'Potencial económico a largo plazo mediante la diversificación productiva'
      ],

      applications: 'Aplicaciones',
      applicationsList: [
        'Sistemas agroforestales y bosques comestibles',
        'Manejo regenerativo de pasturas e integración ganadera',
        'Producción de cultivos orgánicos y ecológicos',
        'Reforestación y restauración de ecosistemas',
        'Agricultura urbana, periurbana y a pequeña escala'
      ]
    },
    // Common
    common: {
      readMore: 'Leer más',
      learnMore: 'Conócenos',
      viewAll: 'Ver todas',
      backToHome: 'Volver al inicio',
      loading: 'Cargando...',
      error: 'Error',
      retry: 'Reintentar'
    }
  }
}

// Create context
const LanguageContext = createContext()

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('language')
    return savedLanguage || 'es'
  })

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Translation function
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]

    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook to use language context
export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
