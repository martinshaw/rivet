import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    // Initialize analytics here
    initializeAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  const initializeAnalytics = () => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 fade-in-up">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-6 rounded-2xl border-accent/20 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-serif font-bold mb-2">Cookie Preferences</h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies. Read our{" "}
                <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> for more information.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="border-border text-foreground hover:bg-secondary"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Accept All
              </Button>
              <button
                onClick={handleDecline}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
