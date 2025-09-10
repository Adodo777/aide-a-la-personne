import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  CreditCard, 
  FileText, 
  Info,
  CheckCircle,
  Clock,
  Calendar,
  DollarSign
} from 'lucide-react';
import { Helmet } from "react-helmet";

const Tarifs = () => {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Virement bancaire',
      description: 'Paiement sécurisé par virement'
    },
    {
      icon: FileText,
      title: 'CESU préfinancé',
      description: 'Chèque emploi service universel'
    },
    {
      icon: Calculator,
      title: 'CESU déclaratif',
      description: 'Déclaration simplifiée'
    }
  ];

  const factors = [
    {
      icon: Clock,
      title: 'Horaires',
      description: 'Jour/nuit, semaine/week-end, jours fériés'
    },
    {
      icon: FileText,
      title: 'Complexité des tâches',
      description: 'Nature et difficulté des prestations'
    },
    {
      icon: DollarSign,
      title: 'Aides financières',
      description: 'APA, PCH et autres dispositifs'
    }
  ];

  return (
    <div className="space-y-16 py-8">
      <Helmet>
        <title>Tarifs - Aide à domicile Nathalie Kucor</title>
        <meta name="description" content="Découvrez la grille tarifaire transparente et adaptée aux prestations d'aide à domicile proposées par Nathalie Kucor à Saint-Outrille. Devis personnalisé sur demande." />
        <meta name="keywords" content="tarifs, grille tarifaire, aide à domicile, Saint-Outrille, prestations, devis, services à la personne" />
        <meta property="og:title" content="Tarifs - Aide à domicile Nathalie Kucor" />
        <meta property="og:description" content="Découvrez la grille tarifaire transparente et adaptée aux prestations d'aide à domicile proposées par Nathalie Kucor à Saint-Outrille. Devis personnalisé sur demande." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aide-a-la-personne.vercel.app/tarifs" />
        <meta property="og:image" content="https://aide-a-la-personne.vercel.app/assets/image_bienveillance_ecoute_2.png" />
        <meta name="robots" content="index, follow" />
        <html lang="fr" />
      </Helmet>
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Grille Tarifaire</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mes tarifs sont transparents et adaptés à la nature des prestations. 
            Je m'engage à vous offrir un service de qualité à un prix juste.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/5">
            <CardTitle className="text-2xl text-center">Tarifs Horaires</CardTitle>
            <p className="text-center text-gray-600">Tarifs indicatifs - Devis personnalisé sur demande</p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Prestation</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Tarif Horaire</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors duration-300">
                    <td className="px-6 py-4 text-sm text-gray-900">Aide à la personne</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">Sur devis</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-300">
                    <td className="px-6 py-4 text-sm text-gray-900">Entretien du cadre de vie</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">Sur devis</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-300">
                    <td className="px-6 py-4 text-sm text-gray-900">Accompagnement</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">Sur devis</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-300">
                    <td className="px-6 py-4 text-sm text-gray-900">Soins d'hygiène et confort</td>
                    <td className="px-6 py-4 text-sm text-center text-gray-600">Sur devis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          <div className="px-6 py-4 bg-primary/5 text-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link to="/contact">Demander un devis</Link>
            </Button>
          </div>
        </Card>
      </section>
      {/* Factors Influencing Pricing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-primary">Facteurs influençant les tarifs</h2>
          <p className="text-xl text-gray-600">
            Plusieurs éléments sont pris en compte pour établir un devis personnalisé
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {factors.map((factor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <CardContent className="p-6 space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
                  <factor.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <Card className="border-secondary bg-secondary/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Information importante</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Les tarifs peuvent varier en fonction de la complexité des tâches, des horaires 
                  (jour/nuit, semaine/week-end, jours fériés) et des aides financières auxquelles 
                  vous pouvez prétendre (APA, PCH, etc.). Un devis détaillé sera établi après une 
                  évaluation de vos besoins.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Payment Methods */}
      <section className="bg-gray-50 py-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-primary">Modes de Paiement</h2>
            <p className="text-xl text-gray-600">
              J'accepte plusieurs modes de paiement pour votre convenance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-6">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-gray-600">
              Je peux vous accompagner dans les démarches pour bénéficier des aides financières disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Besoin d'un devis personnalisé ?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contactez-nous pour une évaluation gratuite de vos besoins et un devis détaillé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link to="/contact">Demander un devis</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link to="/prestations">Voir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tarifs;

