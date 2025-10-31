import { Building2, TrendingUp, Users, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: Building2,
      title: "European Hotel Portfolio Acquisition",
      category: "Investment Matchmaking",
      challenge: "Family office seeking premium European hotel assets with established operators",
      solution: "Connected UK-based family office with developer portfolio of 4-star hotels across Paris, Amsterdam, and Berlin, all with existing brand partnerships.",
      outcome: "Successfully facilitated €45M acquisition of 3 hotels. Family office secured immediate cash flow with established operators.",
      region: "Europe"
    },
    {
      icon: TrendingUp,
      title: "UK Residential Development JV",
      category: "Co-Investment & Joint Venture",
      challenge: "Regional developer required equity partner for £25M mixed-use residential project in Manchester",
      solution: "Introduced institutional investor with appetite for UK residential. Structured 50/50 JV partnership with developer retaining operational control.",
      outcome: "£12.5M equity secured. Project commenced Q4 2024. Expected 18% IRR upon completion.",
      region: "United Kingdom"
    },
    {
      icon: Users,
      title: "UAE Luxury Hotel Operator Partnership",
      category: "Operator Sourcing",
      challenge: "Developer with waterfront site in Dubai seeking premium hotel brand and operator",
      solution: "Facilitated introductions to 3 international luxury brands. Negotiated management agreement with preferred operator.",
      outcome: "Signed 20-year management contract with leading hospitality brand. Project value: $85M.",
      region: "UAE"
    },
    {
      icon: Award,
      title: "PropTech Capital Raising",
      category: "Capital Raising Support",
      challenge: "PropTech platform required £5M Series A funding for UK expansion",
      solution: "Connected PropTech firm with family offices and angel investors active in real estate technology.",
      outcome: "Secured £5.2M funding from 3 family offices. Platform now deployed across 200+ properties.",
      region: "United Kingdom"
    }
  ];

  const testimonials = [
    {
      quote: "Capitum Connect facilitated an introduction that led to our most successful partnership to date. Their discretion and understanding of our investment criteria was exceptional.",
      author: "Managing Partner",
      company: "European Family Office"
    },
    {
      quote: "The quality of introductions and the professionalism throughout the process exceeded our expectations. They truly understand the needs of both investors and developers.",
      author: "Development Director",
      company: "UK Residential Developer"
    },
    {
      quote: "Working with Capitum Connect gave us access to off-market opportunities we would never have found through traditional channels. Their network is genuinely impressive.",
      author: "Investment Committee Member",
      company: "Institutional Investor"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Case Studies & Success Stories
          </h1>
          <p className="text-xl text-muted-foreground">
            Real examples of successful partnerships, transactions, and introductions facilitated by Capitum Connect
          </p>
        </div>

        {/* Case Studies */}
        <section className="mb-20">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="glass-card p-10 rounded-2xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-accent/10 p-4 rounded-xl">
                    <study.icon className="h-8 w-8 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                        {study.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{study.region}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold mb-6">{study.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-2">Challenge</h4>
                        <p className="text-muted-foreground text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-2">Solution</h4>
                        <p className="text-muted-foreground text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-accent mb-2">Outcome</h4>
                        <p className="text-muted-foreground text-sm">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-4xl font-serif font-bold text-center mb-4">What Our Partners Say</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Feedback from investors, developers, and operators we've worked with
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <svg className="h-8 w-8 text-accent/40" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z"/>
                  </svg>
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-border/30 pt-4">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <div className="glass-card p-12 rounded-2xl text-center max-w-4xl mx-auto bg-accent/5 border-accent/20">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're seeking capital, partnerships, or exclusive opportunities, we facilitate the introductions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/submit"
                className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Submit an Opportunity
              </a>
              <a 
                href="/contact"
                className="inline-block border border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudies;