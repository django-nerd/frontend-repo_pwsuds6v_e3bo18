import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              Salesforce • Prague • EMEA
            </div>
            <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Edgy Salesforce Consultancy from the Czech Republic
            </h1>
            <p className="mt-5 text-slate-300/90 text-lg max-w-xl">
              We architect, implement, and scale revenue systems on Salesforce with a design-first, automation-obsessed mindset. Fast ramps, clean data, fearless experiments.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,102,241,.35)] hover:opacity-95"
              >
                Book discovery call
              </a>
              <a
                href="#cases"
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                See case studies
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-slate-300/70">
              <div>Revenue Cloud • Service • Platform • CPQ</div>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[560px] lg:h-[620px]">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
