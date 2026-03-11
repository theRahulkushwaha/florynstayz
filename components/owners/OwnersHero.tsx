import FadeIn from "@/components/ui/FadeIn";

export default function OwnersHero() {
  return (
    <section className="bg-[#f7ecce] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <FadeIn>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#3a2e25] mb-6">
              Partner with Floryn Stayz
            </h1>

            <p className="text-gray-700 mb-6">
              Join a growing hospitality brand and maximize the potential
              of your property with professional hotel management.
            </p>

            <button className="bg-[#3a2e25] text-white px-6 py-3 rounded-md hover:opacity-90">
              Become a Partner
            </button>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="h-[320px] md:h-[420px] bg-gray-200 rounded-xl"></div>
        </FadeIn>

      </div>
    </section>
  );
}
