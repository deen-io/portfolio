import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dina Fajardo | Software Engineer',
  description: 'Creative software engineer crafting elegant digital experiences with code and curiosity.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/img/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/img/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/img/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
