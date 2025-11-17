import { motion } from 'framer-motion'
import { Sparkles, FileText, Calendar, Layers, Upload, Users } from 'lucide-react'

const cards = [
  { icon: FileText, title: 'AI Notes', desc: 'Turn raw notes into clean, high-contrast summaries.' },
  { icon: Calendar, title: 'Smart Study Plans', desc: 'Daily schedules optimized for exam focus.' },
  { icon: Layers, title: 'Flashcards', desc: 'Generate and drill with spaced repetition.' },
  { icon: Sparkles, title: 'Mock Exams', desc: 'Realistic timed practice with instant feedback.' },
  { icon: Upload, title: 'Import Notes', desc: 'PDF, Docs, images — all in monochrome.' },
  { icon: Users, title: 'Collaboration', desc: 'Study with friends in shared sessions.' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-white font-poppins font-semibold text-3xl sm:text-4xl">Designed for deep focus</h2>
          <p className="text-white/60 mt-3">Minimal UI. Maximum clarity. Pure black and white.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="card-glass group">
              <div className="flex items-start gap-4">
                <div className="icon-glass">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{c.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{c.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 opacity-0 group-hover:opacity-100 transition"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
