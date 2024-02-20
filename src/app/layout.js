import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG ACADEMY adalah akronim kepada Your Education Guidance yang menyediakan khidmat konsultasi untuk kerjaya dan pendidikan terbaik pada masa kini. Kini, YEG Academy telah berkembang menjadi salah satu platform rujukan pendidikan terkini dan terbesar di Malaysia dengan menawarkan pelbagai bidang sambung belajar dengan penekanan modul pembelajaran berasaskan industri. Oleh itu, YEG Academy menjalinkan usahasama rapat bersama rakan IPT dalam merevolusikan modul diploma sedia ada supaya selaras dengan kehendak industri bagi mencapai 5 kayu ukur utama dalam memastikan graduan memenuhi kriteria seperti kelayakan, pengalaman, pendapatan, pekerjaan dan kebanggaan.',
  rel:"icon",
  href:"./favicon.ico",
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
      <Head>
          {/* Title */}
          <title>{metadata.title}</title>
          {/* Description */}
          <meta name="yeg academy" content={metadata.description} />
          <meta name="yeg" content="yeg, yeg academy, yeg academy reviews, yeg academy swasta atau kerajaan, yeg academy iktiraf mqa, yeg academy courses, yeg sambung belajar, yeg company, yuran yeg academy"/>
          {/* Favicon */}
          <link rel="icon" href={metadata.rel} />
        </Head>

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
