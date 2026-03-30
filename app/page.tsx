"use client";

import { useState } from "react";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-stone-100 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-10 md:px-10 md:py-14">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-sm">
          <div className="bg-emerald-800 px-6 py-8 text-white md:px-10 md:py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
              Chessington Industrial Estate
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
              Community Forum
            </h1>
            <p className="mt-5 max-w-2xl text-lg italic text-emerald-50 md:text-2xl">
              Let’s shape the future of our industrial community together.
            </p>
          </div>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
            <div>
              <div className="rounded-3xl bg-stone-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  About the event
                </p>
                <p className="mt-4 text-base leading-8 text-slate-700 md:text-lg">
                  Join local businesses, community partners and researchers for an informal forum at
                  Chessington Industrial Estate. This is a space to meet each other, talk through shared
                  issues, and explore practical opportunities for collaboration across the estate.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Meet each other",
                    body: "Connect with other businesses and people across the estate.",
                  },
                  {
                    title: "Talk issues",
                    body: "Share challenges, priorities and ideas affecting your business.",
                  },
                  {
                    title: "Create opportunities",
                    body: "Help shape future activities, collaboration and practical next steps.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-stone-200 bg-white p-5 shadow-sm"
                  >
                    <h2 className="text-xl font-semibold text-emerald-900">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  What to expect
                </p>
                <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                  <li>• Informal conversations over food and refreshments</li>
                  <li>• Light-touch engagement boards and interactive prompts</li>
                  <li>• Discussion on collaboration, sustainability and future opportunities</li>
                  <li>• A chance to help shape what happens next on the estate</li>
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-emerald-800 p-6 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
                  Event details
                </p>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Time</p>
                    <p className="mt-1 text-2xl font-semibold">17:00 – 18:00</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Date</p>
                    <p className="mt-1 text-2xl font-semibold">Thursday 26th March</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Location</p>
                    <p className="mt-1 text-2xl font-semibold leading-snug">
                      Hunts Café, Cox Lane, Chessington
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Why attend
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <li>• Share your perspective on the estate</li>
                  <li>• Discover common concerns and opportunities</li>
                  <li>• Contribute ideas for future forums and activities</li>
                  <li>• Help build a stronger local business community</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-dashed border-emerald-300 bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Register interest
                </p>

                <form
                  action="https://docs.google.com/forms/d/e/1FAIpQLSeLF2yM-PJSJ3kTWFQvdYYvHzhNkgs2NOJg3N0Vj5ef0EZxVw/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  onSubmit={() => setSubmitted(true)}
                  className="mt-4 space-y-4 text-left"
                >
                  <input
                    name="entry.1806096104"
                    type="text"
                    placeholder="Full name"
                    required
                    className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
                  />

                  <input
                    name="entry.1713689042"
                    type="text"
                    placeholder="Business name"
                    required
                    className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
                  />

                  <input
                    name="entry.1315837314"
                    type="email"
                    placeholder="Email address"
                    required
                    className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
                  />

                  <div className="rounded-2xl border border-stone-300 p-4">
                    <p className="mb-3 text-sm font-semibold text-emerald-800">
                      Are you based in the Chessington Industrial Estate?
                    </p>

                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="entry.1816711562"
                        value="Yes"
                        required
                      />
                      <span>Yes</span>
                    </label>

                    <label className="mt-2 flex items-center gap-2">
                      <input
                        type="radio"
                        name="entry.1816711562"
                        value="No"
                      />
                      <span>No</span>
                    </label>
                  </div>

                  <div className="rounded-2xl border border-stone-300 p-4">
                    <p className="mb-3 text-sm font-semibold text-emerald-800">
                      What are your main interests?
                    </p>

                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="entry.968516806"
                        value="Collaboration with other businesses"
                      />
                      <span>Collaboration with other businesses</span>
                    </label>

                    <label className="mt-2 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="entry.968516806"
                        value="Waste & materials"
                      />
                      <span>Waste & materials</span>
                    </label>

                    <label className="mt-2 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="entry.968516806"
                        value="Sustainability / green skills"
                      />
                      <span>Sustainability / green skills</span>
                    </label>

                    <label className="mt-2 flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="entry.968516806"
                        value="Networking"
                      />
                      <span>Networking</span>
                    </label>

                    <label className="mt-3 block">
                      <div className="mb-2 flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="entry.968516806"
                          value="__other_option__"
                        />
                        <span>Other</span>
                      </div>

                      <input
                        type="text"
                        name="entry.968516806.other_option_response"
                        placeholder="Please specify"
                        className="w-full rounded-2xl border border-stone-300 px-4 py-3 outline-none focus:border-emerald-700"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900"
                  >
                    Register interest
                  </button>

                  {submitted && (
                    <p className="text-sm font-medium text-emerald-800">
                      Thank you. Your registration has been submitted.
                    </p>
                  )}
                </form>

                <iframe name="hidden_iframe" style={{ display: "none" }} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}