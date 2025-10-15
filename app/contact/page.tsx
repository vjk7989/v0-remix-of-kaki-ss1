import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Contact</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Get in Touch</h1>
        <div className="mt-2 text-muted-foreground">
          <p>Helpline: +91-00000-00000 • Email: info@karate2025.example</p>
        </div>
        <div className="mt-8">
          <ContactForm />
        </div>
        <div className="mt-12">
          <div className="aspect-[16/9] w-full rounded-lg border border-zinc-800 overflow-hidden">
            <iframe
              title="Venue Map - Hyderabad"
              src="https://www.google.com/maps?q=Hyderabad,+India&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
