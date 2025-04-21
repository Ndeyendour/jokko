import React from 'react';

const filters = [
  { label: 'Tous', filter: '*', active: true },
  { label: 'Identité visuelle', filter: '.branding' },
  { label: 'Design UX/UI', filter: '.uxui' },
  { label: 'Creation graphique', filter: '.print' },
  // { label: 'Creation graphique', filter: '.motion' },
  { label: 'Développement web & mobile', filter: '.dev' },
];

const portfolioItems = [
  // 5 éléments d'identité visuelle
  { category: 'branding', image: '/assets/img/l4.png' },
  { category: 'branding', image: '/assets/img/l2.png' },
  { category: 'branding', image: '/assets/img/l1.png' },
  // { category: 'branding', image: '/assets/img/l1.png' },
  // { category: 'branding', image: '/assets/img/l2.png' },
  // Autres catégories
  { category: 'uxui', image: '/assets/img/p1.jpg' },
  { category: 'uxui', image: '/assets/img/p2.png' },
  { category: 'print', image: '/assets/img/p3.png' },
  { category: 'print', image: '/assets/img/p4.png' },
  { category: 'print', image: '/assets/img/p5.png' },
  { category: 'motion', image: '/assets/img/p6.png' },
  { category: 'dev', image: '/assets/img/p1.jpg' },
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