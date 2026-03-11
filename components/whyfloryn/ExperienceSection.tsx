"use client"

import Image from "next/image"
import FadeIn from "@/components/ui/FadeIn"

export default function ExperienceSection() {
  return (
    <section className="bg-[#f7ecce] py-20">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <FadeIn>
          <div>

            <h2 className="text-3xl font-bold text-[#3a2e25] mb-6">
              Designed for comfort
            </h2>

            <p className="text-gray-700 mb-4">
              Every Floryn Stayz property is carefully designed
              to offer a comfortable and relaxing experience.
            </p>

            <p className="text-gray-700">
              Clean rooms, modern interiors, and convenient
              locations make every stay enjoyable.
            </p>

          </div>
        </FadeIn>

        <FadeIn>
          <div className="relative w-full h-[380px] rounded-xl overflow-hidden">

            <Image
              src="/images/rooms/room1.jpg"
              alt="Floryn Room"
              fill
              className="object-cover"
            />

          </div>
        </FadeIn>

      </div>

    </section>
  )
}
