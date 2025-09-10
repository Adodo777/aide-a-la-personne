import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Home, 
  Users, 
  Shield, 
  Clock,
  Utensils,
  ShoppingCart,
  Car,
  FileText
} from 'lucide-react';
import { Helmet } from "react-helmet";

const Prestations = () => {
  const services = [
    {
      icon: Heart,
      title: 'Aide à la personne',
      description: 'Accompagnement personnalisé pour les gestes du quotidien',
      items: [
        'Aide à la toilette et à l\'habillage',
        'Aide au lever et au coucher',
        'Aide à la prise des repas',
        'Accompagnement aux déplacements',
        'Stimulation cognitive et maintien de l\'autonomie'
      ]
    },
    {
      icon: Home,
      title: 'Entretien du cadre de vie',
      description: 'Maintien d\'un environnement propre et confortable',
      items: [
        'Ménage courant et entretien du logement',
        'Lessive et repassage',
        'Préparation des repas et aide aux courses'
      ]
    },
    {
      icon: Users,
      title: 'Accompagnement et vie sociale',
      description: 'Maintien du lien social et accompagnement extérieur',
      items: [
        'Accompagnement aux rendez-vous médicaux',
        'Promenades et activités de loisirs',
        'Soutien moral et écoute active',
        'Aide aux démarches administratives'
      ]
    },
    {
      icon: Shield,
      title: 'Soins d\'hygiène et de confort',
      description: 'Surveillance et prévention pour votre bien-être',
      items: [
        'Surveillance de l\'état général',
        'Aide à la prise de médicaments',
        'Prévention des risques (chutes, dénutrition, etc.)'
      ]
    }
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Flexibilité horaire',
      description: 'Adaptation à vos besoins et à votre rythme de vie'
    },
    {
      icon: Heart,
      title: 'Approche personnalisée',
      description: 'Toutes mes interventions sont adaptées à votre situation à l\'instant T'
    },
    {
      icon: Users,
      title: 'Continuité de service',
      description: 'Toujours la même intervenante pour créer un lien de confiance'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      <Helmet>
        <title>Prestations - Aide à domicile Nathalie Kucor</title>
        <meta name="description" content="Découvrez les prestations complètes d'aide à la personne et d'aide soignante proposées par Nathalie Kucor à Saint-Outrille. Accompagnement personnalisé, entretien du cadre de vie, soins d'hygiène et bien plus encore." />
        <meta name="keywords" content="prestations, aide à la personne, aide soignante, Saint-Outrille, accompagnement, entretien du cadre de vie, soins d'hygiène, services à la personne" />
        <meta property="og:title" content="Prestations - Aide à domicile Nathalie Kucor" />
        <meta property="og:description" content="Découvrez les prestations complètes d'aide à la personne et d'aide soignante proposées par Nathalie Kucor à Saint-Outrille. Accompagnement personnalisé, entretien du cadre de vie, soins d'hygiène et bien plus encore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aide-a-la-personne.vercel.app/prestations" />
        <meta property="og:image" content="https://aide-a-la-personne.vercel.app/assets/image_bienveillance_ecoute_2.png" />
        <meta name="robots" content="index, follow" />
        <html lang="fr" />
      </Helmet>
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Mes Prestations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Je vous propose une gamme complète d'aide à la personne et d'aide soignante confirmée, adaptée à vos besoins spécifiques.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-shadow border-b-5 border-primary animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <service.icon
                      className="h-6 w-6 text-primary"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* Advantages Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl font-bold text-primary">Mes Avantages</h2>
            <p className="text-xl text-gray-600">
              Ce qui me différencie dans l'accompagnement à domicile
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.2 + 0.3}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Services personnalisables et évolutifs
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Mes services sont personnalisables et évolutifs en fonction de vos besoins. 
            Chaque situation est unique, c'est pourquoi j'adapte notre accompagnement 
            à votre rythme de vie et à vos préférences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link to="/contact">Demander une évaluation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link to="/tarifs">Voir les tarifs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prestations;

