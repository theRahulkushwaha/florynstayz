import Link from "next/link";

type TrustCardProps = {
  title: string;
  description: string;
  link: string;
};

export default function TrustCard({
  title,
  description,
  link,
}: TrustCardProps) {
  return (
    <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between">
      
      <div>
        <h3 className="text-2xl font-semibold text-[#1f1f1f] mb-4">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <Link
        href={link}
        className="text-[#3a2e25] font-medium hover:underline underline-offset-4"
      >
        Learn More →
      </Link>
    </div>
  );
}