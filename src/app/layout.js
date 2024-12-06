import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG Academy offers career guidance and industry-focused education programs for your future success in Malaysia.',
  rel:"icon",
  href:"./yeglogowebsite.svg",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
          <meta charset="UTF-8"/>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="https://www.yegmy.com/yeglogowebsite.svg" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="https://www.yegmy.com/yeglogowebsite.svg" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="./yeglogowebsite.svg" sizes="20x20" type="image/svg+xml" />

          <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199758154363864`}
          crossOrigin="anonymous">
          </script>
          <Script
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "YEG Academy",
              "url": "https://www.yegmy.com",
              "description": metadata.description,
              "logo": "https://www.yegmy.com/yeglogowebsite.svg",
              "sameAs": [
                "https://www.facebook.com/YEGAcademy",
                "https://www.instagram.com/YEGAcademy"
              ]
            }),
          }}
        />    
      </head>
      <body className={inter.className}>
      <header>
        <nav className="hidden lg:block"><Navbar/></nav>
        <nav className="lg:hidden"><Sidebar/></nav>
      </header>
      <main>{children}</main>
      <Analytics />

      {/* for google ads */}
      <Script
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "yeg academy",
            "url": "https://www.yegmy.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.yegmy.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      </body>
    </html>
  )
}

