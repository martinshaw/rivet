import { useState } from "react";
import { Upload, Building2, DollarSign, FileText } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useToast } from "../hooks/use-toast";

const Submit = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    contactName: "",
    email: "",
    phone: "",

    // Project Details
    projectName: "",
    projectType: "",
    location: "",
    projectStage: "",

    // Financial Information
    capitalRequired: "",
    capitalType: "",
    currentFunding: "",

    // Additional Details
    description: "",
    timeline: "",
    uniqueSellingPoints: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Opportunity Submitted Successfully",
      description: "Thank you for submitting your opportunity to Capitum Connect. Our introductions team will review and contact you shortly.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      projectName: "",
      projectType: "",
      location: "",
      projectStage: "",
      capitalRequired: "",
      capitalType: "",
      currentFunding: "",
      description: "",
      timeline: "",
      uniqueSellingPoints: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-12 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Submit an Opportunity
          </h1>
          <p className="text-xl text-muted-foreground">
            Share your project details and we'll connect you with the right partners and capital sources
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Company Information */}
            <div className="glass-card p-8 rounded-xl fade-in-up">
              <div className="flex items-center mb-6">
                <Building2 className="h-6 w-6 text-accent mr-3" />
                <h2 className="text-2xl font-serif font-semibold">Company Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium mb-2">
                    Contact Name *
                  </label>
                  <Input
                    id="contactName"
                    name="contactName"
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="glass-card p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-accent mr-3" />
                <h2 className="text-2xl font-serif font-semibold">Project Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="projectName" className="block text-sm font-medium mb-2">
                    Project Name *
                  </label>
                  <Input
                    id="projectName"
                    name="projectName"
                    type="text"
                    required
                    value={formData.projectName}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({...formData, projectType: value})}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border/50">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border z-50">
                      <SelectItem value="hotel">Hotel / Hospitality</SelectItem>
                      <SelectItem value="residential">Residential Development</SelectItem>
                      <SelectItem value="mixed-use">Mixed-Use</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="land">Land / Site</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Location *
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                    placeholder="City, Country"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="projectStage" className="block text-sm font-medium mb-2">
                    Project Stage *
                  </label>
                  <Select
                    value={formData.projectStage}
                    onValueChange={(value) => setFormData({...formData, projectStage: value})}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border/50">
                      <SelectValue placeholder="Select project stage" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border z-50">
                      <SelectItem value="concept">Concept / Pre-Planning</SelectItem>
                      <SelectItem value="planning">Planning Stage</SelectItem>
                      <SelectItem value="approved">Planning Approved</SelectItem>
                      <SelectItem value="construction">Under Construction</SelectItem>
                      <SelectItem value="operational">Operational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="glass-card p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <DollarSign className="h-6 w-6 text-accent mr-3" />
                <h2 className="text-2xl font-serif font-semibold">Financial Information</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="capitalRequired" className="block text-sm font-medium mb-2">
                    Capital Required *
                  </label>
                  <Input
                    id="capitalRequired"
                    name="capitalRequired"
                    type="text"
                    required
                    value={formData.capitalRequired}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                    placeholder="e.g., £10M - £15M"
                  />
                </div>
                <div>
                  <label htmlFor="capitalType" className="block text-sm font-medium mb-2">
                    Capital Type *
                  </label>
                  <Select
                    value={formData.capitalType}
                    onValueChange={(value) => setFormData({...formData, capitalType: value})}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border/50">
                      <SelectValue placeholder="Select capital type" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border z-50">
                      <SelectItem value="equity">Equity</SelectItem>
                      <SelectItem value="debt">Debt</SelectItem>
                      <SelectItem value="mezzanine">Mezzanine</SelectItem>
                      <SelectItem value="jv">Joint Venture</SelectItem>
                      <SelectItem value="forward-funding">Forward Funding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="currentFunding" className="block text-sm font-medium mb-2">
                    Current Funding Status
                  </label>
                  <Input
                    id="currentFunding"
                    name="currentFunding"
                    type="text"
                    value={formData.currentFunding}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                    placeholder="e.g., £5M committed from founders"
                  />
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="glass-card p-8 rounded-xl fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <Upload className="h-6 w-6 text-accent mr-3" />
                <h2 className="text-2xl font-serif font-semibold">Additional Details</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50 min-h-[120px]"
                    placeholder="Provide a detailed description of your project..."
                  />
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <Input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50"
                    placeholder="e.g., Construction start Q1 2026, completion Q4 2027"
                  />
                </div>
                <div>
                  <label htmlFor="uniqueSellingPoints" className="block text-sm font-medium mb-2">
                    Unique Selling Points
                  </label>
                  <Textarea
                    id="uniqueSellingPoints"
                    name="uniqueSellingPoints"
                    value={formData.uniqueSellingPoints}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border/50 min-h-[100px]"
                    placeholder="What makes this opportunity special?"
                  />
                </div>
              </div>
            </div>

            {/* GDPR & Privacy Notice */}
            <div className="glass-card p-8 rounded-xl bg-accent/5 border-accent/30">
              <h3 className="text-lg font-semibold mb-4">Data Protection & Confidentiality</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start">
                  <span className="text-accent mr-2">🔒</span>
                  <span><strong>Encryption:</strong> All data is transmitted using industry-standard SSL encryption and stored securely.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span><strong>GDPR Compliant:</strong> We are fully compliant with GDPR and data protection regulations.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">👁️</span>
                  <span><strong>Confidentiality:</strong> Your information will never be shared without your explicit consent.</span>
                </p>
                <p className="flex items-start">
                  <span className="text-accent mr-2">📧</span>
                  <span><strong>Auto-Confirmation:</strong> Upon submission, you'll receive an automatic confirmation email from our team.</span>
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-12"
              >
                Submit Opportunity
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                By submitting, you agree to our <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a> and <a href="/terms" className="text-accent hover:underline">Terms of Service</a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                You will receive a confirmation email at the address provided above.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Submit;
