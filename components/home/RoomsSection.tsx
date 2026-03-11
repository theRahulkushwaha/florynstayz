import { rooms } from "@/lib/constants";
import RoomCard from "./RoomCard";

export default function RoomsSection() {
  return (
    <section className="py-20 bg-[#f7ecce]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] mb-3">
            Rooms
          </h2>
          <p className="text-gray-700">
            Designed for comfort, built for relaxation.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {rooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>

      </div>
    </section>
  );
}