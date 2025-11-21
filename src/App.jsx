import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Cases />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 py-10 text-center text-slate-400">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm">© {new Date().getFullYear()} Oddity Cloud — Salesforce consultancy from Prague, CZ. Built with love for sharp operators.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
