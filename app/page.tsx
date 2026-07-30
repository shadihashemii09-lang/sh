import HeroSection from "@/features/marketing/components/hero-section";
import FeaturesSection from "@/features/marketing/components/features-section";
import CategoriesSection from "@/features/marketing/components/categories-section";
import HowItWorksSection from "@/features/marketing/components/how-it-works-section";
import StatsSection from "@/features/marketing/components/stats-section";
import TestimonialsSection from "@/features/marketing/components/testimonials-section";
import PricingSection from "@/features/marketing/components/pricing-section";
import FaqSection from "@/features/marketing/components/faq-section";
import CtaSection from "@/features/marketing/components/cta-section";
import Footer from "@/features/marketing/components/footer";

export const metadata = {
  title: "بوکلی - پلتفرم رزرو آنلاین نوبت",
  description:
    "پلتفرم حرفه‌ای رزرو آنلاین نوبت برای امکانات تجاری، سلامت، زیبایی و خدمات مختلف",
};

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  );
}