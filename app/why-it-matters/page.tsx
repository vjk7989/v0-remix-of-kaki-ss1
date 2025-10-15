import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WhyPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-sm uppercase tracking-wider text-red-400">Why It Matters</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">A Platform That Elevates</h1>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• First time in Hyderabad, positioning the city as a martial arts hub.</li>
            <li>• India’s largest karate platform for athletes.</li>
            <li>• Exposure to international judges and referees.</li>
            <li>• Opportunity for youth development and global spotlight.</li>
          </ul>
        </div>
        <div
          aria-hidden="true"
          className="rounded-lg border border-zinc-800 min-h-64"
          style={{
            backgroundImage: "url(/placeholder.svg?height=600&width=900&query=packed%20stadium%20karate%20dojo)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </section>
      <SiteFooter />
    </main>
  )
}
