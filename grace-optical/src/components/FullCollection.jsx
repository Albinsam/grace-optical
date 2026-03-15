import frame1 from "../assets/new-frame1.jpg";
import frame2 from "../assets/new-frame2.jpg";
import frame3 from "../assets/new-frame3.jpg";
import frame4 from "../assets/new-frame4.jpg";
import frame5 from "../assets/new-frame5.jpg";
import frame6 from "../assets/new-frame6.jpg";
import frame7 from "../assets/new-frame7.jpg";
import frame8 from "../assets/new-frame8.jpg";
import frame9 from "../assets/new-frame9.jpg";
import frame10 from "../assets/new-frame10.jpg";
import frame11 from "../assets/new-frame11.jpg";
import frame12 from "../assets/new-frame12.jpg";

import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import HoverCard from "../components/HoverCard";

export default function FullCollection() {
  const frames = [
    { img: frame1, title: "Men's Classic", desc: "Timeless style with sturdy frames." },
    { img: frame2, title: "Men's Modern", desc: "Sleek frames for a contemporary look." },
    { img: frame3, title: "Men's Sport", desc: "Lightweight and durable for active use." },
    { img: frame4, title: "Women's Elegant", desc: "Chic and fashionable frames." },
    { img: frame5, title: "Women's Trendy", desc: "Bold colors and modern shapes." },
    { img: frame6, title: "Women's Classic", desc: "Sophisticated design for everyday wear." },
    { img: frame7, title: "Kids Fun", desc: "Bright, colorful, and safe for kids." },
    { img: frame8, title: "Kids Sport", desc: "Flexible and strong for active play." },
    { img: frame9, title: "Kids Learning", desc: "Comfortable frames for school use." },
    { img: frame10, title: "Computer Glasses", desc: "Reduce blue light and eye strain." },
    { img: frame11, title: "Photochromic Lenses", desc: "Frames with auto-darkening lenses." },
    { img: frame12, title: "Premium Designer", desc: "Exclusive collection for a luxury look." },
  ];

  return (
    <section className="py-16 bg-brandWhite font-body">

      {/* PAGE HEADING */}
      <FadeIn delay={0.2}>
        <div className="text-center mb-12 px-4">
          <h1 className="text-3xl md:text-4xl font-heading text-brandBlack">
            Our Collection
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Discover premium frames crafted for comfort & style
          </p>
        </div>
      </FadeIn>

      {/* FRAMES GRID */}
      <motion.div
        className="container-custom grid sm:grid-cols-2 md:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.07
            }
          }
        }}
      >
        {frames.map((frame, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <HoverCard>
              <div className="border rounded-xl shadow overflow-hidden bg-white">
                <img
                  loading="lazy"
                  src={frame.img}
                  alt={frame.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-4 text-center">
                  <h3 className="text-lg font-heading mb-1 text-brandBlack">
                    {frame.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {frame.desc}
                  </p>
                </div>
              </div>
            </HoverCard>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}