import React from 'react';

const filters = [
  { label: 'Tous', filter: '*', active: true },
  { label: 'Identité visuelle', filter: '.branding' },
  { label: 'Design UX/UI', filter: '.webdesign' },
  { label: 'Supports marketing', filter: '.marketing' },
  { label: 'Graphisme créatif', filter: '.graphic' },
  { label: 'E-commerce', filter: '.ecommerce' },
];

const portfolioItems = [
  { category: 'branding', image: '/assets/img/port1.jpg' },
  { category: 'marketing', image: '/assets/img/port2.jpg' },
  { category: 'graphic', image: '/assets/img/port3.jpg' },
  { category: 'webdesign', image: '/assets/img/port4.jpg' },
  { category: 'marketing', image: '/assets/img/port5.jpg' },
  { category: 'ecommerce', image: '/assets/img/port6.jpg' },
];

const PortfolioSection = () => {
  return (
    <section className="at-gallery-wrap" id="portfolio">
      <div className="at-round-shap"></div>
      <div className="at-square-shap"></div>
      <div className="height-b150 height-lg-b100"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="at-section-heading at-style1">
              <h2>Nos Réalisations</h2>
              <div className="height-b40 height-lg-b30"></div>
              <p>
                Découvrez une sélection de projets réalisés par <strong>JokkoDesign</strong>, alliant esthétique, efficacité
                et expérience utilisateur. Chaque création est conçue pour répondre aux besoins spécifiques de nos
                clients, tout en mettant en valeur leur identité.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="height-b100 height-lg-b60"></div>

      <div className="container">
        <div className="at-portfolio-filter">
          <ul>
            {filters.map((item, idx) => (
              <li key={idx} className={item.active ? 'active' : ''}>
                <a href="#" data-filter={item.filter} className="at-btn at-style1">
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="at-portfolio gutter-less">
          <div className="at-grid-sizer"></div>

          {portfolioItems.map((item, idx) => (
            <div key={idx} className={`at-portfolio-item ${item.category}`}>
              <a
                href="work-details.html"
                className="at-item-inner at-bg"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <span className="at-port-btn">Voir le projet</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
