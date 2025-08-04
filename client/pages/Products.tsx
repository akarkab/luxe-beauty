import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Heart, Eye, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'Tous les produits', count: 24 },
    { id: 'soins', name: 'Soins du visage', count: 12 },
    { id: 'maquillage', name: 'Maquillage', count: 8 },
    { id: 'parfums', name: 'Parfums', count: 4 }
  ];

  const products = [
    {
      id: 1,
      name: "Sérum Éclat Divin",
      description: "Sérum concentré aux peptides et à la vitamine C pour un teint lumineux et unifié. Formule anti-âge avancée.",
      price: 89,
      originalPrice: null,
      image: "https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg",
      category: "soins",
      rating: 4.9,
      reviews: 127,
      benefits: ["Anti-âge", "Éclat", "Hydratation"],
      ingredients: ["Vitamine C", "Peptides", "Acide hyaluronique"],
      inStock: true,
      isNew: true,
      isBestseller: false
    },
    {
      id: 2,
      name: "Rouge à Lèvres Velours",
      description: "Texture veloutée longue tenue, couleur intense et confort absolu. Formule enrichie en huiles nourrissantes.",
      price: 45,
      originalPrice: 52,
      image: "https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg",
      category: "maquillage",
      rating: 4.8,
      reviews: 89,
      benefits: ["Longue tenue", "Couleur intense", "Hydratant"],
      ingredients: ["Huile de jojoba", "Cire d'abeille", "Pigments minéraux"],
      inStock: true,
      isNew: false,
      isBestseller: true
    },
    {
      id: 3,
      name: "Fond de Teint Lumière",
      description: "Couvrance modulable, fini naturel lumineux pour un teint parfait. Adapté à tous les types de peau.",
      price: 67,
      originalPrice: null,
      image: "https://images.pexels.com/photos/10044948/pexels-photo-10044948.jpeg",
      category: "maquillage",
      rating: 4.9,
      reviews: 203,
      benefits: ["Couvrance parfaite", "Fini naturel", "Longue tenue"],
      ingredients: ["SPF 30", "Vitamines", "Extraits botaniques"],
      inStock: true,
      isNew: false,
      isBestseller: true
    },
    {
      id: 4,
      name: "Crème Hydratante Luxe",
      description: "Crème riche aux actifs précieux pour une peau nourrie et régénérée. Texture onctueuse et absorption rapide.",
      price: 125,
      originalPrice: null,
      image: "https://images.pexels.com/photos/4841234/pexels-photo-4841234.jpeg",
      category: "soins",
      rating: 5.0,
      reviews: 156,
      benefits: ["Nutrition intense", "Régénération", "Anti-âge"],
      ingredients: ["Collagène", "Elastine", "Huiles précieuses"],
      inStock: true,
      isNew: false,
      isBestseller: true
    },
    {
      id: 5,
      name: "Parfum Essence Florale",
      description: "Fragrance délicate aux notes florales et poudrées. Composition exclusive de maître parfumeur.",
      price: 89,
      originalPrice: null,
      image: "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg",
      category: "parfums",
      rating: 4.7,
      reviews: 74,
      benefits: ["Longue tenue", "Notes florales", "Élégant"],
      ingredients: ["Rose bulgare", "Jasmin", "Musc blanc"],
      inStock: true,
      isNew: true,
      isBestseller: false
    },
    {
      id: 6,
      name: "Palette Fards à Paupières",
      description: "12 nuances harmonieuses pour créer des looks jour et nuit. Texture soyeuse et pigmentation intense.",
      price: 78,
      originalPrice: null,
      image: "https://images.pexels.com/photos/11118765/pexels-photo-11118765.jpeg",
      category: "maquillage",
      rating: 4.8,
      reviews: 95,
      benefits: ["12 teintes", "Pigmentation intense", "Modulable"],
      ingredients: ["Pigments minéraux", "Talc premium", "Huiles végétales"],
      inStock: true,
      isNew: false,
      isBestseller: false
    },
    {
      id: 7,
      name: "Nettoyant Visage Doux",
      description: "Gel nettoyant purifiant et apaisant pour tous types de peau. Élimine les impuretés en douceur.",
      price: 34,
      originalPrice: null,
      image: "https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg",
      category: "soins",
      rating: 4.6,
      reviews: 143,
      benefits: ["Nettoyage doux", "Purifiant", "Apaisant"],
      ingredients: ["Aloe vera", "Camomille", "Glycérine végétale"],
      inStock: true,
      isNew: false,
      isBestseller: false
    },
    {
      id: 8,
      name: "Pinceaux Maquillage Set",
      description: "Set de 8 pinceaux professionnels en fibres synthétiques. Pochette de rangement incluse.",
      price: 95,
      originalPrice: 110,
      image: "https://images.pexels.com/photos/6575023/pexels-photo-6575023.jpeg",
      category: "maquillage",
      rating: 4.9,
      reviews: 187,
      benefits: ["Fibres synthétiques", "Qualité pro", "8 pinceaux"],
      ingredients: ["Fibres Taklon", "Manche bambou", "Virole aluminium"],
      inStock: false,
      isNew: false,
      isBestseller: true
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return b.isBestseller ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-beige-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Collection
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre gamme complète de cosmétiques de luxe, soigneusement sélectionnés 
              pour sublimer votre beauté naturelle.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className="text-sm">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Prix</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Min: {priceRange[0]} DH</span>
                  <span className="text-sm text-muted-foreground">Max: {priceRange[1]} DH</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-primary"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Filtres</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-sm text-muted-foreground">Nouveautés</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-sm text-muted-foreground">Meilleures ventes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-sm text-muted-foreground">En promotion</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-primary" />
                  <span className="text-sm text-muted-foreground">En stock</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <Filter className="w-4 h-4" />
                  Filtres
                </button>
                <span className="text-muted-foreground">
                  {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="featured">Mis en avant</option>
                  <option value="newest">Plus récents</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                </select>

                <div className="flex border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 transition-colors duration-200 ${
                      viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-white text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 transition-colors duration-200 ${
                      viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-white text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product) => (
                <div key={product.id} className={`group bg-white rounded-lg overflow-hidden border border-border hover-lift ${
                  viewMode === 'list' ? 'flex' : ''
                }`}>
                  <div className={`relative overflow-hidden ${
                    viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'
                  }`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      {product.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Nouveau
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                          Best seller
                        </span>
                      )}
                      {product.originalPrice && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          -13%
                        </span>
                      )}
                      {!product.inStock && (
                        <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                          Rupture
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
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
                  </div>

                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground capitalize">{product.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{product.rating}</span>
                      </div>
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.benefits.slice(0, 3).map((benefit, idx) => (
                        <span key={idx} className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">{product.price} DH</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice} DH
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.reviews} avis
                      </span>
                    </div>

                    <button
                      disabled={!product.inStock}
                      className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg transition-colors duration-200 font-medium ${
                        product.inStock
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      {product.inStock ? 'Ajouter au panier' : 'Rupture de stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white text-foreground rounded-lg border border-border hover:bg-muted transition-colors duration-200 font-semibold">
                Charger plus de produits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
