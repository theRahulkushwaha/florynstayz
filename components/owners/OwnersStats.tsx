"use client";

import FadeIn from "@/components/ui/FadeIn";
import Counter from "@/components/ui/Counter";

function Stat({ number, label }: { number: number; label: string }) {
  return (
    <div className="text-center">
      <h3 className="text-3xl md:text-4xl font-bold">
        <Counter value={number} />+
      </h3>
      <p className="text-sm text-gray-200 mt-2">{label}</p>
    </div>
  );
}

export default function OwnersStats() {
  return (
    <section className="bg-[#3a2e25] text-white py-12">
      <FadeIn>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-8">
          <Stat number={120} label="Properties Evaluated" />
          <Stat number={85} label="Partners Onboarded" />
          <Stat number={40} label="Cities Covered" />
        </div>
      </FadeIn>
    </section>
  );
}
