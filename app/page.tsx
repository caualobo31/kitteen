import Hero from "@/components/sections/Hero";
import ProblemRecognition from "@/components/sections/ProblemRecognition";
import Gallery from "@/components/sections/Gallery";
import PainIdentification from "@/components/sections/PainIdentification";
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
      <ProblemRecognition />
      <PainIdentification />
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
