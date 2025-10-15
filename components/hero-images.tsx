export default function HeroImages() {
  return (
    <section aria-labelledby="hero-images-title" className="mt-6">
      <h3 id="hero-images-title" className="sr-only">
        Event visuals
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-lg ring-1 ring-red-600/40">
          <img
            src="/images/karate-kata.jpg"
            alt="Karate athlete performing kata sequence"
            className="h-64 w-full object-cover md:h-72"
          />
          <figcaption className="px-3 py-2 text-xs text-gray-300">Focus, precision, and form in Kata.</figcaption>
        </figure>
        <figure className="overflow-hidden rounded-lg ring-1 ring-red-600/40">
          <img
            src="/images/karate-kumite.jpg"
            alt="Karate athletes sparring in kumite"
            className="h-64 w-full object-cover md:h-72"
          />
          <figcaption className="px-3 py-2 text-xs text-gray-300">Speed and strategy in Kumite.</figcaption>
        </figure>
      </div>
    </section>
  )
}
