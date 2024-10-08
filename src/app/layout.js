import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG ACADEMY adalah akronim kepada Your Education Guidance yang menyediakan khidmat konsultasi untuk kerjaya dan pendidikan terbaik pada masa kini. Kini, YEG Academy telah berkembang menjadi salah satu platform rujukan pendidikan terkini dan terbesar di Malaysia dengan menawarkan pelbagai bidang sambung belajar dengan penekanan modul pembelajaran berasaskan industri. Oleh itu, YEG Academy menjalinkan usahasama rapat bersama rakan IPT dalam merevolusikan modul diploma sedia ada supaya selaras dengan kehendak industri bagi mencapai 5 kayu ukur utama dalam memastikan graduan memenuhi kriteria seperti kelayakan, pengalaman, pendapatan, pekerjaan dan kebanggaan.',
  rel:"icon",
  href:"./yeglogowebsite.svg",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
          <meta charset="UTF-8"/>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="URL_TO_IMAGE" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="URL_TO_IMAGE" />
          <link rel="icon" href="./yeglogowebsite.svg" sizes="16x16" type="image/svg+xml" />

          <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199758154363864`}
          crossOrigin="anonymous"
        ></script>    
      </Head>

      <body>
      <main>{children}</main>
      <Analytics />
      </body>
    </html>
  )
}

