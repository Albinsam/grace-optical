export default function FullContact() {
  return (
    <section className="bg-white font-body">

      {/* PAGE HEADING */}
      <div className="pt-28 pb-10 bg-gray-50 text-center">
        <h2 className="text-lg tracking-widest text-gray-500 uppercase mb-3">
          Contact Grace Optical
        </h2>

        <h1 className="text-4xl font-heading text-black">
          Book Your Eye Test Today
        </h1>
      </div>

      {/* CONTACT DETAILS */}
      <div className="py-20">
        <div className="container-custom px-6 grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-heading mb-6">
              Visit Our Store
            </h3>

            <p className="text-gray-600 mb-3">
              Grace Optical Gallery  
              Near XYZ Junction  
              Adoor, Kerala
            </p>

            <p className="text-gray-600 mb-3">
              Phone: +91 9XXXXXXXXX
            </p>

            <p className="text-gray-600">
              Email: graceoptical@gmail.com
            </p>

            <h4 className="text-xl font-heading mt-10 mb-4">
              Working Hours
            </h4>

            <p className="text-gray-600">Mon – Sat: 9:30 AM – 8:30 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>

          {/* EMPTY RIGHT SIDE (FORM WILL COME FROM ContactForm.jsx) */}
          <div></div>

        </div>
      </div>

      {/* CTA STRIP */}
      <div className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-heading mb-4">
          Clear Vision Starts Here
        </h2>

        <p className="text-gray-300 mb-6">
          Book your professional eye examination today.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded hover:bg-gray-200 transition">
          Call Now
        </button>
      </div>

      {/* GOOGLE MAP */}
      <div className="py-20 bg-gray-50">
        <div className="container-custom px-6">

          <h2 className="text-3xl font-heading text-center mb-10">
            Find Us Here
          </h2>

          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.974190834549!2d76.72723587406817!3d9.156800686977316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061186f6a182d3%3A0xacd844c0fe8aab96!2sGrace%20Optical%20Gallery!5e0!3m2!1sen!2sin!4v1773484865297!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>

    </section>
  )
}