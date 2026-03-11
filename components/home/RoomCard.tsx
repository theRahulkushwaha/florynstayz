import Image from "next/image";
import Link from "next/link";

type RoomCardProps = {
  name: string;
  price: number;
  amenities: string;
  image: string;
};

export default function RoomCard({
  name,
  price,
  amenities,
  image,
}: RoomCardProps) {
  return (
    <div className="min-w-[280px] bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#1f1f1f] mb-2">
          {name}
        </h3>

        <p className="text-[#3a2e25] font-medium mb-2">
          ₹ {price} / night
        </p>

        <p className="text-gray-600 text-sm mb-4">
          {amenities}
        </p>

        <Link
          href="/rooms"
          className="inline-block bg-[#3a2e25] hover:bg-[#2c221b] text-white px-5 py-2 rounded-lg text-sm transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}