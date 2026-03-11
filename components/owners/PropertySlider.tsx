"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/properties/p1.png",
  "/images/properties/p2.png",
  "/images/properties/p3.png",
  "/images/properties/p4.png",
];

export default function PropertySlider() {
  const [index, setIndex] = useState(0);

  function next() {
    setIndex((index + 1) % images.length);
  }

  function prev() {
    setIndex((index - 1 + images.length) % images.length);
  }

  return (
    <div className="relative w-full h-[420px] rounded-xl overflow-hidden">

      <Image
        src={images[index]}
        alt="property"
        fill
        className="object-cover"
      />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 bg-white px-3 py-2 rounded shadow"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 bg-white px-3 py-2 rounded shadow"
      >
        →
      </button>

    </div>
  );
}
