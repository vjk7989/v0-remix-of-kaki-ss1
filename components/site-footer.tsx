import eventData from "@/data/event.json"

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <p>
              © 2025 {eventData.event?.name || "Karate Championship Hyderabad"}.{" "}
              <span className="text-white">
                Organized by <span className="text-red-500 font-medium">NSN</span>
              </span>
            </p>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="/highlights" className="text-muted-foreground hover:text-white">
              Highlights
            </a>
            <a href="/register" className="text-muted-foreground hover:text-white">
              Register
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
