import store from "../assets/store.jpg"; // download later

export default function FullAbout() {
  return (
    <section className="bg-white font-body">

      {/* PAGE HEADING */}
      <div className="pt-28 pb-10 bg-gray-50 text-center">
        <h2 className="text-lg tracking-widest text-gray-500 uppercase mb-3">
          About Grace Optical
        </h2>

        <h1 className="text-4xl font-heading text-black">
          Trusted Vision Care Since 2013
        </h1>
      </div>

      {/* STORY SECTION */}
      <div className="py-20">
        <div className="container-custom px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src={store}
            className="rounded-xl shadow-xl"
            alt="Grace Optical Store"
          />

          <div>
            <h2 className="text-2xl font-heading mb-4">
              Our Journey
            </h2>

            <p className="text-gray-600 mb-4">
              Grace Optical Gallery has been delivering precision eye care
              and premium eyewear solutions since 2013. With a strong focus
              on customer satisfaction, we combine clinical expertise with
              modern optical trends.
            </p>

            <p className="text-gray-600">
              Our mission is to provide personalized vision solutions using
              advanced diagnostic technology and a curated selection of
              high-quality frames and lenses.
            </p>

          </div>

        </div>
      </div>

      {/* TRUST STATS */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom px-6 grid md:grid-cols-3 text-center gap-10">

          <div>
            <h3 className="text-4xl font-heading text-black mb-2">13+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>

          <div>
            <h3 className="text-4xl font-heading text-black mb-2">2000+</h3>
            <p className="text-gray-600">Lens Varieties</p>
          </div>

          <div>
            <h3 className="text-4xl font-heading text-black mb-2">5000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

        </div>
      </div>

      {/* BRAND STRIP */}
      <div className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-heading mb-4">
          Premium Optical Experience in Adoor
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Combining medical precision with stylish eyewear collections,
          Grace Optical ensures the perfect balance of vision clarity and
          aesthetic confidence.
        </p>
      </div>

    </section>
  )
}