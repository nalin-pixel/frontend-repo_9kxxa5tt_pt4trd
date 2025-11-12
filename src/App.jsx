import React from 'react'
import Spline from '@splinetool/react-spline'
import { ExternalLink, Play } from 'lucide-react'

const HeroCover = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 text-sm text-slate-600 shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Modern teams ship faster with our platform
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
          Real customer stories, in their own words
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
          See how teams capture, collaborate, and ship using our tools — straight from their actual posts.
        </p>
      </div>
    </section>
  )
}

const VideoCard = ({ video }) => {
  return (
    <div className="group rounded-2xl bg-white/80 backdrop-blur border border-slate-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      <div className="relative bg-slate-100">
        {video.src ? (
          <video
            className="w-full h-auto aspect-video object-cover"
            poster={video.poster}
            src={video.src}
            controls
            playsInline
          />
        ) : (
          <div className="w-full aspect-video bg-slate-200 grid place-items-center text-slate-500">
            <Play className="w-10 h-10" />
          </div>
        )}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {video.avatar ? (
              <img src={video.avatar} alt={video.client} className="w-9 h-9 rounded-full object-cover ring-2 ring-white" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-white ring-2 ring-white grid place-items-center text-slate-500 text-sm font-semibold">
                {video.client?.[0] || 'C'}
              </div>
            )}
            <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-slate-700 text-sm shadow-sm">
              {video.platform}
            </div>
          </div>
          {video.original && (
            <a
              href={video.original}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors"
            >
              View original <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-medium text-slate-900">{video.client}</p>
            {video.role && <p className="text-sm text-slate-500 mt-0.5">{video.role}</p>}
          </div>
          {video.logo && (
            <img src={video.logo} alt="logo" className="h-6 opacity-70" />
          )}
        </div>
        {video.quote && (
          <p className="mt-3 text-slate-700 text-sm md:text-base">“{video.quote}”</p>
        )}
        {video.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {video.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const TestimonialSection = () => {
  const items = [
    {
      client: 'Ava Chen',
      role: 'Head of Product, Northstar',
      platform: 'LinkedIn',
      poster: 'https://images.unsplash.com/photo-1526312426976-593c2b99952f?q=80&w=1974&auto=format&fit=crop',
      src: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      original: 'https://www.linkedin.com/',
      quote: 'We centralized feedback and cut review cycles from days to hours. The workflow just clicks.',
      tags: ['Product ops', 'Faster reviews', 'Team alignment'],
    },
    {
      client: 'Diego Martínez',
      role: 'Founder, Foco Studio',
      platform: 'Twitter/X',
      poster: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2070&auto=format&fit=crop',
      src: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
      original: 'https://twitter.com/',
      quote: 'Client approvals used to be chaos. Now we share a link and it’s done in one pass.',
      tags: ['Agencies', 'Approvals'],
    },
    {
      client: 'Maya Patel',
      role: 'Engineering Manager, Fractal',
      platform: 'YouTube',
      poster: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2069&auto=format&fit=crop',
      src: 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
      original: 'https://youtube.com/',
      quote: 'The developer experience is unreal. Our release cadence doubled in a quarter.',
      tags: ['DX', 'Release velocity'],
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Video testimonials</h2>
            <p className="mt-3 text-slate-600 max-w-xl">Short clips of real teams using our products. Add your own customer videos any time, and link to the original post for full context.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 transition-colors self-start"
          >
            Share your story
          </a>
        </div>

        {/* 1080x720 canvas on large screens */}
        <div className="mt-10 md:mt-12">
          <div className="mx-auto bg-white/60 backdrop-blur rounded-3xl border border-slate-200 shadow-sm p-4 md:p-6">
            <div className="mx-auto w-full md:max-w-[1080px] md:h-[720px] md:overflow-hidden md:rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                <div className="md:col-span-2 flex flex-col gap-4">
                  <VideoCard video={items[0]} />
                  <VideoCard video={items[1]} />
                </div>
                <div className="flex flex-col gap-4">
                  <VideoCard video={items[2]} />
                  <div className="flex-1 rounded-2xl border border-dashed border-slate-300 grid place-items-center text-slate-500 bg-white/70">
                    <div className="text-center px-6">
                      <div className="mx-auto w-12 h-12 rounded-full bg-slate-100 grid place-items-center mb-3">
                        <Play className="w-5 h-5" />
                      </div>
                      <p className="font-medium">Add a new clip</p>
                      <p className="text-sm mt-1">Drag a file here or paste a link to include more customer stories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 text-slate-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <p className="text-sm">All videos are shared with customer permission and link back to the source post.</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroCover />
      <TestimonialSection />
    </div>
  )
}

export default App
