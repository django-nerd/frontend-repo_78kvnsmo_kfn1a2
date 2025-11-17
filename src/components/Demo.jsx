import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Demo() {
  const [step, setStep] = useState(0)
  const next = () => setStep((s) => (s + 1) % 4)

  const steps = [
    { t: 'Upload a note', c: 'Drop a PDF or paste text. Monochrome only.' },
    { t: 'AI summary', c: 'Clean, legible output optimized for focus.' },
    { t: 'Flashcards', c: 'A crisp stack appears. Drill in seconds.' },
    { t: 'Practice question', c: 'Engage exam mode with instant feedback.' },
  ]

  return (
    <section id="demo" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass-surface rounded-3xl border border-white/15 p-6 sm:p-10">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-poppins text-2xl">Interactive demo</h3>
            <button onClick={next} className="btn-outline px-3 py-1.5 rounded-lg text-sm">Next</button>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <div className="h-10 rounded-lg bg-white/5 border border-white/10"/>
              <div className="h-10 rounded-lg bg-white/5 border border-white/10"/>
              <div className="h-10 rounded-lg bg-white/5 border border-white/10"/>
              <div className="h-48 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10"/>
            </div>
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22,0.99,0.34,1] }}
                  className="card-glass"
                >
                  <h4 className="text-white font-medium">{steps[step].t}</h4>
                  <p className="text-white/60 text-sm mt-1">{steps[step].c}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
