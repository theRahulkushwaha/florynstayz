import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3a2e25] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">

          {/* Left Column - Brand */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              FLORYN STAYZ
            </h2>
            <p className="text-gray-300">
              Stay Smart. Stay Comfortable.
            </p>
          </div>

          {/* Middle Column - Links */}
          <div className="grid grid-cols-2 gap-8">

            <div className="flex flex-col space-y-3">
              <Link href="/why-floryn" className="hover:underline">
                Why Floryn Stayz?
              </Link>
              <Link href="/owners" className="hover:underline">
                Developers & Owners
              </Link>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
              <Link href="/loyalty" className="hover:underline">
                Loyalty
              </Link>
            </div>

            <div className="flex flex-col space-y-3">
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
              <Link href="/press" className="hover:underline">
                For the Press
              </Link>
              <Link href="/media" className="hover:underline">
                In the Media
              </Link>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </div>

          </div>

          {/* Right Column - Social */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-6 text-gray-300">
              <Link href="#" className="hover:text-white transition">
                Instagram
              </Link>
              <Link href="#" className="hover:text-white transition">
                Facebook
              </Link>
              <Link href="#" className="hover:text-white transition">
                LinkedIn
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/20 pt-6 text-sm text-gray-300 flex flex-col md:flex-row justify-between gap-4">

          <div>
            address, Gurgaon, India
          </div>

          <div>
            Mobile no. | info@florynstayz.com
          </div>

          <div>
            © 2026 Floryn Stayz. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}