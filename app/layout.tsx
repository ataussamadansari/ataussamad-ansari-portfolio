import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ataussamad Ansari - Mobile Application Developer',
  description: 'Building high-quality mobile applications with modern tools and scalable backend systems. Specialized in Android, Flutter, and cutting-edge web technologies.',
  keywords: [
    'Mobile Application Developer',
    'Android Developer', 
    'Flutter Developer',
    'Backend Developer',
    'Java',
    'Kotlin',
    'Dart',
    'JavaScript',
    'Node.js',
    'MongoDB',
    'Firebase',
    'Ataussamad Ansari',
    'Portfolio',
    'Mobile Apps',
    'Web Development'
  ],
  authors: [{ name: 'Ataussamad Ansari' }],
  creator: 'Ataussamad Ansari',
  publisher: 'Ataussamad Ansari',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ataussamadansari.dev',
    title: 'Ataussamad Ansari - Mobile Application Developer',
    description: 'Building high-quality mobile applications with modern tools and scalable backend systems. Specialized in Android, Flutter, and cutting-edge web technologies.',
    siteName: 'Ataussamad Ansari Portfolio',
    images: [
      {
        url: '/samad_profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Ataussamad Ansari - Mobile Application Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ataussamad Ansari - Mobile Application Developer',
    description: 'Building high-quality mobile applications with modern tools and scalable backend systems.',
    images: ['/samad_profile.jpeg'],
    creator: '@ataussamadansari',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#8B5CF6',
      },
    ],
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://ataussamadansari.me'),
  alternates: {
    canonical: '/',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}> 
      <head>
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}