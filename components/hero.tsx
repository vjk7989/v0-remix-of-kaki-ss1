import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import eventData from "@/data/event.json"

const googleCalendarUrl = (() => {
  // Nov 15, 2025 09:00 IST to Nov 16, 2025 18:00 IST (approx)
  const dates = "20251115T033000Z/20251116T123000Z"
  const text = encodeURIComponent(eventData.event?.name || "India's Biggest Karate Championship 2025")
  const details = encodeURIComponent(`${eventData.event?.location || "Hyderabad, India"}. Organized by NSN.`)
  const location = encodeURIComponent(eventData.event?.location || "Hyderabad, India")
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`
})()

export function Hero() {
  const location = eventData.event?.location || "Hyderabad, India"
  const datesLabel = eventData.event?.dates?.event_dates || "Nov 15–16, 2025"
  const title = eventData.event?.name || "India's Biggest Karate Event — First Time in Hyderabad"
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/images/karate-hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
        }}
      />
      <div className="container mx-auto px-4">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-red-400">
              {location} • {datesLabel}
            </p>
            <h1 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-semibold text-white text-balance">{title}</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl text-pretty">
              Two days of action-packed competition with international judges, workshops, and performances. Organized by{" "}
              <span className="font-medium text-white">NSN</span>.
            </p>

            <div className="mt-6">
              <CountdownTimer target={new Date("2025-11-15T00:00:00+05:30")} />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link href="#register">Register Now</Link>
              </Button>
              <Button asChild variant="secondary" className="bg-white text-black hover:bg-zinc-200">
                <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer">
                  Add to Calendar
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-600 text-white hover:bg-red-600/10 bg-transparent"
              >
                <Link href="#watch">Watch Live</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <figure className="overflow-hidden rounded-lg ring-1 ring-red-600/40 border border-zinc-800">
                
                <figcaption className="px-3 py-2 text-xs text-gray-300">Focus and precision in Kata.</figcaption>
              </figure>
              <figure className="overflow-hidden rounded-lg ring-1 ring-red-600/40 border border-zinc-800">
                
                <figcaption className="px-3 py-2 text-xs text-gray-300">Speed and strategy in Kumite.</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
