import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Demo from './components/Demo'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white relative">
      {/* Parallax base background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0" style={{background:'linear-gradient(180deg,#0B0B0B 0%, #0F0F0F 50%, #0B0B0B 100%)'}}/>
      </div>

      <Nav />
      <main className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Demo />
        <Testimonials />
        <Pricing />
        <section id="cta" className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="card-glass">
              <h3 className="text-3xl font-poppins font-semibold">Ready to focus?</h3>
              <p className="text-white/70 mt-2">Notes → Summary → Flashcards → Exam mode.</p>
              <div className="mt-6 flex justify-center gap-4">
                <a href="#" className="btn-primary">Start Free</a>
                <a href="#demo" className="btn-outline">View Demo</a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
