import { ArrowRight, Building2, Users, TrendingUp, Award, Briefcase, Globe, Shield, Target, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import ProcessTimeline from "../components/ProcessTimeline";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const services = [
    {
      icon: Users,
      title: "Investment Matchmaking",
      description: "Connect family offices, investors, and developers with the perfect partners for strategic opportunities."
    },
    {
      icon: TrendingUp,
      title: "Capital Raising",
      description: "Expert support for real estate and hospitality projects seeking institutional and private capital."
    },
    {
      icon: Briefcase,
      title: "Co-Investment & JVs",
      description: "Facilitate joint ventures and co-investment structures between aligned partners."
    },
    {
      icon: Building2,
      title: "Off-Market Assets",
      description: "Access exclusive, off-market opportunities across the UK, Europe, US, and UAE."
    },
    {
      icon: Award,
      title: "Operator Sourcing",
      description: "Connect premium hotel and residential brands with development opportunities."
    },
    {
      icon: Globe,
      title: "PropTech Partnerships",
      description: "Strategic introductions to leading PropTech solutions and service providers."
    }
  ];

  const targetAudiences = [
    {
      icon: Users,
      title: "For Investors & Family Offices",
      description: "Access curated, off-market opportunities across real estate and hospitality. Connect with vetted developers and operators seeking strategic capital partners.",
      features: ["Off-market deal flow", "Pre-screened opportunities", "Co-investment structures", "Operator partnerships"]
    },
    {
      icon: Building2,
      title: "For Developers & Operators",
      description: "Find the right capital partners, co-investors, and strategic equity for your projects. We connect you with investors who align with your vision.",
      features: ["Equity and debt capital", "JV partnerships", "Operator introductions", "Strategic investors"]
    },
    {
      icon: Cpu,
      title: "For PropTech & Service Providers",
      description: "Partner with us to reach investors, developers, and operators who need your solutions. Unlock partnership and referral opportunities.",
      features: ["Client introductions", "Revenue sharing", "Strategic partnerships", "Market access"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/assets/hero-skyline.jpg)`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />

        <div className="relative z-10 container mx-auto px-6 text-center fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Connecting Capital <br />with Opportunity
          </h1>
          <p className="text-xl md:text-2xl text-card-foreground mb-8 max-w-3xl mx-auto">
            Strategic introductions and investment matchmaking across real estate, hospitality, and PropTech.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/submit">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
                Submit an Opportunity
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg px-8">
                Join Our Network
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tailored matchmaking for investors, developers, and service providers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:border-accent/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <audience.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-serif font-semibold mb-3">{audience.title}</h3>
                <p className="text-muted-foreground mb-6">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Services Overview */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Strategic Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive introductions across the real estate ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:border-accent/50 transition-all duration-300 fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Confidentiality Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl border-accent/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-accent" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent">
                Confidentiality. Discretion. Integrity.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand the sensitivity of investment discussions. Every introduction we facilitate is protected by confidentiality protocols and mutual trust. Capitum Connect operates under strict non-disclosure practices to safeguard all client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Regions */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Active Markets
            </h2>
            <p className="text-lg text-muted-foreground">
              Operating across four strategic regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { region: "United Kingdom", description: "London, Manchester, Birmingham & Regional Markets" },
              { region: "Europe", description: "Paris, Berlin, Amsterdam, Madrid & Gateway Cities" },
              { region: "United States", description: "New York, Los Angeles, Miami & Key Markets" },
              { region: "UAE", description: "Dubai, Abu Dhabi & Strategic Opportunities" }
            ].map((region, index) => (
              <div key={index} className="text-center p-8 glass-card rounded-xl hover:border-accent/50 transition-all duration-300">
                <Globe className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-2">{region.region}</h3>
                <p className="text-muted-foreground text-sm">{region.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="glass-card p-12 rounded-2xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're seeking capital, partnerships, or exclusive opportunities, we facilitate the introductions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/submit">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Submit an Opportunity
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  Join Our Network
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
