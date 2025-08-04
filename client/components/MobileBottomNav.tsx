import { Home, Package, ShoppingBag, Heart, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
  const location = useLocation();

  const navItems = [
    {
      id: 'home',
      label: 'Accueil',
      icon: Home,
      path: '/',
      badge: null
    },
    {
      id: 'products',
      label: 'Produits',
      icon: Package,
      path: '/products',
      badge: null
    },
    {
      id: 'cart',
      label: 'Panier',
      icon: ShoppingBag,
      path: '/cart',
      badge: 3
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: Heart,
      path: '/wishlist',
      badge: 2
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: User,
      path: '/contact',
      badge: null
    }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border/50 shadow-lg md:hidden">
      <div className="flex items-center justify-around px-4 py-2 pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`mobile-nav-item relative flex flex-col items-center justify-center min-w-0 px-3 py-2 rounded-xl transition-all duration-300 transform active:scale-95 ${
                active
                  ? 'text-primary scale-105'
                  : 'text-muted-foreground hover:text-primary hover:scale-105'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 transition-all duration-300 ${
                  active ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                
                {item.badge && (
                  <span className="mobile-nav-badge absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold transform scale-90">
                    {item.badge}
                  </span>
                )}
                
                {/* Active indicator */}
                {active && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>

              <span className={`text-xs font-medium mt-1 transition-all duration-300 truncate max-w-full ${
                active ? 'text-primary font-semibold' : 'text-muted-foreground'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
