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
  environmental: '/imagenes_emp/169766628_119168416911626_9073703391213626532_n.jpg',
  environmental2: '/imagenes_emp/169548676_119168336911634_2901398659158104559_n.jpg',
  audit: '/imagenes_emp/175603167_124682643026870_5979579150497850568_n.jpg',
  audit2: '/imagenes_emp/174555767_122302859931515_3566022666289732408_n.jpg',
  planning: '/imagenes_emp/174196901_124684276360040_3102614051835087356_n.jpg',
  planning2: '/imagenes_emp/175108379_124683923026742_5042793728382744564_n.jpg',
}

export const services: Service[] = [
  {
    slug: 'instrumentos-gestion-ambiental',
    title: 'Instrumentos de Gestión Ambiental',
    shortDescription: 'Elaboración de instrumentos ambientales para proyectos y actividades en curso.',
    description: 'Preparamos los instrumentos de gestión ambiental que tu proyecto necesita para sustentar sus compromisos ambientales ante las entidades correspondientes.',
    image: images.audit,
    gallery: [images.audit, images.audit2, images.environmental],
    details: ['DIA, EIA semidetallado y detallado', 'PAMA, EVAP, IGA y DAA', 'FICA, DAAC, FITSA, FTA e ITS', 'Certificado de Inexistencia de Restos Arqueológicos (CIRA)'],
  },
  {
    slug: 'planes-estudios-ambientales',
    title: 'Planes y Estudios Ambientales',
    shortDescription: 'Planes de manejo, vigilancia, contingencia y estudios de línea base ambiental.',
    description: 'Desarrollamos planes y estudios orientados a prevenir, controlar y mitigar impactos ambientales durante todo el ciclo de tu proyecto.',
    image: images.planning,
    gallery: [images.planning, images.planning2, images.environmental2],
    details: ['Planes de manejo, estrategia ambiental y participación social', 'Programas de vigilancia ambiental', 'Planes de cierre, abandono y contingencia', 'Estudios de riesgos, vulnerabilidad y líneas base ambiental y social'],
  },
  {
    slug: 'agua-saneamiento',
    title: 'Agua y Saneamiento',
    shortDescription: 'Estudios, permisos y monitoreos para proyectos de agua y saneamiento básico.',
    description: 'Brindamos soporte técnico para proyectos de saneamiento, uso de agua, monitoreo de calidad y autorizaciones vinculadas a aguas residuales.',
    image: images.environmental,
    gallery: [images.environmental, images.environmental2, images.planning],
    details: ['Proyectos de saneamiento básico', 'Monitoreo de aguas residuales y agua para consumo', 'Permisos de uso de agua', 'Autorizaciones de vertimiento, reúso o infiltración'],
  },
  {
    slug: 'gestion-residuos-solidos',
    title: 'Gestión de Residuos Sólidos',
    shortDescription: 'Planes, estudios y soporte técnico para la gestión responsable de residuos.',
    description: 'Acompañamos la planificación y gestión integral de residuos sólidos, desde la caracterización hasta su valorización y disposición final.',
    image: images.planning2,
    gallery: [images.planning2, images.planning, images.audit],
    details: ['Planes integrales de gestión ambiental de residuos sólidos', 'Estudios de caracterización física de residuos', 'Estudios para rellenos sanitarios', 'Recolección, transporte, tratamiento, valorización y disposición final'],
  },
  {
    slug: 'monitoreo-ambiental',
    title: 'Monitoreo Ambiental',
    shortDescription: 'Monitoreos e informes técnicos de agua, aire, ruido, suelo y otros componentes ambientales.',
    description: 'Realizamos monitoreos ambientales y elaboramos informes técnicos para conocer el estado de los componentes ambientales de tu proyecto.',
    image: images.environmental2,
    gallery: [images.environmental2, images.audit2, images.environmental],
    details: ['Monitoreo de agua, aire y meteorología', 'Monitoreo de ruido ambiental y suelo', 'Monitoreo biológico y participativo', 'Informes técnicos de resultados'],
  },
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)
