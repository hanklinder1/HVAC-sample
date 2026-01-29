import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { Hero } from "@/app/components/Hero";
import { ServicesGrid } from "@/app/components/ServicesGrid";
import { Testimonials } from "@/app/components/Testimonials";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { siteData } from "@/app/lib/siteData";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid variant="home" />
      <WhyChooseUs />

      <Testimonials />
      <CTASection />
    </>
  );
}
