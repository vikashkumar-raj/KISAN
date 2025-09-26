import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, TestTube, MapPin, Upload, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SoilData {
  pH: string;
  moisture: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  previousCrop: string;
  location: string;
}

interface RecommendationResult {
  recommendedCrop: string;
  reason: string;
  fertilizers: string;
  marketPrice: string;
  demand: string;
  confidence: number;
}

export default function CropRecommendationForm() {
  const { t } = useTranslation();
  const [soilData, setSoilData] = useState<SoilData>({
    pH: "",
    moisture: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    previousCrop: "",
    location: ""
  });
  const [recommendation, setRecommendation] = useState<RecommendationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCropRecommendation = async () => {
    setIsLoading(true);
    
    // Simulate API call with rule-based logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const pH = parseFloat(soilData.pH);
    const moisture = parseFloat(soilData.moisture);
    const N = parseFloat(soilData.nitrogen);
    const P = parseFloat(soilData.phosphorus);
    const K = parseFloat(soilData.potassium);
    
    let crop = "Wheat";
    let reason = "Default crop for moderate conditions";
    let fertilizers = "NPK Complex";
    let price = "₹20,000/tonne";
    let demand = "Medium";
    let confidence = 75;
    
    // Rule-based recommendation logic
    if (pH >= 5.5 && pH <= 6.5 && moisture > 70) {
      crop = "Rice";
      reason = "Acidic soil with high moisture content is ideal for rice cultivation";
      fertilizers = "Urea, DAP";
      price = "₹18,500/tonne";
      demand = "High";
      confidence = 92;
    } else if (pH >= 6.0 && pH <= 7.5 && moisture >= 40 && moisture <= 70) {
      crop = "Wheat";
      reason = "Neutral pH with moderate moisture favors wheat production";
      fertilizers = "NPK, Urea";
      price = "₹22,000/tonne";
      demand = "High";
      confidence = 88;
    } else if (pH >= 6.5 && pH <= 8.0 && K > 150) {
      crop = "Cotton";
      reason = "Alkaline soil with high potassium content supports cotton growth";
      fertilizers = "Potash, Phosphate";
      price = "₹55,000/tonne";
      demand = "Very High";
      confidence = 85;
    } else if (N < 100 && soilData.previousCrop !== "Legumes") {
      crop = "Soybean";
      reason = "Low nitrogen soil benefits from nitrogen-fixing legumes";
      fertilizers = "Phosphate, Potash";
      price = "₹45,000/tonne";
      demand = "High";
      confidence = 82;
    }
    
    setRecommendation({
      recommendedCrop: crop,
      reason,
      fertilizers,
      marketPrice: price,
      demand,
      confidence
    });
    
    setIsLoading(false);
  };

  const handleInputChange = (field: keyof SoilData, value: string) => {
    setSoilData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card className="shadow-soft border-border/50">
        <CardHeader className="bg-gradient-field rounded-t-lg">
          <CardTitle className="flex items-center gap-2 text-primary">
            <TestTube className="h-6 w-6" />
            {t('soilAnalysis', 'Soil Analysis & Crop Recommendation')}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {t('enterSoilData', 'Enter your soil parameters to get AI-powered crop recommendations')}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          {/* Soil Chemistry Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Droplets className="h-5 w-5" />
              {t('soilChemistry', 'Soil Chemistry')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ph">{t('phLevel', 'pH Level')}</Label>
                <Input
                  id="ph"
                  type="number"
                  step="0.1"
                  min="0"
                  max="14"
                  placeholder="6.5"
                  value={soilData.pH}
                  onChange={(e) => handleInputChange('pH', e.target.value)}
                  className="transition-smooth focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="moisture">{t('moistureContent', 'Moisture Content (%)')}</Label>
                <Input
                  id="moisture"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="45"
                  value={soilData.moisture}
                  onChange={(e) => handleInputChange('moisture', e.target.value)}
                  className="transition-smooth focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nitrogen">{t('nitrogen', 'Nitrogen (N) mg/kg')}</Label>
                <Input
                  id="nitrogen"
                  type="number"
                  min="0"
                  placeholder="120"
                  value={soilData.nitrogen}
                  onChange={(e) => handleInputChange('nitrogen', e.target.value)}
                  className="transition-smooth focus:ring-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phosphorus">{t('phosphorus', 'Phosphorus (P) mg/kg')}</Label>
                <Input
                  id="phosphorus"
                  type="number"
                  min="0"
                  placeholder="25"
                  value={soilData.phosphorus}
                  onChange={(e) => handleInputChange('phosphorus', e.target.value)}
                  className="transition-smooth focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="potassium">{t('potassium', 'Potassium (K) mg/kg')}</Label>
                <Input
                  id="potassium"
                  type="number"
                  min="0"
                  placeholder="180"
                  value={soilData.potassium}
                  onChange={(e) => handleInputChange('potassium', e.target.value)}
                  className="transition-smooth focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Farm Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Leaf className="h-5 w-5" />
              {t('farmInformation', 'Farm Information')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="previousCrop">{t('previousCrop', 'Previous Crop')}</Label>
                <Select value={soilData.previousCrop} onValueChange={(value) => handleInputChange('previousCrop', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('selectPreviousCrop', 'Select previous crop')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">{t('rice', 'Rice')}</SelectItem>
                    <SelectItem value="wheat">{t('wheat', 'Wheat')}</SelectItem>
                    <SelectItem value="cotton">{t('cotton', 'Cotton')}</SelectItem>
                    <SelectItem value="sugarcane">{t('sugarcane', 'Sugarcane')}</SelectItem>
                    <SelectItem value="legumes">{t('legumes', 'Legumes')}</SelectItem>
                    <SelectItem value="none">{t('none', 'None/First Season')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">{t('location', 'Location/PIN Code')}</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    placeholder="Enter PIN code"
                    value={soilData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className="pl-10 transition-smooth focus:ring-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Upload className="h-5 w-5" />
              {t('imageAnalysis', 'Image Analysis (Optional)')}
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-muted/20">
              <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                {t('uploadImage', 'Upload soil or crop images for AI analysis')}
              </p>
              <Button variant="outline" className="mt-2" disabled>
                {t('chooseFile', 'Choose File')}
              </Button>
            </div>
          </div>

          <Button 
            onClick={getCropRecommendation}
            disabled={!soilData.pH || !soilData.moisture || isLoading}
            className="w-full bg-gradient-earth hover:opacity-90 transition-smooth shadow-crop"
            size="lg"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                {t('analyzing', 'Analyzing...')}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                {t('getCropSuggestion', 'Get Crop Suggestion')}
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Recommendation Results */}
      {recommendation && (
        <Card className="shadow-crop border-accent/20">
          <CardHeader className="bg-gradient-sky rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Leaf className="h-6 w-6" />
              {t('recommendation', 'Crop Recommendation')}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-accent">{recommendation.recommendedCrop}</h3>
              <Badge variant="secondary" className="bg-accent/10 text-accent">
                {recommendation.confidence}% {t('confidence', 'Confidence')}
              </Badge>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">{t('reasoning', 'Reasoning:')}</h4>
              <p className="text-muted-foreground">{recommendation.reason}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">{t('fertilizers', 'Recommended Fertilizers')}</h4>
                <p className="text-sm text-muted-foreground">{recommendation.fertilizers}</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">{t('marketPrice', 'Market Price')}</h4>
                <p className="text-sm text-muted-foreground">{recommendation.marketPrice}</p>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold text-primary mb-2">{t('demand', 'Market Demand')}</h4>
                <Badge variant={recommendation.demand === 'High' || recommendation.demand === 'Very High' ? 'default' : 'secondary'}>
                  {recommendation.demand}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}