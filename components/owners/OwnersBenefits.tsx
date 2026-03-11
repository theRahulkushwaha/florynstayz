import FadeIn from "@/components/ui/FadeIn";

function Benefit({ title, desc }: any) {
  return (
    <div>
      <h3 className="font-semibold text-[#3a2e25] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function OwnersBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn>
          <h2 className="text-3xl font-bold text-[#3a2e25] mb-12">
            Why partner with Floryn Stayz
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10">

          <FadeIn>
            <Benefit
              title="Quality Focus"
              desc="We partner with high-potential properties and elevate them to premium standards."
            />
          </FadeIn>

          <FadeIn>
            <Benefit
              title="Transparency"
              desc="Clear partnership model with transparent revenue sharing."
            />
          </FadeIn>

          <FadeIn>
            <Benefit
              title="Rapid Execution"
              desc="Our experienced team transforms properties quickly."
            />
          </FadeIn>

          <FadeIn>
            <Benefit
              title="Optimal Investment"
              desc="Smart upgrades that maximize your returns."
            />
          </FadeIn>

          <FadeIn>
            <Benefit
              title="Brand Growth"
              desc="Join a growing hospitality brand trusted by travelers."
            />
          </FadeIn>

          <FadeIn>
            <Benefit
              title="Better Returns"
              desc="Improved occupancy and revenue."
            />
          </FadeIn>

        </div>

      </div>
    </section>
  );
}
