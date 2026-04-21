import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-slate-900/50 backdrop-blur-md border-b border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-primary-500/10 border border-primary-500/30 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <span className="text-primary-400 font-bold text-lg leading-none">E</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">EcoRetrofit</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/solution" className="text-slate-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors">
              Solution
            </Link>
            <Link href="/sustainability" className="text-slate-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors">
              Sustainability
            </Link>
            <Link href="/faq" className="text-slate-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-slate-900 bg-primary-500 hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-slate-900 transition-colors">
              Get Started
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button className="text-slate-300 hover:text-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
