"use client"
import './globals.css'
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Head from 'next/head';

export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG ACADEMY adalah akronim kepada Your Education Guidance yang menyediakan khidmat konsultasi untuk kerjaya dan pendidikan terbaik pada masa kini. Kini, YEG Academy telah berkembang menjadi salah satu platform rujukan pendidikan terkini dan terbesar di Malaysia dengan menawarkan pelbagai bidang sambung belajar dengan penekanan modul pembelajaran berasaskan industri. Oleh itu, YEG Academy menjalinkan usahasama rapat bersama rakan IPT dalam merevolusikan modul diploma sedia ada supaya selaras dengan kehendak industri bagi mencapai 5 kayu ukur utama dalam memastikan graduan memenuhi kriteria seperti kelayakan, pengalaman, pendapatan, pekerjaan dan kebanggaan.',
  rel:"icon",
  href:"./yeglogowebsite.svg",
}

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  useEffect(() => {
    inter.styleSheet.sync();
  }, []);

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

          

       

      </Head>
      <div>{children}</div>
      <Analytics />
    </html>
    

  )
}




 {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-0BWVHPJF8V"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0BWVHPJF8V');
            `,
          }}
        ></script> */}


          {/* <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '772945644417254');
                  fbq('track', 'PageView');
                `,
              }}
            ></script>  */}
