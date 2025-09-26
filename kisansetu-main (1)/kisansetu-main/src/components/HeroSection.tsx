import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-agriculture.jpg";

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToAnalysis = () => {
    document.getElementById('analysis-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Smart Agriculture Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">
              {t('smartAgriculture', 'Smart Agriculture')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('heroTitle', 'AI-Powered Crop Recommendations for Smart Farming')}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {t('heroSubtitle', 'Get data-driven insights for optimal crop selection based on your soil conditions, weather patterns, and market trends.')}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            onClick={scrollToAnalysis}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white shadow-crop transition-smooth"
          >
            <span className="flex items-center gap-2">
              {t('getStarted', 'Get Started')}
              <ArrowRight className="h-5 w-5" />
            </span>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 transition-smooth backdrop-blur-sm"
          >
            {t('learnMore', 'Learn More')}
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <Leaf className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">Smart Analysis</h3>
            <p className="text-white/80 text-sm">
              Advanced soil and weather analysis for optimal crop selection
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">Market Insights</h3>
            <p className="text-white/80 text-sm">
              Real-time market trends and pricing for informed decisions
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <Shield className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-2">Risk Management</h3>
            <p className="text-white/80 text-sm">
              Comprehensive advisory for disease prevention and crop protection
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}