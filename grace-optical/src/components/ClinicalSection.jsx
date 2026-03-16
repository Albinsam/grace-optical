import clinicImg from "../assets/eye-test.jfif"
import { motion } from "framer-motion"

export default function ClinicalSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center px-6">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={clinicImg}
            alt="Advanced Eye Testing"
            className="rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-heading text-brandBlack mb-6">
            Advanced Vision Diagnostics
          </h2>

          <p className="text-gray-600 mb-6 text-lg">
            Our state-of-the-art eye testing technology ensures precise
            diagnosis and personalized vision correction solutions
            tailored to your lifestyle.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>✔ Computerized Eye Testing</li>
            <li>✔ Prescription Accuracy Analysis</li>
            <li>✔ Contact Lens Consultation</li>
            <li>✔ Vision Health Guidance</li>
          </ul>

          <button className="mt-8 bg-brandRed text-white px-8 py-4 rounded-full shadow hover:scale-105 transition">
            Book Consultation
          </button>
        </motion.div>

      </div>
    </section>
  )
}