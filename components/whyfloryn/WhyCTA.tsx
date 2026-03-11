import FadeIn from "@/components/ui/FadeIn"

export default function WhyCTA() {
  return (
    <section className="bg-[#3a2e25] py-20 text-white text-center">

      <FadeIn>

        <h2 className="text-3xl font-bold mb-4">
          Experience Floryn Stayz
        </h2>

        <p className="text-gray-300 mb-6">
          Discover comfortable stays designed for modern travelers.
        </p>

        <button className="bg-white text-[#3a2e25] px-6 py-3 rounded-md">
          Explore Rooms
        </button>

      </FadeIn>

    </section>
  )
}
