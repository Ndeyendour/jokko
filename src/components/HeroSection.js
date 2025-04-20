import React from 'react';

const HeroSection = () => {
  return (
    <div id="home" className="at-home at-style1">
      <div
        className="at-single-slide at-bg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/hero-bg.jpg)`
        }}
      >
        <div className="container">
          <div className="height-b40 height-lg-b30"></div>
          <div className="at-slide-text">
            <h1 className="at-title">NOUS SOMMES UN STUDIO DE CRÉATION NUMÉRIQUE</h1>
            <div className="height-b50 height-lg-b30"></div>
            <div className="at-sub-title">
  JOKKO DESIGN conçoit des expériences visuelles et interactives sur mesure, alliant design graphique, création numérique et développement digital. Que ce soit à travers une identité visuelle impactante, un site web fluide ou une application mobile intuitive, chaque projet est pensé pour refléter l’essence de votre marque et offrir une expérience engageante à vos utilisateurs.
</div>

            <div className="height-b60 height-lg-b40"></div>
            <a
  href="#services"
  className="at-btn at-style1"
  style={{
    backgroundColor: '#5cc064 !important',
    borderColor: '#5cc064 !important',
    color: '#fff !important'
  }}
>
  <span style={{ color: '#fff !important' }}>Voir les services</span>
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
