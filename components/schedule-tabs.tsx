"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import eventData from "@/data/event.json"

// Build schedule from JSON
const schedule = Array.isArray(eventData.schedule) ? eventData.schedule : []

function splitActivity(a: string): { time: string; item: string } {
  const parts = a.split(" - ")
  if (parts.length >= 2) {
    return { time: parts[0], item: parts.slice(1).join(" - ") }
  }
  return { time: "", item: a }
}

function formatTab(dateStr: string) {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function DayList({ items }: { items: { time: string; item: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((x, idx) => (
        <li key={`${x.time}-${idx}`} className="flex items-center gap-3">
          {x.time ? (
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-white text-xs tabular-nums">
              {x.time}
            </span>
          ) : (
            <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-white text-xs">•</span>
          )}
          <span className="text-muted-foreground">{x.item}</span>
        </li>
      ))}
    </ul>
  )
}

export function ScheduleTabs() {
  const defaultValue = schedule[0]?.date || "day1"
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      <TabsList className="flex flex-wrap">
        {schedule.length ? (
          schedule.map((d) => (
            <TabsTrigger key={d.date} value={d.date}>
              {formatTab(d.date)}
            </TabsTrigger>
          ))
        ) : (
          <>
            <TabsTrigger value="day1">Nov 1</TabsTrigger>
            <TabsTrigger value="day2">Nov 2</TabsTrigger>
          </>
        )}
      </TabsList>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {schedule.length ? (
          schedule.map((d) => (
            <TabsContent key={d.date} value={d.date} className="m-0">
              <DayList items={(d.activities || []).map((a: string) => splitActivity(a))} />
            </TabsContent>
          ))
        ) : (
          <>
            <TabsContent value="day1" className="m-0">
              <DayList items={[{ time: "09:00", item: "Opening Ceremony" }]} />
            </TabsContent>
            <TabsContent value="day2" className="m-0">
              <DayList items={[{ time: "09:30", item: "Kumite Prelims" }]} />
            </TabsContent>
          </>
        )}
      </div>
    </Tabs>
  )
}
