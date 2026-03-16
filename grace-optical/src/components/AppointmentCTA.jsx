import { motion } from "framer-motion";

export default function AppointmentCTA() {
  return (
    <section className="py-28 bg-brandBlack text-white text-center relative overflow-hidden">

      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-brandRed/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />

      <motion.div
        className="container-custom px-6 relative"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl md:text-5xl font-heading mb-6">
          Experience Precision Vision Care Today
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
          Book your professional eye test and explore our premium eyewear collections designed for clarity, comfort and confidence.
        </p>

        <button className="bg-brandRed px-10 py-4 rounded-full text-lg hover:scale-105 transition shadow-lg">
          Book Eye Test Now
        </button>

      </motion.div>
    </section>
  );
}