import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function EnhancedHeroSection() {

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg"
          alt="Luxury cosmetics background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="relative">
          {/* Main Heading with Better Visibility */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in hero-text-shadow">
            <span className="inline-block transform hover:scale-105 transition-transform duration-500">
              Révélez votre
            </span>
            <span className="block bg-gradient-to-r from-rose-200 via-pink-200 to-rose-100 bg-clip-text text-transparent">
              Beauté Naturelle
            </span>
          </h1>

          {/* Enhanced Description with Better Background */}
          <div className="relative">
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-2xl hero-text-shadow">
              Découvrez notre collection exclusive de cosmétiques haut de gamme, formulés avec des ingrédients d'exception.
              Chaque produit est conçu pour sublimer votre beauté naturelle avec élégance, efficacité et respect de votre peau.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-rose-500 text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Découvrir la Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <Link
              to="/new-arrivals"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white/25 backdrop-blur-md text-white rounded-lg border border-white/40 hover:bg-white/35 transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Voir les Nouveautés
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden lg:block backdrop-blur-sm"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-white/10 rounded-full animate-float hidden lg:block backdrop-blur-sm"></div>
      <div className="absolute top-1/3 right-8 w-8 h-8 bg-white/10 rounded-full animate-pulse hidden lg:block backdrop-blur-sm"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
