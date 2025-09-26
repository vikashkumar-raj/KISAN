import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, DollarSign, BarChart3, ShoppingCart, MapPin, Calendar, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";

export default function Market() {
  const { t } = useTranslation();

  const marketPrices = [
    { crop: "Wheat", currentPrice: "₹22,500", change: "+5.2%", trend: "up", demand: "High", lastUpdated: "2 hours ago" },
    { crop: "Rice", currentPrice: "₹18,800", change: "-2.1%", trend: "down", demand: "Medium", lastUpdated: "1 hour ago" },
    { crop: "Cotton", currentPrice: "₹55,200", change: "+8.7%", trend: "up", demand: "Very High", lastUpdated: "30 mins ago" },
    { crop: "Sugarcane", currentPrice: "₹3,200", change: "+1.5%", trend: "up", demand: "High", lastUpdated: "45 mins ago" },
    { crop: "Soybean", currentPrice: "₹45,600", change: "-3.4%", trend: "down", demand: "Medium", lastUpdated: "1.5 hours ago" },
    { crop: "Maize", currentPrice: "₹19,200", change: "+2.8%", trend: "up", demand: "High", lastUpdated: "3 hours ago" }
  ];

  const marketCenters = [
    { name: "Delhi Grain Market", distance: "45 km", crops: ["Wheat", "Rice", "Maize"], rating: 4.5 },
    { name: "Mumbai Cotton Exchange", distance: "120 km", crops: ["Cotton", "Soybean"], rating: 4.8 },
    { name: "Pune Agricultural Center", distance: "80 km", crops: ["Sugarcane", "Cotton"], rating: 4.3 },
    { name: "Local Mandi (Rajpur)", distance: "15 km", crops: ["All Crops"], rating: 4.1 }
  ];

  const salesOpportunities = [
    { buyer: "Reliance Agri", crop: "Cotton", quantity: "50 tons", price: "₹55,500/ton", deadline: "5 days", verified: true },
    { buyer: "Adani Wilmar", crop: "Soybean", quantity: "30 tons", price: "₹46,200/ton", deadline: "3 days", verified: true },
    { buyer: "Local Trader", crop: "Wheat", quantity: "25 tons", price: "₹22,800/ton", deadline: "7 days", verified: false },
    { buyer: "Cargill India", crop: "Rice", quantity: "100 tons", price: "₹19,100/ton", deadline: "10 days", verified: true }
  ];

  const priceAlerts = [
    { crop: "Cotton", targetPrice: "₹56,000", currentPrice: "₹55,200", status: "close" },
    { crop: "Wheat", targetPrice: "₹24,000", currentPrice: "₹22,500", status: "tracking" },
    { crop: "Soybean", targetPrice: "₹48,000", currentPrice: "₹45,600", status: "tracking" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Market Intelligence</h1>
            <p className="text-muted-foreground">Real-time market data and trading opportunities for your crops</p>
          </div>

          <Tabs defaultValue="prices" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="prices" className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Live Prices
              </TabsTrigger>
              <TabsTrigger value="opportunities" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Sales
              </TabsTrigger>
              <TabsTrigger value="markets" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Markets
              </TabsTrigger>
              <TabsTrigger value="alerts" className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Price Alerts
              </TabsTrigger>
            </TabsList>

            {/* Live Prices Tab */}
            <TabsContent value="prices" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marketPrices.map((crop, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{crop.crop}</CardTitle>
                        <Badge variant={crop.trend === 'up' ? 'secondary' : 'destructive'}
                               className={crop.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                          {crop.trend === 'up' ? 
                            <TrendingUp className="h-3 w-3 mr-1" /> : 
                            <TrendingDown className="h-3 w-3 mr-1" />
                          }
                          {crop.change}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-2xl font-bold text-primary">{crop.currentPrice}</p>
                          <p className="text-sm text-muted-foreground">per tonne</p>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Market Demand:</span>
                          <Badge variant="outline" className={
                            crop.demand === 'Very High' ? 'border-green-500 text-green-700' :
                            crop.demand === 'High' ? 'border-blue-500 text-blue-700' :
                            'border-yellow-500 text-yellow-700'
                          }>
                            {crop.demand}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Updated: {crop.lastUpdated}</p>
                        <Button className="w-full bg-gradient-earth text-white" size="sm">
                          Set Price Alert
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Price Trends (Last 30 Days)
                  </CardTitle>
                  <CardDescription>Historical price movement for major crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-field rounded-lg p-8 text-center">
                    <BarChart3 className="h-16 w-16 mx-auto text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Interactive Price Charts</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Detailed price charts and technical analysis tools for better market insights
                    </p>
                    <Button className="bg-gradient-earth text-white">
                      View Detailed Charts
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sales Opportunities Tab */}
            <TabsContent value="opportunities" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {salesOpportunities.map((opportunity, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{opportunity.buyer}</CardTitle>
                        {opportunity.verified && (
                          <Badge className="bg-green-100 text-green-800">
                            Verified Buyer
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Crop</p>
                            <p className="font-medium">{opportunity.crop}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Quantity</p>
                            <p className="font-medium">{opportunity.quantity}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Offered Price</p>
                            <p className="font-bold text-primary">{opportunity.price}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Deadline</p>
                            <p className="font-medium text-orange-600">{opportunity.deadline}</p>
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            Contact
                          </Button>
                          <Button className="bg-gradient-earth text-white flex-1" size="sm">
                            Accept Offer
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Sell Your Produce</CardTitle>
                  <CardDescription>List your crops for direct sale to verified buyers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="bg-gradient-earth text-white h-20 flex flex-col items-center justify-center">
                      <ShoppingCart className="h-6 w-6 mb-2" />
                      List Your Crops
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <BarChart3 className="h-6 w-6 mb-2" />
                      Price Calculator
                    </Button>
                    <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                      <Target className="h-6 w-6 mb-2" />
                      Bulk Inquiries
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Markets Tab */}
            <TabsContent value="markets" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {marketCenters.map((market, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{market.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          <span className="text-sm text-yellow-600">★</span>
                          <span className="text-sm font-medium">{market.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{market.distance} away</span>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Accepted Crops:</p>
                          <div className="flex flex-wrap gap-1">
                            {market.crops.map((crop, cropIndex) => (
                              <Badge key={cropIndex} variant="secondary" className="text-xs">
                                {crop}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Get Directions
                          </Button>
                          <Button className="bg-gradient-earth text-white flex-1" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Market Services</CardTitle>
                  <CardDescription>Additional services available at market centers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-gradient-field rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Quality Testing</h4>
                      <p className="text-sm text-muted-foreground">Grain quality assessment</p>
                    </div>
                    <div className="p-4 bg-gradient-field rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Storage Facilities</h4>
                      <p className="text-sm text-muted-foreground">Temporary crop storage</p>
                    </div>
                    <div className="p-4 bg-gradient-field rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Transportation</h4>
                      <p className="text-sm text-muted-foreground">Logistics support</p>
                    </div>
                    <div className="p-4 bg-gradient-field rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Payment Processing</h4>
                      <p className="text-sm text-muted-foreground">Secure transactions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Price Alerts Tab */}
            <TabsContent value="alerts" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Your Price Alerts
                  </CardTitle>
                  <CardDescription>Monitor when your target prices are reached</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {priceAlerts.map((alert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className={`w-3 h-3 rounded-full ${
                            alert.status === 'close' ? 'bg-orange-500' : 'bg-blue-500'
                          }`}></div>
                          <div>
                            <h4 className="font-medium">{alert.crop}</h4>
                            <p className="text-sm text-muted-foreground">
                              Target: {alert.targetPrice} | Current: {alert.currentPrice}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={alert.status === 'close' ? 'default' : 'secondary'}
                            className={alert.status === 'close' ? 'bg-orange-100 text-orange-800' : ''}
                          >
                            {alert.status === 'close' ? 'Close to Target' : 'Tracking'}
                          </Badge>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full bg-gradient-earth text-white">
                      <Target className="h-4 w-4 mr-2" />
                      Create New Price Alert
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Alert Settings</CardTitle>
                  <CardDescription>Customize how you receive price notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">SMS Alerts</h4>
                      <p className="text-sm text-muted-foreground mb-3">Get instant SMS notifications</p>
                      <Button variant="outline" size="sm" className="w-full">Configure</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground mb-3">Daily market summaries</p>
                      <Button variant="outline" size="sm" className="w-full">Setup</Button>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">Push Notifications</h4>
                      <p className="text-sm text-muted-foreground mb-3">Real-time app alerts</p>
                      <Button variant="outline" size="sm" className="w-full">Enable</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}