import FadeIn from "@/components/ui/FadeIn"

export default function WhyHero() {
  return (
    <section className="bg-[#f7ecce] py-20 md:py-28">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <FadeIn>
          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#3a2e25] mb-6">
              Hospitality designed for modern travelers
            </h1>

            <p className="text-gray-700 mb-4">
              Travel should feel comfortable, reliable, and welcoming.
              At Floryn Stayz, we focus on delivering a consistent
              hospitality experience across every property.
            </p>

            <p className="text-gray-700">
              From thoughtfully designed rooms to seamless service,
              we ensure every stay feels effortless.
            </p>

          </div>
        </FadeIn>

        <FadeIn>
          <div className="h-[320px] md:h-[420px] bg-gray-200 rounded-xl"></div>
        </FadeIn>

      </div>

    </section>
  )
}
