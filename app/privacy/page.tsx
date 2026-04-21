export default function PrivacyPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#000000] px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <header className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">EcoRetrofit-AI</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
            This Privacy Policy explains how EcoRetrofit-AI collects, uses, stores, and protects information related
            to our B2B energy optimization platform.
          </p>
          <p className="mt-2 text-xs text-gray-400">Last Updated: April 20, 2026</p>
        </header>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <div className="space-y-8 text-sm leading-8 text-gray-200 sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-gray-50">1. Information We Collect</h2>
              <p className="mt-3">We collect the following categories of information:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300 marker:text-gray-500">
                <li>
                  <span className="font-medium text-gray-100">User Account Data:</span> First Name, Last Name, Work
                  Email, and Company details submitted through our Contact form.
                </li>
                <li>
                  <span className="font-medium text-gray-100">Google Analytics 4 Data:</span> cookie identifiers,
                  device and browser information, page interactions, and session-level usage data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">2. How We Use Data</h2>
              <p className="mt-3">We use collected data to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300 marker:text-gray-500">
                <li>Provide and improve energy optimization services for commercial buildings.</li>
                <li>Trigger transactional communications, including onboarding emails sent via Resend.</li>
                <li>Analyze web traffic and product usage patterns through Google Analytics 4.</li>
                <li>Support platform reliability, security monitoring, and service diagnostics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">3. Data Storage and Security</h2>
              <p className="mt-3">
                Personal and operational data are stored securely in our PostgreSQL database and managed through
                Prisma. We apply reasonable technical and organizational safeguards to reduce unauthorized access,
                disclosure, or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">4. Service Providers</h2>
              <p className="mt-3">
                We may share limited data with vetted service providers only where necessary to operate the platform,
                including analytics and transactional email delivery partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">5. User Rights and Cookie Policy</h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of personal information associated with your
                account. You may also manage cookie preferences through browser controls and cookie settings where
                available.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">6. PIPEDA Compliance</h2>
              <p className="mt-3">
                EcoRetrofit-AI handles personal information in accordance with PIPEDA (Personal Information Protection
                and Electronic Documents Act) and related Canadian privacy obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">7. Contact for Privacy Requests</h2>
              <p className="mt-3">
                For privacy inquiries or deletion requests, contact{' '}
                <a
                  href="mailto:privacy@ecoretrofit-ai.com"
                  className="font-medium text-[#2E7D32] transition-colors hover:text-[#3C9141]"
                >
                  privacy@ecoretrofit-ai.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
