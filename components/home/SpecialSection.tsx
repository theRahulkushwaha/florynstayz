import FeatureCard from "./FeatureCard";

export default function SpecialSection() {
  return (
    <section className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-4">
            What Makes Us Special
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We focus on comfort, cleanliness, and premium hospitality 
            to ensure every guest experiences a memorable stay.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            title="Prime Location"
            description="Located in the heart of the city with easy access to business hubs, shopping centers, and tourist attractions."
            // image="/images/features/location.jpg"
            image="/images/properties/H1.png"
          />

          <FeatureCard
            title="Clean & Safe Rooms"
            description="We maintain high hygiene standards and ensure every room is sanitized for your safety and comfort."
            // image="/images/features/clean-room.jpg"
            image="/images/properties/p2.png"
          />

          <FeatureCard
            title="Affordable Luxury"
            description="Enjoy premium amenities and elegant interiors at prices that provide excellent value for your stay."
            // image="/images/features/luxury.jpg"
            image="/images/properties/p1.png"
          />

        </div>

      </div>
    </section>
  );
}
