import FadeIn from "./FadeIn"

import brand1 from "../assets/brand1.png"
import brand2 from "../assets/brand2.jfif"
import brand3 from "../assets/brand3.jfif"
import brand4 from "../assets/brand4.jfif"
import brand5 from "../assets/brand5.jfif"

export default function BrandLogos() {
  const brands = [brand1, brand2, brand3, brand4, brand5]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom px-6">

        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-heading text-center mb-10 text-brandBlack">
            Trusted Brands We Offer
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {brands.map((logo, idx) => (
            <FadeIn key={idx} delay={0.3 + idx * 0.1}>
              <img
                src={logo}
                className="mx-auto h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition"
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}