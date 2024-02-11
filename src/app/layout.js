import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YEG Academy|Platform Education',
  description: 'YEG ACADEMY merupakan sebuah platform  yang menawarkan pelbagai bidang pendidikan & kerjaya yang mempunyai permintaan di pasaran kerja. Setiap program yang ditawarkan di YEG ACADEMY menggunakan modul pembelajaran yang berasaskan industri. YEG ACADEMY menjalinkan usahasama rapat bersama rakan IPT dalam merevolusikan modul diploma sedia ada supaya selaras dengan kehendak industri.',
   rel:"icon", href:"/favicon.ico",

}

export default function RootLayout({ children }) {
  return (


    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-0BWVHPJF8V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0BWVHPJF8V');
            `,
          }}
        ></script>
      </head>


      <body className={inter.className}>{children}
      <Analytics />
      </body>
    </html>
  )
}
