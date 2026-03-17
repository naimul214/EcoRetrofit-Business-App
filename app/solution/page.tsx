import Link from 'next/link';

export default function Solution() {
  return (
    <main className="flex-1 flex flex-col py-16 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Autonomous Control System
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Our machine learning models integrate seamlessly with your existing hardware. They adjust building environments predictively, analyzing real-time occupancy and harsh Canadian weather patterns before they hit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-shadow">
            <div className="w-14 h-14 bg-primary-500/20 text-primary-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Deep Learning Engine</h3>
            <p className="text-slate-400 leading-relaxed">
              Continuously maps out energy consumption behaviors across thousands of zones within your building to find hidden efficiencies.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-shadow">
            <div className="w-14 h-14 bg-primary-500/20 text-primary-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Predictive Weather Modeling</h3>
            <p className="text-slate-400 leading-relaxed">
              Integrates with local meteorology grids to pre-heat or pre-cool your facilities ahead of extreme winter freezes or summer heatwaves.
            </p>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-xl shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-shadow">
            <div className="w-14 h-14 bg-primary-500/20 text-primary-400 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Real-Time Micro Adjustments</h3>
            <p className="text-slate-400 leading-relaxed">
              Adjusts thousands of HVAC data points every 5 minutes based on live occupancy flows, minimizing waste in empty spaces.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/faq" className="inline-block bg-transparent text-primary-400 border border-primary-500 hover:bg-primary-500/10 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Read Compatibility FAQ
          </Link>
        </div>
      </div>
    </main>
  );
}
