'use client'

import './globals.css'
import { usePathname } from 'next/navigation'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header.jsx'
import Footer from '@/components/Footer.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()

  const hideLayoutPaths = ['/-keep1-/qraviation', '/MPHU-Sel', '/MPHU']

  const shouldHideLayout = hideLayoutPaths.includes(pathname)

  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QCJEQC9T3Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QCJEQC9T3Z', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {!shouldHideLayout && <Header />}
        <main>{children}</main>
        {!shouldHideLayout && <Footer />}
        <Analytics />
      </body>
    </html>
  )
}
