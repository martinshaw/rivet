import { useState } from "react";
import { Calendar, Tag, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../../hooks/use-toast";

const Insights = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const articles = [
    {
      title: "European Real Estate Investment Trends 2025",
      category: "Market Insights",
      date: "January 2025",
      excerpt: "Key trends shaping European real estate investment including PropTech adoption, ESG requirements, and emerging markets.",
      featured: true
    },
    {
      title: "UAE Hospitality Market Update",
      category: "Regional Focus",
      date: "December 2024",
      excerpt: "Analysis of Dubai and Abu Dhabi hotel performance, new developments, and investor appetite in the UAE market.",
      featured: true
    },
    {
      title: "Family Office Investment Strategies in UK Real Estate",
      category: "Investor Insights",
      date: "November 2024",
      excerpt: "How family offices are approaching UK real estate: from residential to alternative assets and co-investment structures.",
      featured: false
    },
    {
      title: "Partnership Announcement: Seddons-GSC Legal Services",
      category: "Partnership News",
      date: "October 2024",
      excerpt: "Capitum Connect partners with leading real estate law firm to provide enhanced legal support for clients.",
      featured: false
    },
    {
      title: "Successful UK Residential JV Completion",
      category: "Deal Highlights",
      date: "September 2024",
      excerpt: "Case study: £25M Manchester residential development successfully structured and launched with institutional partner.",
      featured: false
    },
    {
      title: "Q3 2024 Investor Event Recap",
      category: "Event Updates",
      date: "September 2024",
      excerpt: "Highlights from our European Capital Markets Roundtable in Amsterdam, connecting 30+ family offices and funds.",
      featured: false
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Subscribed Successfully",
      description: "You'll receive our latest insights and market updates.",
    });

    setEmail("");
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Insights & News
          </h1>
          <p className="text-xl text-muted-foreground">
            Market analysis, partnership updates, and thought leadership from Capitum Connect
          </p>
        </div>

        {/* Newsletter Signup */}
        <section className="mb-16">
          <div className="glass-card p-10 rounded-2xl max-w-3xl mx-auto text-center bg-accent/5 border-accent/20 fade-in-up">
            <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold mb-4">Subscribe to Our Insights</h2>
            <p className="text-muted-foreground mb-6">
              Receive exclusive market updates, deal flow insights, and partnership announcements
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-secondary/50 border-border/50"
              />
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8">Featured Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((article, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-accent/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                    <Tag className="inline h-3 w-3 mr-1" />
                    {article.category}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4">{article.title}</h3>
                <p className="text-muted-foreground mb-6">{article.excerpt}</p>

                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-serif font-bold mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:border-accent/50 transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  {article.category}
                </span>

                <h3 className="text-xl font-serif font-semibold mb-3">{article.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                  <button className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center gap-1">
                    Read
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-xl font-serif font-bold mb-6 text-center">Browse by Category</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Market Insights", "Regional Focus", "Investor Insights", "Partnership News", "Deal Highlights", "Event Updates"].map((cat, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-secondary/30 border border-border/30 rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all text-sm font-medium"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Insights;
