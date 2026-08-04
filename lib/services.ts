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
  instruments: '/imagenes_emp/513265797_724367333529767_1526947726354074520_n.jpg',
  instrumentSetup: '/imagenes_emp/513213353_724367346863099_7389241917530035537_n.jpg',
  fieldStudy: '/imagenes_emp/513355981_724367376863096_2383289641127504933_n.jpg',
  instrumentControl: '/imagenes_emp/513367961_724367343529766_3367105278813024745_n.jpg',
  survey: '/imagenes_emp/513086950_724367486863085_2347696778183353687_n.jpg',
  survey2: '/imagenes_emp/512786420_724367570196410_7324260040879456535_n.jpg',
  water1: '/imagenes_emp/470220070_995485232613269_955689282546706980_n.jpg',
  water2: '/imagenes_emp/470222738_995485249279934_1514875571096863102_n.jpg',
  water3: '/imagenes_emp/470218045_995485295946596_809842664441476304_n.jpg',
  waste1: '/imagenes_emp/469039895_989496733212119_3554277169438641802_n.jpg',
  waste2: '/imagenes_emp/469047039_989497173212075_4910974517887183186_n.jpg',
  waste3: '/imagenes_emp/469021197_989496803212112_4677955549090156731_n.jpg',
  treatment1: '/imagenes_emp/627176758_899062762726889_2549969134499995297_n.jpg',
  treatment2: '/imagenes_emp/627311132_899062769393555_6589046752984491522_n.jpg',
  treatment3: '/imagenes_emp/628063074_899062899393542_2610422948221057128_n.jpg',
  sanitation1: '/imagenes_emp/169885567_119168286911639_864176380329202335_n.jpg',
  sanitation2: '/imagenes_emp/705453066_983508300949001_2748229626027785679_n.jpg',
  sanitation3: '/imagenes_emp/705790409_983508364282328_1184282213209143364_n.jpg',
}

export const services: Service[] = [
  { slug: 'instrumentos-gestion-ambiental', title: 'Instrumentos de Gestión Ambiental', shortDescription: 'Elaboración de instrumentos ambientales para proyectos y actividades en curso.', description: 'Preparamos los instrumentos de gestión ambiental que tu proyecto necesita para sustentar sus compromisos ambientales ante las entidades correspondientes.', image: images.instruments, gallery: [images.instrumentSetup, images.fieldStudy, images.instrumentControl], details: ['DIA, EIA semidetallado y detallado', 'PAMA, EVAP, IGA y DAA', 'FICA, DAAC, FITSA, FTA e ITS', 'Certificado de Inexistencia de Restos Arqueológicos (CIRA)'] },
  { slug: 'planes-estudios-ambientales', title: 'Planes y Estudios Ambientales', shortDescription: 'Planes de manejo, vigilancia, contingencia y estudios de línea base ambiental.', description: 'Desarrollamos planes y estudios orientados a prevenir, controlar y mitigar impactos ambientales durante todo el ciclo de tu proyecto.', image: images.survey, gallery: [images.survey, images.survey2, images.document], details: ['Planes de manejo, estrategia ambiental y participación social', 'Programas de vigilancia ambiental', 'Planes de cierre, abandono y contingencia', 'Estudios de riesgos, vulnerabilidad y líneas base ambiental y social'] },
  { slug: 'agua-saneamiento', title: 'Agua y Saneamiento', shortDescription: 'Estudios, permisos y monitoreos para proyectos de agua y saneamiento básico.', description: 'Brindamos soporte técnico para proyectos de saneamiento, uso de agua, monitoreo de calidad y autorizaciones vinculadas a aguas residuales.', image: images.treatment1, gallery: [images.treatment1, images.treatment2, images.treatment3], details: ['Proyectos de saneamiento básico', 'Monitoreo de aguas residuales y agua para consumo', 'Permisos de uso de agua', 'Autorizaciones de vertimiento, reúso o infiltración'] },
  { slug: 'gestion-residuos-solidos', title: 'Gestión de Residuos Sólidos', shortDescription: 'Planes, estudios y soporte técnico para la gestión responsable de residuos.', description: 'Acompañamos la planificación y gestión integral de residuos sólidos, desde la caracterización hasta su valorización y disposición final.', image: images.waste1, gallery: [images.waste1, images.waste2, images.waste3], details: ['Planes integrales de gestión ambiental de residuos sólidos', 'Estudios de caracterización física de residuos', 'Estudios para rellenos sanitarios', 'Recolección, transporte, tratamiento, valorización y disposición final'] },
  { slug: 'monitoreo-ambiental', title: 'Monitoreo Ambiental', shortDescription: 'Monitoreos e informes técnicos de agua, aire, ruido, suelo y otros componentes ambientales.', description: 'Realizamos monitoreos ambientales y elaboramos informes técnicos para conocer el estado de los componentes ambientales de tu proyecto.', image: images.water1, gallery: [images.water1, images.water2, images.water3], details: ['Monitoreo de agua, aire y meteorología', 'Monitoreo de ruido ambiental y suelo', 'Monitoreo biológico y participativo', 'Informes técnicos de resultados'] },
  { slug: 'saneamiento-ambiental', title: 'Saneamiento Ambiental', shortDescription: 'Servicios de desinfección y limpieza especializada para ambientes e instalaciones.', description: 'Realizamos actividades de saneamiento ambiental para mantener espacios, reservorios y sistemas sanitarios en condiciones adecuadas.', image: images.sanitation1, gallery: [images.sanitation1, images.sanitation2, images.sanitation3], details: ['Desinsectación, desinfección y desratización', 'Limpieza y desinfección de reservorios de agua', 'Limpieza y desinfección de pozos sépticos', 'Atención técnica para instalaciones y ambientes'] },
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)
