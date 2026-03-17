import heroImg from "../assets/hero-glasses.jpg";
import { motion } from "framer-motion";

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-brandRed/10 rounded-full blur-3xl top-[-200px] right-[-200px]" />

      <div className="container-custom grid md:grid-cols-2 gap-12 items-center px-6 py-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-brandBlack leading-tight mb-6">
            Precision Vision <br /> Meets Timeless Style
          </h1>

          <p className="text-gray-600 text-base md:text-lg mb-10 max-w-lg">
            Experience advanced eye diagnostics and premium eyewear collections crafted to enhance clarity, comfort, and confidence.
          </p>

          <button className="bg-brandRed text-white px-10 py-5 text-lg rounded-2xl shadow-2xl hover:scale-105 hover:shadow-red-300/40 transition duration-300">
            Book Eye Test
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImg}
            alt="Premium eyewear on display for precision and style" // UPDATED ALT TEXT
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}