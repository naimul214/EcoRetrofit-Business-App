import Link from 'next/link';

export default function Sustainability() {
  return (
    <main className="flex-1 flex flex-col py-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Paving the Way to Net-Zero
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            We empower Canadian real estate portfolios to hit aggressive ESG targets with verifiable data and dramatic emission reductions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-[40px]" />
              <h2 className="text-3xl font-bold text-white mb-4">20% Energy Reduction</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                On average, our autonomous control systems reduce total building HVAC energy consumption by up to 20% within the first 6 months of active deployment.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 bg-slate-700/50 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-400 h-full w-[80%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
                <span className="font-bold text-primary-400">Target</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Automated ESG Reporting</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Stop guessing your scope 1 and 2 emissions. EcoRetrofit provides real-time, audit-ready ESG dashboards that conform to Canadian and international reporting standards.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <svg className="w-6 h-6 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Instantly export monthly carbon reduction figures.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <svg className="w-6 h-6 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Track peak demand shaving across multiple properties.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
