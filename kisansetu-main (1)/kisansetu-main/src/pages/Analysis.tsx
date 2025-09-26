import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, TestTube, Droplets, Thermometer, Cloud } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

export default function Analysis() {
  const { t } = useTranslation();

  const soilHealthData = {
    pH: { value: 6.5, status: "optimal", color: "text-green-600" },
    moisture: { value: 45, status: "good", color: "text-blue-600" },
    nitrogen: { value: 120, status: "low", color: "text-orange-600" },
    phosphorus: { value: 25, status: "optimal", color: "text-green-600" },
    potassium: { value: 180, status: "high", color: "text-green-600" }
  };

  const weatherData = {
    temperature: 28,
    humidity: 65,
    rainfall: 120,
    forecast: "favorable"
  };

  const riskFactors = [
    { name: "Pest Infestation", risk: "low", probability: 15 },
    { name: "Disease Outbreak", risk: "medium", probability: 35 },
    { name: "Weather Stress", risk: "low", probability: 20 },
    { name: "Nutrient Deficiency", risk: "medium", probability: 40 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Farm Analysis Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive analysis of your farm's current conditions</p>
          </div>

          <Tabs defaultValue="soil" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="soil" className="flex items-center gap-2">
                <TestTube className="h-4 w-4" />
                Soil Health
              </TabsTrigger>
              <TabsTrigger value="weather" className="flex items-center gap-2">
                <Cloud className="h-4 w-4" />
                Weather
              </TabsTrigger>
              <TabsTrigger value="crops" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Crop Status
              </TabsTrigger>
              <TabsTrigger value="risks" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Risk Assessment
              </TabsTrigger>
            </TabsList>

            {/* Soil Analysis Tab */}
            <TabsContent value="soil" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      pH Level
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold">{soilHealthData.pH.value}</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {soilHealthData.pH.status}
                      </Badge>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-2">Optimal range: 6.0-7.0</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-blue-500" />
                      Moisture Content
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold">{soilHealthData.moisture.value}%</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        {soilHealthData.moisture.status}
                      </Badge>
                    </div>
                    <Progress value={45} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-2">Current: Adequate for most crops</p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">NPK Levels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Nitrogen (N)</span>
                        <span className="text-sm font-medium text-orange-600">120 mg/kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Phosphorus (P)</span>
                        <span className="text-sm font-medium text-green-600">25 mg/kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Potassium (K)</span>
                        <span className="text-sm font-medium text-green-600">180 mg/kg</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Soil Health Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-orange-800">Low Nitrogen Detected</h4>
                        <p className="text-sm text-orange-700">Consider adding urea or organic compost to boost nitrogen levels.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-green-800">Optimal pH Balance</h4>
                        <p className="text-sm text-green-700">Your soil pH is perfect for most vegetable crops.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Weather Analysis Tab */}
            <TabsContent value="weather" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Thermometer className="h-8 w-8 text-red-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Temperature</p>
                        <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Droplets className="h-8 w-8 text-blue-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Humidity</p>
                        <p className="text-2xl font-bold">{weatherData.humidity}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <Cloud className="h-8 w-8 text-gray-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Rainfall (30 days)</p>
                        <p className="text-2xl font-bold">{weatherData.rainfall}mm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-8 w-8 text-green-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Forecast</p>
                        <p className="text-lg font-bold capitalize text-green-600">{weatherData.forecast}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>7-Day Weather Forecast Impact</CardTitle>
                  <CardDescription>How upcoming weather will affect your crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Optimal Growing Conditions</h4>
                        <p className="text-sm text-muted-foreground">Next 3 days show ideal temperature and humidity</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Favorable</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">Light Rain Expected</h4>
                        <p className="text-sm text-muted-foreground">Day 4-5: Natural irrigation, reduce watering</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Monitor</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Crop Status Tab */}
            <TabsContent value="crops" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">Current Crops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Wheat (North Field)</span>
                        <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Rice (South Field)</span>
                        <Badge className="bg-yellow-100 text-yellow-800">Monitor</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Cotton (East Field)</span>
                        <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">Growth Stage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Wheat</span>
                          <span className="text-sm text-muted-foreground">75%</span>
                        </div>
                        <Progress value={75} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">Grain filling stage</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Rice</span>
                          <span className="text-sm text-muted-foreground">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">Flowering stage</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-lg">Yield Prediction</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Wheat</span>
                        <span className="font-medium">4.2 tons/ha</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Rice</span>
                        <span className="font-medium">5.8 tons/ha</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Cotton</span>
                        <span className="font-medium">1.8 tons/ha</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Risk Assessment Tab */}
            <TabsContent value="risks" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {riskFactors.map((risk, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {risk.name}
                        <Badge 
                          variant={risk.risk === 'low' ? 'secondary' : risk.risk === 'medium' ? 'default' : 'destructive'}
                          className={
                            risk.risk === 'low' ? 'bg-green-100 text-green-800' :
                            risk.risk === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }
                        >
                          {risk.risk} risk
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm">Risk Probability</span>
                            <span className="text-sm font-medium">{risk.probability}%</span>
                          </div>
                          <Progress value={risk.probability} className="h-2" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {risk.name === "Pest Infestation" && "Monitor for aphids and caterpillars. Weather conditions are not favorable for major pest outbreaks."}
                          {risk.name === "Disease Outbreak" && "Moderate humidity levels increase risk of fungal diseases. Ensure proper field drainage."}
                          {risk.name === "Weather Stress" && "Current weather patterns are stable. No extreme conditions expected in the near term."}
                          {risk.name === "Nutrient Deficiency" && "Nitrogen levels are below optimal. Consider fertilizer application within 2 weeks."}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}