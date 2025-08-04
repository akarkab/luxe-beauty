import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Shield, Check, User, MapPin, CreditCard, Package, Clock, Star, Lock } from 'lucide-react';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  sameAsBilling: boolean;
  billingAddress: string;
  billingCity: string;
  billingPostalCode: string;
  billingCountry: string;
  deliveryOption: string;
}

export default function Checkout() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Maroc',
    sameAsBilling: true,
    billingAddress: '',
    billingCity: '',
    billingPostalCode: '',
    billingCountry: 'Maroc',
    deliveryOption: 'standard'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Livraison Standard',
      description: '3-5 jours ouvrables',
      price: 59,
      icon: <Truck className="w-5 h-5" />
    },
    {
      id: 'express',
      name: 'Livraison Express',
      description: '1-2 jours ouvrables',
      price: 89,
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 'free',
      name: 'Livraison Gratuite',
      description: '5-7 jours ouvrables (commandes > 750 DH)',
      price: 0,
      icon: <Package className="w-5 h-5" />
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = 'Email requis';
      if (!formData.firstName) newErrors.firstName = 'Prénom requis';
      if (!formData.lastName) newErrors.lastName = 'Nom requis';
      if (!formData.phone) newErrors.phone = 'Téléphone requis';
    }

    if (step === 2) {
      if (!formData.address) newErrors.address = 'Adresse requise';
      if (!formData.city) newErrors.city = 'Ville requise';
      if (!formData.postalCode) newErrors.postalCode = 'Code postal requis';
      
      if (!formData.sameAsBilling) {
        if (!formData.billingAddress) newErrors.billingAddress = 'Adresse de facturation requise';
        if (!formData.billingCity) newErrors.billingCity = 'Ville de facturation requise';
        if (!formData.billingPostalCode) newErrors.billingPostalCode = 'Code postal de facturation requis';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      alert('Commande confirmée ! Vous recevrez un email de confirmation.');
    }
  };

  const selectedDelivery = deliveryOptions.find(option => option.id === formData.deliveryOption);
  const subtotal = 1790;
  const deliveryPrice = selectedDelivery?.price || 59;
  const tva = Math.round((subtotal + deliveryPrice) * 0.2);
  const total = subtotal + deliveryPrice + tva;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-beige-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Finaliser ma commande</h1>
              <p className="text-muted-foreground">
                Étape {currentStep} sur 4
              </p>
            </div>
            <Link
              to="/cart"
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au panier
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {[
              { step: 1, icon: User, label: 'Informations' },
              { step: 2, icon: MapPin, label: 'Livraison' },
              { step: 3, icon: CreditCard, label: 'Paiement' },
              { step: 4, icon: Check, label: 'Confirmation' }
            ].map(({ step, icon: Icon, label }) => (
              <div key={step} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {label}
                </span>
                {step < 4 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step ? 'bg-primary' : 'bg-muted'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg border border-border">
              
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6">Informations personnelles</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.firstName ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="Votre prénom"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.lastName ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="Votre nom"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.phone ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="+212 6 12 34 56 78"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={nextStep}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Address */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6">Adresse de livraison</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Adresse complète *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                          errors.address ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="123 Rue Mohammed V, Appartement 4"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ville *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.city ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="Casablanca"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Code postal *
                        </label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                            errors.postalCode ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="20000"
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Pays *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="Maroc">Maroc</option>
                        <option value="Algérie">Algérie</option>
                        <option value="Tunisie">Tunisie</option>
                      </select>
                    </div>

                    {/* Billing Address */}
                    <div className="border-t border-border pt-4 mt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <input
                          type="checkbox"
                          id="sameAsBilling"
                          checked={formData.sameAsBilling}
                          onChange={(e) => handleInputChange('sameAsBilling', e.target.checked)}
                          className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                        />
                        <label htmlFor="sameAsBilling" className="text-sm font-medium text-foreground">
                          Utiliser la même adresse pour la facturation
                        </label>
                      </div>

                      {!formData.sameAsBilling && (
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium text-foreground">Adresse de facturation</h3>
                          
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Adresse de facturation *
                            </label>
                            <input
                              type="text"
                              value={formData.billingAddress}
                              onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                errors.billingAddress ? 'border-red-500' : 'border-border'
                              }`}
                              placeholder="Adresse de facturation"
                            />
                            {errors.billingAddress && <p className="text-red-500 text-sm mt-1">{errors.billingAddress}</p>}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Ville de facturation *
                              </label>
                              <input
                                type="text"
                                value={formData.billingCity}
                                onChange={(e) => handleInputChange('billingCity', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                  errors.billingCity ? 'border-red-500' : 'border-border'
                                }`}
                                placeholder="Ville"
                              />
                              {errors.billingCity && <p className="text-red-500 text-sm mt-1">{errors.billingCity}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Code postal *
                              </label>
                              <input
                                type="text"
                                value={formData.billingPostalCode}
                                onChange={(e) => handleInputChange('billingPostalCode', e.target.value)}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                                  errors.billingPostalCode ? 'border-red-500' : 'border-border'
                                }`}
                                placeholder="Code postal"
                              />
                              {errors.billingPostalCode && <p className="text-red-500 text-sm mt-1">{errors.billingPostalCode}</p>}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Delivery Options */}
                    <div className="border-t border-border pt-4 mt-6">
                      <h3 className="text-lg font-medium text-foreground mb-4">Options de livraison</h3>
                      
                      <div className="space-y-3">
                        {deliveryOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`p-4 border rounded-lg cursor-pointer transition-colors duration-200 ${
                              formData.deliveryOption === option.id
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                            onClick={() => handleInputChange('deliveryOption', option.id)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <input
                                  type="radio"
                                  name="delivery"
                                  value={option.id}
                                  checked={formData.deliveryOption === option.id}
                                  onChange={() => handleInputChange('deliveryOption', option.id)}
                                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                {option.icon}
                                <div>
                                  <h4 className="font-medium text-foreground">{option.name}</h4>
                                  <p className="text-sm text-muted-foreground">{option.description}</p>
                                </div>
                              </div>
                              <span className="font-bold text-primary">
                                {option.price === 0 ? 'Gratuit' : `${option.price} DH`}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors duration-200 font-medium"
                    >
                      Retour
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6">Méthode de paiement</h2>
                  
                  <div className="space-y-4">
                    <div className="p-6 border-2 border-primary bg-primary/5 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Paiement à la livraison (Cash On Delivery)
                        </h3>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-muted-foreground">
                          Payez en espèces directement au livreur lors de la réception de votre colis.
                        </p>
                        
                        <div className="bg-white p-4 rounded-lg border border-border">
                          <h4 className="font-medium text-foreground mb-2">Pourquoi choisir ce mode de paiement ?</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Aucun paiement en ligne requis</li>
                            <li>• Vérifiez votre commande avant de payer</li>
                            <li>• Paiement sécurisé à la réception</li>
                            <li>• Retour facile si le produit ne convient pas</li>
                          </ul>
                        </div>

                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                          <Shield className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-green-800 font-medium">
                            Service 100% sécurisé et garantie satisfait ou remboursé
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Security badges */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                      <div className="flex flex-col items-center text-center p-3 bg-muted/30 rounded-lg">
                        <Lock className="w-6 h-6 text-primary mb-2" />
                        <span className="text-xs font-medium text-foreground">Sécurisé</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-3 bg-muted/30 rounded-lg">
                        <Shield className="w-6 h-6 text-primary mb-2" />
                        <span className="text-xs font-medium text-foreground">Protégé</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-3 bg-muted/30 rounded-lg">
                        <Star className="w-6 h-6 text-primary mb-2" />
                        <span className="text-xs font-medium text-foreground">Qualité</span>
                      </div>
                      <div className="flex flex-col items-center text-center p-3 bg-muted/30 rounded-lg">
                        <Truck className="w-6 h-6 text-primary mb-2" />
                        <span className="text-xs font-medium text-foreground">Livraison</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors duration-200 font-medium"
                    >
                      Retour
                    </button>
                    <button
                      onClick={nextStep}
                      className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-6">Confirmation de commande</h2>
                  
                  <div className="space-y-6">
                    {/* Order Summary */}
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Récapitulatif de votre commande</h3>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nom complet:</span>
                          <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="font-medium">{formData.email}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Téléphone:</span>
                          <span className="font-medium">{formData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Adresse de livraison:</span>
                          <span className="font-medium text-right">
                            {formData.address}, {formData.city} {formData.postalCode}, {formData.country}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Mode de livraison:</span>
                          <span className="font-medium">{selectedDelivery?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Méthode de paiement:</span>
                          <span className="font-medium">Paiement à la livraison</span>
                        </div>
                      </div>
                    </div>

                    {/* Final confirmation message */}
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">Prêt à confirmer</h4>
                      </div>
                      <p className="text-green-700 text-sm">
                        En confirmant cette commande, vous acceptez nos conditions de vente et notre politique de retour.
                        Vous recevrez un email de confirmation avec les détails de votre commande.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <button
                      onClick={prevStep}
                      className="px-6 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors duration-200 font-medium"
                    >
                      Retour
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-bold text-lg"
                    >
                      Confirmer la commande
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-border sticky top-4">
              <h3 className="font-semibold text-foreground mb-4">Récapitulatif</h3>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg"
                    alt="Sérum Éclat Divin"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Sérum Éclat Divin</h4>
                    <p className="text-sm text-muted-foreground">Quantité: 1</p>
                    <p className="font-bold text-primary text-sm">890 DH</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/14444882/pexels-photo-14444882.jpeg"
                    alt="Rouge à Lèvres Velours"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">Rouge à Lèvres Velours</h4>
                    <p className="text-sm text-muted-foreground">Quantité: 2</p>
                    <p className="font-bold text-primary text-sm">900 DH</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Sous-total</span>
                  <span className="font-medium">{subtotal} DH</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Livraison</span>
                  <span className="font-medium">{deliveryPrice === 0 ? 'Gratuit' : `${deliveryPrice} DH`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">TVA (20%)</span>
                  <span className="font-medium">{tva} DH</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                  <span>Total</span>
                  <span className="text-primary">{total} DH</span>
                </div>
              </div>

              {/* Security badges */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Paiement 100% sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
