import Hero from "@/components/sections/Hero";
import MethodTeenSkills from "@/components/sections/MethodTeenSkills";
import Gallery from "@/components/sections/Gallery";
import Transformation from "@/components/sections/Transformation";
import InactionCost from "@/components/sections/InactionCost";
import Stack from "@/components/sections/Stack";
import SocialProof from "@/components/sections/SocialProof";
import Offer from "@/components/sections/Offer";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import UpsellPopup from "@/components/UpsellPopup";
import TopBanner from "@/components/TopBanner";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <TopBanner />
      <Hero />
      <MethodTeenSkills />
      <Gallery />
      <Transformation />
      <InactionCost />
      <SocialProof />
      <Stack />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
      <UpsellPopup />
    </main>
  );
}
