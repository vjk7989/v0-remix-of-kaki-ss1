import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TestimonialsList } from "@/components/testimonials-list"

export default function TestimonialsPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Testimonials</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">What People Are Saying</h1>
        <div className="mt-8">
          <TestimonialsList />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
