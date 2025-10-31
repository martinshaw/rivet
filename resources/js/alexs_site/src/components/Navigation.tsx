import { Link, useLocation } from "react-router-dom";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Partners", path: "/partners" },
    { name: "Events", path: "/events" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Building2 className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
            <span className="text-xl font-serif font-semibold text-foreground">
              Capitum Connect
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit">
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Submit Opportunity
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/submit" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Submit Opportunity
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
