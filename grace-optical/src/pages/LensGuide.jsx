
export default function LensGuide() {
  return (
    <section className="py-20 px-12 bg-gray-50">

      <h1 className="text-4xl font-bold text-center mb-16">
        Lens Guide
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="bg-white p-8 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Single Vision</h2>
          <p className="text-gray-600">
            Designed to correct one field of vision — near or distance.
          </p>
        </div>

        <div className="bg-white p-8 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Bifocal</h2>
          <p className="text-gray-600">
            Helps with both near and distance vision using segmented lenses.
          </p>
        </div>

        <div className="bg-white p-8 shadow rounded">
          <h2 className="text-xl font-semibold mb-4">Progressive</h2>
          <p className="text-gray-600">
            Smooth transition between multiple vision zones without visible lines.
          </p>
        </div>

      </div>

    </section>
  )
}