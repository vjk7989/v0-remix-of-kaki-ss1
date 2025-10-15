import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import eventData from "@/data/event.json"

const items = (() => {
  const kb = eventData.key_benefits_for_athletes
  if (!kb)
    return [
      { title: "500+ Athletes", desc: "Top talent from across the nation." },
      { title: "20+ States", desc: "Nationwide participation and rivalry." },
      { title: "International Judges", desc: "Global-standard officiating." },
      { title: "Workshops & Demos", desc: "Train with masters and witness live showcases." },
    ]
  return [
    { title: "Growth", desc: kb.growth },
    { title: "Standards", desc: kb.standards },
    { title: "Opportunities", desc: kb.opportunities },
    { title: "Competition", desc: kb.competition },
    {
      title: "Awards",
      desc: `Total prize pool ₹${(eventData.cash_prizes_and_rewards?.total_prize_pool || 0).toLocaleString("en-IN")}`,
    },
  ]
    .filter(Boolean)
    .slice(0, 4) as { title: string; desc: string }[]
})()

export function Highlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((it) => (
        <Card key={it.title} className="border-zinc-800 bg-zinc-950">
          <CardHeader>
            <CardTitle className="text-white">{it.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
