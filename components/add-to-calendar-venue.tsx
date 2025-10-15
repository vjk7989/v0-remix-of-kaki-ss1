import { Button } from "@/components/ui/button"
import eventData from "@/data/event.json"

const googleCalendarUrl = (() => {
  const dates = "20251115T033000Z/20251116T123000Z"
  const text = encodeURIComponent(eventData.event?.name || "India's Biggest Karate Championship 2025")
  const details = encodeURIComponent(`${eventData.event?.location || "Hyderabad, India"}. Organized by NSN.`)
  const location = encodeURIComponent(eventData.event?.location || "Hyderabad, India")
  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}&sf=true&output=xml`
})()

export function AddToCalendarVenueSection() {
  const location = eventData.event?.location || "Hyderabad, India"
  const datesLabel = eventData.event?.dates?.event_dates || "Nov 15–16, 2025"
  return (
    <section id="details" aria-labelledby="details-title" className="py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-wider text-red-500">Plan your visit</p>
        <h2 id="details-title" className="mt-2 text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
          Add to Calendar & Venue Details
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Add to Calendar */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-medium">Add to Calendar</h3>
            <p className="mt-2 text-sm text-zinc-300">
              {location} • {datesLabel} • Organized by NSN
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Add event to Google Calendar"
                >
                  Add to Google Calendar
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-600 text-white hover:bg-red-600/10 bg-transparent"
              >
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                >
                  View on Maps
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-zinc-400">
              Dates in UTC for calendar export; local times approx. 9:00–18:00 IST.
            </p>
          </div>

          {/* Venue Details */}
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-lg font-medium">Venue Details</h3>
            <dl className="mt-3 space-y-2">
              <div className="flex gap-2">
                <dt className="w-28 text-zinc-400">City</dt>
                <dd className="flex-1">{location}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-28 text-zinc-400">Dates</dt>
                <dd className="flex-1">{datesLabel}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-28 text-zinc-400">Hours</dt>
                <dd className="flex-1">Approx. 9:00–18:00 IST daily</dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-28 text-zinc-400">Organizer</dt>
                <dd className="flex-1">NSN</dd>
              </div>
            </dl>
            <p className="mt-3 text-sm text-zinc-300">
              Detailed address and entry instructions will be announced closer to the event date.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
