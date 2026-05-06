import {
  HeroSection,
  AboutSection,
  ServicesSection,
  DoctorsSection,
  AppointmentCTASection,
  ShopSection,
  PortfolioSection,
  PricingSection,
  TestimonialsSection,
  PartnersSection,
  BlogSection,
  EmergencyBanner,
} from "@/components/sections";
import { siteConfig } from "@/constants/siteData";

export const metadata = {
  title: `${siteConfig.name} | ${siteConfig.slogan}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    url: "https://www.renovalifecare.com",
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <AppointmentCTASection />
      <ShopSection />
      <PortfolioSection />
      <PricingSection />
      <TestimonialsSection />
      <PartnersSection />
      <BlogSection />
      <EmergencyBanner />
    </>
  );
}