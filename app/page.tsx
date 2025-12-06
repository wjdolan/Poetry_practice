import Link from "next/link";

export default function Home() {
  return (
    <div className="py-10 space-y-10">
      <section className="section-card space-y-6">
        <p className="text-sm font-semibold text-brand-700 uppercase tracking-wide">Energy analytics & advisory</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Clarity for energy and commodities decisions.
        </h1>
        <p className="text-lg text-muted max-w-3xl">
          We combine market intelligence, quantitative models, and technical expertise to guide investments, projects, and risk strategies across natural gas, crude, NGLs, and power.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/insights"
            className="bg-brand-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
          >
            Read insights
          </Link>
          <Link
            href="/services"
            className="px-5 py-3 rounded-lg font-semibold border border-slate-200 bg-white hover:border-brand-500 hover:text-brand-700 transition"
          >
            View services
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="section-card">
          <h3 className="text-xl font-semibold mb-3">Market research</h3>
          <p className="text-muted">Price outlooks, fundamentals, and scenario analysis tailored to your portfolio.</p>
        </div>
        <div className="section-card">
          <h3 className="text-xl font-semibold mb-3">Valuation & technical</h3>
          <p className="text-muted">Upstream reserves, midstream assets, and infrastructure economics with defensible models.</p>
        </div>
        <div className="section-card">
          <h3 className="text-xl font-semibold mb-3">Analytics enablement</h3>
          <p className="text-muted">Custom tooling in Python and BI to operationalize decisions across teams.</p>
        </div>
      </section>
    </div>
  );
}
