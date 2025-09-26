import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Mic } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const agriculturalKnowledge = {
  en: {
    "leaf spot": "Leaf spot diseases are common fungal infections. Apply copper-based fungicides and ensure proper air circulation around plants.",
    "yellow leaves": "Yellow leaves often indicate nitrogen deficiency or overwatering. Check soil drainage and consider nitrogen-rich fertilizers.",
    "pest control": "Use integrated pest management: neem oil for organic control, beneficial insects, and crop rotation to reduce pest populations.",
    "soil preparation": "Good soil preparation includes testing pH, adding organic matter, proper drainage, and ensuring nutrient balance.",
    "irrigation": "Water deeply but less frequently. Morning irrigation reduces disease risk. Use drip irrigation for efficiency.",
    "fertilizer": "Use NPK fertilizers based on soil tests. Organic options include compost, vermicompost, and green manures.",
    "default": "I'm here to help with your farming questions! Ask about crop diseases, soil management, irrigation, or pest control."
  },
  hi: {
    "leaf spot": "पत्ती के धब्बे आम फंगल संक्रमण हैं। कॉपर-आधारित कवकनाशी का उपयोग करें और पौधों के चारों ओर उचित हवा का संचार सुनिश्चित करें।",
    "yellow leaves": "पीले पत्ते अक्सर नाइट्रोजन की कमी या अधिक पानी देने का संकेत देते हैं। मिट्टी की जल निकासी जांचें और नाइट्रोजन युक्त उर्वरकों पर विचार करें।",
    "pest control": "एकीकृत कीट प्रबंधन का उपयोग करें: जैविक नियंत्रण के लिए नीम का तेल, लाभकारी कीड़े, और कीट आबादी को कम करने के लिए फसल चक्र।",
    "soil preparation": "अच्छी मिट्टी की तैयारी में pH परीक्षण, जैविक पदार्थ जोड़ना, उचित जल निकासी, और पोषक तत्व संतुलन शामिल है।",
    "irrigation": "गहराई से लेकिन कम बार पानी दें। सुबह की सिंचाई रोग के जोखिम को कम करती है। दक्षता के लिए ड्रिप सिंचाई का उपयोग करें।",
    "fertilizer": "मिट्टी परीक्षण के आधार पर NPK उर्वरकों का उपयोग करें। जैविक विकल्पों में खाद, वर्मीकम्पोस्ट और हरी खाद शामिल हैं।",
    "default": "मैं आपके खेती के सवालों में मदद के लिए यहां हूं! फसल रोगों, मिट्टी प्रबंधन, सिंचाई, या कीट नियंत्रण के बारे में पूछें।"
  }
};

export default function Chatbot() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: i18n.language === 'hi' ? 
        'नमस्ते! मैं आपका कृषि सलाहकार हूं। आप मुझसे खेती, फसल की बीमारियों या मिट्टी के बारे में कुछ भी पूछ सकते हैं।' :
        'Hello! I\'m your agricultural advisor. Ask me anything about farming, crop diseases, or soil management.',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const getBotResponse = (userMessage: string): string => {
    const knowledge = agriculturalKnowledge[i18n.language as 'en' | 'hi'];
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(knowledge)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return knowledge.default;
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(inputText),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="shadow-soft border-border/50">
      <CardHeader className="bg-gradient-field rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-primary">
          <MessageCircle className="h-6 w-6" />
          {t('agricultureAdvisor', 'Agriculture Advisor')}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-80 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-gradient-earth text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('askQuestion', 'Ask about farming, diseases, or soil...')}
              className="flex-1 transition-smooth focus:ring-primary"
            />
            <Button 
              variant="outline" 
              size="icon"
              className="text-muted-foreground hover:text-primary transition-smooth"
              title={t('voiceInput', 'Voice Input (Coming Soon)')}
              disabled
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button 
              onClick={handleSendMessage}
              size="icon"
              className="bg-gradient-earth hover:opacity-90 transition-smooth"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}