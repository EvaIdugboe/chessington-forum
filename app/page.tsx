"use client";

import RegistrationForm from "./components/RegistrationForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-sm">
          <div className="grid gap-8 bg-stone-50 px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-12">
            <div>
              <p className="inline-block rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Chessington Industrial Estate
              </p>

              <h1 className="mt-6 text-5xl font-black uppercase leading-none tracking-tight text-emerald-950 md:text-7xl">
                Business <br />
                Community <br />
                Forum
              </h1>

              <p className="mt-5 text-lg font-semibold text-emerald-900">
                Building Connections • Sharing Challenges • Creating Opportunities
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Join local businesses, community partners and organisations for the second Business
                Community Forum focused on shared challenges, collaboration, skills and the future of
                Chessington Industrial Estate.
              </p>

              <div className="mt-6 rounded-3xl bg-emerald-900 p-5 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-200">
                  Building on Forum 1
                </p>
                <p className="mt-3 text-base leading-7">
                  The first forum, held on 6 May 2026, brought together local businesses, workers and
                  community partners. Businesses identified key priorities around collaboration, waste
                  and materials, skills, infrastructure and future networking.
                </p>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="rounded-3xl border border-lime-300 bg-lime-100 p-6">
                <p className="text-2xl font-black text-emerald-950">You’re invited</p>
                <p className="mt-3 text-sm leading-7 text-emerald-900">
                  This is the second in a new series of community forums, continuing regular forums
                  that brought the community together before COVID.
                </p>
              </div>

              <div className="rounded-3xl bg-emerald-900 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-200">
                  Event details
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Date</p>
                    <p className="mt-1 text-2xl font-bold">18 June 2026</p>
                    <p className="text-sm text-emerald-100">Thursday</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Time</p>
                    <p className="mt-1 text-2xl font-bold">11:00 AM – 12:00 PM</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-emerald-200">Venue</p>
                    <p className="mt-1 text-xl font-bold leading-snug">
                      King George’s Hall & Indoor Bowls Club
                    </p>
                    <p className="mt-1 text-sm leading-6 text-emerald-100">
                      Jubilee Way, Chessington KT6 7NA
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-lg font-bold text-lime-200">Refreshments available</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="grid gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-10">
            <div className="space-y-8">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Why attend?
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    "Meet other businesses across the estate",
                    "Discuss shared challenges and opportunities",
                    "Explore collaboration and cost-saving ideas",
                    "Share practical ideas for improving the estate",
                    "Discover future green skills and business opportunities",
                    "Help shape future activity across Chessington Industrial Estate",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-7 text-slate-700">
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-emerald-900 p-6 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-200">
                  Your voice, your impact
                </p>
                <h2 className="mt-3 text-2xl font-bold">Chessington Industrial Estate Yellow Pages</h2>
                <p className="mt-4 text-base leading-8 text-emerald-50">
                  Businesses that register and take part in the forum will have the opportunity to be
                  included in a new Yellow Pages-style business directory connecting businesses,
                  services, suppliers, skills and collaboration opportunities across the estate.
                </p>
              </div>

              <div className="rounded-3xl bg-stone-50 p-6 shadow-sm ring-1 ring-stone-200">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  What businesses told us at Forum 1
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Collaboration",
                      body: "Businesses want stronger connections across the estate.",
                    },
                    {
                      title: "Waste & materials",
                      body: "There is interest in local reuse, shared recycling and material exchange.",
                    },
                    {
                      title: "Skills & staffing",
                      body: "Businesses highlighted the need for practical skills, training and recruitment support.",
                    },
                    {
                      title: "Estate improvements",
                      body: "Infrastructure, roads, parking and local communication remain important priorities.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white p-5 shadow-sm">
                      <h3 className="font-bold text-emerald-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-stone-200">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Special host
                </p>

                  <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-start">
                    
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Official_portrait_of_Ed_Davey_MP%2C_2024_%28cropped%29.jpg"
                      alt="Sir Ed Davey MP"
                      className="h-[280px] w-full rounded-3xl object-cover md:w-[220px]"
                    />

                    <div>
                      <h2 className="text-3xl font-black text-emerald-950">
                        Sir Ed Davey MP
                      </h2>

                      <p className="mt-2 text-sm font-semibold text-slate-700">
                        Leader of the Liberal Democrats and MP for Kingston and Surbiton
                      </p>

                      <p className="mt-4 text-base leading-8 text-slate-700">
                        Sir Ed Davey MP will be joining the forum as Special Host to hear directly
                        from local businesses about the opportunities, challenges and future of
                        Chessington Industrial Estate.
                      </p>

                      <p className="mt-4 text-base leading-8 text-slate-700">
                        This is an opportunity for businesses to raise the issues that matter locally,
                        discuss infrastructure, collaboration, sustainability and growth challenges,
                        and help shape future support and engagement across the estate.
                      </p>
                    </div>
                  </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
                  Forum focus
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                  <li>• Shared business challenges</li>
                  <li>• Collaboration and local networking</li>
                  <li>• Waste, materials and sustainability</li>
                  <li>• Skills, staffing and training</li>
                  <li>• Estate improvements and future activity</li>
                </ul>
              </div>

              <RegistrationForm />

              <div className="rounded-3xl bg-emerald-950 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-200">
                  Delivered by
                </p>
                <p className="mt-4 text-sm leading-7">
                  Green Skills & Employability Project<br />
                  University of Roehampton<br />
                  Roehampton Sustainable Futures Hub<br />
                  The Community Brain
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}