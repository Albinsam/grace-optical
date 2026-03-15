import blueCut from "../assets/blue-cut.jpg";
import antiGlare from "../assets/anti-glare.jpg";
import photochromic from "../assets/photochromic.jpg";

export default function FullLensGuide() {
  return (
    <section className="py-16 bg-brandWhite font-body">
      <div className="container-custom px-6">

        <h1 className="text-4xl font-heading text-brandBlack text-center mb-12">
          Lens Guide
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Learn about our lens technologies to protect and enhance your vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Blue Cut Lenses */}
          <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src={blueCut} alt="Blue Cut Lens" className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-heading mb-2 text-brandBlack">Blue Cut Lenses</h3>
              <p className="text-gray-600 text-sm">
                Reduce harmful blue light from screens, protecting your eyes during long digital device use.
              </p>
            </div>
          </div>

          {/* Anti-Glare Lenses */}
          <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src={antiGlare} alt="Anti Glare Lens" className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-heading mb-2 text-brandBlack">Anti-Glare Lenses</h3>
              <p className="text-gray-600 text-sm">
                Minimize reflections and glare from light sources, giving you clearer vision and comfort.
              </p>
            </div>
          </div>

          {/* Photochromic Lenses */}
          <div className="border rounded-lg shadow hover:shadow-lg overflow-hidden transform hover:scale-105 transition">
            <img src={photochromic} alt="Photochromic Lens" className="w-full h-60 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-heading mb-2 text-brandBlack">Photochromic Lenses</h3>
              <p className="text-gray-600 text-sm">
                Automatically darken in sunlight to reduce glare and protect your eyes, perfect for outdoor activities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}