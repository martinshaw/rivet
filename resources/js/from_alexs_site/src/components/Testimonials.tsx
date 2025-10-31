import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Capitum Connect facilitated an introduction that led to a £25M joint venture. Their discretion and network quality are unmatched.",
      author: "Managing Partner",
      company: "UK Family Office"
    },
    {
      quote: "We secured our first institutional investor through their matchmaking service. The quality of introductions exceeded our expectations.",
      author: "CEO",
      company: "Hotel Development Group"
    },
    {
      quote: "Their operator sourcing service connected us with a premium brand that transformed our residential project's value proposition.",
      author: "Development Director",
      company: "European Real Estate Fund"
    }
  ];

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
          Trusted by Leading Investors & Developers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-10 w-10 text-accent mb-4 opacity-50" />
              <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
