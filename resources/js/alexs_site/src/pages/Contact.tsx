import { useState } from "react";
import { Mail, Linkedin, MapPin, Send, Building2, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  
  const [opportunityForm, setOpportunityForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    capitalRequired: "",
    region: "",
    message: "",
    newsletter: false
  });

  const [investorForm, setInvestorForm] = useState({
    name: "",
    email: "",
    company: "",
    investmentRange: "",
    regionOfInterest: "",
    assetPreference: "",
    message: ""
  });

  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    newsletter: false
  });

  const handleOpportunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Opportunity Submitted",
      description: "Thank you. Our team will review your submission and contact you shortly.",
    });
    setOpportunityForm({
      name: "",
      email: "",
      company: "",
      projectType: "",
      capitalRequired: "",
      region: "",
      message: "",
      newsletter: false
    });
  };

  const handleInvestorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. A member of the Capitum Connect team will contact you directly to arrange a confidential discussion.",
    });
    setInvestorForm({
      name: "",
      email: "",
      company: "",
      investmentRange: "",
      regionOfInterest: "",
      assetPreference: "",
      message: ""
    });
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond within 24 business hours.",
    });
    setEnquiryForm({
      name: "",
      email: "",
      company: "",
      message: "",
      newsletter: false
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose how you'd like to connect with Capitum Connect
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Forms Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 rounded-2xl fade-in-up">
              <Tabs defaultValue="opportunity" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="opportunity" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Submit Opportunity</span>
                    <span className="sm:hidden">Opportunity</span>
                  </TabsTrigger>
                  <TabsTrigger value="investor" className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="hidden sm:inline">Investor Enquiry</span>
                    <span className="sm:hidden">Investor</span>
                  </TabsTrigger>
                  <TabsTrigger value="enquiry" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="hidden sm:inline">General Enquiry</span>
                    <span className="sm:hidden">Enquiry</span>
                  </TabsTrigger>
                </TabsList>

                {/* Submit Opportunity Form */}
                <TabsContent value="opportunity">
                  <h2 className="text-2xl font-serif font-semibold mb-6">Submit an Investment Opportunity</h2>
                  <form onSubmit={handleOpportunitySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="opp-name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="opp-name"
                          type="text"
                          required
                          value={opportunityForm.name}
                          onChange={(e) => setOpportunityForm({ ...opportunityForm, name: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="opp-email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="opp-email"
                          type="email"
                          required
                          value={opportunityForm.email}
                          onChange={(e) => setOpportunityForm({ ...opportunityForm, email: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="opp-company" className="block text-sm font-medium mb-2">
                        Company / Organization *
                      </label>
                      <Input
                        id="opp-company"
                        type="text"
                        required
                        value={opportunityForm.company}
                        onChange={(e) => setOpportunityForm({ ...opportunityForm, company: e.target.value })}
                        className="bg-secondary/50 border-border/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="opp-type" className="block text-sm font-medium mb-2">
                          Project Type *
                        </label>
                        <Input
                          id="opp-type"
                          type="text"
                          required
                          value={opportunityForm.projectType}
                          onChange={(e) => setOpportunityForm({ ...opportunityForm, projectType: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                          placeholder="e.g., Hotel, Residential, Mixed-Use"
                        />
                      </div>
                      <div>
                        <label htmlFor="opp-capital" className="block text-sm font-medium mb-2">
                          Capital Required *
                        </label>
                        <Input
                          id="opp-capital"
                          type="text"
                          required
                          value={opportunityForm.capitalRequired}
                          onChange={(e) => setOpportunityForm({ ...opportunityForm, capitalRequired: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                          placeholder="e.g., £10M - £20M"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="opp-region" className="block text-sm font-medium mb-2">
                        Region *
                      </label>
                      <Input
                        id="opp-region"
                        type="text"
                        required
                        value={opportunityForm.region}
                        onChange={(e) => setOpportunityForm({ ...opportunityForm, region: e.target.value })}
                        className="bg-secondary/50 border-border/50"
                        placeholder="e.g., London, Paris, Dubai"
                      />
                    </div>

                    <div>
                      <label htmlFor="opp-message" className="block text-sm font-medium mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="opp-message"
                        required
                        value={opportunityForm.message}
                        onChange={(e) => setOpportunityForm({ ...opportunityForm, message: e.target.value })}
                        className="bg-secondary/50 border-border/50 min-h-[120px]"
                        placeholder="Provide key details about the opportunity..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="opp-newsletter"
                        checked={opportunityForm.newsletter}
                        onChange={(e) => setOpportunityForm({ ...opportunityForm, newsletter: e.target.checked })}
                        className="rounded border-border/50"
                      />
                      <label htmlFor="opp-newsletter" className="text-sm text-muted-foreground">
                        Subscribe to exclusive market insights newsletter
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      Submit Opportunity
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>

                {/* Investor Enquiry Form */}
                <TabsContent value="investor">
                  <h2 className="text-2xl font-serif font-semibold mb-4">Investor Enquiry</h2>
                  <p className="text-muted-foreground mb-6">Connect with our team to explore exclusive investment opportunities.</p>
                  <form onSubmit={handleInvestorSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="inv-name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="inv-name"
                          type="text"
                          required
                          value={investorForm.name}
                          onChange={(e) => setInvestorForm({ ...investorForm, name: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="inv-email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="inv-email"
                          type="email"
                          required
                          value={investorForm.email}
                          onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inv-company" className="block text-sm font-medium mb-2">
                        Company / Family Office Name
                      </label>
                      <Input
                        id="inv-company"
                        type="text"
                        value={investorForm.company}
                        onChange={(e) => setInvestorForm({ ...investorForm, company: e.target.value })}
                        className="bg-secondary/50 border-border/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="inv-range" className="block text-sm font-medium mb-2">
                          Investment Range (£) *
                        </label>
                        <Select
                          required
                          value={investorForm.investmentRange}
                          onValueChange={(value) => setInvestorForm({ ...investorForm, investmentRange: value })}
                        >
                          <SelectTrigger className="bg-secondary/50 border-border/50">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1m-5m">£1M–£5M</SelectItem>
                            <SelectItem value="5m-20m">£5M–£20M</SelectItem>
                            <SelectItem value="20m-100m">£20M–£100M</SelectItem>
                            <SelectItem value="100m+">£100M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="inv-region" className="block text-sm font-medium mb-2">
                          Region of Interest *
                        </label>
                        <Select
                          required
                          value={investorForm.regionOfInterest}
                          onValueChange={(value) => setInvestorForm({ ...investorForm, regionOfInterest: value })}
                        >
                          <SelectTrigger className="bg-secondary/50 border-border/50">
                            <SelectValue placeholder="Select region" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="uk">UK</SelectItem>
                            <SelectItem value="europe">Europe</SelectItem>
                            <SelectItem value="uae">UAE</SelectItem>
                            <SelectItem value="us">US</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inv-asset" className="block text-sm font-medium mb-2">
                        Asset Preference *
                      </label>
                      <Select
                        required
                        value={investorForm.assetPreference}
                        onValueChange={(value) => setInvestorForm({ ...investorForm, assetPreference: value })}
                      >
                        <SelectTrigger className="bg-secondary/50 border-border/50">
                          <SelectValue placeholder="Select asset type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hospitality">Hospitality</SelectItem>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="industrial-logistics">Industrial & Logistics</SelectItem>
                          <SelectItem value="data-centres">Data Centres</SelectItem>
                          <SelectItem value="offices">Offices</SelectItem>
                          <SelectItem value="life-sciences">Life Sciences</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="inv-message" className="block text-sm font-medium mb-2">
                        Message / Additional Information
                      </label>
                      <Textarea
                        id="inv-message"
                        value={investorForm.message}
                        onChange={(e) => setInvestorForm({ ...investorForm, message: e.target.value })}
                        className="bg-secondary/50 border-border/50 min-h-[120px]"
                        placeholder="Tell us about your investment criteria and preferences..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      Submit Confidential Enquiry
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>

                {/* General Enquiry Form */}
                <TabsContent value="enquiry">
                  <h2 className="text-2xl font-serif font-semibold mb-6">General Enquiry</h2>
                  <form onSubmit={handleEnquirySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="enq-name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="enq-name"
                          type="text"
                          required
                          value={enquiryForm.name}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                      <div>
                        <label htmlFor="enq-email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="enq-email"
                          type="email"
                          required
                          value={enquiryForm.email}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          className="bg-secondary/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="enq-company" className="block text-sm font-medium mb-2">
                        Company / Organization
                      </label>
                      <Input
                        id="enq-company"
                        type="text"
                        value={enquiryForm.company}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, company: e.target.value })}
                        className="bg-secondary/50 border-border/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="enq-message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="enq-message"
                        required
                        value={enquiryForm.message}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                        className="bg-secondary/50 border-border/50 min-h-[150px]"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="enq-newsletter"
                        checked={enquiryForm.newsletter}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, newsletter: e.target.checked })}
                        className="rounded border-border/50"
                      />
                      <label htmlFor="enq-newsletter" className="text-sm text-muted-foreground">
                        Subscribe to exclusive market insights newsletter
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Contact Information - Takes 1 column */}
          <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-serif font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Email</h3>
                    <a href="mailto:info@capitalconnectre.com" className="text-sm text-muted-foreground hover-gold">
                      info@capitalconnectre.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Linkedin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">LinkedIn</h3>
                    <a href="https://www.linkedin.com/company/capital-connect-real-estate" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover-gold">
                      Connect with us
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Regions Served</h3>
                    <p className="text-sm text-muted-foreground">
                      UK • Europe • US • UAE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-lg font-serif font-semibold mb-3">Office Hours</h3>
              <p className="text-sm text-muted-foreground mb-2">Monday - Friday</p>
              <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM GMT</p>
              <p className="text-xs text-muted-foreground mt-3">
                Response within 24 hours
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl bg-accent/10 border-accent/30">
              <h3 className="text-lg font-serif font-semibold mb-2">Confidentiality</h3>
              <p className="text-sm text-muted-foreground">
                All inquiries are treated with strict confidentiality and discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;