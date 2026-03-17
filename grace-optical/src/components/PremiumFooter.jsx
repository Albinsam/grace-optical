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
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/collection" className="hover:text-white">Collection</a></li>
            <li><a href="/lens-guide" className="hover:text-white">Lens Guide</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl font-heading mb-4">Visit Us</h3>
          <p className="text-gray-400 leading-7">
            Grace Optical Gallery <br />
            Santhosh Building <br />
            West of Govt Hospital <br />
            Adoor, Kerala 691523 <br /><br />
            Phone: 04734 227 850 <br />
            Email: graceopticalgallery@gmail.com
          </p>
        </motion.div>

      </div>

      <div className="text-center mt-16 text-gray-500 text-sm">
        © 2013–{new Date().getFullYear()} Grace Optical Gallery. All rights reserved.
      </div>
    </footer>
  );
}