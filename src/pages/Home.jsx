import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Clock, Users, Home as HomeIcon } from 'lucide-react';
import imageConfiance from '../assets/image_confiance_bienveillance_1.png';
import imageBienveillance from '../assets/image_bienveillance_ecoute_2.png';
import imageAccompagnement from '../assets/image_accompagnement_domicile_3.png';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: 'Une présence stable',
      description: 'Toujours la même intervenante pour un lien de confiance et de continuité.',
    },
    {
      icon: Clock,
      title: 'Grande disponibilité',
      description: 'Une approche humaine et personnalisée, sans contrainte de temps.',
    },
    {
      icon: Users,
      title: 'Équipe de confiance',
      description: 'Une petite équipe de 3 personnes pour assurer la continuité du service.',
    },
    {
      icon: HomeIcon,
      title: 'Accompagnement à domicile',
      description: 'Rester dans votre cadre de vie habituel en toute sérénité.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0">
          <img
            src={imageBienveillance}
            alt="Fond accueil"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        {/* Contenu principal centré */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6 animate-fade-in">
          <h1 className="relative text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
  Bienvenue sur le site de{" "}
  <span className="relative inline-block text-primary">
    Nathalie Kucor
    {/* Effet pinceau en background */}
    <svg
      className="absolute inset-0 -z-10 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 100"
      preserveAspectRatio="none"
    >
      <path
        d="M10 50 Q 150 10, 300 50 T 490 40 
           L 490 100 L 10 100 Z"
        fill="white"
        opacity="0.9"
      />
    </svg>
  </span>
</h1>


          <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
            Aide-soignante diplômée d'État, dédiée à vous offrir un accompagnement
            à domicile de qualité, humain et personnalisé.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="text-lg px-8 hover:scale-110 transition-transform duration-300">
              <Link to="/contact">Demander une intervention</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 hover:bg-white/10 hover:scale-105 transition-transform duration-300 text-white border-white">
              <Link to="/prestations">Découvrir nos services</Link>
            </Button>
          </div>
        </div>

        {/* Décorations en arrière-plan */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </section>



      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={imageBienveillance}
                alt="Aide à domicile - Bienveillance et écoute"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Ma Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ma mission est de vous offrir un soutien adapté à vos besoins, sans que le temps
                ne soit "calculé à la minute". Je privilégie une approche humaine et personnalisée,
                où chaque intervention est pensée pour votre bien-être.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pour assurer une continuité de service optimale, même en cas d'absence, je travaille
                en étroite collaboration avec une petite équipe de deux autres professionnels qualifiés,
                partageant les mêmes valeurs d'engagement et de bienveillance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Pourquoi choisir nos services ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les avantages de faire appel à un intervenant qualifié et expérimenté.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Mon Expérience et Mes Valeurs</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Forte de plusieurs années d'expérience en tant qu'aide-soignante D.E., j'ai à cœur
                de créer un lien de confiance durable avec chaque bénéficiaire.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                La continuité de l'intervenante est un point essentiel pour moi : vous aurez toujours
                la même personne à vos côtés, garantissant une présence stable et rassurante. Mon approche
                est basée sur l'écoute, le respect et la dignité de chacun.
              </p>
              <Button asChild size="lg">
                <Link to="/avis">Lire les témoignages</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={imageAccompagnement}
                alt="Aide à domicile - Accompagnement personnalisé"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Prêt à bénéficier de nos services ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-nous dès aujourd'hui pour une évaluation personnalisée de vos besoins.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8">
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

