import React from 'react';

const AboutSection = ({ id }) => {
  return (
    <section className="at-about-wrap" id="about">
      <div className="height-b150 height-lg-b100"></div>

      {/* First About Section */}
      <div className="at-about at-style1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="at-about-img at-vartical-center">
                <div className="at-about-img-in">
                  <img src="assets/img/about1.png" alt="JokkoDesign" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="at-about-text at-vartical-center">
                <div className="at-about-text-in">
                  <h2>À propos de JokkoDesign</h2>
                  <div className="height-b30 height-lg-b30"></div>
                  <p>
                    JokkoDesign est un studio de création numérique spécialisé en design UX/UI, utilisant les outils Figma et Canva pour créer des interfaces intuitives et modernes pour des applications web et mobiles.
                  </p>
                  <p>
                    Nous nous adressons principalement aux entrepreneurs locaux et aux startups technologiques au Sénégal, en les aidant à transformer leurs idées en expériences numériques exceptionnelles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="height-b150 height-lg-b100"></div>

      {/* Second About Section */}
      <div className="at-about at-style2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="at-about-text at-vartical-center">
                <div className="at-about-text-in">
                  <h2>Notre Mission</h2>
                  <div className="height-b30 height-lg-b30"></div>
                  <p>
                    Chez JokkoDesign, nous croyons que la technologie et le design doivent se compléter pour offrir une expérience utilisateur fluide. Notre mission est de créer des interfaces qui allient fonctionnalité et esthétique, adaptées aux besoins spécifiques du marché sénégalais.
                  </p>
                  <div className="height-b15 height-lg-b15"></div>
                  <a href="#feature" className="at-btn at-style1">
                    <span>Découvrez nos fonctionnalités</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="at-about-img at-vartical-center">
                <div className="at-about-img-in">
                  <img src="assets/img/about2.png" alt="Mission de JokkoDesign" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
