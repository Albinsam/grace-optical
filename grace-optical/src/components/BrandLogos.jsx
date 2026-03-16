import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.jfif";
import brand3 from "../assets/brand3.jfif";
import brand4 from "../assets/brand4.jfif";
import brand5 from "../assets/brand5.jfif";
import { motion } from "framer-motion";

export default function BrandLogos() {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <section className="py-24 bg-white text-center">
      <h2 className="text-3xl font-heading mb-12">
        Trusted Optical Brands We Carry
      </h2>

      <div className="container-custom flex flex-wrap justify-center items-center gap-16 px-6">
        {brands.map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt="Optical Brand"
            className="h-12 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition duration-500"
            whileHover={{ scale: 1.15 }}
          />
        ))}
      </div>
    </section>
  );
}