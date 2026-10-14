import { Analytics } from '@vercel/analytics/next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { profile } from '@/lib/portfolio-data'
import { assetPath } from '@/lib/site-path'

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
})

const iconVersion = '2026-08-13-3'

export const metadata: Metadata = {
  title: profile.name,
  description:
    "Saee Patil is a Carnegie Mellon M.S. in Machine Learning student and A2 Lab researcher advised by Dr. Akari Asai, working on deep research agents, source reliability, post-training, and trustworthy AI.",
  icons: {
    icon: [
      {
        url: assetPath(`/sp-icon.svg?v=${iconVersion}`),
        type: 'image/svg+xml',
      },
    ],
    shortcut: assetPath(`/favicon.ico?v=${iconVersion}`),
    apple: assetPath(`/apple-icon.png?v=${iconVersion}`),
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
