import frame1 from "../assets/frame1.jpg"
import frame2 from "../assets/frame2.jpg"
import frame3 from "../assets/frame3.jpg"

export default function CollectionPreview() {
  return (
    <section className="py-16 bg-white">

      <div className="container-custom px-6">

        <h2 className="text-3xl font-heading text-center mb-12">
          Our Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={frame1}
              alt="Premium Frames"
              className="w-full h-60 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Premium Frames
              </h3>
              <p>Stylish and durable eyewear frames.</p>
            </div>
          </div>

          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={frame2}
              alt="Lens Varieties"
              className="w-full h-60 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Lens Varieties
              </h3>
              <p>Over 2000 types of optical lenses.</p>
            </div>
          </div>

          <div className="border rounded-lg shadow hover:shadow-lg transition">
            <img
              src={frame3}
              alt="Eye Testing"
              className="w-full h-60 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                Eye Testing
              </h3>
              <p>Professional eye examination services.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}