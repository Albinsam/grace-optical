export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-12">

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">
            Grace Optical Gallery
          </h3>
          <p className="text-gray-400">
            13 Years of Precision Eye Care with 2000+ Lens Varieties.
          </p>
        </div>

        <div>
          <h3 className="text-lg mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Home</li>
            <li>Collection</li>
            <li>Clinical</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg mb-4">Contact</h3>
          <p className="text-gray-400">Pathanamthitta, Kerala</p>
          <p className="text-gray-400">+91 98765 43210</p>
        </div>

      </div>

      <div className="text-center mt-10 text-gray-500">
        © 2024 Grace Optical Gallery. All rights reserved.
      </div>

    </footer>
  )
}