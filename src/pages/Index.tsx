import { Navbar } from "@/components/Navbar";
import { Header28 } from "@/components/Header28";
import { Foundation } from "@/components/Foundation";
import { Coverages } from "@/components/Coverages";
import { BusinessCoverages } from "@/components/BusinessCoverages";
import { FamilyCoverages } from "@/components/FamilyCoverages";
import { AutoProtection } from "@/components/AutoProtection";
import { CoverageCards } from "@/components/CoverageCards";
import { Consulting } from "@/components/Consulting";
import { CtaSection } from "@/components/CtaSection";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="stack-sections bg-[#f0f2f5]">
        <Header28 />
        <Foundation />
        <Coverages />
        <BusinessCoverages />
        <FamilyCoverages />
        <AutoProtection />
        <CoverageCards />
        <Consulting />
        <Testimonials />
        <Blog />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
