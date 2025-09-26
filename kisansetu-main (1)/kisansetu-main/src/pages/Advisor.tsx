import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, AlertTriangle, CheckCircle, Clock, Users, BookOpen, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";

export default function Advisor() {
  const { t } = useTranslation();

  const upcomingTasks = [
    { task: "Apply nitrogen fertilizer to wheat field", deadline: "2 days", priority: "high", field: "North Field" },
    { task: "Check irrigation system", deadline: "5 days", priority: "medium", field: "All Fields" },
    { task: "Pest monitoring for cotton", deadline: "1 week", priority: "medium", field: "East Field" },
    { task: "Harvest rice (South Field)", deadline: "2 weeks", priority: "high", field: "South Field" }
  ];

  const expertTips = [
    {
      title: "Optimal Fertilizer Timing",
      content: "Apply nitrogen fertilizers in split doses - 50% at sowing, 25% at tillering, and 25% at grain filling stage for maximum efficiency.",
      category: "Fertilization",
      expert: "Dr. Priya Sharma, Soil Scientist"
    },
    {
      title: "Water Management",
      content: "Monitor soil moisture at 6-inch depth. Water when moisture drops below 50% field capacity to prevent stress.",
      category: "Irrigation",
      expert: "Prof. Rajesh Kumar, Agricultural Engineer"
    },
    {
      title: "Pest Prevention",
      content: "Use yellow sticky traps to monitor flying pest populations. Early detection prevents major infestations.",
      category: "Pest Control",
      expert: "Dr. Meena Patel, Entomologist"
    }
  ];

  const alertsAndAlarms = [
    { type: "weather", message: "Heavy rain predicted in 3 days - prepare drainage", severity: "warning" },
    { type: "pest", message: "Aphid population increasing in wheat field", severity: "alert" },
    { type: "maintenance", message: "Irrigation system maintenance due", severity: "info" },
    { type: "harvest", message: "Rice crop ready for harvest in 10 days", severity: "success" }
  ];

  const consultationRequests = [
    { expert: "Dr. Agricultural Specialist", topic: "Crop Disease Diagnosis", status: "pending", time: "2 hours ago" },
    { expert: "Irrigation Engineer", topic: "Drip System Installation", status: "scheduled", time: "Tomorrow 2 PM" },
    { expert: "Pest Control Expert", topic: "Integrated Pest Management", status: "completed", time: "3 days ago" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary mb-2">Agricultural Advisor</h1>
            <p className="text-muted-foreground">Get expert guidance and personalized recommendations for your farm</p>
          </div>

          <Tabs defaultValue="tasks" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="tasks" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Tasks
              </TabsTrigger>
              <TabsTrigger value="alerts" className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Alerts
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Expert Tips
              </TabsTrigger>
              <TabsTrigger value="consultation" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Consultation
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                AI Chat
              </TabsTrigger>
            </TabsList>

            {/* Tasks Tab */}
            <TabsContent value="tasks" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Farm Tasks
                    </CardTitle>
                    <CardDescription>Scheduled activities for optimal farm management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                          <div className={`w-3 h-3 rounded-full mt-2 ${
                            task.priority === 'high' ? 'bg-red-500' : 
                            task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className="font-medium">{task.task}</h4>
                            <p className="text-sm text-muted-foreground">{task.field}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {task.deadline}
                              </Badge>
                              <Badge 
                                variant={task.priority === 'high' ? 'destructive' : 'secondary'}
                                className="text-xs"
                              >
                                {task.priority} priority
                              </Badge>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">Mark Done</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardHeader>
                    <CardTitle>Task Calendar</CardTitle>
                    <CardDescription>Visual overview of your farming schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-field rounded-lg p-6 text-center">
                      <Calendar className="h-16 w-16 mx-auto text-primary mb-4" />
                      <h3 className="font-semibold mb-2">Calendar Integration</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sync your farming tasks with your calendar app for better organization
                      </p>
                      <Button className="bg-gradient-earth text-white">
                        Connect Calendar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Alerts Tab */}
            <TabsContent value="alerts" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {alertsAndAlarms.map((alert, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full ${
                          alert.severity === 'warning' ? 'bg-yellow-100' :
                          alert.severity === 'alert' ? 'bg-red-100' :
                          alert.severity === 'success' ? 'bg-green-100' :
                          'bg-blue-100'
                        }`}>
                          {alert.severity === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                          {alert.severity === 'alert' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                          {alert.severity === 'success' && <CheckCircle className="h-5 w-5 text-green-600" />}
                          {alert.severity === 'info' && <FileText className="h-5 w-5 text-blue-600" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium capitalize">{alert.type} Alert</h4>
                          <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                          <div className="flex gap-2 mt-3">
                            <Button size="sm" variant="outline">Dismiss</Button>
                            <Button size="sm" className="bg-gradient-earth text-white">Take Action</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Expert Tips Tab */}
            <TabsContent value="tips" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {expertTips.map((tip, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{tip.category}</Badge>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{tip.content}</p>
                      <div className="border-t pt-3">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-medium">Expert:</span> {tip.expert}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Request Expert Advice</CardTitle>
                  <CardDescription>Get personalized recommendations from agricultural specialists</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="bg-gradient-earth text-white h-20 flex flex-col items-center justify-center">
                      <Users className="h-6 w-6 mb-2" />
                      Soil Expert
                    </Button>
                    <Button className="bg-gradient-earth text-white h-20 flex flex-col items-center justify-center">
                      <Users className="h-6 w-6 mb-2" />
                      Crop Specialist
                    </Button>
                    <Button className="bg-gradient-earth text-white h-20 flex flex-col items-center justify-center">
                      <Users className="h-6 w-6 mb-2" />
                      Pest Control Expert
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Consultation Tab */}
            <TabsContent value="consultation" className="space-y-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>Expert Consultations</CardTitle>
                  <CardDescription>Track your consultation requests and scheduled sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {consultationRequests.map((request, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-earth rounded-full flex items-center justify-center">
                            <Users className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-medium">{request.expert}</h4>
                            <p className="text-sm text-muted-foreground">{request.topic}</p>
                            <p className="text-xs text-muted-foreground">{request.time}</p>
                          </div>
                        </div>
                        <Badge 
                          variant={
                            request.status === 'completed' ? 'secondary' :
                            request.status === 'scheduled' ? 'default' : 'outline'
                          }
                          className={
                            request.status === 'completed' ? 'bg-green-100 text-green-800' :
                            request.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }
                        >
                          {request.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full bg-gradient-earth text-white">
                      Schedule New Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* AI Chat Tab */}
            <TabsContent value="chat" className="space-y-6">
              <Chatbot />
              
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>AI Assistant Features</CardTitle>
                  <CardDescription>Advanced AI capabilities for farming assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-field rounded-lg">
                      <h4 className="font-semibold mb-2">Voice Commands</h4>
                      <p className="text-sm text-muted-foreground">Ask questions using voice input (coming soon)</p>
                    </div>
                    <div className="p-4 bg-gradient-field rounded-lg">
                      <h4 className="font-semibold mb-2">Image Analysis</h4>
                      <p className="text-sm text-muted-foreground">Upload crop photos for disease detection</p>
                    </div>
                    <div className="p-4 bg-gradient-field rounded-lg">
                      <h4 className="font-semibold mb-2">Multilingual Support</h4>
                      <p className="text-sm text-muted-foreground">Chat in English or Hindi languages</p>
                    </div>
                    <div className="p-4 bg-gradient-field rounded-lg">
                      <h4 className="font-semibold mb-2">24/7 Availability</h4>
                      <p className="text-sm text-muted-foreground">Get farming advice anytime, anywhere</p>
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