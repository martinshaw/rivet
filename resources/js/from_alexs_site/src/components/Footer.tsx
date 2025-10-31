import { Link } from "@inertiajs/react";
import { Building2, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-accent" />
              <span className="font-serif font-semibold text-lg">Capitum Connect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Strategic introductions and investment matchmaking across real estate, hospitality, and PropTech.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover-gold">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover-gold">Services</Link></li>
              <li><Link href="/partners" className="text-sm text-muted-foreground hover-gold">Partners</Link></li>
              <li><Link href="/events" className="text-sm text-muted-foreground hover-gold">Events</Link></li>
              <li><Link href="/insights" className="text-sm text-muted-foreground hover-gold">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Regions</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">United Kingdom</li>
              <li className="text-sm text-muted-foreground">Europe</li>
              <li className="text-sm text-muted-foreground">United States</li>
              <li className="text-sm text-muted-foreground">UAE</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a href="mailto:info@capitalconnectre.com" className="flex items-center space-x-2 text-sm text-muted-foreground hover-gold">
                <Mail className="h-4 w-4" />
                <span>info@capitalconnectre.com</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-sm text-muted-foreground hover-gold">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Capitum Connect. All rights reserved. | UK • Europe • US • UAE
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover-gold">Privacy Policy</Link>
              <Link href="/terms" className="hover-gold">Terms of Service</Link>
              <Link href="/confidentiality" className="hover-gold">Confidentiality</Link>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
              Capitum Connect operates with strict confidentiality. All introductions and communications are handled under Non-Disclosure Agreement (NDA) principles.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
