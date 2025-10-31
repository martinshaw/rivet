import { useState } from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Events = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    newsletter: false
  });

  const upcomingEvents = [
    {
      title: "UK Real Estate Investment Forum",
      date: "Q2 2025",
      location: "London",
      description: "Exclusive gathering for family offices and institutional investors to explore emerging UK opportunities.",
      status: "Registration Opening Soon"
    },
    {
      title: "European Hospitality Investment Summit",
      date: "Q3 2025",
      location: "Paris",
      description: "Intimate event connecting hotel investors with leading operators and development opportunities across Europe.",
      status: "Registration Opening Soon"
    }
  ];

  const pastEvents = [
    {
      title: "UAE PropTech & Investment Mixer",
      date: "Q4 2024",
      location: "Dubai",
      description: "Successful networking event connecting PropTech innovators with investors and developers.",
      attendees: "45+ Investors & Developers"
    },
    {
      title: "European Capital Markets Roundtable",
      date: "Q3 2024",
      location: "Amsterdam",
      description: "Private roundtable discussion on capital raising strategies and market trends.",
      attendees: "30+ Family Offices & Funds"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Registration Received",
      description: "Thank you for your interest. We'll notify you when registration opens.",
    });

    setFormData({
      name: "",
      email: "",
      company: "",
      newsletter: false
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Investor Events
          </h1>
          <p className="text-xl text-muted-foreground">
            Exclusive gatherings designed to connect high-net-worth investors, family offices, and leading developers with exceptional opportunities
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {event.status}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">{event.description}</p>
                
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent/10"
                  onClick={() => {
                    const form = document.getElementById('register-form');
                    form?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Register Interest
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section id="register-form" className="mb-20">
          <div className="glass-card p-10 rounded-2xl max-w-2xl mx-auto fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Register Your Interest</h2>
            <p className="text-muted-foreground text-center mb-8">
              Be the first to know when registration opens for our exclusive events
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company / Organization *
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-secondary/50 border-border/50"
                  placeholder="Your company name"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                  className="rounded border-border/50"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Subscribe to event updates and exclusive market insights
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                size="lg"
              >
                Register Interest
              </Button>
            </form>
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Past Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-serif font-bold mb-4">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="h-5 w-5 text-accent" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;