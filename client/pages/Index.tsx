import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';

export default function Index() {
  const newProducts = [
    {
      id: 1,
      name: "Sérum Éclat Divin",
      description: "Sérum concentré aux peptides et à la vitamine C pour un teint lumineux et unifié",
      price: "890 DH",
      originalPrice: null,
      image: "https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg",
      category: "Soins",
      rating: 4.9,
      reviews: 127,
      benefits: ["Anti-âge", "Éclat", "Hydratation"]
    },
    {
      id: 2,
      name: "Rouge à Lèvres Velours",
      description: "Texture veloutée longue tenue, couleur intense et confort absolu",
      price: "450 DH",
      originalPrice: "520 DH",
      image: "https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg",
      category: "Maquillage",
      rating: 4.8,
      reviews: 89,
      benefits: ["Longue tenue", "Couleur intense", "Hydratant"]
    },
    {
      id: 3,
      name: "Fond de Teint Lumière",
      description: "Couvrance modulable, fini naturel lumineux pour un teint parfait",
      price: "670 DH",
      originalPrice: null,
      image: "https://images.pexels.com/photos/10044948/pexels-photo-10044948.jpeg",
      category: "Maquillage",
      rating: 4.9,
      reviews: 203,
      benefits: ["Couvrance parfaite", "Fini naturel", "Longue tenue"]
    },
    {
      id: 4,
      name: "Crème Hydratante Luxe",
      description: "Crème riche aux actifs précieux pour une peau nourrie et régénérée",
      price: "1250 DH",
      originalPrice: null,
      image: "https://images.pexels.com/photos/4841234/pexels-photo-4841234.jpeg",
      category: "Soins",
      rating: 5.0,
      reviews: 156,
      benefits: ["Nutrition intense", "Régénération", "Anti-âge"]
    }
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      age: "32 ans",
      location: "Paris",
      review: "Une qualité exceptionnelle ! Ma peau n'a jamais été aussi éclatante depuis que j'utilise leurs produits. Le sérum éclat divin a transformé ma routine beauté. Résultats visibles dès 2 semaines !",
      rating: 5,
      image: "https://images.pexels.com/photos/33202485/pexels-photo-33202485.jpeg",
      product: "Sérum Éclat Divin"
    },
    {
      name: "Emma Dubois",
      age: "28 ans",
      location: "Lyon",
      review: "Le service client est parfait et les produits sont d'une efficacité remarquable. Je recommande vivement ! La livraison est rapide et l'emballage est absolument magnifique. Une expérience luxueuse du début à la fin.",
      rating: 5,
      image: "https://images.pexels.com/photos/6575023/pexels-photo-6575023.jpeg",
      product: "Rouge à Lèvres Velours"
    },
    {
      name: "Claire Moreau",
      age: "35 ans",
      location: "Marseille",
      review: "Des textures incroyables et des résultats visibles dès la première utilisation. Une marque de confiance. La crème hydratante luxe est devenue indispensable dans ma routine. Ma peau est plus ferme et éclatante.",
      rating: 5,
      image: "https://images.pexels.com/photos/11118765/pexels-photo-11118765.jpeg",
      product: "Crème Hydratante Luxe"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* New Arrivals Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nouveautés
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos derni��res créations, alliant innovation et luxe 
              pour une expérience beauté incomparable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {newProducts.map((product, index) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden border border-border hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col gap-2">
                      <button className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors duration-200">
                        <Heart className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors duration-200"
                      >
                        <Eye className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </Link>
                    </div>
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Promo
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-semibold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{product.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.reviews} avis
                    </span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium">
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-foreground rounded-lg border border-border hover:bg-muted transition-all duration-300 hover-lift font-semibold"
            >
              Voir tous les produits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl hover-lift animate-fade-in">
              <img
                src="https://images.pexels.com/photos/8298495/pexels-photo-8298495.jpeg"
                alt="Soins du visage"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-[-4px] transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2 hero-text-shadow">Soins du Visage</h3>
                <p className="text-white/90 mb-4 hero-text-shadow">Révélez l'éclat naturel de votre peau avec nos soins d'exception</p>
                <Link
                  to="/products?category=soins"
                  className="inline-flex items-center text-white hover:text-rose-200 transition-all duration-300 font-semibold group/link"
                >
                  Découvrir
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl hover-lift animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.pexels.com/photos/28195536/pexels-photo-28195536.jpeg"
                alt="Maquillage"
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 text-white transform group-hover:translate-y-[-4px] transition-transform duration-500">
                <h3 className="text-2xl font-bold mb-2 hero-text-shadow">Maquillage</h3>
                <p className="text-white/90 mb-4 hero-text-shadow">Exprimez votre personnalité avec nos couleurs vibrantes</p>
                <Link
                  to="/products?category=maquillage"
                  className="inline-flex items-center text-white hover:text-rose-200 transition-all duration-300 font-semibold group/link"
                >
                  Découvrir
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ce que disent nos clientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez les témoignages de nos clientes satisfaites qui ont 
              trouvé leur routine beauté parfaite avec nos produits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-border hover-lift animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.age} • {testimonial.location}</p>
                  </div>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <p className="text-sm text-rose-700 font-medium">Produit utilisé:</p>
                  <p className="text-sm text-rose-600">{testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 luxury-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Restez informée de nos nouveautés
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Inscrivez-vous à notre newsletter et recevez en exclusivité nos 
            dernières collections, conseils beauté et offres spéciales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold">
              S'inscrire
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            En vous inscrivant, vous acceptez de recevoir nos emails marketing. 
            Vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </section>
    </div>
  );
}
