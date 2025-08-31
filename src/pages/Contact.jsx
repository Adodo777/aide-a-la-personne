import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  User,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    adresse: '',
    typeService: '',
    urgence: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pourriez ajouter la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '[Numéro de téléphone]',
      description: 'Disponible 7j/7 pour les urgences'
    },
    {
      icon: Mail,
      title: 'Email',
      value: '[Adresse email]',
      description: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '[Adresse postale]',
      description: 'Zone d\'intervention'
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Flexible selon vos besoins',
      description: 'Intervention jour et nuit'
    }
  ];

  const serviceTypes = [
    'Aide à la personne',
    'Entretien du cadre de vie',
    'Accompagnement',
    'Soins d\'hygiène et confort',
    'Évaluation des besoins',
    'Autre (préciser dans le message)'
  ];

  const urgencyLevels = [
    'Non urgent - Dans la semaine',
    'Modéré - Dans les 2-3 jours',
    'Urgent - Dans les 24h',
    'Très urgent - Immédiatement'
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pour toute question, demande d'information ou pour solliciter une intervention, 
            n'hésitez pas à nous contacter. Nous sommes à votre écoute pour vous accompagner au mieux.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <info.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                  <p className="text-primary font-medium">{info.value}</p>
                  <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Formulaire de demande d'intervention</span>
                </CardTitle>
                <p className="text-gray-600">
                  Merci de remplir le formulaire ci-dessous. Nous vous recontacterons dans les plus brefs délais.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                    <h3 className="text-xl font-semibold text-gray-900">Message envoyé !</h3>
                    <p className="text-gray-600">
                      Nous avons bien reçu votre demande et vous recontacterons très prochainement.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input
                          id="prenom"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre prénom"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre numéro de téléphone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Votre adresse email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="adresse">Adresse *</Label>
                      <Input
                        id="adresse"
                        name="adresse"
                        value={formData.adresse}
                        onChange={handleInputChange}
                        required
                        placeholder="Adresse où l'intervention aura lieu"
                      />
                    </div>

                    {/* Type de service */}
                    <div className="space-y-2">
                      <Label htmlFor="typeService">Type de service souhaité *</Label>
                      <select
                        id="typeService"
                        name="typeService"
                        value={formData.typeService}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez un service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Urgence */}
                    <div className="space-y-2">
                      <Label htmlFor="urgence">Niveau d'urgence *</Label>
                      <select
                        id="urgence"
                        name="urgence"
                        value={formData.urgence}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">Sélectionnez le niveau d'urgence</option>
                        {urgencyLevels.map((level, index) => (
                          <option key={index} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Message complémentaire</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Décrivez vos besoins spécifiques, vos attentes, ou toute information utile..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Envoyer la demande
                    </Button>

                    <p className="text-sm text-gray-600">
                      * Champs obligatoires. Vos données personnelles sont traitées de manière confidentielle.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Disponibilité</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Interventions régulières</span>
                    <span className="text-gray-600">7j/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Urgences</span>
                    <span className="text-gray-600">24h/24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Première évaluation</span>
                    <span className="text-gray-600">Gratuite</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    Nous nous adaptons à vos horaires et contraintes pour vous offrir 
                    le meilleur service possible.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What to expect */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-6 w-6 text-primary" />
                  <span>Après votre demande</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Contact rapide</h4>
                      <p className="text-sm text-gray-600">Nous vous recontactons sous 24h pour échanger sur vos besoins.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Évaluation gratuite</h4>
                      <p className="text-sm text-gray-600">Visite à domicile pour évaluer vos besoins et établir un devis.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Début de l'accompagnement</h4>
                      <p className="text-sm text-gray-600">Mise en place du service selon vos besoins et disponibilités.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

