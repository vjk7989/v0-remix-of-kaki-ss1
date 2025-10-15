import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SponsorsMarquee } from "@/components/sponsors-marquee"

export default function SponsorsPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Sponsors</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Powered by Our Partners</h1>
        <div className="mt-8">
          <SponsorsMarquee />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
