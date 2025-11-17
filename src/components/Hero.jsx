import { useEffect, useRef, useState } from 'react'
import Spline from '@splinetool/react-spline'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef(null)
  const [inView, setInView] = useState(false)
  const { scrollY } = useScroll()
  const reduce = useReducedMotion()

  const bgY = reduce ? 0 : useTransform(scrollY, [0, 800], [0, -160]) // 0.2x
  const grainY = reduce ? 0 : useTransform(scrollY, [0, 800], [0, -360]) // 0.45x
  const splineY = reduce ? 0 : useTransform(scrollY, [0, 800], [0, -480]) // 0.6x

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { rootMargin: '0px', threshold: 0.1 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Layer 1: vertical gradient */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_20%,transparent_80%,rgba(255,255,255,0.04))]"/>
        <div className="absolute inset-0 opacity-[0.85]" style={{background:"linear-gradient(180deg,#0B0B0B 0%, #0E0E0E 40%, #111 100%)"}}/>
      </motion.div>

      {/* Layer 2: soft grain texture */}
      <motion.div style={reduce ? undefined : { y: grainY }} className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-40" aria-hidden>
        <div className="w-full h-full" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          backgroundSize: 'cover',
          filter: 'grayscale(100%) contrast(120%) brightness(60%)',
        }} />
      </motion.div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs uppercase tracking-wide text-white/70">
            <span className="font-mono">AI that studies with you</span>
          </div>
          <h1 className="mt-6 text-white font-poppins font-bold leading-[1.1] text-5xl sm:text-6xl">
            Study smarter, not longer.
          </h1>
          <p className="mt-4 text-white/70 max-w-xl">
            AI turns your notes into summaries, flashcards, and exam prep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#cta" className="btn-primary">Start Free</a>
            <a href="#demo" className="btn-outline">View Demo</a>
          </div>

          <div className="mt-6 text-white/50 text-sm flex items-center gap-6">
            <span>Beat exam stress.</span>
            <span>20 minutes/day is enough.</span>
          </div>
        </div>

        {/* Right: Spline within glass frame */}
        <motion.div style={reduce ? undefined : { y: splineY }} className="relative">
          <div className="glass-frame">
            {inView && (
              <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
