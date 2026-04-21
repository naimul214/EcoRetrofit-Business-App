"use client";

import { FormEvent, useState } from "react";

type ContactFormState = {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
};

const initialState: ContactFormState = {
  firstName: "",
  lastName: "",
  workEmail: "",
  company: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit contact request.");
      }

      setIsSuccess(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClassName =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-gray-50 placeholder:text-gray-400 outline-none backdrop-blur-md transition-all duration-300 ease-in-out focus:border-[#2E7D32] focus:ring-1 focus:ring-[#2E7D32] hover:border-white/20";

  return (
    <main className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-[#000000] px-6 py-14 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(46,125,50,0.16),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.06),_transparent_30%),linear-gradient(180deg,_rgba(255,255,255,0.04),_transparent_35%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
          <div className="mb-10 space-y-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">EcoRetrofit-AI</p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-gray-50 sm:text-5xl">
              Contact our team & start saving Energy!.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-gray-300 sm:text-base">
              Tell us who you are and we’ll open the right path for zero-capex retrofitting, energy analysis, and next-step support.
            </p>
          </div>

          {isSuccess ? (
            <div className="rounded-3xl border border-[#2E7D32]/35 bg-[#2E7D32]/10 p-8 text-center shadow-2xl backdrop-blur-md">
              <div className="mx-auto mb-5 h-12 w-12 rounded-full border border-[#2E7D32]/40 bg-[#2E7D32]/15" />
              <h2 className="text-2xl font-semibold text-gray-50">Request received</h2>
              <p className="mt-3 text-sm leading-7 text-gray-200 sm:text-base">
                We saved your details and sent the welcome email. Our team will review your request shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormData(initialState);
                  setIsSuccess(false);
                  setError(null);
                }}
                className="mt-7 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-gray-50 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-white/10"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-200">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(event) => setFormData((prev) => ({ ...prev, firstName: event.target.value }))}
                    className={inputClassName}
                    placeholder="Alex"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-200">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(event) => setFormData((prev) => ({ ...prev, lastName: event.target.value }))}
                    className={inputClassName}
                    placeholder="Morgan"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="workEmail" className="text-sm font-medium text-gray-200">
                    Work Email
                  </label>
                  <input
                    id="workEmail"
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(event) => setFormData((prev) => ({ ...prev, workEmail: event.target.value }))}
                    className={inputClassName}
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-200">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))}
                    className={inputClassName}
                    placeholder="Northline Properties"
                  />
                </div>
              </div>

              {error ? (
                <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full bg-[#2E7D32] px-6 py-3.5 text-sm font-semibold text-gray-50 shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#25682A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Submitting..." : "Start Contact Flow"}
              </button>
            </form>
          )}
        </section>

        <aside className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-10 lg:p-12">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gray-400">What happens next</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-50">A more direct path to energy savings</h2>
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 bg-black/20 p-5">
              <div>
                <p className="text-sm font-medium text-gray-200">1. We capture your profile</p>
                <p className="mt-1 text-sm leading-7 text-gray-400">Your contact details are stored securely as a new Property Manager record.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">2. We send the welcome experience</p>
                <p className="mt-1 text-sm leading-7 text-gray-400">A branded welcome email is delivered through Resend right after submission.</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-200">3. We follow up with the right team</p>
                <p className="mt-1 text-sm leading-7 text-gray-400">Your request is routed for onboarding and next-step support.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-2xl font-semibold text-gray-50">Zero</p>
                <p className="mt-1 text-sm text-gray-400">upfront hardware cost</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-2xl font-semibold text-gray-50">24/7</p>
                <p className="mt-1 text-sm text-gray-400">energy intelligence</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
