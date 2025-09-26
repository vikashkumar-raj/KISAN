import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CropRecommendationForm from "@/components/CropRecommendationForm";
import Chatbot from "@/components/Chatbot";
import "@/i18n/config";

const Index = () => {
  useEffect(() => {
    // Initialize i18n
    import("@/i18n/config");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <main className="pt-8 pb-16">
        {/* Analysis Section */}
        <section id="analysis-section" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CropRecommendationForm />
          </div>
        </section>

        {/* Advisor Section */}
        <section className="py-16 bg-gradient-field">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Chatbot />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
