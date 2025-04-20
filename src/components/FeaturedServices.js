import React from 'react';
import './fs.css'; 
const services = [
  {
    icon: `${process.env.PUBLIC_URL}/assets/img/icon1.png`,
    title: 'Développement Web et Mobile',
    text: 'Nous créons des sites web et des applications mobiles performants, adaptés aux besoins spécifiques de votre entreprise, pour vous aider à atteindre vos clients où qu’ils soient.'
  },
  {
    icon: `${process.env.PUBLIC_URL}/assets/img/icon2.png`,
    title: 'Design UX/UI',
    text: 'Nous concevons des interfaces intuitives et esthétiques avec Figma et Canva, en mettant l’accent sur l’expérience utilisateur pour maximiser l’engagement.'
  },
  {
    icon: `${process.env.PUBLIC_URL}/assets/img/icon3.png`,
    title: 'Identité Visuelle & Branding',
    text: 'Vous souhaitez que votre marque se démarque ? Nous créons des identités visuelles uniques et cohérentes pour renforcer votre présence en ligne.'
  }
];

const FeaturedServices = () => {
  return (
    <>
      {/* Start Featured Service */}
      <div className="height-b150 height-lg-b100"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="at-section-heading at-style1">
              <h2>Nos Services en Vedette</h2>
              <div className="height-b40 height-lg-b30"></div>
              <p>
                Chez JokkoDesign, nous combinons créativité et expertise technique pour créer des solutions web et mobiles robustes, sur-mesure, et adaptées aux ambitions de votre startup.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="height-b100 height-lg-b60"></div>

      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <div className={`at-iconbox at-style1 at-color${index + 1}`}>
                <div className="at-icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="height-b40 height-lg-b30"></div>
                <h3 className="at-iconbox-title">{service.title}</h3>
                <div className="height-b30 height-lg-b30"></div>
                <div className="at-iconbox-text">{service.text}</div>
                <div className="at-icon-bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Featured Service */}
    </>
  );
};

export default FeaturedServices;
