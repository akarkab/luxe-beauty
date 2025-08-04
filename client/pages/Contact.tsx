import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Heart, Star } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-4">Message envoyé !</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, 
            généralement sous 24h.
          </p>
          
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
          >
            Envoyer un autre message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-beige-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre équipe d'experts beauté est à votre disposition pour répondre à toutes vos questions 
              et vous accompagner dans votre routine beauté.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg border border-border">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Envoyez-nous un message</h2>
              <p className="text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Sujet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                >
                  <option value="general">Question générale</option>
                  <option value="order">Commande et livraison</option>
                  <option value="product">Conseil produit</option>
                  <option value="return">Retour et échange</option>
                  <option value="partnership">Partenariat</option>
                  <option value="complaint">Réclamation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="accent-primary"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Je souhaite recevoir la newsletter et les offres exclusives
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:bg-primary/50 transition-colors duration-200 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nos coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">
                      +33 1 23 45 67 89<br />
                      Lun-Ven: 9h-18h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      contact@luxebeauty.fr<br />
                      Réponse sous 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horaires</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 18h00</p>
                      <p>Samedi: 10h00 - 17h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Questions fréquentes</h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-beige-50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Livraison et retours</h3>
                  <p className="text-sm text-muted-foreground">
                    Livraison gratuite dès 750 DH. Retours gratuits sous 30 jours.
                  </p>
                </div>
                
                <div className="p-4 bg-beige-50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Conseils beauté</h3>
                  <p className="text-sm text-muted-foreground">
                    Nos experts vous accompagnent pour choisir les produits adaptés à votre peau.
                  </p>
                </div>
                
                <div className="p-4 bg-beige-50 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">Programme fidélité</h3>
                  <p className="text-sm text-muted-foreground">
                    Cumulez des points à chaque achat et bénéficiez d'avantages exclusifs.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Nous trouver</h2>
              
              <div className="aspect-video bg-beige-50 rounded-lg flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-rose-600" />
                  <p className="font-medium">Carte interactive</p>
                  <p className="text-sm">123 Avenue des Champs-Élysées, Paris</p>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=123+Avenue+des+Champs-Élysées,+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  Ouvrir dans Google Maps
                </a>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-white border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-200 font-medium text-sm">
                  <Phone className="w-4 h-4" />
                  Appeler maintenant
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ce que disent nos clientes</h2>
            <p className="text-muted-foreground">
              Découvrez les avis de nos clientes satisfaites de notre service client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Service client exceptionnel ! Réponse rapide et conseils personnalisés. 
                Je recommande vivement cette marque."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/33202485/pexels-photo-33202485.jpeg"
                  alt="Marie L."
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-foreground">Marie L.</p>
                  <p className="text-sm text-muted-foreground">Cliente vérifiée</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Équipe très professionnelle et à l'écoute. Problème résolu rapidement 
                avec un geste commercial appréciable."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/6575023/pexels-photo-6575023.jpeg"
                  alt="Sophie M."
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-foreground">Sophie M.</p>
                  <p className="text-sm text-muted-foreground">Cliente fidèle</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Chat en ligne très pratique et conseillères compétentes. 
                J'ai trouvé exactement ce que je cherchais grâce à leurs conseils."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/11118765/pexels-photo-11118765.jpeg"
                  alt="Emma D."
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-foreground">Emma D.</p>
                  <p className="text-sm text-muted-foreground">Nouvelle cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
