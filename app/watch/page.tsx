import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoEmbed } from "@/components/video-embed"

export default function WatchPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-sm uppercase tracking-wider text-red-400">Livestream</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white">Watch Live</h1>
        <div className="mt-8">
          <VideoEmbed src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" title="Live Stream" />
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
