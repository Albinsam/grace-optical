import { motion } from "framer-motion";

export default function PremiumFooter() {
  return (
    <footer className="bg-brandBlack text-white pt-20 pb-10">
      <div className="container-custom px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-heading mb-4">
            Grace Optical Gallery
          </h2>
          <p className="text-gray-400">
            Delivering precision vision care and premium eyewear experiences since 2013.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-xl font-heading mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Collection</li>
            <li>Lens Guide</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-heading mb-4">Visit Us</h3>
          <p className="text-gray-400">
            Grace Optical Gallery  
            <br />
            Adoor, Kerala  
            <br />
            Phone: +91 XXXXX XXXXX
          </p>
        </motion.div>

      </div>

      <div className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Grace Optical Gallery. All rights reserved.
      </div>
    </footer>
  );
}