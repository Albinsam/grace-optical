import Hero from "../components/Hero"
import Collection from "../components/CollectionPreview"
import WhyChoose from "../components/WhyChoose"
import Testimonials from "../components/Testimonials"
import BrandLogos from "../components/BrandLogos"

export default function Home() {
  return (
    <div>
      <Hero />
      <Collection />
      <WhyChoose />
      <BrandLogos />
      <Testimonials />
    </div>
  )
}