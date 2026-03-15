export default function Contact() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container-custom px-6">

        <h1 className="text-4xl font-heading text-center mb-10">
          Contact Us
        </h1>

        <div className="max-w-xl mx-auto">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 mb-4"
          />

          <textarea
            placeholder="Message"
            className="w-full border p-3 mb-4 h-32"
          ></textarea>

          <button className="bg-black text-white px-6 py-3">
            Send Message
          </button>

        </div>

      </div>

    </section>
  )
}