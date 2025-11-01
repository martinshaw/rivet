import { Search, Target, Handshake, Award } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Understand",
      description: "We dive deep into your objectives, investment criteria, and strategic goals to ensure precise alignment."
    },
    {
      icon: Target,
      title: "Curate",
      description: "Leveraging our extensive network, we identify and pre-screen opportunities that match your specific requirements."
    },
    {
      icon: Handshake,
      title: "Connect",
      description: "We facilitate confidential, high-quality introductions between perfectly aligned partners and opportunities."
    },
    {
      icon: Award,
      title: "Success",
      description: "Our support continues throughout negotiations and closing, ensuring successful outcomes for all parties."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process built on discretion, quality, and successful outcomes
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-8 rounded-xl text-center fade-in-up hover:border-accent/50 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
