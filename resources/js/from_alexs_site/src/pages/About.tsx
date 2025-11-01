import { Shield, Target, Handshake, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Discretion",
      description: "Every introduction is handled with the utmost confidentiality and professionalism."
    },
    {
      icon: Target,
      title: "Quality",
      description: "We focus on strategic fit and long-term value, not transaction volume."
    },
    {
      icon: Handshake,
      title: "Trust",
      description: "Built on relationships, integrity, and a track record of successful partnerships."
    },
    {
      icon: Award,
      title: "Success-Based",
      description: "Our interests are aligned with yours—we only succeed when you do."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Capitum Connect
          </h1>
          <p className="text-xl text-muted-foreground">
            A boutique real estate introductions and investment matchmaking firm operating at the intersection of capital, opportunity, and expertise.
          </p>
        </div>

        {/* Who We Are */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Capitum Connect is a boutique introductions and matchmaking firm built on relationships, discretion, and successful outcomes. We connect investors, family offices, developers, and operators with strategic partners and off-market opportunities across real estate, hospitality, and PropTech.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Operating across the UK, Europe, US, and UAE, we specialize in creating value through curated introductions, co-investment facilitation, and operator partnerships that traditional channels often miss.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We operate with unwavering commitment to discretion, quality, success-based partnerships, and global reach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass-card p-8 rounded-xl fade-in-up">
              <Shield className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Discretion</h3>
              <p className="text-muted-foreground">Every introduction is handled with the utmost confidentiality and professionalism. Your information is never shared without explicit permission.</p>
            </div>
            <div className="glass-card p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
              <Target className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">We focus on strategic fit and long-term value, not transaction volume. Every partner is carefully vetted for alignment.</p>
            </div>
            <div className="glass-card p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Handshake className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Success-Based</h3>
              <p className="text-muted-foreground">Our interests are aligned with yours—we only succeed when you do. Success fees apply only upon completed transactions.</p>
            </div>
            <div className="glass-card p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Award className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-semibold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">Operating across UK, Europe, US, and UAE with deep relationships in each market, providing true cross-border access.</p>
            </div>
          </div>
        </section>

        {/* Our Network */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Network</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              We maintain relationships with leading players across the real estate ecosystem
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Family Offices",
                "Institutional Investors",
                "Developers",
                "Hotel Operators",
                "PropTech Firms",
                "Service Providers",
                "Asset Managers",
                "Strategic Partners"
              ].map((type, index) => (
                <div key={index} className="text-center p-4 bg-secondary/30 rounded-lg">
                  <p className="font-semibold text-accent">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Reach */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Network Reach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2 text-accent">United Kingdom</h3>
                <p className="text-muted-foreground">London, Manchester, Birmingham, and regional development hotspots</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2 text-accent">Europe</h3>
                <p className="text-muted-foreground">Paris, Berlin, Amsterdam, Madrid, and emerging markets</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2 text-accent">United States</h3>
                <p className="text-muted-foreground">New York, Los Angeles, Miami, and key investment markets</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-2 text-accent">UAE</h3>
                <p className="text-muted-foreground">Dubai, Abu Dhabi, and strategic regional opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">Who We Work With</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Family Offices", desc: "Seeking curated real estate opportunities" },
              { title: "Institutional Investors", desc: "Looking for strategic partnerships" },
              { title: "Developers", desc: "In need of capital or co-investment" },
              { title: "Operators & Brands", desc: "Expanding into new markets" }
            ].map((group, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-serif font-semibold mb-2 text-accent">{group.title}</h3>
                <p className="text-sm text-muted-foreground">{group.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto fade-in-up bg-accent/5 border-accent/20">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-muted-foreground text-center leading-relaxed">
              To connect capital with opportunity through trusted introductions, creating long-term value for investors, developers, and operators across the UK, Europe, US, and UAE.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-center mb-4">Leadership</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Founded and led by experienced real estate professionals with deep networks across the investment landscape
          </p>
          <div className="glass-card p-12 rounded-2xl max-w-3xl mx-auto text-center fade-in-up">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-bold mb-2">Founder & Managing Partner</h3>
              <p className="text-muted-foreground mb-4">
                With extensive experience in real estate investment, capital markets, and strategic partnerships, our founder brings deep industry knowledge and a curated network spanning family offices, institutional investors, and leading developers.
              </p>
            </div>
            {/* <a
              href="https://www.linkedin.com/company/capital-connect-real-estate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
