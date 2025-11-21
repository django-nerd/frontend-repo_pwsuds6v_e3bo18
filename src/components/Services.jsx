function ServiceCard({ title, desc, pill }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-white/20">
      <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="mb-3 inline-flex items-center gap-2 text-xs text-slate-300/80">
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">{pill}</span>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-300/80">{desc}</p>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">What we do</h2>
            <p className="mt-2 text-slate-300/80">Hands-on operators shipping outcomes, not slide decks.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">Get a quote</a>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard title="RevOps on Salesforce" pill="Strategy" desc="Pipeline architecture, territories, forecasting, attribution, and lifecycle design aligned to revenue goals." />
          <ServiceCard title="Implementations" pill="Build" desc="Net-new orgs, migrations, and re-implementations with sane data models and scalable automation." />
          <ServiceCard title="CPQ & Billing" pill="Monetize" desc="Price books, bundles, approvals, and subscriptions that finance actually loves." />
          <ServiceCard title="Service & Field" pill="Delight" desc="Omni-channel service, SLAs, knowledge, and mobile with ruthless focus on time-to-resolution." />
          <ServiceCard title="Integrations" pill="Connect" desc="Product, data warehouse, marketing, and finance — we wire it up and make it flow." />
          <ServiceCard title="Health Checks" pill="Reset" desc="Audits, org cleanup, and architecture roadmaps to get unstuck and move fast again." />
        </div>
      </div>
    </section>
  )
}

export default Services
