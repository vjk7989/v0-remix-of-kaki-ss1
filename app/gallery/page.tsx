import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GalleryGrid } from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Gallery</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Moments from the Mat</h1>
        <div className="mt-8">
          <GalleryGrid />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
