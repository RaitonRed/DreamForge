'use client'

import { useState } from 'react'

export default function Home() {
  const [dreamText, setDreamText] = useState('')

  const handleGenerate = () => {
    const message = dreamText ? 'Generating an image for your dream...' : 'Please write your dream above to generate.'
    
    // Create toast notification
    const toast = document.createElement('div')
    toast.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 text-slate-800 px-5 py-3 rounded-full shadow-xl'
    toast.textContent = message
    document.body.appendChild(toast)
    setTimeout(() => toast.remove(), 2500)
  }

  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50">
        <nav className="backdrop-blur-md bg-white/10 border border-white/10 mx-4 my-4 rounded-2xl shadow-xl py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-300 to-pink-300 flex items-center justify-center shadow-md">
              <svg aria-hidden="true" className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                <path d="M12 3C13.6569 3 15 4.34315 15 6C15 7.65685 13.6569 9 12 9C10.3431 9 9 7.65685 9 6C9 4.34315 10.3431 3 12 3Z" fill="white" opacity="0.9"/>
                <path d="M4 17C4 13 7 11 12 11C17 11 20 13 20 17V20H4V17Z" fill="white" opacity="0.85"/>
              </svg>
            </div>
            <a href="#" className="text-lg md:text-xl font-semibold font-heading">DreamForge</a>
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            <li><a href="#home" className="hover:underline transition">Home</a></li>
            <li><a href="#gallery" className="hover:underline transition">Gallery</a></li>
            <li><a href="#about" className="hover:underline transition">About</a></li>
            <li><a href="#contact" className="hover:underline transition">Contact</a></li>
          </ul>

          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <main id="home" className="relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Stars and moon elements */}
          <div className="absolute top-8 left-6 space-y-2">
            <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse"></span>
            <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-70 mt-6 animate-pulse"></span>
            <span className="block w-2 h-2 bg-white rounded-full opacity-60 mt-10 animate-pulse"></span>
          </div>

          <div className="absolute right-6 top-20 space-y-2">
            <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-80 animate-pulse"></span>
            <span className="block w-1.5 h-1.5 bg-white rounded-full opacity-70 mt-6 animate-pulse"></span>
            <span className="block w-2 h-2 bg-white rounded-full opacity-60 mt-10 animate-pulse"></span>
          </div>

          <div className="absolute -right-6 top-8 transform-gpu transition-transform motion-reduce:transform-none hover:-translate-y-2">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-white/90 to-yellow-200/80 shadow-xl flex items-center justify-center opacity-90">
              <svg className="w-20 h-20 text-white/90" viewBox="0 0 24 24" fill="none">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="white" opacity="0.95"/>
              </svg>
            </div>
          </div>
        </div>

        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="relative z-10 max-w-4xl w-full text-center">
            <h1 className="text-[clamp(2.25rem,7vw,4.5rem)] md:text-[clamp(3rem,6vw,6rem)] font-extrabold leading-tight mb-4 font-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400 drop-shadow-2xl">
                DreamForge
              </span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-slate-700 mb-8 font-body">
              Describe your dream, let AI transform it into art.
            </p>

            <div className="mx-auto bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 w-full max-w-3xl">
              <label htmlFor="dream" className="sr-only">Write your dream</label>
              <textarea 
                id="dream" 
                placeholder="Write your dream..." 
                rows="5"
                value={dreamText}
                onChange={(e) => setDreamText(e.target.value)}
                className="w-full resize-none rounded-2xl p-4 placeholder-slate-400/80 text-slate-900 font-medium focus:outline-none focus:ring-4 focus:ring-indigo-200/40 transition shadow-inner bg-white/60 font-body"
              ></textarea>

              <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-700 font-body">
                  Tip: Be vivid — mention colors, mood, objects, and atmosphere.
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={handleGenerate}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-500 to-pink-500 shadow-xl hover:scale-105 transform transition duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-pink-300/40"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a4 4 0 004 4h10M3 7a4 4 0 018 0M21 7v6a4 4 0 01-4 4H7"/>
                    </svg>
                    Generate Dream
                  </button>
                  {/* <button className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl font-medium bg-white/10 border border-white/10 hover:bg-white/20 transition focus:outline-none" title="Advanced options">
                    Advanced
                  </button> */}
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-600 font-body">
              This site uses an AI image engine to create visualizations — output is for inspiration and fun.
            </p>
          </div>
        </section>
      </main>

      {/* ABOUT */}
      <section id="about" className="py-16 px-6 bg-gradient-to-b from-white/30 to-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 font-heading">About Dream to Reality</h2>
            <p className="text-slate-700 mb-4 font-body">
              Dream to Reality is a playful experiment that connects human imagination with generative AI art.
              Describe a dreamy scene, choose a mood and style, and watch an AI interpret your words into a visual piece.
            </p>
            <ul className="space-y-3 text-slate-600 font-body">
              <li>✨ Easy-to-use prompt box for vivid descriptions</li>
              <li>🎨 A gallery of previously generated dreams</li>
              <li>🔒 Respectful handling — content for inspiration and non-commercial use</li>
            </ul>
            {/* <div className="mt-6">
              <a href="#gallery" className="inline-block px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-semibold shadow-lg hover:scale-105 transition">See the gallery</a>
            </div> */}
          </div>

          <div className="flex-1">
            <div className="rounded-2xl shadow-xl p-6 bg-white/60">
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
                <img 
                  src="https://via.placeholder.com/420x260.png?text=Illustration+Placeholder" 
                  alt="Illustration placeholder" 
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl text-center">
          <h3 className="text-2xl font-semibold mb-2 font-heading">Get in touch</h3>
          <p className="text-slate-600 mb-4 font-body">Questions, feedback, or to showcase your generated dream — we'd love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:hello@example.com" className="inline-block px-5 py-3 rounded-2xl bg-indigo-500 text-white font-medium shadow hover:scale-105 transition">Email Us</a>
            <a href="#" className="inline-block px-5 py-3 rounded-2xl border border-white/10 bg-white/10 hover:bg-white/20 transition">Join our community</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-12">
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-slate-700 font-body">
              &copy; {new Date().getFullYear()} Dream to Reality — <span className="hidden sm:inline">Made with imagination.</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-sm">Privacy</a>
              <a href="#" className="text-sm">Terms</a>
              <a href="#" className="text-sm">Contact</a>
            </div>

            <div className="text-sm text-slate-700 font-body">
              Powered by <span className="font-semibold">Gemini AI</span>.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}