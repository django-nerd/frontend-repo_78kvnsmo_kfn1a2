export default function Pricing(){
  const tiers = [
    { name:'Free', price:'$0', desc:'Core tools. Limited cards.' },
    { name:'Student', price:'$6', desc:'All features. Best for individuals.', featured: true },
    { name:'Family', price:'$12', desc:'Up to 4 students. Shared sets.' },
  ]

  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white font-poppins font-semibold text-3xl sm:text-4xl text-center">Pricing</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t,i) => (
            <div key={i} className={`card-glass ${t.featured ? 'bg-white/[0.08]' : ''}`}>
              <div className={`inline-flex px-3 py-1 rounded-full border text-xs ${t.featured ? 'border-white/30 bg-white/10' : 'border-white/15 bg-white/5'} text-white/80`}>{t.name}</div>
              <div className="mt-3 flex items-end gap-2">
                <span className={`text-4xl font-poppins text-white ${t.featured ? 'drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]' : ''}`}>{t.price}</span>
                <span className="text-white/50">/mo</span>
              </div>
              <p className="text-white/60 text-sm mt-2">{t.desc}</p>
              <a href="#cta" className="btn-primary mt-6">Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
