import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Register</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Secure Your Place</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Limited slots available. Early bird discount valid until October 15, 2025. Organized by{" "}
          <span className="text-white">NSN</span>.
        </p>
        <div className="mt-8">
          <RegisterForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
