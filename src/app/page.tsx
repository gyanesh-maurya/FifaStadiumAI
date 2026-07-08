import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ImpactSection } from "@/components/landing/ImpactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ImpactSection />
      </main>
      <div className="flex-1" />
      <Footer />
    </main>
  );
}
