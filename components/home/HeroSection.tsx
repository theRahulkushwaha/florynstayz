import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">

      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Floryn Stayz Hotel Exterior"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-xl text-white">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Comfortable & Elegant Stay in Gurgaon
            </h1>

            <p className="text-lg md:text-xl mb-8 opacity-90">
              Experience warm hospitality, modern comfort,
              and a peaceful stay in the heart of the city.
              Designed for families, business travelers & explorers.
            </p>

            <Link
              href="/rooms"
              className="inline-block bg-[#3a2e25] hover:bg-[#2c221b] transition duration-300 text-white px-8 py-4 rounded-lg text-lg font-medium"
            >
              Book Your Stay
            </Link>

          </div>
        </div>
      </div>

    </section>
  );
}