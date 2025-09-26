import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-2 transition-smooth"
    >
      <Globe className="h-4 w-4" />
      {i18n.language === 'en' ? 'हिंदी' : 'English'}
    </Button>
  );
}