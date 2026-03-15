import { motion } from "framer-motion";
import store from "../assets/store.jpg";
import team1 from "../assets/team1.jpg"; // download your team photos
import team2 from "../assets/optometrist1.jpg";
import team3 from "../assets/team3.jpg";

export default function FullAbout() {
  return (
    <section className="bg-white font-body">

      {/* PAGE HEADING */}
      <div className="pt-28 pb-10 bg-gray-50 text-center">
        <h2 className="text-lg tracking-widest text-gray-500 uppercase mb-3">
          About Grace Optical
        </h2>
        <h1 className="text-4xl font-heading text-black">
          Trusted Vision Care Since 2013
        </h1>
      </div>

      {/* STORY SECTION */}
      <div className="py-20">
        <div className="container-custom px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={store}
            className="rounded-xl shadow-xl"
            alt="Grace Optical Store"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-heading mb-4">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Grace Optical Gallery has been delivering precision eye care
              and premium eyewear solutions since 2013. With a strong focus
              on customer satisfaction, we combine clinical expertise with
              modern optical trends.
            </p>
            <p className="text-gray-600">
              Our mission is to provide personalized vision solutions using
              advanced diagnostic technology and a curated selection of
              high-quality frames and lenses.
            </p>
          </div>
        </div>
      </div>

      {/* TRUST STATS */}
      <div className="bg-gray-50 py-20">
        <div className="container-custom px-6 grid md:grid-cols-3 text-center gap-10">
          <div>
            <h3 className="text-4xl font-heading text-black mb-2">13+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-heading text-black mb-2">2000+</h3>
            <p className="text-gray-600">Lens Varieties</p>
          </div>
          <div>
            <h3 className="text-4xl font-heading text-black mb-2">5000+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="py-20 bg-white">
        <h2 className="text-4xl font-heading text-center text-black mb-12">
          Meet Our Team
        </h2>
        <div className="container-custom px-6 grid md:grid-cols-3 gap-8">

          {[team1, team2, team3].map((member, index) => (
            <motion.div
              key={index}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img src={member} alt={`Team member ${index + 1}`} className="w-full h-64 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-heading mb-1 text-black">
                  {index === 0 ? "Dr. Ajay Thomas" : index === 1 ? "Sara Mathew" : "John Kurian"}
                </h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 ? "Lead Optometrist" : index === 1 ? "Optician" : "Customer Care"}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="py-20 bg-gray-50">
        <h2 className="text-4xl font-heading text-center text-black mb-12">
          What Our Customers Say
        </h2>
        <div className="container-custom px-6 grid md:grid-cols-3 gap-8">
          
          {[
            { name: "Anjali R.", comment: "Excellent service and very friendly staff." },
            { name: "Rahul P.", comment: "High quality frames and lenses. Highly recommend." },
            { name: "Meera S.", comment: "Professional eye test and great guidance on lenses." },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="border rounded-lg p-6 shadow hover:shadow-lg bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
              <h4 className="text-lg font-heading text-black">{testimonial.name}</h4>
            </motion.div>
          ))}

        </div>
      </div>

      {/* BRAND STRIP */}
      <div className="bg-black text-white py-16 text-center">
        <h2 className="text-3xl font-heading mb-4">
          Premium Optical Experience in Adoor
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Combining medical precision with stylish eyewear collections,
          Grace Optical ensures the perfect balance of vision clarity and
          aesthetic confidence.
        </p>
      </div>

    </section>
  );
}