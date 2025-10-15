import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <SiteHeader />
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center gap-2">
          <p className="text-sm uppercase tracking-wider text-red-500">About</p>
          <Badge className="bg-red-600 text-white">Organized by NSN</Badge>
        </div>

        <h1 className="mt-2 text-3xl md:text-4xl font-semibold text-white text-balance">
          India’s Biggest Karate Championship 2025
        </h1>

        {/* NSN Karate League content */}
        <div className="mt-4 text-muted-foreground max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-white">About NSN Karate League</h2>
          <div className="mt-3 space-y-4 text-pretty">
            <p>
              NSN — NEXT STARS OF THE NATION — The Biggest Karate Celebration in India with an International-Level Vibe!
            </p>
            <p>
              The NSN Karate League is a premier national-level karate platform dedicated to showcasing talent,
              discipline, and the true spirit of karate across India. NSN is more than just a competition—it is a
              movement to bring athletes together, inspire the next generation, and elevate karate to new heights.
            </p>
            <p>
              With participation from 15+ states, 2000+ athletes, and an audience of 4000+, the NSN Karate League stands
              as one of India’s largest and most dynamic karate events. Our mission is to create opportunities for
              athletes to compete at the highest level, promote fitness and discipline among youth, and provide brands
              and sponsors a powerful platform for nationwide recognition.
            </p>
            <p>
              The upcoming Season 1 Tournament will be held on{" "}
              <strong>November 15th &amp; 16th, 2025, at the prestigious Gachibowli Indoor Stadium, Hyderabad</strong>
              —marking the beginning of an inspiring journey that combines tradition, sportsmanship, and excellence.
            </p>
            <p>
              We are proud to have <strong>Siddu Reddy Kandakatla</strong> as our <em>Brand Ambassador</em> bringing his
              energy and vision to the league, and <strong>Indrasena</strong> as our <em>Chief Advisor</em>, guiding us
              with his experience and leadership.
            </p>
            <p>
              <strong>Founded and organized by Sensei Naresh, Sensei Sripal, and Sensei Nani</strong>.
            </p>
            <p>
              At NSN, we believe in <em>Passion. Discipline. Growth.</em> Together, let’s build the future of karate.
            </p>
          </div>
        </div>

        {/* Visuals: Hyderabad skyline + karate athletes */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg border border-neutral-800">
            <img
              src="/hyderabad-skyline-night-charminar-silhouette.jpg"
              alt="Hyderabad skyline with Charminar silhouette"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg border border-neutral-800">
            <img
              src="/karate-athletes-in-action-kumite-and-kata.jpg"
              alt="Karate athletes demonstrating kumite and kata"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Sub-sections: History, Mission, Categories */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black/40 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-white">History</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Karate has seen steady growth across India, building a culture rooted in discipline, respect, and
              resilience. This championship reflects that journey and the rising standard of athletes nationwide.
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-white">Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Promoting martial arts culture, nurturing youth talent, and elevating India’s presence on the global stage
              through fair competition and sportsmanship.
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-white">Categories</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Kata</li>
                <li>Kumite</li>
                <li>Juniors</li>
                <li>Seniors</li>
                <li>International competitors</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
