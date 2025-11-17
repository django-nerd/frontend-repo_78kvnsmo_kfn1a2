import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl glass-surface flex items-center justify-center text-white font-mono text-sm">SF</div>
            <span className="text-white font-semibold">StudyFlow</span>
          </div>
          <p className="text-white/60 text-sm mt-3 max-w-sm">A sleek monochrome AI platform that helps you generate notes, study plans, flashcards, and mock exams.</p>
        </div>

        <div className="text-white/70 text-sm grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how" className="nav-link">How It Works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="nav-link">Terms</a>
            <a href="#" className="nav-link">Privacy</a>
            <a href="#" className="nav-link">Contact</a>
          </div>
        </div>

        <div className="flex md:justify-end gap-3 text-white/70">
          <a aria-label="Github" href="#" className="icon-glass"><Github className="h-4 w-4"/></a>
          <a aria-label="Twitter" href="#" className="icon-glass"><Twitter className="h-4 w-4"/></a>
          <a aria-label="Email" href="#" className="icon-glass"><Mail className="h-4 w-4"/></a>
        </div>
      </div>
      <p className="text-center text-white/40 text-xs mt-10">© {new Date().getFullYear()} StudyFlow</p>
    </footer>
  )
}
