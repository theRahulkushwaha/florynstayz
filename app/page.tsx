import HeroSection from "@/components/home/HeroSection";
import RoomsSection from "@/components/home/RoomsSection";
import SpecialSection from "@/components/home/SpecialSection";
import TrustSection from "@/components/home/TrustSection";
import Reveal from "@/components/animations/Reveal";

export default function Home() {
  return (
    <>
      <HeroSection />

      <Reveal>
        <RoomsSection />
      </Reveal>

      <Reveal>
        <SpecialSection />
      </Reveal>

      <Reveal>
        <TrustSection />
      </Reveal>
    </>
  );
}
