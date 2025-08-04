import { Heart, Leaf, Shield, Users, Award, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-rose-600" />,
      title: "Passion & Excellence",
      description: "Nous mettons notre passion de la beauté au service de votre bien-être avec des produits d'exception."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Naturel & Éthique",
      description: "Nos formules privilégient les ingrédients naturels et respectent l'environnement et les animaux."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Qualité & Sécurité",
      description: "Chaque produit est testé et certifié pour garantir votre sécurité et votre satisfaction."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Expertise & Conseil",
      description: "Notre équipe d'experts beauté vous accompagne pour révéler votre beauté naturelle."
    }
  ];

  const team = [
    {
      name: "Sophie Moreau",
      role: "Fondatrice & Directrice Artistique",
      description: "20 ans d'expérience dans l'industrie cosmétique. Passionnée par l'innovation et la beauté naturelle.",
      image: "https://images.pexels.com/photos/33202485/pexels-photo-33202485.jpeg"
    },
    {
      name: "Dr. Marie Laurent",
      role: "Directrice R&D",
      description: "Docteur en cosmétologie, spécialisée dans le développement de formules innovantes et respectueuses.",
      image: "https://images.pexels.com/photos/6575023/pexels-photo-6575023.jpeg"
    },
    {
      name: "Emma Dubois",
      role: "Responsable Qualité",
      description: "Garante de nos standards de qualité exceptionnels et de la sécurité de nos produits.",
      image: "https://images.pexels.com/photos/11118765/pexels-photo-11118765.jpeg"
    }
  ];

  const achievements = [
    {
      number: "50K+",
      label: "Clientes satisfaites",
      description: "Nous avons la confiance de plus de 50 000 femmes à travers la France"
    },
    {
      number: "95%",
      label: "Ingrédients naturels",
      description: "Nos formules contiennent en moyenne 95% d'ingrédients d'origine naturelle"
    },
    {
      number: "15",
      label: "Prix & Distinctions",
      description: "Nos produits ont reçu de nombreuses récompenses dans la presse beauté"
    },
    {
      number: "100%",
      label: "Cruelty-free",
      description: "Tous nos produits sont développés sans tests sur les animaux"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 luxury-gradient overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Notre Histoire,
                <span className="block luxury-text-gradient">Votre Beauté</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Depuis 2018, Luxe Beauty révolutionne l'univers des cosmétiques avec 
                des produits d'exception qui subliment la beauté naturelle de chaque femme. 
                Notre mission : vous offrir le meilleur de la cosmétique française.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                >
                  Découvrir nos produits
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-foreground rounded-lg border border-border hover:bg-muted transition-colors duration-200 font-semibold"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/28195536/pexels-photo-28195536.jpeg"
                alt="Équipe Luxe Beauty"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-100 rounded-full opacity-60"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-beige-200 rounded-full opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8298495/pexels-photo-8298495.jpeg"
                alt="Laboratoire Luxe Beauty"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Une Vision, Une Passion
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  L'aventure Luxe Beauty a commencé dans un petit laboratoire parisien avec 
                  une vision simple mais ambitieuse : créer des cosmétiques qui révèlent 
                  la beauté naturelle de chaque femme, sans artifice ni compromis.
                </p>
                <p>
                  Notre fondatrice, Sophie Moreau, forte de son expérience de 20 ans dans 
                  l'industrie cosmétique, a réuni une équipe d'experts passionnés pour 
                  développer des formules innovantes alliant efficacité et respect de la peau.
                </p>
                <p>
                  Aujourd'hui, nos produits sont le fruit d'années de recherche et 
                  d'innovation, utilisant les meilleurs actifs naturels et les technologies 
                  les plus avancées pour vous offrir une expérience beauté incomparable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quatre piliers fondamentaux guident notre démarche et notre engagement 
              envers vous et l'environnement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border text-center hover-lift">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Réalisations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre engagement et de la confiance 
              que vous nous accordez.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold luxury-text-gradient mb-2">
                  {achievement.number}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{achievement.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les femmes passionnées qui donnent vie à la vision Luxe Beauty 
              et créent vos produits préférés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-border text-center hover-lift">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Qualité & Certifications
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Certifications Bio</h3>
                    <p className="text-muted-foreground">
                      Nos produits de soin sont certifiés par les organismes les plus exigeants 
                      pour garantir leur naturalité et leur respect de l'environnement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tests Dermatologiques</h3>
                    <p className="text-muted-foreground">
                      Chaque formule est testée sous contrôle dermatologique pour garantir 
                      sa tolérance, même sur les peaux les plus sensibles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cruelty-Free</h3>
                    <p className="text-muted-foreground">
                      Nous sommes fermement engagés contre les tests sur les animaux 
                      et utilisons des méthodes alternatives pour valider nos formules.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg"
                alt="Contrôle qualité"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 lg:py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Prix & Reconnaissances
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos produits ont été récompensés par les plus grands magazines beauté 
              et reconnus par les professionnels du secteur.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Prix Marie Claire</h3>
              <p className="text-sm text-muted-foreground">Meilleur Sérum 2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Elle Beauty Awards</h3>
              <p className="text-sm text-muted-foreground">Innovation 2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cosmopolitan</h3>
              <p className="text-sm text-muted-foreground">Coup de Cœur 2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Glamour Awards</h3>
              <p className="text-sm text-muted-foreground">Marque de l'année</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 luxury-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Rejoignez l'Aventure Luxe Beauty
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez pourquoi plus de 50 000 femmes nous font confiance pour 
            révéler leur beauté naturelle. Votre routine beauté parfaite vous attend.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
            >
              Découvrir nos produits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-foreground rounded-lg border border-border hover:bg-muted transition-colors duration-200 font-semibold"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
