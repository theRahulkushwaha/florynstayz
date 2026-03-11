import Image from "next/image";

type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function FeatureCard({
  title,
  description,
  image,
}: FeatureCardProps) {
  return (
    <div className="bg-[#f7ecce] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-xl font-semibold text-[#1f1f1f] mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  );
}
