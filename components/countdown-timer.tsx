"use client"

import { useEffect, useState } from "react"

type Parts = { days: number; hours: number; minutes: number; seconds: number }

function getParts(target: Date): Parts {
  const now = new Date().getTime()
  const diff = Math.max(0, target.getTime() - now)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export function CountdownTimer({ target }: { target: Date }) {
  const [parts, setParts] = useState<Parts>(() => getParts(target))

  useEffect(() => {
    const id = setInterval(() => setParts(getParts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  return (
    <div aria-label="Countdown to event" className="flex items-center gap-4">
      {[
        { label: "Days", value: parts.days },
        { label: "Hours", value: parts.hours },
        { label: "Minutes", value: parts.minutes },
        { label: "Seconds", value: parts.seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="rounded-md bg-zinc-900 px-4 py-2 border border-zinc-800">
            <span className="text-2xl md:text-3xl font-semibold text-white tabular-nums">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <div className="mt-1 text-xs uppercase tracking-wider text-red-400">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
