import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({ 
  title = "Capitum Connect | Investment Matchmaking UK EU US UAE",
  description = "Boutique real estate introductions and investment matchmaking firm connecting investors, family offices, and developers with strategic partners and off-market opportunities across UK, Europe, US, and UAE.",
  keywords = "Real Estate Investment Matchmaking, Family Office Introductions, Off-Market Real Estate Deals, Capital Raising, Investor Network UK EU US UAE, Real Estate Joint Ventures, Hotel Investment Opportunities, PropTech Partnerships",
  ogImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  canonical
}: SEOProps) => {
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "name": "Capitum Connect",
          "description": description,
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "areaServed": [
            {
              "@type": "Country",
              "name": "United Kingdom"
            },
            {
              "@type": "Place",
              "name": "Europe"
            },
            {
              "@type": "Country",
              "name": "United States"
            },
            {
              "@type": "Country",
              "name": "United Arab Emirates"
            }
          ],
          "serviceType": [
            "Investment Matchmaking",
            "Capital Raising",
            "Real Estate Partnerships",
            "Joint Venture Facilitation"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;