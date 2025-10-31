import { Users, TrendingUp, Briefcase, Building2, Award, Cpu, HandshakeIcon, Search, Scale, Calendar, UserPlus, Briefcase as BriefcaseAlt } from "lucide-react";
import hotelImage from "@/assets/luxury-hotel.jpg";
import residentialImage from "@/assets/residential-dev.jpg";

const Services = () => {
  const coreServices = [
    {
      icon: Users,
      title: "Investment Matchmaking",
      description: "We connect family offices, institutional investors, and high-net-worth individuals with vetted developers and operators seeking strategic partners.",
      benefits: [
        "Curated investor introductions",
        "Strategic alignment assessment",
        "Off-market deal flow access",
        "Confidential pre-screening"
      ]
    },
    {
      icon: TrendingUp,
      title: "Capital Raising Support",
      description: "Whether you're developing a hotel, residential project, or mixed-use scheme, we help you reach the right capital sources.",
      benefits: [
        "Investor presentation support",
        "Capital stack optimization",
        "Term sheet negotiation guidance",
        "Investor roadshow coordination"
      ]
    },
    {
      icon: Briefcase,
      title: "Co-Investment & Joint Ventures",
      description: "Facilitate partnerships between aligned investors and developers for co-investment opportunities and joint venture structures.",
      benefits: [
        "Partner sourcing and vetting",
        "Structure recommendations",
        "Co-GP and LP introductions",
        "Strategic alignment facilitation"
      ]
    },
    {
      icon: Award,
      title: "Operator & Brand Sourcing",
      description: "Connect hotel and residential developments with premium operators, management companies, and lifestyle brands.",
      benefits: [
        "Hotel operator introductions",
        "Residential management sourcing",
        "Brand partnership facilitation",
        "Operating agreement support"
      ]
    },
    {
      icon: Search,
      title: "Off-Market Asset Sourcing",
      description: "Access exclusive, off-market real estate opportunities across the UK, Europe, US, and UAE before they hit the open market.",
      benefits: [
        "Proprietary deal flow",
        "Early-stage opportunity access",
        "Seller relationship leverage",
        "Competitive positioning advantage"
      ]
    },
    {
      icon: Cpu,
      title: "PropTech & Service Partnerships",
      description: "Strategic introductions to leading PropTech solutions, service providers, and technology partners that enhance asset value.",
      benefits: [
        "PropTech vendor introductions",
        "Technology integration support",
        "Service provider referrals",
        "Innovation partnerships"
      ]
    },
    {
      icon: Scale,
      title: "Legal / Law Firm Partnerships",
      description: "We have partnered with top-tier law firms such as Seddons-GSC to support our clients with legal expertise related to real estate transactions, investment structuring, and due diligence.",
      benefits: [
        "Transaction legal support",
        "Investment structuring advice",
        "Due diligence facilitation",
        "Partnership with leading firms"
      ]
    },
    {
      icon: Calendar,
      title: "Investor Events",
      description: "We organise intimate and exclusive investor events tailored to match high-net-worth investors and family offices with new and exciting investment opportunities.",
      benefits: [
        "Exclusive networking opportunities",
        "Curated investor gatherings",
        "Direct access to opportunities",
        "Premium event experiences"
      ]
    },
    {
      icon: UserPlus,
      title: "Real Estate Advisor Partnerships",
      description: "We partner with experienced investment, acquisition, asset management, and development professionals across the real estate industry who can work on projects on a short- or long-term, case-by-case basis.",
      benefits: [
        "Expert advisor network",
        "Flexible engagement models",
        "Specialized expertise access",
        "Project-specific support"
      ]
    },
    {
      icon: BriefcaseAlt,
      title: "Executive Search Partnerships",
      description: "We collaborate with leading executive search firms including HospitalityTechJobs (Hoteltech), LMRE (Proptech), and Cobalt (Real Estate) to connect top talent with organisations across the hospitality, proptech, and real estate sectors.",
      benefits: [
        "Top-tier talent access",
        "Sector-specific recruitment",
        "Executive placement support",
        "Strategic hiring partnerships"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive real estate matchmaking and strategic introductions across the investment lifecycle
          </p>
        </div>

        {/* Core Services */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreServices.map((service, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl fade-in-up hover:border-accent/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <service.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">Key Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sector Focus */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Sector Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">
            <div className="glass-card rounded-xl overflow-hidden fade-in-up">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${hotelImage})` }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-accent">Hospitality</h3>
                <p className="text-muted-foreground mb-4">
                  Hotels, serviced apartments, boutique resorts, and lifestyle hospitality concepts
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><span className="text-accent mr-2">•</span>Development capital</li>
                  <li className="flex items-start"><span className="text-accent mr-2">•</span>Operator partnerships</li>
                  <li className="flex items-start"><span className="text-accent mr-2">•</span>Asset repositioning</li>
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-xl overflow-hidden fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${residentialImage})` }}
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-accent">Residential</h3>
                <p className="text-muted-foreground mb-4">
                  Luxury apartments, BTR, PRS, mixed-use, and residential-led regeneration
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start"><span className="text-accent mr-2">•</span>Equity partnerships</li>
                  <li className="flex items-start"><span className="text-accent mr-2">•</span>Land assembly introductions</li>
                  <li className="flex items-start"><span className="text-accent mr-2">•</span>Forward funding structures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Commercial Sectors */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold mb-6 text-center">Commercial Real Estate</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Industrial & Logistics", "Data Centres", "Offices", "Life Science", "Healthcare", "Retail"].map((sector, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl text-center fade-in-up hover:border-accent/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <p className="text-sm font-semibold text-muted-foreground">{sector}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section>
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">How We Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understand your objectives, preferences, and requirements" },
                { step: "02", title: "Matching", desc: "Leverage our network to identify strategic opportunities" },
                { step: "03", title: "Introduction", desc: "Facilitate confidential, high-quality introductions" },
                { step: "04", title: "Support", desc: "Provide ongoing guidance throughout the process" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-serif font-bold text-accent mb-3">{phase.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
