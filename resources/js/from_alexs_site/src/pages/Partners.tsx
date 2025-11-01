import { Scale, Users, TrendingUp, Calendar } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      icon: Scale,
      title: "Legal Partners",
      description: "Top-tier law firms providing expert legal support for real estate transactions, investment structuring, and due diligence.",
      partners: [
        {
          name: "Seddons-GSC",
          description: "Leading real estate law firm specializing in investment transactions and commercial property law."
        }
      ]
    },
    {
      icon: Users,
      title: "Executive Search Partners",
      description: "Premier executive search firms connecting top talent with opportunities across real estate, hospitality, and PropTech sectors.",
      partners: [
        {
          name: "HospitalityTechJobs",
          description: "Specialist recruitment for hotel technology and hospitality innovation roles."
        },
        {
          name: "LMRE",
          description: "PropTech-focused executive search connecting innovative talent with leading property technology firms."
        },
        {
          name: "Cobalt",
          description: "Real estate executive search firm placing senior professionals across the industry."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "Advisory Partners",
      description: "Experienced investment, acquisition, asset management, and development professionals available for project-based engagements.",
      partners: [
        {
          name: "Real Estate Advisors Network",
          description: "Curated network of senior advisors providing strategic guidance on investments, development, and asset management."
        }
      ]
    },
    {
      icon: Calendar,
      title: "Event Partners",
      description: "Collaborating with leading organizations to deliver exclusive investor events and industry gatherings.",
      partners: [
        {
          name: "Partner Network",
          description: "Working with premier venues and event organizers to host intimate, high-value networking events."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-muted-foreground">
            Collaborating with leading firms across legal, executive search, advisory, and events to deliver comprehensive support for our clients
          </p>
        </div>

        {/* Partner Categories */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {partnerCategories.map((category, index) => (
            <section 
              key={index} 
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card p-10 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <category.icon className="h-10 w-10 text-accent" />
                  <h2 className="text-3xl font-serif font-bold">{category.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-8">
                  {category.description}
                </p>
                
                <div className="space-y-6">
                  {category.partners.map((partner, pIndex) => (
                    <div 
                      key={pIndex}
                      className="bg-secondary/30 p-6 rounded-xl border border-border/30"
                    >
                      <h3 className="text-xl font-serif font-semibold mb-2 text-accent">
                        {partner.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {partner.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Partnership CTA */}
        <section className="mt-20">
          <div className="glass-card p-12 rounded-2xl text-center max-w-4xl mx-auto bg-accent/5 border-accent/20">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Interested in Becoming a Partner?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always open to collaborating with leading firms that share our commitment to excellence and client service.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;