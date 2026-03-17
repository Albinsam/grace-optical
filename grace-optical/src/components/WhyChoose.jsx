import { FaGlasses, FaMicroscope, FaStar } from "react-icons/fa";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaGlasses className="text-brandRed w-10 h-10" />,
      title: "2000+ Lens Varieties",
      desc: "Wide range of lenses for all vision needs."
    },
    {
      icon: <FaMicroscope className="text-brandRed w-10 h-10" />,
      title: "Advanced Eye Testing",
      desc: "Modern clinical equipment for accurate diagnosis."
    },
    {
      icon: <FaStar className="text-brandRed w-10 h-10" />,
      title: "13 Years Experience",
      desc: "Trusted by thousands of satisfied customers."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom px-6">
        <h2 className="text-3xl font-heading text-center mb-16">
          Why Choose Grace Optical
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brandRed/10">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}