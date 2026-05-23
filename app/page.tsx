"use client";

import RegistrationForm from "./components/RegistrationForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f0e6] text-[#062d21]">
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-5 md:px-10 md:py-12">
        <div className="overflow-hidden rounded-[2rem] border border-[#003f2f]/20 bg-[#fffaf0] shadow-sm">
          <div className="flex flex-col gap-6 px-5 py-6 sm:gap-8 sm:px-6 sm:py-8 md:grid md:grid-cols-[1.1fr_0.9fr] md:items-start md:px-10 md:py-12">

            {/* ── LEFT TOP: Hero + Sir Ed + Re-launch ── */}
            <div className="md:col-start-1 md:row-start-1">
              <p className="inline-block rounded-sm bg-[#003f2f] px-2 py-1 text-[10px] font-black uppercase tracking-[0.08em] text-white sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.18em]">
                Chessington Industrial Estate
              </p>

              <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight text-[#003f2f] sm:mt-6 sm:text-5xl md:text-7xl">
                Business <br />
                Community <br />
                Forum
              </h1>

              <p className="mt-3 text-base font-black text-[#003f2f] sm:mt-5 sm:text-lg">
                Building Connections • Sharing Challenges • Creating Opportunities
              </p>

              <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[#111111] sm:mt-6 sm:text-lg sm:leading-8">
                Join local businesses, community partners and organisations for a focused forum to
                discuss shared challenges, explore collaboration and help shape the future of
                Chessington Industrial Estate.
              </p>

              <div className="mt-6 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-[#003f2f]/10 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#003f2f]">
                  Special host
                </p>

                <div className="mt-5 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-start">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Official_portrait_of_Ed_Davey_MP%2C_2024_%28cropped%29.jpg"
                    alt="Sir Ed Davey MP"
                    className="w-full rounded-2xl sm:h-[220px] sm:object-cover sm:rounded-3xl md:h-[280px] md:w-[220px]"
                  />

                  <div>
                    <h2 className="text-2xl font-black text-[#003f2f] sm:text-3xl">Sir Ed Davey MP</h2>

                    <p className="mt-2 text-sm font-bold text-[#111111]">
                      Leader of the Liberal Democrats and MP for Kingston and Surbiton
                    </p>

                    <p className="mt-4 text-base leading-8 text-[#111111]">
                      As Special Host, Sir Ed Davey MP will hear directly from local businesses,
                      community organisations and stakeholders about the challenges, opportunities
                      and future priorities for Chessington Industrial Estate.
                    </p>

                    <p className="mt-4 text-base leading-8 text-[#111111]">
                      This is your opportunity to raise important local issues that matter from
                      infrastructure and collaboration to sustainability and growth, share experiences
                      and help shape future support and engagement across the estate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block mt-6 rounded-2xl bg-[#003f2f] p-5 text-white">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a6bd19]">
                  Building on the successful re-launch
                </p>
                <p className="mt-3 text-base leading-7">
                  This is the second in a new series of community forums, continuing the regular
                  forums that brought the community together before COVID. The first forum on 6 May
                  2026 highlighted collaboration, waste and materials, skills, infrastructure and future
                  networking as key priorities.
                </p>
              </div>
            </div>

            {/* Registration form — mobile only, sits right after Sir Ed */}
            <div className="md:hidden">
              <RegistrationForm />
            </div>

            {/* Building on the successful re-launch — mobile only, after registration form */}
            <div className="md:hidden rounded-2xl bg-[#003f2f] p-5 text-white">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a6bd19]">
                Building on the successful re-launch
              </p>
              <p className="mt-3 text-base leading-7">
                This is the second in a new series of community forums, continuing the regular
                forums that brought the community together before COVID. The first forum on 6 May
                2026 highlighted collaboration, waste and materials, skills, infrastructure and future
                networking as key priorities.
              </p>
            </div>

            {/* ── RIGHT SIDEBAR: spans both rows on desktop ── */}
            <aside className="space-y-4 sm:space-y-5 md:col-start-2 md:row-start-1 md:row-span-2">
              <div className="rounded-3xl border-2 border-[#a6bd19] bg-[#d8e66d] p-6">
                <p className="text-3xl font-black italic text-[#003f2f]">You're invited!</p>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#003f2f]">
                  Your voice helps shape local policy, future support and practical action for
                  businesses across Chessington Industrial Estate.
                </p>
              </div>

              <div className="rounded-3xl bg-[#003f2f] p-6 text-white">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a6bd19]">
                  Event details
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#d8e66d]">Date</p>
                    <p className="mt-1 text-2xl font-black">18 June 2026</p>
                    <p className="text-sm text-white/80">Thursday</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#d8e66d]">Time</p>
                    <p className="mt-1 text-2xl font-black">11:00 AM – 12:00 PM</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#d8e66d]">Venue</p>
                    <p className="mt-1 text-xl font-black leading-snug">
                      King George's Hall & Indoor Bowls Club
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/80">
                      Jubilee Way, Chessington KT6 7NA
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#a6bd19] p-4 text-[#003f2f]">
                    <p className="text-lg font-black">Refreshments available</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[#003f2f]/10 bg-white p-4 shadow-sm sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#003f2f]">
                  Forum focus
                </p>
                <ul className="mt-4 space-y-3 text-sm font-semibold leading-7 text-[#111111] sm:text-base">
                  <li>• Shared business challenges</li>
                  <li>• Collaboration and local networking.</li>
                  <li>• Waste, materials and sustainability.</li>
                  <li>• Skills, staffing and training.</li>
                  <li>• Estate improvements and future activity.</li>
                </ul>
              </div>

              <div className="hidden md:block">
                <RegistrationForm />
              </div>

              <div className="rounded-3xl bg-[#003f2f] p-4 text-white shadow-sm sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#a6bd19]">
                  Delivered by
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Green Skills & Employability Project",
                    "University of Roehampton",
                    "Roehampton Sustainable Futures Hub",
                    "The Community Brain",
                  ].map((name) => (
                    <div key={name} className="rounded-2xl bg-white/10 p-4">
                      <p className="font-bold text-sm sm:text-base">{name}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 break-words border-t border-white/20 pt-5 text-sm leading-7 text-white/90">
                  <p>
                    <span className="font-bold text-[#d8e66d]">Websites:</span>
                    <br />
                    <a href="https://roehamptonsustainablefutureshub.co.uk" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      roehamptonsustainablefutureshub.co.uk
                    </a>
                    <br />
                    <a href="https://thecommunitybrain.org" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      thecommunitybrain.org
                    </a>
                  </p>

                  <p>
                    <span className="font-bold text-[#d8e66d]">Instagram:</span>
                    <br />
                    <a href="https://www.instagram.com/greenskills_" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      @greenskills_
                    </a>
                    <br />
                    <a href="https://www.instagram.com/roehamptonsustainablefutures" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      @roehamptonsustainablefutures
                    </a>
                    <br />
                    <a href="https://www.instagram.com/communitybrain" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                      @communitybrain
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* ── LEFT BOTTOM: Why attend + Yellow Pages + Forum 1 ── */}
            <div className="space-y-8 md:col-start-1 md:row-start-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#003f2f]/10">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#003f2f]">
                  Why attend?
                </p>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {[
                    "Meet other businesses on the estate",
                    "Discuss shared challenges and opportunities",
                    "Explore collaboration and cost-saving opportunities",
                    "Explore practical ideas for improving the estate",
                    "Discover future opportunities and local collaboration",
                    "Help shape future activity across Chessington Industrial Estate",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#003f2f]/10 bg-[#f5f0e6] p-4 text-sm font-semibold leading-7 text-[#111111]"
                    >
                      ✓ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-[#003f2f] p-4 text-white shadow-sm sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#a6bd19] sm:text-sm">
                  Your voice, your impact
                </p>
                <h2 className="mt-3 text-2xl font-black">
                  Chessington Industrial Estate Yellow Pages
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
                  Businesses that register and take part in the forum will have the opportunity to be
                  included in a new Yellow Pages-style business directory connecting businesses,
                  services, suppliers, skills and collaboration opportunities across the estate.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-[#003f2f]/10 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#003f2f]">
                  This is what businesses told us at Forum 1
                </p>

                <div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {[
                    {
                      title: "Collaboration",
                      body: "Businesses want stronger connections across the estate.",
                    },
                    {
                      title: "Waste & Materials",
                      body: "There is interest in local reuse, shared recycling and material exchange.",
                    },
                    {
                      title: "Skills & Staffing",
                      body: "Businesses highlighted the need for practical skills, training and recruitment support.",
                    },
                    {
                      title: "Estate Improvements",
                      body: "Infrastructure, roads, parking and local communication remain important priorities.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl bg-[#f5f0e6] p-4 sm:p-5 shadow-sm">
                      <h3 className="font-black text-[#003f2f]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#111111]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
