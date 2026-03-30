export default function HomePage() {
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
                    <p className="mt-1 text-2xl font-semibold leading-snug">Hunts Café, Cox Lane, Chessington</p>
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
               <a 
  href="https://forms.gle/iXbqurve6XiyWnJb7"
  target="_blank"
  className="mt-4 block text-center rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-900"
>
  Register interest
</a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
