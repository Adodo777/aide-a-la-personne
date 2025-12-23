import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Phone, Mail, Linkedin, Twitter, Instagram, User } from 'lucide-react';
import { teamMembers } from '@/data/teamMembers';

/**
 * Page de détail d'un membre de l'équipe
 */
const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  // Scroll to top when member changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  // Filtrer les autres membres (exclure le membre actuel) et limiter à 3
  const otherMembers = teamMembers.filter((m) => m.id !== id).slice(0, 3);

  if (!member) {
    return <Navigate to="/equipe" replace />;
  }

  return (
    <div className="space-y-12 py-8">
      <Helmet>
        <title>{member.name} - {member.role} | Aide à domicile</title>
        <meta
          name="description"
          content={`Découvrez ${member.name}, ${member.role}. ${member.bio}`}
        />
        <meta property="og:title" content={`${member.name} - ${member.role}`} />
        <meta property="og:description" content={member.bio} />
        <meta name="robots" content="index, follow" />
        <html lang="fr" />
      </Helmet>

      {/* Header avec retour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <Button asChild variant="ghost" size="sm">
          <Link to="/equipe" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            Retour à l'équipe
          </Link>
        </Button>
      </section>

      {/* Contenu principal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Photo */}
              <div className="lg:col-span-1">
                <figure className="aspect-square lg:aspect-auto lg:h-full bg-muted">
                  {member.photo && member.photo !== "/placeholder.svg" ? (
                    <img
                      src={member.photo}
                      alt={`Photo de ${member.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-secondary">
                      <User className="h-24 w-24 text-muted-foreground" aria-hidden="true" />
                    </div>
                  )}
                </figure>
              </div>

              {/* Informations */}
              <div className="lg:col-span-2 p-8 lg:p-12 space-y-8">
                <header className="space-y-2">
                  <h1 className="text-3xl lg:text-4xl font-bold text-primary">{member.name}</h1>
                  <p className="text-lg text-gray-600 font-medium">{member.role}</p>
                </header>

                <div className="border-t border-border pt-6">
                  <p className="text-base text-gray-600 leading-relaxed">{member.bio}</p>
                </div>

                {/* Contact */}
                {(member.email || member.phone) && (
                  <div className="border-t border-border pt-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Coordonnées</h2>
                    <div className="flex flex-wrap gap-6">
                      {member.phone && (
                        <a
                          href={`tel:${member.phone.replace(/\./g, '')}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="h-5 w-5" aria-hidden="true" />
                          <span>{member.phone}</span>
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="h-5 w-5" aria-hidden="true" />
                          <span>{member.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Réseaux sociaux */}
                {member.socials && (member.socials.linkedin || member.socials.twitter || member.socials.instagram) && (
                  <div className="border-t border-border pt-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Réseaux sociaux</h2>
                    <div className="flex gap-3">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                          aria-label={`Profil LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                          aria-label={`Profil Twitter de ${member.name}`}
                        >
                          <Twitter className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                          aria-label={`Profil Instagram de ${member.name}`}
                        >
                          <Instagram className="h-5 w-5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Bouton contact */}
                <div className="pt-4">
                  <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
                    <Link to="/contact">Demander une intervention</Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section Autres membres de l'équipe */}
      {otherMembers.length > 0 && (
        <section className="bg-gray-50 py-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {/* En-tête de section */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-primary">Découvrez notre équipe</h2>
                <p className="text-xl text-gray-600">
                  D'autres professionnels qualifiés à votre service
                </p>
              </div>

              {/* Grille des autres membres */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherMembers.map((otherMember, index) => (
                  <Link
                    key={otherMember.id}
                    to={`/equipe/${otherMember.id}`}
                    className="group block animate-fade-in-up"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border">
                      <CardContent className="p-0">
                        {/* Photo */}
                        <figure className="relative overflow-hidden aspect-[4/3] bg-muted">
                          {otherMember.photo && otherMember.photo !== "" ? (
                            <img
                              src={otherMember.photo}
                              alt={`Photo de ${otherMember.name}`}
                              loading="lazy"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-secondary">
                              <User className="h-16 w-16 text-muted-foreground" aria-hidden="true" />
                            </div>
                          )}
                        </figure>

                        {/* Informations */}
                        <div className="p-6 space-y-2">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {otherMember.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-medium">
                            {otherMember.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Lien vers la page équipe complète */}
              <div className="text-center pt-4">
                <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
                  <Link to="/equipe">Voir toute l'équipe</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
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

export default TeamMemberDetail;