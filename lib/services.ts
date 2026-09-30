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
    image: "/imagenes_emp/Instrumentos de Gestión Ambiental/474066178_1022559849905807_5295934143976118212_n.jpg",
    gallery: [
      "/imagenes_emp/Instrumentos de Gestión Ambiental/474066178_1022559849905807_5295934143976118212_n.jpg",
      "/imagenes_emp/Instrumentos de Gestión Ambiental/474609869_1022559799905812_2658856240401714256_n.jpg",
      "/imagenes_emp/Instrumentos de Gestión Ambiental/480781784_631004472866054_8262965074594808584_n.jpg",
      "/imagenes_emp/Instrumentos de Gestión Ambiental/480933807_631004402866061_4891730414462799193_n.jpg",
      "/imagenes_emp/Instrumentos de Gestión Ambiental/480965793_631004416199393_4446907599714380618_n.jpg",
      "/imagenes_emp/Instrumentos de Gestión Ambiental/513355981_724367376863096_2383289641127504933_n.jpg"
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
    image: "/imagenes_emp/Planes y Estudios Ambientales/473732241_1020779980083794_8341445289413044116_n.jpg",
    gallery: [
      "/imagenes_emp/Planes y Estudios Ambientales/473732241_1020779980083794_8341445289413044116_n.jpg",
      "/imagenes_emp/Planes y Estudios Ambientales/473831343_1020779990083793_7006450628769764305_n.jpg",
      "/imagenes_emp/Planes y Estudios Ambientales/473835697_1020779970083795_1266458332939657947_n.jpg",
      "/imagenes_emp/Planes y Estudios Ambientales/473896173_1020779973417128_3293334392488098136_n.jpg",
      "/imagenes_emp/Planes y Estudios Ambientales/511971636_724367406863093_3376002618814254219_n.jpg",
      "/imagenes_emp/Planes y Estudios Ambientales/512786420_724367570196410_7324260040879456535_n.jpg"
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
    image: "/imagenes_emp/Agua y Saneamiento/476334999_618085407491294_7026623155207524481_n.jpg",
    gallery: [
      "/imagenes_emp/Agua y Saneamiento/476334999_618085407491294_7026623155207524481_n.jpg",
      "/imagenes_emp/Agua y Saneamiento/480541484_631004519532716_7443813489230994962_n.jpg",
      "/imagenes_emp/Agua y Saneamiento/480663042_627038333262668_2212220211617641216_n.jpg",
      "/imagenes_emp/Agua y Saneamiento/480736132_631004369532731_7674476172204725050_n.jpg",
      "/imagenes_emp/Agua y Saneamiento/480743488_631004482866053_2744778851374365017_n.jpg",
      "/imagenes_emp/Agua y Saneamiento/626916293_899062766060222_4253385868916914065_n.jpg"
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
    image: "/imagenes_emp/Gestión de Residuos Sólidos/474204576_1022559796572479_6129323149790558161_n.jpg",
    gallery: [
      "/imagenes_emp/Gestión de Residuos Sólidos/474204576_1022559796572479_6129323149790558161_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/480706438_627038086596026_7507329938313020676_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/480755594_631004749532693_3350590188144313413_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/480768583_627038299929338_1808869543600180473_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/628417568_899062889393543_265418123309788357_n.jpg",
      "/fotos_geitec/residuos_solidos/IMG_6612.JPG"
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
    image: "/imagenes_emp/Monitoreo Ambiental/471087482_1001944478634011_2797728227684254789_n.jpg",
    gallery: [
      "/imagenes_emp/Monitoreo Ambiental/471087482_1001944478634011_2797728227684254789_n.jpg",
      "/imagenes_emp/Monitoreo Ambiental/471156463_1001944841967308_1231435235843768904_n.jpg",
      "/imagenes_emp/Monitoreo Ambiental/472047342_1010250464470079_1507295055939426245_n.jpg",
      "/imagenes_emp/Monitoreo Ambiental/473619898_603361905630311_7713825128333753469_n.jpg",
      "/imagenes_emp/Monitoreo Ambiental/474201958_1022127853282340_813494842641749728_n.jpg",
      "/imagenes_emp/Monitoreo Ambiental/513222491_724367426863091_4928646106885849177_n.jpg"
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
    image: "/imagenes_emp/Saneamiento Ambiental/705350756_983508304282334_6176658677831584751_n.jpg",
    gallery: [
      "/imagenes_emp/Saneamiento Ambiental/705350756_983508304282334_6176658677831584751_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/705453066_983508300949001_2748229626027785679_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/705790409_983508364282328_1184282213209143364_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/706189552_983508307615667_9091614098236814001_n.jpg",
      "/fotos_geitec/saneamiento_ambiental/IMG_7376.JPG",
      "/fotos_geitec/saneamiento_ambiental/IMG_7379.JPG"
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
    image: "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/472201344_1010256814469444_3577108168461975404_n.jpg",
    gallery: [
      "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/472201344_1010256814469444_3577108168461975404_n.jpg",
      "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/474535231_1022559859905806_895601153454668445_n.jpg",
      "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/476276037_620245497275285_1135769972318513967_n.jpg",
      "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/669860104_949536814346150_8095993091027017109_n.jpg",
      "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/670929745_949536904346141_7666149206822631777_n.jpg",
      "/imagenes_emp/Seguridad y Salud Ocupacional (SST)/705521471_983508397615658_8016067075416411450_n.jpg"
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

