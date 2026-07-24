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
  training: '/imagenes_emp/169885567_119168286911639_864176380329202335_n.jpg',
  training2: '/imagenes_emp/169307844_119168366911631_4491127142723405260_n.jpg',
  training3: '/imagenes_emp/169271772_119168440244957_8313222696043414417_n.jpg',
  grease: '/imagenes_emp/174196901_124684276360040_3102614051835087356_n.jpg',
  grease2: '/imagenes_emp/175108379_124683923026742_5042793728382744564_n.jpg',
  audit: '/imagenes_emp/175603167_124682643026870_5979579150497850568_n.jpg',
  occupational: '/imagenes_emp/175149360_124682849693516_2604005311337690460_n.jpg',
  emergency: '/imagenes_emp/176435225_124684379693363_4447695492097427556_n.jpg',
}

export const services: Service[] = [
  { slug: 'consultoria-ambiental', title: 'Consultoría Ambiental', shortDescription: 'Diagnósticos y gestión ambiental empresarial, auditorías ambientales y planes de mitigación.', description: 'Evaluamos las necesidades ambientales de tu empresa y te acompañamos para cumplir la normativa aplicable con soluciones prácticas y responsables.', image: images.environmental, gallery: [images.environmental, images.environmental2, images.audit], details: ['Diagnósticos ambientales', 'Planes de manejo ambiental', 'Asesoría ISO 14001', 'Auditorías ambientales'] },
  { slug: 'capacitacion-seguridad', title: 'Capacitación en Seguridad Ocupacional', shortDescription: 'Programas de entrenamiento en seguridad ocupacional adaptados a tu industria.', description: 'Diseñamos capacitaciones claras y aplicables para fortalecer la prevención de riesgos y cuidar a cada integrante de tu equipo.', image: images.training, gallery: [images.training, images.training2, images.training3], details: ['Seguridad en alturas', 'Espacios confinados', 'Manejo de materiales peligrosos', 'Primeros auxilios'] },
  { slug: 'tratamiento-grasas', title: 'Tratamiento de Grasas', shortDescription: 'Mantenimiento y saneamiento industrial de sistemas de tratamiento de aguas residuales.', description: 'Brindamos soluciones para el manejo responsable de grasas industriales, protegiendo tus instalaciones y el medio ambiente.', image: images.grease, gallery: [images.grease, images.grease2, images.audit], details: ['Instalación de trampas de grasa', 'Mantenimiento preventivo', 'Disposición final', 'Asesoramiento técnico'] },
  { slug: 'asesoria-ocupacional', title: 'Asesoría Ocupacional', shortDescription: 'Implementación de políticas y procedimientos de seguridad y salud en el trabajo.', description: 'Te ayudamos a consolidar una cultura de prevención con procesos alineados a la realidad de tu organización.', image: images.occupational, gallery: [images.occupational, images.training, images.training2], details: ['Evaluaciones ergonómicas', 'Estudios de riesgos', 'Planes de prevención', 'Asesoramiento ISO 45001'] },
  { slug: 'auditorias-internas', title: 'Auditorías Internas', shortDescription: 'Evaluación integral de cumplimiento normativo y estándares internacionales.', description: 'Revisamos tus procesos para identificar oportunidades de mejora y respaldar el cumplimiento de tus obligaciones.', image: images.audit, gallery: [images.audit, images.environmental, images.grease], details: ['Auditorías de sistemas', 'Inspecciones de seguridad', 'Verificación de cumplimiento', 'Generación de reportes'] },
  { slug: 'respuesta-emergencias', title: 'Respuesta a Emergencias', shortDescription: 'Planes de contingencia y capacitación para situaciones de emergencia.', description: 'Preparamos a tu equipo para responder con seguridad y orden ante situaciones de emergencia.', image: images.emergency, gallery: [images.emergency, images.training2, images.training3], details: ['Planes de contingencia', 'Simulacros', 'Entrenamiento de brigadas', 'Equipos de respuesta'] },
]

export const getService = (slug: string) => services.find((service) => service.slug === slug)
