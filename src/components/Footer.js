import React from 'react';

const Footer = () => {
  return (
    <footer className="at-site-footer" style={{ paddingTop: '50px', marginTop: '50px' }}>
      <div className="at-bg" style={{ backgroundImage: 'url(assets/img/footer-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="height-b100 height-lg-b70"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="at-footer-widget">
                <h2 className="at-footer-widget-title">À propos de JokkoDesign -</h2>
                <div className="height-b40 height-lg-b30"></div>
                <div className="at-text-widget">
                  Chez JokkoDesign, nous nous spécialisons dans la création d'expériences numériques uniques et engageantes. Notre passion réside dans le design et le développement, offrant des solutions créatives adaptées aux besoins des entreprises du monde entier. Nous adorons ce que nous faisons, et cela se reflète dans chaque projet que nous entreprenons. Contactez-nous pour explorer ensemble comment nous pouvons travailler ensemble !
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="at-footer-widget at-footer-time">
                <h2 className="at-footer-widget-title">Nos Services -</h2>
                <div className="height-b40 height-lg-b30"></div>
                <ul>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">UI/UX Design</a></li>
                  <li><a href="#">Rédaction de contenu</a></li>
                  <li><a href="#">SEO Optimisation</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="at-footer-widget at-footer-link">
                <h2 className="at-footer-widget-title">Liens rapides -</h2>
                <div className="height-b40 height-lg-b30"></div>
                <ul className="at-footer-link">
                  <li><a href="#herp">Accueil</a></li>
                  <li><a href="#about">À propos</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">portfolio</a></li>
                  <li><a href="#team">Notre Equipe</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="at-footer-widget at-footer-info">
                <h2 className="at-footer-widget-title">Infos de contact -</h2>
                <div className="height-b40 height-lg-b30"></div>
                <ul>
                  <li>Adresse : Cite penitence, Keur Massar, Dakar, SENEGAL</li>
                  <li>Email : info@jokkodesign.com</li>
                  <li>Téléphone : +221 77 297 70 43</li>
                </ul>
                <div className="height-b30 height-lg-b30"></div>
                <div className="at-footer-social">
                  <a href="#" className="at-btn at-style1"><i className="fa fa-facebook"></i></a>
                  <a href="#" className="at-btn at-style1"><i className="fa fa-twitter"></i></a>
                  <a href="#" className="at-btn at-style1"><i className="fa fa-instagram"></i></a>
                  <a href="#" className="at-btn at-style1"><i className="fa fa-youtube-play"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="height-b100 height-lg-b70"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <hr />
              <div className="height-b40 height-lg-b20"></div>
              <div className="at-copyright">
                <div className="at-left-copyright">© JokkoDesign - 2025</div>
                <div className="at-right-copyright">Conçu par <a href="#">JokkoDesign</a></div>
              </div>
              <div className="height-b40 height-lg-b20"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
