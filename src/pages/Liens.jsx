import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  DollarSign, 
  Heart, 
  FileText, 
  Info,
  Phone,
  Globe,
  Users
} from 'lucide-react';

const Liens = () => {
  const financialAids = [
    {
      icon: DollarSign,
      title: 'Allocation Personnalisée d\'Autonomie (APA)',
      description: 'L\'APA est une aide financière destinée aux personnes âgées de 60 ans et plus en perte d\'autonomie. Elle permet de financer les dépenses nécessaires pour vous aider à accomplir les actes essentiels de la vie ou pour maintenir un lien social.',
      contact: 'Contactez votre Conseil Départemental',
      category: 'Aide financière'
    },
    {
      icon: Heart,
      title: 'Caisse Primaire d\'Assurance Maladie (CPAM)',
      description: 'La CPAM est l\'organisme qui gère l\'Assurance Maladie en France. Elle peut vous informer sur les remboursements de soins, les arrêts de travail, et certaines aides spécifiques liées à la santé.',
      link: 'https://www.ameli.fr/',
      category: 'Santé'
    },
    {
      icon: Users,
      title: 'Caisses de retraite',
      description: 'Votre caisse de retraite (CNAV, Agirc-Arrco, etc.) peut proposer des aides et des services pour les retraités, notamment des aides à domicile, des actions de prévention ou des conseils.',
      contact: 'Contactez votre caisse de retraite',
      category: 'Retraite'
    }
  ];

  const informationResources = [
    {
      icon: Globe,
      title: 'Service Public',
      description: 'Le site officiel de l\'administration française vous informe sur vos droits et démarches. Vous y trouverez des informations sur l\'aide à domicile, les aides sociales, la santé, etc.',
      link: 'https://www.service-public.fr/',
      category: 'Information officielle'
    },
    {
      icon: Info,
      title: 'Portail National d\'Information pour l\'autonomie des personnes âgées',
      description: 'Ce portail offre des informations complètes et fiables sur l\'autonomie, les aides, les établissements et les services pour les personnes âgées et leurs proches.',
      link: 'https://www.pour-les-personnes-agees.gouv.fr/',
      category: 'Autonomie'
    }
  ];

  const allResources = [...financialAids, ...informationResources];

  const categories = [
    { name: 'Aide financière', icon: DollarSign, color: 'bg-green-100 text-green-800' },
    { name: 'Santé', icon: Heart, color: 'bg-red-100 text-red-800' },
    { name: 'Retraite', icon: Users, color: 'bg-blue-100 text-blue-800' },
    { name: 'Information officielle', icon: Globe, color: 'bg-purple-100 text-purple-800' },
    { name: 'Autonomie', icon: Info, color: 'bg-orange-100 text-orange-800' }
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Liens Utiles</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pour vous accompagner dans vos démarches et vous informer sur les aides disponibles, 
            voici une liste de liens utiles vers des organismes et institutions clés.
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Catégories d'aide</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full ${category.color}`}
            >
              <category.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Financial Aids Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Aides et Financements</h2>
          <p className="text-xl text-gray-600">
            Les principales aides financières pour l'accompagnement à domicile
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {financialAids.map((aid, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <aid.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{aid.title}</CardTitle>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                      aid.category === 'Aide financière' ? 'bg-green-100 text-green-800' :
                      aid.category === 'Santé' ? 'bg-red-100 text-red-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {aid.category}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{aid.description}</p>
                <div className="pt-2 border-t">
                  {aid.link ? (
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={aid.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                        <span>Visiter le site</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{aid.contact}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Information Resources Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Informations et Conseils</h2>
            <p className="text-xl text-gray-600">
              Ressources officielles pour vous guider dans vos démarches
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {informationResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        resource.category === 'Information officielle' ? 'bg-purple-100 text-purple-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {resource.category}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>
                  <div className="pt-2 border-t">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href={resource.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                        <span>Visiter le site officiel</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-8 text-center space-y-4">
            <FileText className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">Besoin d'aide pour vos démarches ?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous pouvons vous accompagner dans vos démarches administratives et vous aider 
              à identifier les aides auxquelles vous avez droit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/prestations">Nos services d'accompagnement</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Additional Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600">
            N'hésitez pas à consulter ces ressources pour obtenir des informations complémentaires 
            et vous accompagner dans vos démarches. Ces liens sont régulièrement mis à jour 
            pour vous offrir les informations les plus récentes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Liens;

