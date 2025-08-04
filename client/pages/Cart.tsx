import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, Heart, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sérum Éclat Divin",
      description: "Sérum concentré aux peptides et à la vitamine C",
      price: 89,
      quantity: 1,
      image: "https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg",
      category: "Soins",
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 2,
      name: "Rouge à Lèvres Velours",
      description: "Texture veloutée longue tenue",
      price: 45,
      originalPrice: 52,
      quantity: 2,
      image: "https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg",
      category: "Maquillage",
      inStock: true,
      maxQuantity: 3
    },
    {
      id: 3,
      name: "Crème Hydratante Luxe",
      description: "Crème riche aux actifs précieux",
      price: 125,
      quantity: 1,
      image: "https://images.pexels.com/photos/4841234/pexels-photo-4841234.jpeg",
      category: "Soins",
      inStock: true,
      maxQuantity: 2
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.min(newQuantity, item.maxQuantity) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const moveToWishlist = (id: number) => {
    // Simulate moving to wishlist
    removeItem(id);
    // Show toast notification in real app
  };

  const applyPromoCode = () => {
    // Simulate promo code validation
    const validCodes = {
      'WELCOME10': { discount: 10, type: 'percentage' },
      'LUXE20': { discount: 20, type: 'fixed' },
      'FIRST15': { discount: 15, type: 'percentage' }
    };

    if (validCodes[promoCode as keyof typeof validCodes]) {
      setAppliedPromo({ code: promoCode, ...validCodes[promoCode as keyof typeof validCodes] });
    }
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    setPromoCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);

  const promoDiscount = appliedPromo 
    ? appliedPromo.type === 'percentage' 
      ? (subtotal * appliedPromo.discount) / 100
      : appliedPromo.discount
    : 0;

  const shipping = subtotal >= 75 ? 0 : 9.90;
  const total = subtotal - promoDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-rose-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-4">Votre panier est vide</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Découvrez notre collection de cosmétiques de luxe et ajoutez vos produits favoris à votre panier.
          </p>
          
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
          >
            Continuer vos achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-beige-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Mon Panier</h1>
              <p className="text-muted-foreground">
                {cartItems.length} article{cartItems.length > 1 ? 's' : ''} dans votre panier
              </p>
            </div>
            <Link
              to="/products"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Continuer vos achats
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg border border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-24 h-32 sm:h-24 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div className="flex-1">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="font-semibold text-foreground mb-1 hover:text-primary transition-colors cursor-pointer">{item.name}</h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <span className="text-xs bg-rose-50 text-rose-700 px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>

                      <div className="flex flex-col sm:items-end gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-primary">{item.price} DH</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {item.originalPrice} DH
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-border rounded-lg overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-muted transition-colors duration-200"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 py-2 font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-muted transition-colors duration-200"
                              disabled={item.quantity >= item.maxQuantity}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex gap-1">
                            <button
                              onClick={() => moveToWishlist(item.id)}
                              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                              title="Ajouter à la wishlist"
                            >
                              <Heart className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-muted-foreground hover:text-red-500 transition-colors duration-200"
                              title="Supprimer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {item.quantity >= item.maxQuantity && (
                          <p className="text-xs text-amber-600">Quantité maximum atteinte</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code */}
            <div className="bg-white p-6 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Code Promo</h3>
              
              {appliedPromo ? (
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Code "{appliedPromo.code}" appliqué</p>
                      <p className="text-sm text-green-600">
                        Économie de {appliedPromo.type === 'percentage' ? `${appliedPromo.discount}%` : `${appliedPromo.discount} DH`}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={removePromoCode}
                    className="text-green-600 hover:text-green-800 transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Entrez votre code promo"
                    className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <button
                    onClick={applyPromoCode}
                    disabled={!promoCode}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:bg-gray-200 disabled:text-gray-500 transition-colors duration-200 font-medium"
                  >
                    Appliquer
                  </button>
                </div>
              )}

              <div className="mt-4 text-sm text-muted-foreground">
                <p className="mb-2">Codes disponibles :</p>
                <ul className="space-y-1 text-xs">
                  <li>• WELCOME10 - 10% de réduction</li>
                  <li>• LUXE20 - 200 DH de réduction</li>
                  <li>• FIRST15 - 15% de réduction</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-border sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Récapitulatif</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sous-total ({cartItems.length} articles)</span>
                  <span className="font-medium">{subtotal.toFixed(2)} DH</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Économies</span>
                    <span>-{savings.toFixed(2)} DH</span>
                  </div>
                )}

                {appliedPromo && (
                  <div className="flex justify-between text-green-600">
                    <span>Code promo ({appliedPromo.code})</span>
                    <span>-{promoDiscount.toFixed(2)} DH</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuite' : `${shipping.toFixed(2)} DH`}
                  </span>
                </div>

                {shipping > 0 && (
                  <div className="text-sm text-muted-foreground p-3 bg-blue-50 rounded-lg">
                    Livraison gratuite dès 750 DH d'achat
                  </div>
                )}

                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">{total.toFixed(2)} DH</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold mb-4"
              >
                <ShoppingBag className="w-5 h-5" />
                Passer la commande
              </Link>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-green-600" />
                  <span>Livraison rapide 24-48h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4 text-purple-600" />
                  <span>Retours gratuits 30 jours</span>
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white p-6 rounded-lg border border-border mt-6">
              <h3 className="font-semibold text-foreground mb-4">Vous pourriez aimer</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg"
                    alt="Parfum Essence Florale"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm mb-1">Parfum Essence Florale</h4>
                    <p className="text-xs text-muted-foreground mb-2">Fragrance délicate aux notes florales</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary text-sm">890 DH</span>
                      <button className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Ajouter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
