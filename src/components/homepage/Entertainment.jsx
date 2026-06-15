import React from 'react'

const videoItems = [
  {
    src: '/tiktok1.mp4',
    href: 'https://www.tiktok.com/@yegacademy/video/7314661907741428993',
    episode: 'Episode 1',
  },
  {
    src: '/tiktok3.mp4',
    href: 'https://www.tiktok.com/@yegacademy/video/7542880723204623634',
    episode: 'Episode 2',
  },
  {
    src: '/tiktok4.mp4',
    href: 'https://www.tiktok.com/@yegacademy/video/7551782551027764498',
    episode: 'Episode 3',
  },
  {
    src: '/tiktok5.mp4',
    href: 'https://www.tiktok.com/@yegacademy/video/7556055376047770887',
    episode: 'Episode 4',
  },
  {
    src: '/tiktok06.mp4',
    href: 'https://www.tiktok.com/@yegacademy/video/7326925324359306498',
    episode: 'Episode 5',
  },
]

function Intro() {
  return (
    <section className="bg-slate-900 text-white py-10 px-4 lg:px-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase text-yellow-400">OUR ENTERTAINMENT</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Explore our programme on social media</h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            Watch the latest YEG Academy shorts and social clips from TikTok and YouTube.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoItems.map((item, index) => (
            <VideoCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VideoCard({ src, href, episode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden rounded-3xl bg-slate-800 shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-black/30"
      style={{ aspectRatio: '9/16', minHeight: '320px' }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
       onError={(e) => console.log('Video error:', src, e)}  
        onCanPlay={(e) => e.target.play()}     
      >

        <source src={src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <span className="inline-flex rounded-full bg-yellow-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-950">
          {episode}
        </span>
      </div>
    </a>
  )
}

export default Intro
