export type Service = {
  slug: string
  title: string
  shortDescription: string
  description: string
  image: string
  gallery: string[]
  details: string[]
}

const images = {
  instruments: '/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0099.jpg',
  instrumentSetup: '/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0102.jpg',
  fieldStudy: '/fotos_nuevas/capacitaciones/IMG-20220603-WA0058.jpg',
  instrumentControl: '/fotos_nuevas/estudio_ambiental/IMG_20220609_165847.jpg',
  survey: '/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0135.jpg',
  survey1: '/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0080.jpg',
  survey2: '/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0096.jpg',
  survey3: '/fotos_nuevas/estudio_ambiental/IMG-20220719-WA0163.jpg',
  water1: '/fotos_nuevas/monitoreo_ambiental/IMG-20220607-WA0128.jpg',
  water2: '/fotos_nuevas/monitoreo_ambiental/IMG-20211116-WA0121.jpg',
  water3: '/fotos_nuevas/monitoreo_ambiental/IMG-20220719-WA0074.jpg',
  water4: '/fotos_nuevas/monitoreo_ambiental/IMG-20220913-WA0094.jpg',
  waste1: '/imagenes_emp/469039895_989496733212119_3554277169438641802_n.jpg',
  waste2: '/imagenes_emp/469047039_989497173212075_4910974517887183186_n.jpg',
  waste3: '/imagenes_emp/469021197_989496803212112_4677955549090156731_n.jpg',
  treatment1: '/imagenes_emp/627176758_899062762726889_2549969134499995297_n.jpg',
  treatment2: '/imagenes_emp/627311132_899062769393555_6589046752984491522_n.jpg',
  treatment3: '/imagenes_emp/628063074_899062899393542_2610422948221057128_n.jpg',
  sanitation1: '/imagenes_emp/705453066_983508300949001_2748229626027785679_n.jpg',
  sanitation2: '/imagenes_emp/705790409_983508364282328_1184282213209143364_n.jpg',
  sanitation3: '/imagenes_emp/705350756_983508304282334_6176658677831584751_n.jpg',
  sst1: '/fotos_nuevas/monitoreo_ocupacional/IMG-20220715-WA0170.jpg',
  sst2: '/fotos_nuevas/monitoreo_ocupacional/IMG-20220715-WA0046.jpg',
  sst3: '/fotos_nuevas/monitoreo_ocupacional/IMG-20220715-WA0119.jpg',
  sst4: '/fotos_nuevas/capacitaciones/IMG-20220616-WA0045.jpg',
}

export const services: Service[] = [
  { slug: 'instrumentos-gestion-ambiental', title: 'Instrumentos de Gestión Ambiental', shortDescription: 'Elaboración de instrumentos ambientales para proyectos y actividades en curso.', description: 'Preparamos los instrumentos de gestión ambiental que tu proyecto necesita para sustentar sus compromisos ambientales ante las entidades correspondientes.', image: images.instruments, gallery: [images.instrumentSetup, images.fieldStudy, images.instrumentControl], details: ['Declaración de Impacto Ambiental (DIA)', 'Estudio de Impacto Ambiental Semidetallado (EIA-sd) y Detallado (EIA-d)', 'Programa de Adecuación y Manejo Ambiental (PAMA)', 'Evaluación Ambiental Preliminar (EVAP)', 'Informe de Gestión Ambiental (IGA) y DAA', 'FICA, DAAC, FITSA, FTA e ITS', 'Certificado de Inexistencia de Restos Arqueológicos (CIRA)'] },
  { slug: 'planes-estudios-ambientales', title: 'Planes y Estudios Ambientales', shortDescription: 'Planes de manejo, vigilancia, contingencia y estudios de línea base ambiental.', description: 'Desarrollamos planes y estudios orientados a prevenir, controlar y mitigar impactos ambientales durante todo el ciclo de tu proyecto.', image: images.survey, gallery: [images.survey1, images.survey2, images.survey3], details: ['Planes de Manejo de Residuos Sólidos y Estrategia Ambiental', 'Programas de Vigilancia Ambiental y Participación Social', 'Planes de Cierre, Abandono y Contingencias', 'Estudios de Riesgos y Vulnerabilidad Ambiental', 'Líneas Base Ambiental y Social para Estudios y Proyectos'] },
  { slug: 'agua-saneamiento', title: 'Agua y Saneamiento', shortDescription: 'Estudios, permisos y monitoreos para proyectos de agua y saneamiento básico.', description: 'Brindamos soporte técnico para proyectos de saneamiento, uso de agua, monitoreo de calidad y autorizaciones vinculadas a aguas residuales.', image: images.treatment1, gallery: [images.treatment1, images.treatment2, images.treatment3], details: ['Monitoreo e informe de monitoreo de aguas residuales industriales y domésticas', 'Monitoreo e informe de calidad de agua para consumo humano', 'Permisos de uso de agua', 'Autorizaciones para vertimiento, reúso o infiltración de aguas residuales', 'Estudios a nivel de perfil, factibilidad y expediente técnico de proyectos de saneamiento'] },
  { slug: 'gestion-residuos-solidos', title: 'Gestión de Residuos Sólidos', shortDescription: 'Planes, estudios y soporte técnico para la gestión responsable de residuos.', description: 'Acompañamos la planificación y gestión integral de residuos sólidos, desde la caracterización hasta su valorización y disposición final.', image: images.waste1, gallery: [images.waste1, images.waste2, images.waste3], details: ['Planes Integrales de Gestión Ambiental de Residuos Sólidos (PIGARS)', 'Estudios de Caracterización Física de Residuos Sólidos', 'Estudios a nivel de perfil, factibilidad y expediente técnico para rellenos sanitarios', 'Recolección, transporte, tratamiento, valorización y disposición final de residuos peligrosos y no peligrosos'] },
  { slug: 'monitoreo-ambiental', title: 'Monitoreo Ambiental', shortDescription: 'Monitoreos e informes técnicos de agua, aire, ruido, suelo y otros componentes ambientales.', description: 'Realizamos monitoreos ambientales y elaboramos informes técnicos para conocer el estado de los componentes ambientales de tu proyecto.', image: images.water1, gallery: [images.water2, images.water3, images.water4], details: ['Monitoreo de Agua y Aire', 'Monitoreo Meteorológico y Ruido Ambiental', 'Monitoreo de Suelo y Biológico', 'Monitoreos Participativos', 'Capacitación y asesoría en gestión ambiental y responsabilidad social'] },
  { slug: 'saneamiento-ambiental', title: 'Saneamiento Ambiental', shortDescription: 'Servicios de desinfección y limpieza especializada para ambientes e instalaciones.', description: 'Realizamos actividades de saneamiento ambiental para mantener espacios, reservorios y sistemas sanitarios en condiciones adecuadas.', image: images.sanitation1, gallery: [images.sanitation1, images.sanitation2, images.sanitation3], details: ['Desinsectación, Desinfección y Desratización', 'Limpieza y desinfección de reservorios de agua', 'Limpieza y desinfección de pozos sépticos', 'Atención técnica para instalaciones y ambientes'] },
  { slug: 'seguridad-salud-ocupacional', title: 'Seguridad y Salud Ocupacional (SST)', shortDescription: 'Implementación del sistema de SST, matriz IPERC, reglamentos y monitoreos ocupacionales.', description: 'Desarrollamos e implementamos el Sistema de Gestión de Seguridad y Salud Ocupacional adaptado a tu empresa, garantizando la protección de los trabajadores y el pleno cumplimiento normativo.', image: images.sst1, gallery: [images.sst2, images.sst3, images.sst4], details: ['Implementación del Sistema de Gestión de Seguridad y Salud Ocupacional', 'Elaboración del Reglamento de Seguridad y Salud en el Trabajo (RISST)', 'Identificación de Peligros, Evaluación de Riesgos y Medidas de Control (IPERC)', 'Conformación y asesoría del Comité de Seguridad y Salud en el Trabajo', 'Monitoreos e informes ocupacionales (Agentes físicos, químicos, biológicos, disergonómicos y psicosociales)'] },
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)
