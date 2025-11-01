import { Shield, Lock, FileCheck, Eye } from "lucide-react";

const Confidentiality = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Confidentiality & Ethics
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trust is our foundation. We operate with the highest standards of discretion and data protection.
          </p>
        </div>

        {/* Core Principles */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Strict Confidentiality",
                description: "All introductions, opportunities, and communications are handled with complete confidentiality. We never disclose your identity or information without explicit permission."
              },
              {
                icon: Lock,
                title: "Data Protection",
                description: "We are fully GDPR compliant and maintain industry-leading data security practices. All submitted information is encrypted and stored securely."
              },
              {
                icon: FileCheck,
                title: "Professional Standards",
                description: "We adhere to the highest professional and ethical standards in all our dealings, ensuring integrity in every introduction and transaction."
              },
              {
                icon: Eye,
                title: "Discretion First",
                description: "We understand the sensitive nature of real estate transactions and maintain absolute discretion in all our introductions and matchmaking activities."
              }
            ].map((principle, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <principle.icon className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-2xl font-serif font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Commitments */}
        <section className="mb-20">
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">Our Commitments</h2>
            <div className="space-y-6 text-muted-foreground">
              <div className="flex items-start">
                <span className="text-accent text-xl mr-4 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">No Unsolicited Disclosure</h3>
                  <p>We will never share your opportunity, identity, or information with third parties without your explicit consent.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-xl mr-4 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Secure Communications</h3>
                  <p>All email communications are encrypted, and sensitive documents are shared through secure channels only.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-xl mr-4 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Controlled Introductions</h3>
                  <p>Every introduction is carefully managed and controlled. We only share what you've authorized us to share.</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-accent text-xl mr-4 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Retention Policy</h3>
                  <p>We maintain clear data retention policies and will delete your information upon request, subject to legal requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section>
          <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto bg-accent/5 border-accent/30">
            <h2 className="text-2xl font-serif font-bold mb-4">Important Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              Capitum Connect acts solely as an introducer and facilitator. We do not provide financial advice, investment advice, legal advice, or any other regulated services.
            </p>
            <p className="text-muted-foreground mb-4">
              All parties are advised to conduct their own due diligence and seek independent professional advice before entering into any transaction or agreement.
            </p>
            <p className="text-muted-foreground">
              Success fees are earned only upon the successful completion of introductions and are disclosed in advance to all relevant parties.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Confidentiality;
