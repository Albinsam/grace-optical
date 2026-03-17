import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.jfif";
import brand3 from "../assets/brand3.jfif";
import brand4 from "../assets/brand4.jfif";

export default function BrandLogos() {
  const brands = [brand1, brand2, brand3, brand4];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom px-6">
        <h2 className="text-3xl font-heading text-center mb-12">
          Our Trusted Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-items-center">
          {brands.map((logo, idx) => (
            <div
              key={idx}
              className="transition transform hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={`Brand ${idx + 1}`}
                className="h-20 sm:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}