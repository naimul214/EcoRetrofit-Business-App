export default function TermsPage() {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#000000] px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-4xl space-y-6">
        <header className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">EcoRetrofit-AI</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">Terms of Service</h1>
          <p className="mt-4 text-sm leading-7 text-gray-300 sm:text-base">
            These Terms of Service govern your use of EcoRetrofit-AI, a B2B prop-tech platform designed for
            commercial building energy optimization in Canada.
          </p>
          <p className="mt-2 text-xs text-gray-400">Last Updated: April 20, 2026</p>
        </header>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10">
          <div className="space-y-8 text-sm leading-8 text-gray-200 sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-gray-50">1. Acceptance of Terms</h2>
              <p className="mt-3">
                By accessing or using EcoRetrofit-AI, you agree to be bound by these Terms of Service and all
                applicable laws. If you do not agree, you must discontinue use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">2. Eligibility and Authorized Use</h2>
              <p className="mt-3">
                EcoRetrofit-AI is intended for business users, including property managers, operators, and related
                commercial stakeholders. You are responsible for ensuring that all account information and building
                data submitted to the platform are accurate and authorized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">3. Acceptable Use</h2>
              <p className="mt-3">You agree not to misuse the platform. Prohibited actions include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300 marker:text-gray-500">
                <li>Attempting to reverse engineer, decompile, or otherwise extract EcoRetrofit-AI models.</li>
                <li>Interfering with system integrity, performance, or security controls.</li>
                <li>Using the service for unlawful, fraudulent, or unauthorized surveillance purposes.</li>
                <li>Submitting malicious code, harmful payloads, or inaccurate operational data intentionally.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">4. Intellectual Property</h2>
              <p className="mt-3">
                EcoRetrofit retains all rights, title, and interest in and to the software, AI models, platform
                design, documentation, and related intellectual property. No ownership rights are transferred to you
                through use of the platform, except for the limited right to access the service under these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">5. Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, EcoRetrofit is not liable for indirect, incidental, special,
                consequential, or punitive damages arising from your use of the platform.
              </p>
              <p className="mt-3">
                Without limiting the foregoing, EcoRetrofit is not liable for physical hardware failures, HVAC
                downtime, equipment degradation, or building control malfunctions at client facilities, including
                scenarios where platform recommendations are implemented or not implemented.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">6. Privacy and PIPEDA Compliance</h2>
              <p className="mt-3">
                We process personal information in accordance with Canadian privacy requirements, including PIPEDA
                (Personal Information Protection and Electronic Documents Act). Our data handling practices are further
                described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">7. Suspension and Termination</h2>
              <p className="mt-3">
                We may suspend or terminate access for violations of these Terms, security concerns, or legal
                obligations. You may discontinue use of the platform at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">8. Governing Law</h2>
              <p className="mt-3">
                These Terms are governed by the laws of the Province of Ontario and the applicable laws of Canada.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-50">9. Contact</h2>
              <p className="mt-3">
                Questions regarding these Terms can be directed to{' '}
                <a
                  href="mailto:legal@ecoretrofit-ai.com"
                  className="font-medium text-[#2E7D32] transition-colors hover:text-[#3C9141]"
                >
                  legal@ecoretrofit-ai.com
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
