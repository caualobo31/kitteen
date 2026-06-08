import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import Transformation from "@/components/sections/Transformation";
import InactionCost from "@/components/sections/InactionCost";
import Stack from "@/components/sections/Stack";
import SocialProof from "@/components/sections/SocialProof";
import PricingLadder from "@/components/sections/PricingLadder";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Gallery />
      <Transformation />
      <InactionCost />
      <Stack />
      <SocialProof />
      <PricingLadder />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}
