import clinic from "../assets/clinical.jpg"
export default function Clinical() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container-custom px-6">

        <h1 className="text-4xl font-heading mb-10 text-center">
          Clinical Eye Care
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src={clinic}
            alt="Eye Testing"
            className="rounded-lg shadow-lg"
          />

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Advanced Eye Examination
            </h2>

            <p className="mb-4">
              We provide professional clinical eye testing using modern
              diagnostic equipment to ensure accurate vision analysis.
            </p>

            <p className="mb-4">
              Our experienced optometrists help detect early signs of
              vision problems and provide customized lens solutions.
            </p>

            <button className="bg-black text-white px-6 py-3 rounded">
              Book Appointment
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}