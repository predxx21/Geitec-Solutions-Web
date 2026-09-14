export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  details: string[]
}

export const services: Service[] = [
  {
    slug: 'instrumentos-gestion-ambiental',
    title: 'Instrumentos de Gestión Ambiental',
    shortDescription: 'Elaboración de instrumentos ambientales para proyectos y actividades en curso.',
    description: 'Preparamos los instrumentos de gestión ambiental que tu proyecto necesita para sustentar sus compromisos ambientales ante las entidades correspondientes.',
    image: "/fotos_geitec/instrumentos_gestion/IMG_4375.JPG",
    gallery: [
      
      "/fotos_geitec/instrumentos_gestion/IMG_4170.JPG",
      
      "/fotos_geitec/instrumentos_gestion/IMG_4176.JPG",
      "/fotos_geitec/instrumentos_gestion/IMG_4299.JPG",
      "/fotos_geitec/instrumentos_gestion/IMG_4375.JPG",
     
      "/fotos_geitec/instrumentos_gestion/IMG_4463.JPG"
    ],
    details: [
      'Declaración de Impacto Ambiental (DIA)',
      'Estudio de Impacto Ambiental Semidetallado (EIA-sd) y Detallado (EIA-d)',
      'Programa de Adecuación y Manejo Ambiental (PAMA)',
      'Evaluación Ambiental Preliminar (EVAP)',
      'Informe de Gestión Ambiental (IGA) y DAA',
      'FICA, DAAC, FITSA, FTA e ITS',
      'Certificado de Inexistencia de Restos Arqueológicos (CIRA)'
    ]
  },
  {
    slug: 'planes-estudios-ambientales',
    title: 'Planes y Estudios Ambientales',
    shortDescription: 'Planes de manejo, vigilancia, contingencia y estudios de línea base ambiental.',
    description: 'Desarrollamos planes y estudios orientados a prevenir, controlar y mitigar impactos ambientales durante todo el ciclo de tu proyecto.',
    image: "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0080.jpg",
    gallery: [
      "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0080.jpg",
      "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0096.jpg",
      "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0099.jpg",
      "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0102.jpg",
     
      "/fotos_nuevas/estudio_ambiental/IMG_20220609_165847.jpg"
    ],
    details: [
      'Planes de Manejo de Residuos Sólidos y Estrategia Ambiental',
      'Programas de Vigilancia Ambiental y Participación Social',
      'Planes de Cierre, Abandono y Contingencias',
      'Estudios de Riesgos y Vulnerabilidad Ambiental',
      'Líneas Base Ambiental y Social para Estudios y Proyectos'
    ]
  },
  {
    slug: 'agua-saneamiento',
    title: 'Agua y Saneamiento',
    shortDescription: 'Estudios, permisos y monitoreos para proyectos de agua y saneamiento básico.',
    description: 'Brindamos soporte técnico para proyectos de saneamiento, uso de agua, monitoreo de calidad y autorizaciones vinculadas a aguas residuales.',
    image: "/fotos_geitec/agua_saneamiento/IMG_5800.JPG",
    gallery: [
      
      "/fotos_geitec/agua_saneamiento/627186747_899063036060195_4594846227568974592_n.jpg",
    
      "/fotos_geitec/agua_saneamiento/627650842_899062796060219_5199807126350123695_n.jpg",
      "/fotos_geitec/agua_saneamiento/627793058_899062996060199_9191939687953880867_n.jpg"
    
  
    ],
    details: [
      'Monitoreo e informe de monitoreo de aguas residuales industriales y domésticas',
      'Monitoreo e informe de calidad de agua para consumo humano',
      'Permisos de uso de agua',
      'Autorizaciones para vertimiento, reúso o infiltración de aguas residuales',
      'Estudios a nivel de perfil, factibilidad y expediente técnico de proyectos de saneamiento'
    ]
  },
  {
    slug: 'gestion-residuos-solidos',
    title: 'Gestión de Residuos Sólidos',
    shortDescription: 'Planes, estudios y soporte técnico para la gestión responsable de residuos.',
    description: 'Acompañamos la planificación y gestión integral de residuos sólidos, desde la caracterización hasta su valorización y disposición final.',
    image: "/fotos_geitec/residuos_solidos/IMG_6612.JPG",
    gallery: [
      "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0135.jpg",
      "/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0163.jpg",
      "/fotos_geitec/residuos_solidos/IMG_6713.JPG"
    ],
    details: [
      'Planes Integrales de Gestión Ambiental de Residuos Sólidos (PIGARS)',
      'Estudios de Caracterización Física de Residuos Sólidos',
      'Estudios a nivel de perfil, factibilidad y expediente técnico para rellenos sanitarios',
      'Recolección, transporte, tratamiento, valorización y disposición final de residuos peligrosos y no peligrosos'
    ]
  },
  {
    slug: 'monitoreo-ambiental',
    title: 'Monitoreo Ambiental',
    shortDescription: 'Monitoreos e informes técnicos de agua, aire, ruido, suelo y otros componentes ambientales.',
    description: 'Realizamos monitoreos ambientales y elaboramos informes técnicos para conocer el estado de los componentes ambientales de tu proyecto.',
    image: "/fotos_nuevas/monitoreo_ambiental/IMG-20211116-WA0121.jpg",
    gallery: [
       
     
      "/fotos_geitec/saneamiento_ambiental/IMG_7493.JPG",
      "/fotos_geitec/saneamiento_ambiental/IMG_7503.JPG",
      
      "/fotos_geitec/saneamiento_ambiental/IMG_7471.JPG",
     
    ],
    details: [
      'Monitoreo de Agua y Aire',
      'Monitoreo Meteorológico y Ruido Ambiental',
      'Monitoreo de Suelo y Biológico',
      'Monitoreos Participativos',
      'Capacitación y asesoría en gestión ambiental y responsabilidad social'
    ]
  },
  {
    slug: 'saneamiento-ambiental',
    title: 'Saneamiento Ambiental',
    shortDescription: 'Servicios de desinfección y limpieza especializada para ambientes e instalaciones.',
    description: 'Realizamos actividades de saneamiento ambiental para mantener espacios, reservorios y sistemas sanitarios en condiciones adecuadas.',
    image: "/fotos_geitec/saneamiento_ambiental/IMG_7376.JPG",
    gallery: [
      
      "/fotos_geitec/saneamiento_ambiental/IMG_20220618_112740.jpg",
      "/fotos_geitec/saneamiento_ambiental/IMG-20211116-WA0121.jpg",
      "/fotos_geitec/saneamiento_ambiental/IMG-20220607-WA0128.jpg",
      
    ],
    details: [
      'Desinsectación, Desinfección y Desratización',
      'Limpieza y desinfección de reservorios de agua',
      'Limpieza y desinfección de pozos sépticos',
      'Atención técnica para instalaciones y ambientes'
    ]
  },
  {
    slug: 'seguridad-salud-ocupacional',
    title: 'Seguridad y Salud Ocupacional (SST)',
    shortDescription: 'Implementación del sistema de SST, matriz IPERC, reglamentos y monitoreos ocupacionales.',
    description: 'Desarrollamos e implementamos el Sistema de Gestión de Seguridad y Salud Ocupacional adaptado a tu empresa, garantizando la protección de los trabajadores y el pleno cumplimiento normativo.',
    image: "/fotos_geitec/sst/0DDB3825-4A1D-4165-8C61-33819EE93A09.jpg",
    gallery: [
      "/fotos_geitec/sst/0DDB3825-4A1D-4165-8C61-33819EE93A09.jpg",
      "/fotos_geitec/agua_saneamiento/IMG_5800.JPG",
      "/fotos_geitec/agua_saneamiento/IMG_5803.JPG",
      "/fotos_nuevas/capacitaciones/IMG-20220616-WA0045.jpg"
    ],
    details: [
      'Implementación del Sistema de Gestión de Seguridad y Salud Ocupacional',
      'Elaboración del Reglamento de Seguridad y Salud en el Trabajo (RISST)',
      'Identificación de Peligros, Evaluación de Riesgos y Medidas de Control (IPERC)',
      'Conformación y asesoría del Comité de Seguridad y Salud en el Trabajo',
      'Monitoreos e informes ocupacionales (Agentes físicos, químicos, biológicos, disergonómicos y psicosociales)'
    ]
  }
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)
