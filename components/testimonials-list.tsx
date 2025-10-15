import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "An unforgettable platform for young athletes.",
    name: "Aarav K.",
    role: "Junior Athlete",
  },
  {
    quote: "World-class judging and organization.",
    name: "Coach Priya",
    role: "National Coach",
  },
  {
    quote: "The energy in Hyderabad was electric.",
    name: "Sensei Tanaka",
    role: "International Judge",
  },
]

export function TestimonialsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {testimonials.map((t) => (
        <Card key={t.name} className="border-zinc-800 bg-zinc-950">
          <CardContent className="p-6">
            <p className="text-white">“{t.quote}”</p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t.name} • {t.role}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
