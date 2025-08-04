import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-beige-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full luxury-gradient"></div>
              <span className="text-xl font-bold luxury-text-gradient">
                Luxe Beauty
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Découvrez notre collection exclusive de cosmétiques haut de gamme 
              pour révéler votre beauté naturelle.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-muted-foreground hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-muted-foreground hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-muted-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Tous les Produits
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Nouveautés
                </Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Meilleures Ventes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Service Client</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/account" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Mon Compte
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Retours
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Recevez nos dernières nouveautés et offres exclusives.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-white border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-r-lg hover:bg-primary/90 transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@luxebeauty.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 Luxe Beauty. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-primary transition-colors duration-200">
              Conditions d'utilisation
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors duration-200">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
