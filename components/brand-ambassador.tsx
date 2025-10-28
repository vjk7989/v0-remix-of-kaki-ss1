export function BrandAmbassadorSection() {
  return (
    <section id="brand-ambassador" className="py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-wider text-red-500">Brand Ambassador</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Shri Indrasena Garu – Chief Advisor, NSN Karate League
            </h2>
            <div className="mt-4 space-y-3 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                Shri Indrasena Garu is a film actor, and black belt holder who serves as the Chief Advisor of NSN Karate League. His passion for martial arts and commitment to social welfare inspire and guide the league’s vision of empowering young athletes through discipline and sportsmanship.
              </p>
              
            </div>
          </div>
          <div className="rounded-xl border border-gray-800 p-2">
            <img
              src="/images/design-mode/photo_6305135926564294045_y(1).jpg"
              alt="Brand Ambassador portrait"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
