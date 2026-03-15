import about from "../assets/about.jpg"

export default function About() {
  return (
    <section className="py-20 px-12 bg-gray-100">

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>

          <h2 className="text-3xl font-heading mb-6">
            13 Years of Optical Excellence
          </h2>

          <p className="text-gray-600 mb-4">
            Grace Optical Gallery has been delivering premium eye care
            solutions with precision and professionalism for over a decade.
          </p>

          <p className="text-gray-600 mb-6">
            With a collection of 2000+ lenses and advanced diagnostic
            services, we ensure every customer receives personalized
            vision care.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded">
            Learn More
          </button>

        </div>

        <div>
          <img
            src={about}
            alt="About Grace Optical"
            className="rounded-lg shadow-lg"
          />
        </div>

      </div>

    </section>
  )
}