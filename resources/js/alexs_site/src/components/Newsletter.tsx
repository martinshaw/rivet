import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You'll receive exclusive off-market insights in your inbox.",
    });
    setEmail("");
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Exclusive Off-Market Insights
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to receive curated opportunities, market intelligence, and partnership updates delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/50 border-border/50"
            />
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
