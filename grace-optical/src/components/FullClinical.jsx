// src/pages/FullClinical.jsx
import clinic from "../assets/clinic.jpg";
import FadeIn from "../components/FadeIn";
import HoverCard from "../components/HoverCard";
import AnimatedButton from "../components/AnimatedButton";
import { motion } from "framer-motion";

export default function FullClinical() {
  return (
    <section className="bg-white font-body">

      {/* PAGE HEADING */}
      <FadeIn delay={0.15}>
        <div className="pt-28 pb-10 bg-gray-50 text-center">
          <h1 className="text-4xl font-heading text-black">
            Clinical Eye Care
          </h1>
        </div>
      </FadeIn>

      {/* HERO SECTION */}
      <FadeIn delay={0.2}>
        <motion.div
          className="py-24 bg-gray-50"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="container-custom px-6 grid md:grid-cols-2 gap-12 items-center">

            <motion.img
              src={clinic}
              className="rounded-xl shadow-xl"
              alt="Eye Testing"
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-4xl font-heading text-brandBlack mb-6">
                Clinical Eye Care Excellence
              </h1>

              <p className="text-gray-600 mb-4">
                We provide advanced clinical eye testing using modern diagnostic technologies to ensure precise vision care.
              </p>

              <p className="text-gray-600 mb-6">
                Our experienced optometrists help detect early vision problems and recommend customized optical solutions.
              </p>

              <AnimatedButton>
                Book Eye Test
              </AnimatedButton>
            </motion.div>

          </div>
        </motion.div>
      </FadeIn>

      {/* PROCESS HEADING */}
      <FadeIn delay={0.25}>
        <h2 className="text-3xl font-heading text-center mt-20 mb-16">
          Our Eye Testing Process
        </h2>
      </FadeIn>

      {/* PROCESS CONTENT */}
      <FadeIn delay={0.35}>
        <div className="container-custom px-6 grid md:grid-cols-3 gap-10 pb-20">
          <HoverCard>
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow">
              <h3 className="text-xl font-heading mb-3">Consultation</h3>
              <p className="text-gray-600">
                Understanding patient history and visual needs.
              </p>
            </div>
          </HoverCard>

          <HoverCard>
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow">
              <h3 className="text-xl font-heading mb-3">Eye Testing</h3>
              <p className="text-gray-600">
                Advanced diagnostic tests for accurate prescriptions.
              </p>
            </div>
          </HoverCard>

          <HoverCard>
            <div className="bg-gray-50 p-8 rounded-xl text-center shadow">
              <h3 className="text-xl font-heading mb-3">Frame Selection</h3>
              <p className="text-gray-600">
                Choosing frames that match comfort and lifestyle.
              </p>
            </div>
          </HoverCard>
        </div>
      </FadeIn>

      {/* TRUST */}
      <FadeIn delay={0.45}>
        <div className="bg-black text-white py-16 text-center">
          <h2 className="text-3xl font-heading mb-4">
            Trusted Eye Care Since 2013
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Grace Optical combines clinical precision with premium eyewear experience to deliver the best vision solutions in Adoor.
          </p>
        </div>
      </FadeIn>

      {/* EQUIPMENT HEADING */}
      <FadeIn delay={0.55}>
        <h2 className="text-3xl font-heading text-center mt-20 mb-12">
          Advanced Diagnostic Equipment
        </h2>
      </FadeIn>

      {/* EQUIPMENT CONTENT */}
      <FadeIn delay={0.65}>
        <div className="container-custom px-6 grid md:grid-cols-3 gap-10 pb-20">
          <HoverCard>
            <div className="p-8 border rounded-xl shadow">
              <h3 className="font-heading text-xl mb-2">Auto Refractometer</h3>
              <p className="text-gray-600">Accurate eye power measurement.</p>
            </div>
          </HoverCard>

          <HoverCard>
            <div className="p-8 border rounded-xl shadow">
              <h3 className="font-heading text-xl mb-2">Digital Vision Chart</h3>
              <p className="text-gray-600">Precise visual acuity testing.</p>
            </div>
          </HoverCard>

          <HoverCard>
            <div className="p-8 border rounded-xl shadow">
              <h3 className="font-heading text-xl mb-2">Lens Analyzer</h3>
              <p className="text-gray-600">Verify lens quality and prescription accuracy.</p>
            </div>
          </HoverCard>
        </div>
      </FadeIn>

      {/* DOCTORS */}
      <FadeIn delay={0.75}>
        <div className="py-20 bg-gray-50 text-center">
          <div className="container-custom px-6">
            <h2 className="text-3xl font-heading mb-12">
              Expert Eye Care Professionals
            </h2>

            <HoverCard>
              <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow">
                <h3 className="text-xl font-heading mb-3">Certified Optometrists</h3>
                <p className="text-gray-600">
                  Experienced eye care specialists for accurate diagnosis and personalized prescriptions.
                </p>
              </div>
            </HoverCard>
          </div>
        </div>
      </FadeIn>

      {/* CTA */}
      <FadeIn delay={0.85}>
        <div className="bg-black text-white py-16 text-center">
          <h2 className="text-3xl font-heading mb-4">
            Book Your Professional Eye Test Today
          </h2>
          <p className="text-gray-300 mb-6">
            Experience precision eye care with modern technology and expert guidance.
          </p>

          <AnimatedButton>
            Schedule Appointment
          </AnimatedButton>
        </div>
      </FadeIn>

    </section>
  );
}