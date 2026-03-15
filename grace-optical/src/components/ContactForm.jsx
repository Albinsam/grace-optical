import { useRef } from "react"
import emailjs from "@emailjs/browser"
import FadeIn from "./FadeIn"

export default function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_nxxymnb",
      "template_k7mq8qs",
      form.current,
      "V4oUhQcOXyFltqOkj"
    ).then(() => {
      alert("Message Sent Successfully")
    }, () => {
      alert("Failed to Send Message")
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom px-6">

        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-heading text-center mb-12">
            Contact Us
          </h2>
        </FadeIn>

        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full border p-3 rounded"
            required
          />

          <button className="bg-brandBlack text-white px-8 py-3 rounded">
            Send Message
          </button>

        </form>

      </div>
    </section>
  )
}