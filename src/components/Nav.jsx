import { useEffect, useState } from 'react'
import { Menu, X, LogIn } from 'lucide-react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[rgba(0,0,0,0.5)] backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl glass-surface flex items-center justify-center text-white font-mono text-sm tracking-widest">SF</div>
          <span className="text-white font-semibold tracking-tight font-poppins">StudyFlow</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#login" className="nav-link flex items-center gap-2"><LogIn className="h-4 w-4"/> Login</a>
          <a href="#cta" className="btn-glass px-4 py-2 rounded-xl border border-white/20">Start Free</a>
        </nav>

        <button className="md:hidden text-white/90" aria-label="Toggle Menu" onClick={() => setOpen(!open)}>
          {open ? <X/> : <Menu/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="glass-surface rounded-2xl p-4 border border-white/15">
            <div className="flex flex-col gap-3 text-sm">
              <a href="#features" className="nav-link">Features</a>
              <a href="#how" className="nav-link">How It Works</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#login" className="nav-link">Login</a>
              <a href="#cta" className="btn-glass px-4 py-2 rounded-xl border border-white/20 text-center">Start Free</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
