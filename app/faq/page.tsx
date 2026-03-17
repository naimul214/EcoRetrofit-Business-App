export default function FAQ() {
  const faqs = [
    {
      question: "How does the system integrate with our existing building hardware?",
      answer: "EcoRetrofit is a software-first approach. We connect directly to your existing BMS (Building Management System) gateways via BACnet or similar protocols. No new thermostats, sensors, or heavy HVAC retrofits are required."
    },
    {
      question: "What happens during internet outages?",
      answer: "Safety First. If the EcoRetrofit AI loses connection to the cloud, the system immediately returns control to your local BMS fallback schedules. The building simply operates as it did before we were installed."
    },
    {
      question: "How is our building data secured?",
      answer: "Data privacy is our top priority. We use end-to-end encryption for all telemetry data sent to our cloud. Our machine learning models only process environmental variables, equipment statuses, and anonymized occupancy trends."
    },
    {
      question: "What is the typical ROI timeline?",
      answer: "Because there is zero upfront capital expenditure for new physical hardware, most properties are cash-flow positive within the first 3 months. Full system payback is typically measured in months, not years."
    }
  ];

  return (
    <main className="flex-1 flex flex-col py-16 px-4">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-400">Everything you need to know about the platform.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 transition hover:border-slate-600">
              <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-slate-400 leading-relaxed text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
