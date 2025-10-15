"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "Message sent", description: "We’ll get back to you shortly.", duration: 3500 })
      form.reset()
    } catch {
      toast({ title: "Failed to send", description: "Please try again.", variant: "destructive", duration: 3500 })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required className="mt-1" />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required className="mt-1" />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700 text-white">
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  )
}
