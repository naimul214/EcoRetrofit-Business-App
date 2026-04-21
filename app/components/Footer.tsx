import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded bg-primary-500/10 border border-primary-500/30 flex items-center justify-center">
                <span className="text-primary-400 font-bold text-lg leading-none">E</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">EcoRetrofit</span>
            </Link>
            <p className="text-slate-400 text-base max-w-xs">
              AI-driven energy optimization service for commercial buildings in Canada.
            </p>
            <div className="flex space-x-6">
              {/* Social links could go here */}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Platform</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/solution" className="text-base text-slate-400 hover:text-primary-400 transition-colors">
                      Solution
                    </Link>
                  </li>
                  <li>
                    <Link href="/sustainability" className="text-base text-slate-400 hover:text-primary-400 transition-colors">
                      Sustainability
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-300 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/faq" className="text-base text-slate-400 hover:text-primary-400 transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-base text-slate-400 hover:text-primary-400 transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col items-center justify-between sm:flex-row">
          <p className="text-base text-slate-400 xl:text-center">
            &copy; 2026 EcoRetrofit — Powering the Next Generation of Canadian Infrastructure.
          </p>
          <div className="mt-4 flex items-center gap-5 sm:mt-0">
            <Link href="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
