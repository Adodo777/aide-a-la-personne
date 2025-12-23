import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
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
    </div>
  );
};

export default TeamMemberDetail;