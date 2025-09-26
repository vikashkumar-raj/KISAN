import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      "smartAgriculture": "Smart Agriculture",
      "cropAdvisory": "Crop Advisory System",
      
      // Navigation
      "home": "Home",
      "analysis": "Analysis",
      "advisor": "Advisor",
      "market": "Market",
      
      // Hero Section
      "heroTitle": "AI-Powered Crop Recommendations for Smart Farming",
      "heroSubtitle": "Get data-driven insights for optimal crop selection based on your soil conditions, weather patterns, and market trends.",
      "getStarted": "Get Started",
      "learnMore": "Learn More",
      
      // Form Labels
      "soilAnalysis": "Soil Analysis & Crop Recommendation",
      "enterSoilData": "Enter your soil parameters to get AI-powered crop recommendations",
      "soilChemistry": "Soil Chemistry",
      "phLevel": "pH Level",
      "moistureContent": "Moisture Content (%)",
      "nitrogen": "Nitrogen (N) mg/kg",
      "phosphorus": "Phosphorus (P) mg/kg",
      "potassium": "Potassium (K) mg/kg",
      "farmInformation": "Farm Information",
      "previousCrop": "Previous Crop",
      "selectPreviousCrop": "Select previous crop",
      "location": "Location/PIN Code",
      "imageAnalysis": "Image Analysis (Optional)",
      "uploadImage": "Upload soil or crop images for AI analysis",
      "chooseFile": "Choose File",
      "getCropSuggestion": "Get Crop Suggestion",
      "analyzing": "Analyzing...",
      
      // Crops
      "rice": "Rice",
      "wheat": "Wheat",
      "cotton": "Cotton",
      "sugarcane": "Sugarcane",
      "legumes": "Legumes",
      "none": "None/First Season",
      
      // Results
      "recommendation": "Crop Recommendation",
      "confidence": "Confidence",
      "reasoning": "Reasoning:",
      "fertilizers": "Recommended Fertilizers",
      "marketPrice": "Market Price",
      "demand": "Market Demand",
      
      // Chatbot
      "agricultureAdvisor": "Agriculture Advisor",
      "askQuestion": "Ask about farming, diseases, or soil...",
      "voiceInput": "Voice Input (Coming Soon)",
      
      // Status
      "offline": "You are offline - showing cached data",
      "online": "Connected"
    }
  },
  hi: {
    translation: {
      // Header
      "smartAgriculture": "स्मार्ट कृषि",
      "cropAdvisory": "फसल सलाहकार प्रणाली",
      
      // Navigation
      "home": "होम",
      "analysis": "विश्लेषण",
      "advisor": "सलाहकार",
      "market": "बाजार",
      
      // Hero Section
      "heroTitle": "स्मार्ट खेती के लिए AI-संचालित फसल सिफारिशें",
      "heroSubtitle": "अपनी मिट्टी की स्थिति, मौसम के पैटर्न और बाजार के रुझान के आधार पर इष्टतम फसल चयन के लिए डेटा-संचालित अंतर्दृष्टि प्राप्त करें।",
      "getStarted": "शुरू करें",
      "learnMore": "और जानें",
      
      // Form Labels
      "soilAnalysis": "मिट्टी विश्लेषण और फसल सिफारिश",
      "enterSoilData": "AI-संचालित फसल सिफारिशें प्राप्त करने के लिए अपनी मिट्टी के मापदंड दर्ज करें",
      "soilChemistry": "मिट्टी रसायन",
      "phLevel": "pH स्तर",
      "moistureContent": "नमी की मात्रा (%)",
      "nitrogen": "नाइट्रोजन (N) mg/kg",
      "phosphorus": "फास्फोरस (P) mg/kg",
      "potassium": "पोटेशियम (K) mg/kg",
      "farmInformation": "खेत की जानकारी",
      "previousCrop": "पिछली फसल",
      "selectPreviousCrop": "पिछली फसल चुनें",
      "location": "स्थान/पिन कोड",
      "imageAnalysis": "छवि विश्लेषण (वैकल्पिक)",
      "uploadImage": "AI विश्लेषण के लिए मिट्टी या फसल की छवियां अपलोड करें",
      "chooseFile": "फ़ाइल चुनें",
      "getCropSuggestion": "फसल सुझाव प्राप्त करें",
      "analyzing": "विश्लेषण कर रहे हैं...",
      
      // Crops
      "rice": "चावल",
      "wheat": "गेहूं",
      "cotton": "कपास",
      "sugarcane": "गन्ना",
      "legumes": "दलहन",
      "none": "कोई नहीं/पहला सीजन",
      
      // Results
      "recommendation": "फसल सिफारिश",
      "confidence": "विश्वास",
      "reasoning": "तर्क:",
      "fertilizers": "सुझाए गए उर्वरक",
      "marketPrice": "बाजार मूल्य",
      "demand": "बाजार मांग",
      
      // Chatbot
      "agricultureAdvisor": "कृषि सलाहकार",
      "askQuestion": "खेती, बीमारियों या मिट्टी के बारे में पूछें...",
      "voiceInput": "आवाज इनपुट (जल्द आ रहा है)",
      
      // Status
      "offline": "आप ऑफ़लाइन हैं - कैश्ड डेटा दिखा रहे हैं",
      "online": "जुड़ा हुआ"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;