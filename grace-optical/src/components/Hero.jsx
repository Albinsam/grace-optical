import heroImg from "../assets/hero.jpg"

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container-custom px-6 h-full flex items-center justify-center text-center text-white">
        <div>
          <h1 className="text-5xl font-heading mb-6">
            Grace Optical Gallery
          </h1>

          <p className="text-lg mb-8 max-w-xl mx-auto">
            13 Years of Precision. 2000+ Lens Varieties.
          </p>

          <div className="flex justify-center gap-6">
            <button className="bg-white text-black px-6 py-3 rounded font-semibold">
              Book Eye Test
            </button>

            <button className="border border-white px-6 py-3 rounded">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}