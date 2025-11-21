import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#contact', label: 'Kontakt' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 ring-1 ring-white/20 shadow-[0_0_30px_rgba(56,189,248,.45)]" />
              <span className="text-lg font-semibold tracking-tight text-white">
                Oddity Cloud • SFDC CZ
              </span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-200/90 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,.35)] hover:opacity-95"
              >
                Book a Call
              </a>
            </nav>
            <button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-slate-200/90 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-4 py-2 text-sm font-semibold text-white text-center"
                >
                  Book a Call
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
