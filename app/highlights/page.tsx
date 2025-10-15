import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Highlights } from "@/components/highlights"

export default function HighlightsPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Highlights</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">What to Expect</h1>
        <div className="mt-4 max-w-3xl text-muted-foreground">
          <h2 className="text-lg md:text-xl font-semibold text-white">NSN Highlights – What to Expect</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1">
            <li>Cash prizes and trophy for winners and cash prize for runner up</li>
            <li>Live streaming for fans and families across the globe</li>
            <li>Participation from 15+ states showcasing nationwide talent</li>
            <li>2000+ athletes competing at the highest level</li>
            <li>Top athletes for exposure &amp; experience</li>
            <li>An international vibe &amp; experience like never before</li>
          </ul>
        </div>

        <div className="mt-8">
          <Highlights />
        </div>
        <div className="mt-12">
          <div className="aspect-[16/9] rounded-lg border border-zinc-800 overflow-hidden">
            <img
              src="/images/nsn-league-season1-poster.png"
              alt="NSN Karate League 2025 Season 1 official poster with organizers, ambassadors, and athletes"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
