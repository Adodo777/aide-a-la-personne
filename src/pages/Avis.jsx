import { useEffect, useState } from 'react'; // Ajouté
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, MapPin, User } from 'lucide-react';

const Avis = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials || []))
      .catch(() => setTestimonials([]));
  }, []);

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
          <h1 className="text-4xl font-bold text-primary">Avis Clients</h1>
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
              <div
                key={index}
                className={`text-center ${
                  // Si en grid-cols-2 (mobile), centrer le dernier élément
                  index === 2 ? 'col-span-2 md:col-span-1 flex flex-col justify-center' : ''
                }`}
              >
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
          <h2 className="text-3xl font-bold text-primary">Témoignages</h2>
          <p className="text-xl text-gray-600">
            Leurs retours d'expérience sont la meilleure preuve de mon engagement
            et de la qualité de mes services.
          </p>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="mb-8 break-inside-avoid bg-white border border-gray-200 shadow-sm rounded-2xl flex flex-col transition-transform hover:scale-[1.02]"
            >
              <CardContent className="p-8 space-y-6 flex flex-col h-full">
                {/* Avatar & Name */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary/30 to-blue-200 flex items-center justify-center shadow">
                    <User className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{testimonial.name}</h3>
                    <div className="flex space-x-1 mt-1">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>
                {/* Quote */}
                <blockquote className="relative bg-gray-50 rounded-xl p-5 text-gray-700 italic border-l-4 border-primary flex items-start justify-between">
                  <span>{testimonial.text}</span>
                  <Quote className="h-8 w-8 text-primary/20 ml-4 flex-shrink-0" />
                </blockquote>
                {/* Highlight */}
                <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mt-auto">
                  {testimonial.highlight}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-secondary bg-secondary/5">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <User className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-semibold text-primary">Confidentialité</h3>
                <p className="text-gray-700 text-sm">
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
          <h2 className="text-3xl font-bold text-primary mb-4">
            Rejoignez mes clients satisfaits
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Faites confiance à mon expérience et à mon engagement pour vous accompagner 
            dans votre quotidien avec bienveillance et professionnalisme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Me contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/prestations">Découvrir mes services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avis;

