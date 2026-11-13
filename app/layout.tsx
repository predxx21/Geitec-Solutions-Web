import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://geitec-solutions.pe'
const SITE_NAME = 'Geitec Solutions'

const siteDescription =
  'Consultoría ambiental en Huaral, Perú: auditorías ambientales, planes de manejo, diagnósticos ambientales, gestión de residuos sólidos, monitoreo ambiental y seguridad y salud ocupacional.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      legalName: 'GEITEC SOLUTIONS S.A.C.',
      alternateName: 'Gestión y Tecnología Ambiental',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon-512.png`,
      image: `${SITE_URL}/icon-512.png`,
      description: siteDescription,
      email: ['ehuerta@geitec-solutions.pe', 'jhuerta@geitec-solutions.pe'],
      telephone: '+51930996442',
      vatID: '20607439681',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'José Olaya, Calle Central Mz. E, lote 12',
        addressLocality: 'Huaral',
        addressRegion: 'Lima',
        postalCode: '15101',
        addressCountry: 'PE',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Perú',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+51930996442',
        email: ['ehuerta@geitec-solutions.pe', 'jhuerta@geitec-solutions.pe'],
        contactType: 'customer service',
        areaServed: 'PE',
        availableLanguage: ['es'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: siteDescription,
      inLanguage: 'es-PE',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Geitec Solutions | Consultoría Ambiental en Huaral, Perú',
    template: '%s | Geitec Solutions',
  },
  description: siteDescription,
  keywords: [
    'consultoría ambiental',
    'auditoría ambiental',
    'plan de manejo ambiental',
    'diagnóstico ambiental',
    'gestión de residuos sólidos',
    'monitoreo ambiental',
    'seguridad y salud ocupacional',
    'Huaral',
    'Perú',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  category: 'Consultoría ambiental',
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Geitec Solutions | Consultoría Ambiental en Huaral, Perú',
    description: siteDescription,
    images: [
      {
        url: '/hero-main.png',
        width: 1024,
        height: 1024,
        alt: 'Geitec Solutions - Consultoría ambiental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Geitec Solutions | Consultoría Ambiental en Huaral, Perú',
    description: siteDescription,
    images: ['/hero-main.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
      {
        url: '/icon-light-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#059669' },
    { media: '(prefers-color-scheme: dark)', color: '#059669' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
