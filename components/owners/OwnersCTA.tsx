import FadeIn from "@/components/ui/FadeIn";

export default function OwnersCTA() {
  return (
    <section className="bg-[#3a2e25] text-white py-20 text-center">

      <FadeIn>
        <h2 className="text-3xl font-bold mb-4">
          Ready to partner with us?
        </h2>

        <p className="text-gray-300 mb-6">
          Send us your property details and our team will reach out.
        </p>

        <button className="bg-white text-[#3a2e25] px-6 py-3 rounded-md font-medium">
          Contact Us
        </button>
      </FadeIn>

    </section>
  );
}
