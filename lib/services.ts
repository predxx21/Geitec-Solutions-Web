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
      "/imagenes_emp/Planes y Estudios Ambientales/825268411_1092398053393358_1120658434461731069_n.jpg"
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
    image: "/imagenes_emp/Agua y Saneamiento/IMG_3.JPG.jpg",
    gallery: [
      "/imagenes_emp/Agua y Saneamiento/IMG_3.JPG.jpg",
      "/imagenes_emp/Agua y Saneamiento/IMG_9279.JPG",
      "/imagenes_emp/Agua y Saneamiento/IMG_9288.JPG",
      "/imagenes_emp/Agua y Saneamiento/IMG_9293.JPG",
      "/imagenes_emp/Agua y Saneamiento/IMG_9295.JPG",
      "/imagenes_emp/Agua y Saneamiento/IMG_9312.JPG"
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
    image: "/imagenes_emp/Gestión de Residuos Sólidos/469039895_989496733212119_3554277169438641802_n.jpg",
    gallery: [
      "/imagenes_emp/Gestión de Residuos Sólidos/469039895_989496733212119_3554277169438641802_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/469216199_989496949878764_5900629636491354809_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/469047039_989497173212075_4910974517887183186_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/469180894_989496893212103_4266829108238764625_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/469045319_989496833212109_1623679341287610068_n.jpg",
      "/imagenes_emp/Gestión de Residuos Sólidos/468952096_989496889878770_5642539860639832963_n.jpg"
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
      "/imagenes_emp/Saneamiento Ambiental/169114850_119168476911620_5724385918861867237_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/169492865_119168433578291_757337444756738469_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/626916293_899062766060222_4253385868916914065_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/627176758_899062762726889_2549969134499995297_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/705350756_983508304282334_6176658677831584751_n.jpg",
      "/imagenes_emp/Saneamiento Ambiental/705453066_983508300949001_2748229626027785679_n.jpg"
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

