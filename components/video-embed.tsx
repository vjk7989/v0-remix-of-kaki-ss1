export function VideoEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="aspect-[16/9] w-full rounded-lg border border-zinc-800 overflow-hidden">
      <iframe
        className="w-full h-full"
        title={title}
        src={src}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
      />
    </div>
  )
}
