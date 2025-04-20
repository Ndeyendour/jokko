import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-wrap">
        <div className="site-branding">
          {/* For Image Logo */}
          <a href="index.html" className="custom-logo-link">
            <img
              src="assets/img/favicon.png"
              alt="Site Logo"
              className="custom-logo"
              style={{ width: '60px', height: '40px' }}
            />
            <span className="company-name">JOKKO DESIGN</span>
          </a>
        </div>

        <nav className="primary-nav">
          <ul className="primary-nav-list">
            <li className="menu-item menu-item-has-children current-menu-ancestor current-menu-parent">
              <a href="#home" className="nav-link">Accueil</a>
           
            </li>
            <li className="menu-item"><a href="#about" className="nav-link">A PROPOS</a></li>
            <li className="menu-item"><a href="#services" className="nav-link">SERVICES</a></li>
            <li className="menu-item"><a href="#portfolio" className="nav-link">PORTFOLIO</a></li>
            <li className="menu-item"><a href="#team" className="nav-link">EQUIPE</a></li>

            <li className="menu-item"><a href="#contact" className="nav-link">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      
    </header>
  );
};

export default Header;