import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/layout/CustomCursor";
import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import ProductPreview from "@/components/sections/ProductPreview";
import Differentiation from "@/components/sections/Differentiation";
import Security from "@/components/sections/Security";
import SocialProof from "@/components/sections/SocialProof";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Tharwa — Wealth Redefined",
  description:
    "AI-powered, Arabic-first personal finance analyst for the MENA region. Track spending, plan your wealth, calculate Zakat, and get bilingual financial guidance.",
};

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Differentiation />
        <Security />
        <SocialProof />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
