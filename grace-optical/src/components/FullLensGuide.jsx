import { motion } from "framer-motion";
import blueCut from "../assets/blue-cut.jpg";
import antiGlare from "../assets/anti-glare.jpg";
import photochromic from "../assets/photochromic.jpg";

const lenses = [
  {
    img: blueCut,
    title: "Blue Cut Lenses",
    desc: "Reduce harmful blue light from screens, protecting your eyes during long digital device use."
  },
  {
    img: antiGlare,
    title: "Anti-Glare Lenses",
    desc: "Minimize reflections and glare from light sources, giving you clearer vision and comfort."
  },
  {
    img: photochromic,
    title: "Photochromic Lenses",
    desc: "Automatically darken in sunlight to reduce glare and protect your eyes, perfect for outdoor activities."
  }
];

export default function FullLensGuide() {
  return (
    <section className="py-16 bg-brandWhite font-body">
      <div className="container-custom px-6">
        <h1 className="text-4xl font-heading text-brandBlack text-center mb-12">
          Lens Guide
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Learn about our lens technologies to protect and enhance your vision.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {lenses.map((lens, index) => (
            <motion.div
              key={index}
              className="border rounded-lg shadow hover:shadow-lg overflow-hidden transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={lens.img}
                alt={lens.title}
                className="w-full h-60 object-cover"
                loading="lazy"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-heading mb-2 text-brandBlack">
                  {lens.title}
                </h3>
                <p className="text-gray-600 text-sm">{lens.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}