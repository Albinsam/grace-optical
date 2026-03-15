import FadeIn from "./FadeIn";

export default function Testimonials() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container-custom px-6">

        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-heading text-center mb-12">
            What Our Customers Say
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">

          <FadeIn delay={0.3}>
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-gray-300 mb-4">
                Excellent eye testing service. The staff explained everything clearly and helped me choose perfect frames.
              </p>
              <h4 className="font-heading">Rahul Kumar</h4>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-gray-300 mb-4">
                Premium frame collection and very professional service. Highly recommend Grace Optical.
              </p>
              <h4 className="font-heading">Anjali Nair</h4>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-gray-300 mb-4">
                Modern equipment and experienced optometrists. Best optical clinic experience so far.
              </p>
              <h4 className="font-heading">Joseph Mathew</h4>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}