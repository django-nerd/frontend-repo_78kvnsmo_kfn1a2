import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const items = [
  { q: '“It made my finals week calm.”', a: '— Maya, Grade 12' },
  { q: '“Notes → flashcards in seconds.”', a: '— Leo, Grade 10' },
  { q: '“I study less but remember more.”', a: '— Aria, Grade 11' },
]

export default function Testimonials(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const x = useTransform(scrollYProgress, [0,1], [0, -80])

  return (
    <section id="testimonials" ref={ref} className="relative py-24 overflow-hidden">
      <motion.div style={{ x }} className="absolute inset-0 pointer-events-none opacity-30 mix-blend-soft-light" aria-hidden>
        <div className="h-full w-[200%]" style={{ backgroundImage:'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06), transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06), transparent 35%)' }}/>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white font-poppins font-semibold text-3xl sm:text-4xl text-center">Trusted by students</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="card-glass">
              <p className="text-white text-lg">{t.q}</p>
              <p className="text-white/60 text-sm mt-2">{t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
