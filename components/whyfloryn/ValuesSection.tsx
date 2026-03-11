import FadeIn from "@/components/ui/FadeIn"

function Value({ title, desc }: any) {
  return (
    <div>
      <h3 className="font-semibold text-[#3a2e25] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

export default function ValuesSection() {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-3xl font-bold text-[#3a2e25] mb-12">
            Our values make us loved by guests
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">

          <FadeIn>
            <Value
              title="Honesty"
              desc="Transparent pricing and clear communication."
            />
          </FadeIn>

          <FadeIn>
            <Value
              title="Simplicity"
              desc="Easy booking and seamless check-in experience."
            />
          </FadeIn>

          <FadeIn>
            <Value
              title="Community"
              desc="Warm hospitality wherever you travel."
            />
          </FadeIn>

          <FadeIn>
            <Value
              title="Generosity"
              desc="Thoughtful amenities and comfort-focused stays."
            />
          </FadeIn>

          <FadeIn>
            <Value
              title="Affordability"
              desc="Premium experience without premium pricing."
            />
          </FadeIn>

          <FadeIn>
            <Value
              title="Consistency"
              desc="A reliable stay experience across locations."
            />
          </FadeIn>

        </div>

      </div>

    </section>
  )
}
