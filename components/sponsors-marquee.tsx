"use client"

const sponsors = [
  { name: "Sponsor A", src: "/platinum-sponsor-logo.jpg" },
  { name: "Sponsor B", src: "/gold-sponsor-logo.png" },
  { name: "Sponsor C", src: "/abstract-partner-logo.png" },
  { name: "Sponsor D", src: "/abstract-tech-logo.png" },
]

export function SponsorsMarquee() {
  const items = [...sponsors, ...sponsors]
  return (
    <div className="relative overflow-hidden border border-zinc-800 rounded-lg bg-zinc-950">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none" />
      <div className="flex items-center gap-8 py-6 animate-[marquee_20s_linear_infinite] will-change-transform">
        {items.map((s, i) => (
          <img key={s.name + i} src={s.src || "/placeholder.svg"} alt={s.name} className="h-12 w-auto opacity-90" />
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
