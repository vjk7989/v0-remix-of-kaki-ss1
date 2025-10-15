import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const payload = await req.json()
    console.log("[v0] Registration received:", payload)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
