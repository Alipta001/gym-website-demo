import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'REPMAX Fitness Studio | Sodepur, Kolkata',
  description:
    'Train with intent at REPMAX Fitness Studio Sodepur. Strength, fitness and a mindset built for progress. Located in Panihati, West Bengal.',
  keywords: ['gym', 'fitness studio', 'Sodepur', 'Kolkata', 'strength training', 'REPMAX'],
  openGraph: {
    title: 'REPMAX Fitness Studio | Sodepur, Kolkata',
    description: 'Train with intent. Live with strength.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'REPMAX Fitness Studio',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png',  media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090909',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
