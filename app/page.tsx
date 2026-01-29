import Link from "next/link";
import { CTASection } from "@/app/components/CTASection";
import { GalleryStrip } from "@/app/components/GalleryStrip";
import { Hero } from "@/app/components/Hero";
import { ServicesGrid } from "@/app/components/ServicesGrid";
import { Testimonials } from "@/app/components/Testimonials";
import { WhyChooseUs } from "@/app/components/WhyChooseUs";
import { siteData } from "@/app/lib/siteData";

export default function Home() {
  return (
    <>
      <Hero />
      <GalleryStrip />
      <ServicesGrid variant="home" />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
