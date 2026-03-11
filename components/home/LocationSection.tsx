export default function LocationSection() {
  return (
    <section className="py-20 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-4">
            Our Location
          </h2>

          <p className="text-gray-600">
            Find us easily near HUDA City Centre Metro Station, Gurugram.
          </p>
        </div>

        {/* Map */}
        <div className="w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=Floryn+Stayz+Huda+City+Centre+Gurugram&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <a
            href="https://google.com/maps/place/B,+Floryn+Stayz-Huda+City+Centre"
            target="_blank"
            className="inline-block bg-[#d4a017] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b88a13] transition"
          >
            Open in Google Maps
          </a>
        </div>

      </div>
    </section>
  );
}
