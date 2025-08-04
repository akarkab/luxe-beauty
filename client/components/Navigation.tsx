import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, User } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full luxury-gradient"></div>
            <span className="text-xl lg:text-2xl font-bold luxury-text-gradient">
              Luxe Beauty
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/products" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Produits
            </Link>
            <Link 
              to="/new-arrivals" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Nouveautés
            </Link>
            <Link 
              to="/bestsellers" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Meilleures Ventes
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              À Propos
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Recherche"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Account */}
            <Link
              to="/account"
              className="hidden sm:block p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Mon compte"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Ma wishlist"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Mon panier"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/products"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Produits
              </Link>
              <Link
                to="/new-arrivals"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nouveautés
              </Link>
              <Link
                to="/bestsellers"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Meilleures Ventes
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À Propos
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/account"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium sm:hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                Mon Compte
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-background border-b border-border p-4" onClick={e => e.stopPropagation()}>
            <div className="max-w-2xl mx-auto flex items-center space-x-4">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
                autoFocus
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
