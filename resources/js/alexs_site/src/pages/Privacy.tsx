const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-serif font-bold mb-8 fade-in-up">Privacy Policy</h1>
        <div className="glass-card p-8 rounded-xl space-y-6 fade-in-up">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">Data Protection</h2>
            <p className="text-muted-foreground">
              Capital Connect Partners is committed to protecting your privacy and ensuring the confidentiality 
              of all information shared with us. We comply with all applicable data protection regulations.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">Information Collection</h2>
            <p className="text-muted-foreground">
              We collect information necessary to facilitate introductions and match opportunities with appropriate 
              partners. This includes contact details, company information, and project specifics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">Confidentiality</h2>
            <p className="text-muted-foreground">
              All information is treated with strict confidentiality. We never share your information with third 
              parties without your explicit consent, except where required by law.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
