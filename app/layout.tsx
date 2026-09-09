import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Aryan Shafa Wardana - Frontend Developer',
    template: '%s | Aryan Shafa Wardana',
  },
  description: 'Frontend projects and practical writing by Aryan Shafa Wardana.',
  openGraph: {
    title: 'Aryan Shafa Wardana - Frontend Developer',
    description: 'Frontend projects and practical writing by Aryan Shafa Wardana.',
    url: baseUrl,
    siteName: "Aryan Shafa Wardana's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
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
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="box-border antialiased mx-auto mt-8 w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
