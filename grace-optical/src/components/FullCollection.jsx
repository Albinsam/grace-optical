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
    { img: frame12, title: "Premium Designer", desc: "Exclusive luxury collection." },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">

      <FadeIn delay={0.2}>
        <div className="text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-heading">
            Our Collection
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Discover premium frames crafted for comfort & style
          </p>
        </div>
      </FadeIn>

      <motion.div
        className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6"
        initial="hidden"
        animate="visible"
      >
        {frames.map((frame, idx) => (
          <motion.div key={idx}>
            <HoverCard>
              <div className="rounded-xl shadow-lg overflow-hidden bg-white">

                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={frame.img}
                    alt={frame.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-heading">{frame.title}</h3>
                  <p className="text-gray-600 text-sm">{frame.desc}</p>
                </div>

              </div>
            </HoverCard>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}