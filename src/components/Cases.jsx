function Case({ tag, title, result }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
      <div className="mb-2 text-xs text-slate-300/70">{tag}</div>
      <div className="text-white font-semibold">{title}</div>
      <div className="mt-4 text-sm text-slate-300/80">{result}</div>
    </div>
  )
}

function Cases() {
  return (
    <section id="cases" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Selected work</h2>
          <p className="mt-2 text-slate-300/80">Quiet operators behind loud metrics.</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Case tag="SaaS • RevOps" title="Series B, US/EU" result="40% faster quote cycles with CPQ + automated approvals across 6 price books" />
          <Case tag="Fintech • Service" title="Scale-up, CEE" result="-25% handle time with omni-channel routing, macros, and knowledge" />
          <Case tag="Industrial • Platform" title="Enterprise, DACH" result="Single source of truth across product, sales, and service with robust integrations" />
        </div>
      </div>
    </section>
  )
}

export default Cases
