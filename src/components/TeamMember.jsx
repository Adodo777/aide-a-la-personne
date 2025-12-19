import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Linkedin, Twitter, Instagram, User } from 'lucide-react';


/**
 * Composant réutilisable pour afficher un membre de l'équipe
 * Toutes les données sont passées via props
 */
const TeamMember = ({
  photo,
  name,
  role,
  bio,
  email,
  phone,
  socials,
}) => {
  return (
    <article className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border">
        <CardContent className="p-0">
          {/* Photo du membre */}
          <figure className="relative overflow-hidden aspect-square bg-muted">
            {photo && photo !== "/placeholder.svg" ? (
              <img
                src={photo}
                alt={`Photo de ${name}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary">
                <User className="h-24 w-24 text-muted-foreground" aria-hidden="true" />
              </div>
            )}
          </figure>

          {/* Informations du membre */}
          <div className="p-6 space-y-4">
            <header className="space-y-1">
              <h3 className="text-xl font-semibold text-foreground">{name}</h3>
              <p className="text-gray-600 font-medium">{role}</p>
            </header>

            <section aria-label="Biographie">
              <p className="text-gray-600 text-base leading-relaxed">{bio}</p>
            </section>

            {/* Coordonnées (affichage conditionnel) */}
            {(email || phone) && (
              <section aria-label="Coordonnées" className="space-y-2 pt-2 border-t border-border">
                {phone && (
                  <a
                    href={`tel:${phone.replace(/\./g, '')}`}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Appeler ${name}`}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm">{phone}</span>
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Envoyer un email à ${name}`}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="text-sm">{email}</span>
                  </a>
                )}
              </section>
            )}

            {/* Réseaux sociaux (affichage conditionnel) */}
            {socials && (socials.linkedin || socials.twitter || socials.instagram) && (
              <section aria-label="Réseaux sociaux" className="flex space-x-3 pt-2">
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Profil LinkedIn de ${name}`}
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                )}
                {socials.twitter && (
                  <a
                    href={socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Profil Twitter de ${name}`}
                  >
                    <Twitter className="h-5 w-5" aria-hidden="true" />
                  </a>
                )}
                {socials.instagram && (
                  <a
                    href={socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Profil Instagram de ${name}`}
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </a>
                )}
              </section>
            )}
          </div>
        </CardContent>
      </Card>
    </article>
  );
};

export default TeamMember;