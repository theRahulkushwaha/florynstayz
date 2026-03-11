function Expect({ title, desc }: any) {
  return (
    <div>
      <h3 className="font-semibold text-[#3a2e25] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}

export default function OwnersExpect() {
  return (
    <section className="bg-[#f7ecce] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12 text-[#3a2e25]">
          What we expect from you
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <Expect title="Ambition" desc="Desire to build a strong hospitality business." />

          <Expect title="Quality Mindset" desc="Focus on guest satisfaction and service." />

          <Expect title="Honesty" desc="Transparent partnership approach." />

          <Expect title="Financial Stability" desc="Preparedness to operate professionally." />

          <Expect title="Attitude" desc="Positive collaboration with our team." />

          <Expect title="Smart Judgment" desc="Long-term partnership thinking." />

        </div>

      </div>
    </section>
  )
}
