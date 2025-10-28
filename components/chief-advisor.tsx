export function ChiefAdvisorSection() {
  return (
    <section id="chief-advisor" className="py-12 md:py-16 bg-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-xs md:text-sm uppercase tracking-wider text-red-500">Chief Advisor</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance">
              Mr. Siddu Reddy Kandakatla – Brand Ambassador, NSN Karate League
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-300">
              Mr. Siddu Reddy Kandakatla is the Brand Ambassador of NSN Karate League. He is a philanthropist,
              entrepreneur, and President of Rockwell International School. A fitness enthusiast and strong supporter of
              martial arts, he actively promotes discipline and physical well-being among youth. He has also built a
              government school for underprivileged children, showcasing his dedication to education and social welfare.
              His inspiring leadership continues to motivate many to strive for excellence and serve the community.
              <br />
            </p>
          </div>
          <div className="rounded-xl border border-gray-800 p-2">
            <img
              src="/images/design-mode/photo_6305135926564294043_y(1).jpg"
              alt="Chief Advisor portrait"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
