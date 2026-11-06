import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { siteConfig } from '@/config/site'
import { generateThemeCssVariables } from '@/config/theme'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  openGraph: {
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    type: 'website',
    siteName: siteConfig.brand.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.brand.name} | ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: siteConfig.seo.themeColor,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeCss = generateThemeCssVariables()

  return (
    <html lang="en">
      <head>
        <style id="gym-theme-vars" dangerouslySetInnerHTML={{ __html: themeCss }} />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
