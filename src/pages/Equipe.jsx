import { Helmet } from "react-helmet";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Heart, Phone } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import { teamMembers } from '@/data/teamMembers';

/**
 * Page de présentation de l'équipe
 * Structure cohérente avec les autres pages du site
 */
const Equipe = () => {
  return (
    <div className="space-y-16 py-8">
      <Helmet>
        <title>Notre équipe - Aide à domicile Nathalie Kucor</title>
        <meta
          name="description"
          content="Découvrez l'équipe dévouée de professionnels de l'aide à domicile à Saint-Outrille. Des intervenants qualifiés et bienveillants pour vous accompagner au quotidien."
        />
        <meta
          name="keywords"
          content="équipe, aide à domicile, Saint-Outrille, professionnels, intervenants, aide-soignante, auxiliaire de vie"
        />
        <meta property="og:title" content="Notre équipe - Aide à domicile Nathalie Kucor" />
        <meta
          property="og:description"
          content="Rencontrez notre équipe de professionnels qualifiés pour l'aide à domicile à Saint-Outrille."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aide-a-la-personne.vercel.app/equipe" />
        <meta name="robots" content="index, follow" />
        <html lang="fr" />
      </Helmet>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Notre Équipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe de professionnels qualifiés et bienveillants, dédiée à votre accompagnement quotidien
          </p>
        </div>
      </section>

      {/* Valeurs de l'équipe */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-card rounded-lg border border-border">
            <Heart className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-semibold text-foreground mb-2">Bienveillance</h3>
            <p className="text-gray-600 text-sm">Une approche humaine et respectueuse</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <Users className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-semibold text-foreground mb-2">Professionnalisme</h3>
            <p className="text-gray-600 text-sm">Des intervenants formés et expérimentés</p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden="true" />
            <h3 className="font-semibold text-foreground mb-2">Disponibilité</h3>
            <p className="text-gray-600 text-sm">À l'écoute de vos besoins 7j/7</p>
          </div>
        </div>
      </section>

      {/* Grille des membres de l'équipe */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="team-heading">
        <h2 id="team-heading" className="sr-only">
          Membres de l'équipe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              id={member.id}
              photo={member.photo}
              name={member.name}
              role={member.role}
              bio={member.bio}
              email={member.email}
              phone={member.phone}
              socials={member.socials}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous proposer des solutions adaptées à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/prestations">Voir nos prestations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipe;
