import FadeIn from "@/components/ui/FadeIn"

export default function Testimonial() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <FadeIn>

          <p className="text-2xl text-[#3a2e25] mb-6">
            “Floryn Stayz offers a reliable and comfortable
            experience wherever you travel.”
          </p>

          <span className="text-gray-600">
            — Guest Review
          </span>

        </FadeIn>

      </div>

    </section>
  )
}
