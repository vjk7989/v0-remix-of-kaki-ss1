import eventData from "@/data/event.json"

export function WhyItMattersSection() {
  const vision = eventData.vision
  const items: { title: string; desc: string }[] = []
  if (Array.isArray(vision?.pillars)) {
    vision!.pillars.forEach((p: string) => items.push({ title: p.split(" - ")[0] || "Pillar", desc: p }))
  }
  if (vision?.differentiator) {
    items.push({ title: "Differentiator", desc: vision.differentiator })
  }
  return (
    <section id="why-it-matters" className="py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-wider text-red-500">Why It Matters</p>
        <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
          {vision?.mission || "Building discipline, respect, and confidence through Karate"}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {[
            "2000+ athletes",
            "20+ states",
            "asian(akf) and world(wkf) ranking judges",
            "5 lakhs cash prizes and trophies",
          ].map((t) => (
            <li key={t} className="text-xs md:text-sm text-gray-300 border border-gray-800 rounded-full px-3 py-1">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-300">
          {eventData.about_league?.objective ||
            "This championship is a platform where athletes demonstrate dedication and spirit."}
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(items.length
            ? items
            : [
                { title: "Discipline", desc: "Sharpen focus, respect, and self-mastery." },
                { title: "Opportunity", desc: "A stage for India’s best across ages." },
                { title: "Community", desc: "Unites dojos, coaches, and families." },
                { title: "Recognition", desc: "Spotlights Indian talent globally." },
              ]
          ).map((it) => (
            <li key={it.title} className="rounded-lg border border-gray-800 p-4">
              <p className="text-red-400 text-sm">{it.title}</p>
              <p className="text-gray-300 text-sm mt-1">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
