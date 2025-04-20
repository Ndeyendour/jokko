import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './tm.css'; // Ajoute ici les styles .at-testimonial si ce n'est pas déjà fait

const TestimonialSection = ({ id }) => {
  const testimonials = [
    {
      id: 1,
      image: "/assets/img/testimonial01.png",
      quote: "JokkoDesign m’a permis de transformer ma vision en une interface claire et attrayante. Idéal pour ma première app !",
      name: "M. Diouf",
      position: "Entrepreneur technologique"
    },
    {
      id: 2,
      image: "/assets/img/testimonial02.png",
      quote: "Grâce à JokkoDesign, mon entreprise a désormais une présence en ligne moderne qui respecte nos valeurs traditionnelles.",
      name: "A. Ndaw",
      position: "Dirigeante d'entreprise locale"
    },
    {
      id: 3,
      image: "/assets/img/testimonial03.png",
      quote: "J'ai pu lancer mon portfolio pro en quelques jours. Rapide, esthétique et abordable, que demander de plus ?",
      name: "T. SARR",
      position: "Consultant indépendant"
    },
    {
      id: 4,
      image: "/assets/img/testimonial04.png",
      quote: "Une équipe à l’écoute avec une vraie maîtrise de Figma et Canva. Je recommande vivement !",
      name: "N. NDOUR",
      position: "Fondateur de startup"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="at-testimonial-wrap at-section at-gray-bg py-16" id={id}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ce que disent nos clients</h2>
          <p className="mt-2 text-gray-600">Des entrepreneurs convaincus par l’expérience JokkoDesign</p>
        </div>

        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className="at-testimonial" key={testimonial.id}>
              <div className="at-testimonial-img-out">
                <div className="at-testimonial-img">
                <div className="at-testimonial-img-in">
  <img 
    src={testimonial.image} 
    alt={testimonial.name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      border: '2px solid red' // Bordure visible pour debug
    }}
  />
</div>
                </div>
              </div>
              <div className="at-testimonial-text text-center max-w-3xl mx-auto px-4">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  {testimonial.quote}
                </blockquote>
                <div className="at-testimonial-meta">
                  <h3 className="text-xl text-indigo-800 font-semibold">{testimonial.name}</h3>
                  <span className="text-gray-600">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

TestimonialSection.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TestimonialSection;
