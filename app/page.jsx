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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
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