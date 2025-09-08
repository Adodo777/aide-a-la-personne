import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import logo from '../assets/aide_a_la_personne_logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="text-lg font-bold text-gray-900">Aide à la personne</span>
            </div>
            <p className="text-gray-600 text-base">
              Services d'aide à domicile et d'auxiliaire de vie professionnels. 
              Une approche humaine et personnalisée pour votre bien-être.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-base">[Numéro de téléphone]</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-base">[Adresse email]</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-base">[Adresse postale]</span>
              </div>
            </div>
          </div>

          {/* Informations légales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Informations</h3>
            <div className="space-y-2 text-base text-gray-600">
              <p>Aide-soignante diplômée d'État</p>
              <p>Services agréés</p>
              <p>Déduction fiscale possible</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-base text-gray-500">
            © 2025 Aide à la personne. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

