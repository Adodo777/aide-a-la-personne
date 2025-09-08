import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, MapPin, User } from 'lucide-react';

const Avis = () => {
  const testimonials = [
    {
      name: 'Madame Dupont',
      age: '85 ans',
      location: 'Paris',
      rating: 5,
      text: 'Nathalie est une personne formidable. Elle est toujours souriante, attentive et très professionnelle. Grâce à elle, je peux rester chez moi en toute sérénité. Je la recommande vivement !',
      highlight: 'Professionnalisme et bienveillance'
    },
    {
      name: 'Monsieur Martin',
      age: '72 ans',
      location: 'Lyon',
      rating: 5,
      text: 'Mon auxiliaire de vie est d\'une aide précieuse. Elle m\'accompagne pour mes courses, mes rendez-vous et m\'aide à maintenir mon autonomie. Je me sens en sécurité et bien entouré.',
      highlight: 'Accompagnement et sécurité'
    },
    {
      name: 'Famille Dubois',
      age: '',
      location: 'Marseille',
      rating: 5,
      text: 'Nous sommes très reconnaissants envers [Nom de la cliente] et son équipe. Ils ont su s\'adapter aux besoins évolutifs de notre mère avec beaucoup de bienveillance et de flexibilité. La continuité de l\'intervenante est un vrai plus.',
      highlight: 'Adaptabilité et continuité'
    },
    {
      name: 'Madame Lefevre',
      age: '90 ans',
      location: 'Bordeaux',
      rating: 5,
      text: 'Je ne pensais pas pouvoir rester aussi longtemps chez moi. Mon aide-soignante est devenue une amie. Elle est toujours là pour moi, avec une gentillesse et un dévouement exceptionnels.',
      highlight: 'Relation de confiance'
    }
  ];

  const stats = [
    { number: '100%', label: 'Clients satisfaits' },
    { number: '5/5', label: 'Note moyenne' },
    { number: '24h/7j', label: 'Disponibilité' }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="space-y-16 py-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Avis Clients</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de mes bénéficiaires est notre priorité. Découvrez les témoignages 
            de personnes que j'ai accompagnées.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Témoignages</h2>
          <p className="text-xl text-gray-600">
            Leurs retours d'expérience sont la meilleure preuve de mon engagement 
            et de la qualité de nos services.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                        {testimonial.age && `, ${testimonial.age}`}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Highlight */}
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="text-sm font-medium text-primary">
                    Point fort : {testimonial.highlight}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <User className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold text-blue-800">Confidentialité</h3>
                <p className="text-blue-700 text-sm">
                  Ces témoignages sont anonymisés pour des raisons de confidentialité. 
                  Le respect de la vie privée de mes bénéficiaires est une priorité absolue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Rejoignez mes clients satisfaits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Faites confiance à mon expérience et à mon engagement pour vous accompagner 
            dans votre quotidien avec bienveillance et professionnalisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/prestations">Découvrir nos services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avis;

