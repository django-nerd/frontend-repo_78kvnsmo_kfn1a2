import { motion } from 'framer-motion'

const steps = [
  { n: 1, t: 'Upload notes', d: 'Drop in a doc or image. We process in grayscale.' },
  { n: 2, t: 'AI summary', d: 'Concise, legible output optimized for dark mode.' },
  { n: 3, t: 'Flashcards', d: 'Auto-generate and organize a study stack.' },
  { n: 4, t: 'Practice', d: 'Mock exam mode with instant feedback.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-white font-poppins font-semibold text-3xl sm:text-4xl text-center">How it works</h2>
        <div className="mt-12 relative">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-px bg-white/10"/>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map(s => (
              <motion.div key={s.n} whileHover={{ y: -4 }} className="card-glass text-center">
                <div className="mx-auto w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur flex items-center justify-center font-mono text-white/80">{s.n}</div>
                <h3 className="mt-3 text-white font-medium">{s.t}</h3>
                <p className="text-white/60 text-sm mt-1">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
