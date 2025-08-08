import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Nilesh Giri - Full Stack Developer Portfolio",
  description = "Experienced Full Stack Developer specializing in React.js, JavaScript, and modern web technologies. View my portfolio of innovative projects and get in touch for collaboration.",
  keywords = "Full Stack Developer, React.js, JavaScript, TypeScript, Node.js, Web Development, Portfolio, Nilesh Giri",
  image = "/og-image.jpg",
  url = "https://nileshgiri.dev"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Nilesh Giri" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nilesh Giri Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@nileshgiri" />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="theme-color" content="#3B82F6" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nilesh Giri",
          "jobTitle": "Full Stack Developer",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/nileshgiri",
            "https://linkedin.com/in/nileshgiri",
            "https://twitter.com/nileshgiri"
          ],
          "knowsAbout": [
            "React.js",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Full Stack Development",
            "Web Development"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;