import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"

export default function ChiefGuestPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8">
        <div
          aria-hidden="true"
          className="rounded-lg border border-zinc-800 min-h-72"
          style={{
            backgroundImage: "url(/placeholder.svg?height=700&width=900&query=chief%20guest%20portrait)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div>
          <p className="text-sm uppercase tracking-wider text-red-400">Chief Guest</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Guest of Honor</h1>
          <p className="mt-4 text-muted-foreground">
            A celebrated figure in martial arts with decades of contributions. Their presence inspires athletes and
            underscores the event’s commitment to excellence.
          </p>
          <blockquote className="mt-4 text-white border-l-2 border-red-600 pl-3">
            “Discipline and respect are the true victories we carry beyond the arena.”
          </blockquote>
          <div className="mt-6">
            <Button className="bg-red-600 hover:bg-red-700 text-white">Know More</Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
