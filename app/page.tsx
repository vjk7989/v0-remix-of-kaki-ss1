import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { SiteFooter } from "@/components/site-footer"
import { WhyItMattersSection } from "@/components/why-it-matters"
import { ChiefGuestSection } from "@/components/chief-guest"
import { SponsorsMarquee } from "@/components/sponsors-marquee"
import { TestimonialsList } from "@/components/testimonials-list"
import { AddToCalendarVenueSection } from "@/components/add-to-calendar-venue"
import { ChiefAdvisorSection } from "@/components/chief-advisor"
import { BrandAmbassadorSection } from "@/components/brand-ambassador"

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section id="home" className="flex-1">
        <Hero />
      </section>
      <section id="highlights" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Highlights />
        </div>
      </section>

      <WhyItMattersSection />

      <ChiefGuestSection />

      <ChiefAdvisorSection />

      <BrandAmbassadorSection />

      

      

      <AddToCalendarVenueSection />

      <SiteFooter />
    </main>
  )
}
