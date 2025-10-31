import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingSubmitButton from "./components/FloatingSubmitButton";
import CookieConsent from "./components/CookieConsent";
import Analytics from "./components/Analytics";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Events from "./pages/Events";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Confidentiality from "./pages/Confidentiality";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Analytics />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <FloatingSubmitButton />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/events" element={<Events />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/submit" element={<Submit />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/confidentiality" element={<Confidentiality />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
