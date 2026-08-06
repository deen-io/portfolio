import type { Metadata } from 'next'
import { Fraunces, DM_Sans, DM_Mono, Anton } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: '--font-display',
  style: ["normal", "italic"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: 'swap',
});

const anton = Anton({
  subsets: ["latin"],
  variable: '--font-name',
  weight: ["400"],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: '--font-body',
  weight: ["300", "400", "500"],
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  weight: ["300", "400", "500"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dina Fajardo | Senior Full-Stack Software Engineer',
  description: 'Senior Full-Stack Software Engineer building scalable SaaS and enterprise systems with Node.js, Laravel, React, and AWS.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/img/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/img/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: [
      {
        url: '/img/icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/img/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-background">
      <body className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} ${anton.variable} font-body antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
