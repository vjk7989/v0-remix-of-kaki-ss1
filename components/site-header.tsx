"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import eventData from "@/data/event.json"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home", exact: true },
    { href: "/about", label: "About" },
    { href: "/highlights", label: "Highlights" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string, exact?: boolean) => {
    if (href === "/") return pathname === "/"
    return exact ? pathname === href : pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold text-white">
              <span className="sr-only">Home</span>
              <span className="text-balance">{eventData.event?.name || "Karate Championship 2025"}</span>
            </Link>
            <span className="hidden md:inline-block text-xs text-muted-foreground">
              Organized by <span className="font-medium text-red-500">NSN</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.exact)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn("py-2 text-muted-foreground hover:text-white transition", active && "text-white")}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className={cn("bg-red-600 hover:bg-red-700 text-white")}>
              <Link href="/register">Register Now</Link>
            </Button>
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/60 text-muted-foreground hover:text-white"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.exact)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "py-2 text-muted-foreground hover:text-white transition border-l-2 border-transparent pl-3",
                      active && "text-white border-red-600",
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button asChild className="mt-2 bg-red-600 hover:bg-red-700 text-white">
                <Link href="/register" onClick={() => setOpen(false)}>
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
