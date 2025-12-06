export default function About() {
  return (
    <div className="py-10 space-y-8">
      <div className="section-card space-y-4">
        <h1 className="text-4xl font-bold">About our firm</h1>
        <p className="text-lg text-muted">
          We are an energy-focused advisory and analytics team helping investors, operators, and lenders navigate commodity volatility and asset complexity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="section-card space-y-3">
          <h2 className="text-2xl font-semibold">What we do</h2>
          <p className="text-muted">
            We specialize in market analytics, commodity valuation, and technical advisory services for upstream, midstream, and financial institutions.
          </p>
          <p className="text-muted">
            Our team blends engineering depth with quantitative modeling to deliver insights you can act on.
          </p>
        </div>
        <div className="section-card space-y-3">
          <h2 className="text-2xl font-semibold">Where we focus</h2>
          <ul className="space-y-2 text-muted list-disc list-inside">
            <li>Natural gas, crude oil, NGLs, and power markets</li>
            <li>Scenario-based pricing and risk analytics</li>
            <li>Project finance models and asset diligence</li>
            <li>Custom dashboards and automation for decision teams</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
