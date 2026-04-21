import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">EcoRetrofit AI Engine Active</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6">
            The Future of Building Intelligence is <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-200">Autonomous.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            EcoRetrofit uses advanced AI to optimize HVAC and lighting in real-time, reducing energy costs for Canadian commercial real estate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/solution"
              className="bg-primary-500 text-slate-900 hover:bg-primary-400 px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transform hover:-translate-y-1"
            >
              Calculate Your Savings
            </Link>
            <Link
              href="/sustainability"
              className="bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:-translate-y-1"
            >
              View Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">Up to 25%</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">HVAC Energy Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Autonomous Optimization</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Zero</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Upfront Hardware Costs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">Net-Zero</div>
              <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">ESG Goal Alignment</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
