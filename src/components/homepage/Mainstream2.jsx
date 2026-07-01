{/*import React from 'react'
import { Play } from 'lucide-react'

const clips = [
  { src: '/MHI.mp4', poster: '/MHI-poster.jpg', outlet: 'MHI' },
  { src: '/NLKO.mp4', poster: '/NLKO-poster.jpg', outlet: 'NLKO' },
]

function VideoCard({ src, poster, outlet }) {
  const [playing, setPlaying] = React.useState(false)
  const videoRef = React.useRef(null)

  const handlePlay = () => {
    setPlaying(true)
    videoRef.current?.play()
  }

  return (
    <div className="group relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video w-full bg-slate-900">
        <video
          ref={videoRef}
          controls={playing}
          playsInline
          preload="none"
          poster={poster}
          onPause={() => setPlaying(false)}
          className="h-full w-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>

        {!playing && (
          <button
            onClick={handlePlay}
            aria-label={`Play video from ${outlet}`}
            className="absolute inset-0 flex items-center justify-center bg-slate-950/30 transition-colors duration-300 group-hover:bg-slate-950/40"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 h-6 w-6 fill-white text-white" />
            </span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-950">
          Featured on {outlet}
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-600" />
      </div>
    </div>
  )
}

function Intro() {
  return (
    <section>
      <div className="py-8 lg:py-10" />

      <div className="w-full bg-slate-100 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 px-4 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600">
            As seen on
          </span>
          <h2 className="text-4xl font-bold text-blue-950 lg:text-4xl">
            YEG Academy in Mainstream Media
          </h2>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 bg-slate-100 p-2 py-10 lg:grid-cols-2 lg:gap-10">
        {clips.map((clip) => (
          <div key={clip.outlet} className="mx-auto flex w-full justify-center">
            <VideoCard {...clip} />
          </div>
        ))}
      </div>

      <div className="py-8 lg:py-10" />
    </section>
  )
}

export default Intro */}