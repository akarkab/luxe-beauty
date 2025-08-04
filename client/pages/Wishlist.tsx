import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, Star, Eye, Share2 } from 'lucide-react';

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Sérum Éclat Divin",
      description: "Sérum concentré aux peptides et à la vitamine C pour un teint lumineux et unifié",
      price: 89,
      originalPrice: null,
      image: "https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg",
      category: "Soins",
      rating: 4.9,
      reviews: 127,
      inStock: true,
      isNew: true,
      dateAdded: "2024-01-15"
    },
    {
      id: 2,
      name: "Palette Fards à Paupières",
      description: "12 nuances harmonieuses pour créer des looks jour et nuit",
      price: 78,
      originalPrice: null,
      image: "https://images.pexels.com/photos/11118765/pexels-photo-11118765.jpeg",
      category: "Maquillage",
      rating: 4.8,
      reviews: 95,
      inStock: true,
      isNew: false,
      dateAdded: "2024-01-12"
    },
    {
      id: 3,
      name: "Parfum Essence Florale",
      description: "Fragrance délicate aux notes florales et poudrées",
      price: 89,
      originalPrice: null,
      image: "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg",
      category: "Parfums",
      rating: 4.7,
      reviews: 74,
      inStock: true,
      isNew: true,
      dateAdded: "2024-01-10"
    },
    {
      id: 4,
      name: "Pinceaux Maquillage Set",
      description: "Set de 8 pinceaux professionnels en fibres synthétiques",
      price: 95,
      originalPrice: 110,
      image: "https://images.pexels.com/photos/6575023/pexels-photo-6575023.jpeg",
      category: "Maquillage",
      rating: 4.9,
      reviews: 187,
      inStock: false,
      isNew: false,
      dateAdded: "2024-01-08",
      backInStock: "2024-02-15"
    },
    {
      id: 5,
      name: "Fond de Teint Lumière",
      description: "Couvrance modulable, fini naturel lumineux pour un teint parfait",
      price: 67,
      originalPrice: null,
      image: "https://images.pexels.com/photos/10044948/pexels-photo-10044948.jpeg",
      category: "Maquillage",
      rating: 4.9,
      reviews: 203,
      inStock: true,
      isNew: false,
      dateAdded: "2024-01-05"
    }
  ]);

  const [sortBy, setSortBy] = useState('newest');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
    setSelectedItems(selected => selected.filter(itemId => itemId !== id));
  };

  const addToCart = (id: number) => {
    // Simulate adding to cart
    console.log(`Added item ${id} to cart`);
    // In real app, would dispatch to cart state or API
  };

  const addAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    inStockItems.forEach(item => addToCart(item.id));
  };

  const removeSelectedItems = () => {
    setWishlistItems(items => items.filter(item => !selectedItems.includes(item.id)));
    setSelectedItems([]);
  };

  const toggleSelectItem = (id: number) => {
    setSelectedItems(selected => 
      selected.includes(id) 
        ? selected.filter(itemId => itemId !== id)
        : [...selected, id]
    );
  };

  const selectAllItems = () => {
    if (selectedItems.length === wishlistItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(wishlistItems.map(item => item.id));
    }
  };

  const shareWishlist = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ma Wishlist Luxe Beauty',
        text: 'Découvrez ma sélection de produits cosmétiques de luxe',
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const sortedItems = [...wishlistItems].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
      default:
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
  });

  const inStockCount = wishlistItems.filter(item => item.inStock).length;
  const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-12 h-12 text-rose-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-4">Votre wishlist est vide</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Découvrez nos produits et ajoutez vos favoris à votre wishlist pour les retrouver facilement.
          </p>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
          >
            Découvrir nos produits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-beige-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Ma Wishlist</h1>
              <p className="text-muted-foreground">
                {wishlistItems.length} produit{wishlistItems.length > 1 ? 's' : ''} • 
                {inStockCount} en stock • 
                Valeur totale: {totalValue} DH
              </p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={shareWishlist}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg hover:bg-muted transition-colors duration-200"
              >
                <Share2 className="w-4 h-4" />
                Partager
              </button>
              
              {inStockCount > 0 && (
                <button
                  onClick={addAllToCart}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Tout ajouter au panier
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedItems.length === wishlistItems.length}
                onChange={selectAllItems}
                className="accent-primary"
              />
              <span className="text-sm text-muted-foreground">
                Tout sélectionner ({selectedItems.length})
              </span>
            </label>
            
            {selectedItems.length > 0 && (
              <button
                onClick={removeSelectedItems}
                className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors duration-200 text-sm"
              >
                <Trash2 className="w-4 h-4" />
                Supprimer sélectionnés
              </button>
            )}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="newest">Plus récents</option>
            <option value="name">Nom A-Z</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
            <option value="rating">Mieux notés</option>
          </select>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-lg overflow-hidden border border-border hover-lift">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Selection Checkbox */}
                <div className="absolute top-3 left-3">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleSelectItem(item.id)}
                    className="w-5 h-5 accent-primary"
                  />
                </div>

                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-1">
                  {item.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Nouveau
                    </span>
                  )}
                  {item.originalPrice && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      Promo
                    </span>
                  )}
                  {!item.inStock && (
                    <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                      Rupture
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Link
                      to={`/product/${item.id}`}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors duration-200"
                    >
                      <Eye className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4 text-muted-foreground hover:text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Date Added */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs bg-black/70 text-white px-2 py-1 rounded">
                    Ajouté le {new Date(item.dateAdded).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground capitalize">{item.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{item.rating}</span>
                  </div>
                </div>

                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">{item.name}</h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-primary">{item.price} DH</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {item.originalPrice} DH
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.reviews} avis
                  </span>
                </div>

                {item.inStock ? (
                  <button
                    onClick={() => addToCart(item.id)}
                    className="w-full flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Ajouter au panier
                  </button>
                ) : (
                  <div className="w-full py-2 bg-gray-100 text-gray-500 rounded-lg text-center font-medium">
                    {item.backInStock ? (
                      <div>
                        <div>Rupture de stock</div>
                        <div className="text-xs">Retour prévu le {new Date(item.backInStock).toLocaleDateString('fr-FR')}</div>
                      </div>
                    ) : (
                      'Rupture de stock'
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Vous pourriez aussi aimer</h2>
            <p className="text-muted-foreground">
              Découvrez d'autres produits sélectionnés pour vous
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sample recommended products */}
            <div className="bg-white p-4 rounded-lg border border-border hover-lift">
              <img
                src="https://images.pexels.com/photos/4841234/pexels-photo-4841234.jpeg"
                alt="Crème Hydratante Luxe"
                className="w-full aspect-square object-cover rounded-lg mb-3"
              />
              <h3 className="font-semibold mb-2">Crème Hydratante Luxe</h3>
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">1250 DH</span>
                <button className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
