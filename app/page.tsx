import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ComingSoon } from "@/components/coming-soon";
import { HowItWorks } from "@/components/how-it-works";
import { AiPreviewShowcase } from "@/components/ai-preview";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-ivory-100 text-plum-900 selection:bg-blush-200">
      <Navbar />
      <Hero />
      <ComingSoon />
      <HowItWorks />
      <AiPreviewShowcase />
      <Features />
      <Footer />
    </main>
  );
}
