"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export function RegisterForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [role, setRole] = useState("athlete")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    setLoading(true)
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role }),
      })
      if (!res.ok) throw new Error("Failed")
      toast({ title: "Registration received", description: "We will contact you with next steps.", duration: 3500 })
      form.reset()
      setRole("athlete")
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive", duration: 3500 })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <Label>Registration Type</Label>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="athlete">Athlete</SelectItem>
            <SelectItem value="coach">Coach</SelectItem>
            <SelectItem value="spectator">Spectator</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input id="firstName" name="firstName" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input id="lastName" name="lastName" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" name="email" required className="mt-1" />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" required className="mt-1" />
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="message">Notes (optional)</Label>
        <Textarea id="message" name="message" className="mt-1" rows={4} />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" disabled={loading} className="bg-red-600 hover:bg-red-700 text-white">
          {loading ? "Submitting..." : "Submit Registration"}
        </Button>
      </div>
    </form>
  )
}
