import TrustCard from "./TrustCard";

export default function TrustSection() {
  return (
    <section className="py-24 bg-[#f7ecce]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-4">
            Partner & Grow With Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with owners, businesses, and talented professionals
            to build exceptional hospitality experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          <TrustCard
            title="For Owners & Developers"
            description="Partner with Floryn Stayz to develop and manage premium hospitality properties with strong brand support and operational excellence."
            link="/owners"
          />

          <TrustCard
            title="Corporate Booking"
            description="Special packages and long-stay solutions for companies, business travelers, and corporate teams."
            link="/corporate"
          />

          <TrustCard
            title="Careers at Floryn Stayz"
            description="Join our growing team and be part of a hospitality brand that values professionalism, growth, and innovation."
            link="/careers"
          />

        </div>

      </div>
    </section>
  );
}