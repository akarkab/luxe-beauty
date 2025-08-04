import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Heart, 
  Star, 
  Minus, 
  Plus, 
  ShoppingBag, 
  Share2, 
  ChevronLeft,
  Check,
  Shield,
  Truck,
  RotateCcw,
  Award,
  Users,
  MessageSquare
} from 'lucide-react';

// Types
interface Product {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  images: string[];
  benefits: string[];
  ingredients: string[];
  usage: string[];
  inStock: boolean;
  variants?: {
    color?: string[];
    size?: string[];
  };
}

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// Mock data - dans un vrai projet, cela viendrait d'une API
const mockProducts: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Sérum Éclat Divin',
    description: 'Sérum illuminateur aux peptides et vitamine C pour un éclat naturel',
    detailedDescription: 'Ce sérum révolutionnaire combine des peptides de dernière génération avec de la vitamine C pure pour illuminer votre teint et révéler l\'éclat naturel de votre peau. Sa formule légère pénètre rapidement dans la peau, offrant une hydratation profonde et durable. Enrichi en acide hyaluronique et extraits botaniques, il aide à réduire les signes de fatigue et redonne fraîcheur et luminosité à votre visage.',
    price: 890,
    originalPrice: 1200,
    rating: 4.8,
    reviews: 156,
    category: 'Soins du visage',
    images: [
      'https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg',
      'https://images.pexels.com/photos/7755655/pexels-photo-7755655.jpeg',
      'https://images.pexels.com/photos/7755651/pexels-photo-7755651.jpeg'
    ],
    benefits: ['Éclat instantané', 'Anti-âge', 'Hydratation 24h', 'Texture légère'],
    ingredients: ['Vitamine C', 'Peptides', 'Acide Hyaluronique', 'Extraits botaniques', 'Glycérine'],
    usage: [
      'Nettoyer le visage avec un nettoyant doux',
      'Appliquer 2-3 gouttes sur le visage et le cou',
      'Masser délicatement jusqu\'à absorption complète',
      'Utiliser matin et soir pour des résultats optimaux',
      'Toujours appliquer un SPF le matin'
    ],
    inStock: true,
    variants: {
      size: ['30ml', '50ml']
    }
  },
  '2': {
    id: '2',
    name: 'Rouge à Lèvres Velours',
    description: 'Rouge à lèvres longue tenue à la texture velours, disponible en 12 teintes',
    detailedDescription: 'Découvrez notre rouge à lèvres signature à la texture velours unique. Sa formule innovante offre une couvrance intense et une tenue exceptionnelle jusqu\'à 8 heures, sans transfert. Enrichi en huiles nourrissantes et cires naturelles, il prend soin de vos lèvres tout en les sublimant. Disponible dans une palette de 12 teintes sophistiquées, des roses poudrés aux rouges intenses.',
    price: 450,
    rating: 4.6,
    reviews: 243,
    category: 'Maquillage',
    images: [
      'https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg',
      'https://images.pexels.com/photos/8136577/pexels-photo-8136577.jpeg',
      'https://images.pexels.com/photos/9878772/pexels-photo-9878772.jpeg'
    ],
    benefits: ['Longue tenue 8h', 'Sans transfert', 'Texture velours', 'Hydratant'],
    ingredients: ['Cires naturelles', 'Huile de jojoba', 'Vitamine E', 'Pigments haute qualité'],
    usage: [
      'Exfolier délicatement les lèvres si nécessaire',
      'Appliquer directement depuis le tube',
      'Estomper les contours pour un effet naturel',
      'Superposer pour intensifier la couleur'
    ],
    inStock: true,
    variants: {
      color: ['Rose Poudré', 'Corail Intense', 'Rouge Passion', 'Berry Profond', 'Nude Sophistiqué']
    }
  }
};

const mockReviews: Record<string, Review[]> = {
  '1': [
    {
      id: '1',
      author: 'Amina K.',
      rating: 5,
      comment: 'Excellent sérum ! Ma peau est plus lumineuse dès la première utilisation. Je le recommande vivement.',
      date: '2024-01-15',
      verified: true
    },
    {
      id: '2',
      author: 'Fatima M.',
      rating: 4,
      comment: 'Très bon produit, texture agréable et résultats visibles. Le prix est un peu élevé mais ça vaut le coup.',
      date: '2024-01-10',
      verified: true
    }
  ],
  '2': [
    {
      id: '3',
      author: 'Leila B.',
      rating: 5,
      comment: 'La texture velours est incroyable ! Tient toute la journée sans dessécher les lèvres.',
      date: '2024-01-20',
      verified: true
    }
  ]
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'usage' | 'reviews'>('description');
  const [isWishlist, setIsWishlist] = useState(false);

  const product = id ? mockProducts[id] : null;
  const reviews = id ? mockReviews[id] || [] : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Produit non trouvé</h1>
          <Link to="/products" className="text-primary hover:underline">
            Retour aux produits
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    alert(`${product.name} ajouté au panier !`);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Accueil
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/products" className="text-muted-foreground hover:text-primary">
              Produits
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{product.category}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Retour aux produits
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index 
                      ? 'border-primary' 
                      : 'border-transparent hover:border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{product.category}</span>
                {product.inStock && (
                  <span className="flex items-center gap-1 text-green-600 text-sm">
                    <Check className="w-3 h-3" />
                    En stock
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} avis)
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">{product.price} DH</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  {product.originalPrice} DH
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full">
                  -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-2">
              {product.benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="bg-rose-50 text-rose-700 text-sm px-3 py-1 rounded-full"
                >
                  {benefit}
                </span>
              ))}
            </div>

            {/* Variants */}
            {product.variants && (
              <div className="space-y-4">
                {product.variants.color && (
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2">Couleur</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.color.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedVariant(prev => ({ ...prev, color }))}
                          className={`px-3 py-2 border rounded-lg text-sm transition-colors ${
                            selectedVariant.color === color
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border hover:border-primary'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                {product.variants.size && (
                  <div>
                    <h3 className="text-sm font-medium text-foreground mb-2">Taille</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.size.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedVariant(prev => ({ ...prev, size }))}
                          className={`px-3 py-2 border rounded-lg text-sm transition-colors ${
                            selectedVariant.size === size
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-border hover:border-primary'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Quantité</h3>
              <div className="flex items-center border border-border rounded-lg w-fit">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-3 font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 hover:bg-muted transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <ShoppingBag className="w-5 h-5" />
                Ajouter au panier
              </button>
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-3 border rounded-lg transition-colors ${
                  isWishlist 
                    ? 'border-primary bg-primary text-primary-foreground' 
                    : 'border-border hover:border-primary'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlist ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 border border-border rounded-lg hover:border-primary transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-muted-foreground">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-muted-foreground">Livraison rapide</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-muted-foreground">Retour 30 jours</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-muted-foreground">Qualité garantie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-border">
            <div className="flex gap-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'ingredients', label: 'Ingrédients' },
                { id: 'usage', label: 'Utilisation' },
                { id: 'reviews', label: `Avis (${reviews.length})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-2 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary font-medium'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.detailedDescription}
                </p>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Ingrédients principaux</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-foreground">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Mode d'emploi</h3>
                <ol className="space-y-4">
                  {product.usage.map((step, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">{product.rating}</div>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      {renderStars(product.rating)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {product.reviews} avis
                    </div>
                  </div>
                  <div className="flex-1">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const count = reviews.filter(r => Math.floor(r.rating) === stars).length;
                      const percentage = reviews.length > 0 ? (count / reviews.length) * 100 : 0;
                      return (
                        <div key={stars} className="flex items-center gap-2 mb-1">
                          <span className="text-sm w-8">{stars}★</span>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-8">{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground">{review.author}</span>
                            {review.verified && (
                              <span className="flex items-center gap-1 text-green-600 text-sm">
                                <Check className="w-3 h-3" />
                                Achat vérifié
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
