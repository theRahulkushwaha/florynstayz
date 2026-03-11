import OwnersHero from "@/components/owners/OwnersHero";
import OwnersStats from "@/components/owners/OwnersStats";
import OwnersBenefits from "@/components/owners/OwnersBenefits";
import PropertySlider from "@/components/owners/PropertySlider";
import OwnersCTA from "@/components/owners/OwnersCTA";

export default function OwnersPage() {
  return (
    <>
      <OwnersHero />
      <OwnersStats />
      <OwnersBenefits />
      <PropertySlider />
      <OwnersCTA />
    </>
  );
}
