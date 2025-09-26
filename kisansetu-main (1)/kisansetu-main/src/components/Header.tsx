import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Leaf, Menu, X, Wifi, WifiOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-earth rounded-lg p-2">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">
                {t('smartAgriculture', 'Smart Agriculture')}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t('cropAdvisory', 'Crop Advisory System')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/">
              <Button 
                variant="ghost" 
                className={`text-muted-foreground hover:text-primary ${location.pathname === '/' ? 'text-primary bg-primary/10' : ''}`}
              >
                {t('home', 'Home')}
              </Button>
            </Link>
            <Link to="/analysis">
              <Button 
                variant="ghost" 
                className={`text-muted-foreground hover:text-primary ${location.pathname === '/analysis' ? 'text-primary bg-primary/10' : ''}`}
              >
                {t('analysis', 'Analysis')}
              </Button>
            </Link>
            <Link to="/advisor">
              <Button 
                variant="ghost" 
                className={`text-muted-foreground hover:text-primary ${location.pathname === '/advisor' ? 'text-primary bg-primary/10' : ''}`}
              >
                {t('advisor', 'Advisor')}
              </Button>
            </Link>
            <Link to="/market">
              <Button 
                variant="ghost" 
                className={`text-muted-foreground hover:text-primary ${location.pathname === '/market' ? 'text-primary bg-primary/10' : ''}`}
              >
                {t('market', 'Market')}
              </Button>
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Connection Status */}
            <Badge 
              variant={isOnline ? "secondary" : "destructive"} 
              className="hidden sm:flex items-center gap-1"
            >
              {isOnline ? (
                <>
                  <Wifi className="h-3 w-3" />
                  {t('online', 'Connected')}
                </>
              ) : (
                <>
                  <WifiOff className="h-3 w-3" />
                  {t('offline', 'Offline')}
                </>
              )}
            </Badge>

            {/* Language Toggle */}
            <LanguageToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <nav className="flex flex-col gap-2">
              <Link to="/">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-muted-foreground hover:text-primary ${location.pathname === '/' ? 'text-primary bg-primary/10' : ''}`}
                >
                  {t('home', 'Home')}
                </Button>
              </Link>
              <Link to="/analysis">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-muted-foreground hover:text-primary ${location.pathname === '/analysis' ? 'text-primary bg-primary/10' : ''}`}
                >
                  {t('analysis', 'Analysis')}
                </Button>
              </Link>
              <Link to="/advisor">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-muted-foreground hover:text-primary ${location.pathname === '/advisor' ? 'text-primary bg-primary/10' : ''}`}
                >
                  {t('advisor', 'Advisor')}
                </Button>
              </Link>
              <Link to="/market">
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start text-muted-foreground hover:text-primary ${location.pathname === '/market' ? 'text-primary bg-primary/10' : ''}`}
                >
                  {t('market', 'Market')}
                </Button>
              </Link>
              {/* Mobile Connection Status */}
              <div className="px-3 py-2">
                <Badge 
                  variant={isOnline ? "secondary" : "destructive"} 
                  className="flex items-center gap-1 w-fit"
                >
                  {isOnline ? (
                    <>
                      <Wifi className="h-3 w-3" />
                      {t('online', 'Connected')}
                    </>
                  ) : (
                    <>
                      <WifiOff className="h-3 w-3" />
                      {t('offline', 'You are offline - showing cached data')}
                    </>
                  )}
                </Badge>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}