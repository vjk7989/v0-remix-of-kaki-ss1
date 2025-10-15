"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState } from "react"

const images = [
  {
    src: `/images/gallery/athlete-kumite-female-red.jpg`,
    alt: "Female karate athlete in kumite stance with red gloves",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: `/images/gallery/officials-stadium.jpg`,
    alt: "Officials and judges at the karate championship",
    span: "md:col-span-2",
  },
  {
    src: `/images/gallery/student-kata-male-red-1.jpg`,
    alt: "Young male karate student in kata stance with red belt",
    span: "",
  },
  {
    src: `/images/gallery/athlete-kata-female-red.jpg`,
    alt: "Female karate athlete performing dynamic kata with red belt",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: `/images/gallery/student-kata-male-red-2.jpg`,
    alt: "Young male karate student in hand strike kata pose",
    span: "",
  },
  {
    src: `/images/gallery/athlete-kumite-male-blue.jpg`,
    alt: "Male karate athlete in kumite stance with blue belt",
    span: "md:col-span-2",
  },
  {
    src: `/images/gallery/student-kata-female-red-dojo.jpg`,
    alt: "Young female karate student in kata stance at dojo",
    span: "",
  },
  {
    src: `/images/gallery/athlete-formal-male-blue.jpg`,
    alt: "Male karate athlete in formal pose with blue belt",
    span: "",
  },
  {
    src: `/images/gallery/athlete-kumite-male-blue-2.jpg`,
    alt: "Male karate athlete in kumite punching stance",
    span: "",
  },
]

export function GalleryGrid() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[300px] md:auto-rows-[250px]">
        {images.map((img, i) => (
          <button
            key={i}
            className={`relative overflow-hidden rounded-lg border border-zinc-800 hover:border-red-500 transition-colors ${img.span}`}
            onClick={() => {
              setActive(i)
              setOpen(true)
            }}
            aria-label={`Open ${img.alt}`}
          >
            <img src={img.src || "/placeholder.svg"} alt={img.alt} className="h-full w-full object-cover object-top" />
          </button>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl">
          <img
            src={images[active]?.src || "/placeholder.svg"}
            alt={images[active]?.alt || "Gallery image"}
            className="w-full h-auto rounded"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
