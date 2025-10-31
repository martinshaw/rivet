const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl font-serif font-bold mb-8 fade-in-up">Terms of Service</h1>
        <div className="glass-card p-8 rounded-xl space-y-6 fade-in-up">
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">Introduction Services</h2>
            <p className="text-muted-foreground">
              Capital Connect Partners provides strategic introduction and matchmaking services. We do not provide 
              financial advice, legal counsel, or guarantees of investment outcomes.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">Success-Based Model</h2>
            <p className="text-muted-foreground">
              Our fees are success-based and contingent upon completed transactions. Specific fee structures are 
              agreed upon in writing prior to any introduction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold mb-4 text-accent">Professional Conduct</h2>
            <p className="text-muted-foreground">
              All parties are expected to conduct themselves professionally and maintain confidentiality throughout 
              the introduction and partnership process.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
