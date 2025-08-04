import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  price?: string;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  brand?: string;
  structuredData?: any;
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = '/placeholder.svg',
  type = 'website',
  price,
  currency = 'MAD',
  availability = 'InStock',
  brand = 'Luxe Beauty',
  structuredData
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://luxe-beauty.ma'; // Remplacer par votre domaine réel
  const currentUrl = `${baseUrl}${location.pathname}`;
  
  const defaultTitle = 'Luxe Beauty - Boutique Cosmétique Bio & Produits de Beauté Naturels au Maroc';
  const defaultDescription = 'Découvrez notre sélection exclusive de cosmétiques bio et produits de beauté naturels. Livraison rapide au Maroc. Paiement à la livraison disponible.';
  const defaultKeywords = 'cosmétiques bio, beauté naturelle, produits beauté maroc, maquillage, soins visage, crèmes hydratantes, rouge à lèvres, sérums';

  const finalTitle = title ? `${title} | Luxe Beauty` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image.startsWith('http') ? image : `${baseUrl}${image}`;

  // Données structurées par défaut pour l'organisation
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Luxe Beauty",
    "url": baseUrl,
    "logo": `${baseUrl}/placeholder.svg`,
    "description": "Boutique de cosmétiques bio et produits de beauté naturels au Maroc",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Boulevard Mohammed V",
      "addressLocality": "Casablanca",
      "postalCode": "20000",
      "addressCountry": "MA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+212-6-12-34-56-78",
      "contactType": "Service Client",
      "availableLanguage": ["French", "Arabic"]
    },
    "sameAs": [
      "https://www.facebook.com/luxebeauty",
      "https://www.instagram.com/luxebeauty",
      "https://www.tiktok.com/@luxebeauty"
    ]
  };

  return (
    <Helmet>
      {/* Balises meta essentielles */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Luxe Beauty" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Balises canoniques */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:site_name" content="Luxe Beauty" />
      <meta property="og:locale" content="fr_MA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Balises spécifiques aux produits */}
      {type === 'product' && price && (
        <>
          <meta property="product:price:amount" content={price} />
          <meta property="product:price:currency" content={currency} />
          <meta property="product:availability" content={availability} />
          <meta property="product:brand" content={brand} />
        </>
      )}
      
      {/* Métadonnées mobile */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="theme-color" content="#E879A6" />
      
      {/* Données structurées JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preload des polices importantes */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      
      {/* Favicon et icônes */}
      <link rel="icon" type="image/svg+xml" href="/placeholder.svg" />
      <link rel="apple-touch-icon" href="/placeholder.svg" />
      
      {/* Hints de performance */}
      <link rel="dns-prefetch" href="//images.pexels.com" />
      <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

export default SEOHead;
