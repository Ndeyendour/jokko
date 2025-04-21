import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedServices from '../components/FeaturedServices';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import PortfolioSection from '../components/PortfolioSection';
import TeamSection from '../components/Team';
import ContactSection from '../components/contact';
import Footer from '../components/Footer';
import AdBanner from '../components/AdBanner';

const Home = () => {
  // Données des 6 services
  const servicesData = [
    {
      icon: "/assets/img/icon4.png",
      title: "Développement Web",
      description: "Sites vitrines et e-commerce performants avec Angular/React en frontend et Java/Node.js en backend. Architectures modernes (API REST, microservices), responsive design et optimisation SEO intégrée."
    },
    {
      icon: "/assets/img/icon5.png",
      title: "Développement Mobile",
      description: "Apps iOS/Android natives avec React Native et Flutter. Interfaces fluides, intégration API sécurisée et maintenance évolutive pour une expérience mobile optimale."
    },
    {
      icon: "/assets/img/icon6.png",
      title: "Référencement SEO",
      description: "Optimisation technique et stratégie de contenu sur-mesure pour améliorer votre visibilité et attirer un trafic qualifié sur les moteurs de recherche."
    },
    {
      icon: "/assets/img/icon7.png",
      title: "Design UI/UX",
      description: "Interfaces intuitives et expérience utilisateur optimisée, conçues à partir de tests utilisateurs et de prototypes interactifs pour maximiser l'engagement."
    },
    {
      icon: "/assets/img/icon8.png",
      title: "Solutions Cloud",
      description: "Déploiement d'infrastructures scalables sur AWS/Azure/Google Cloud, avec migration sécurisée, CI/CD et monitoring 24/7 pour haute disponibilité."
    },
    {
      icon: "/assets/img/icon9.png",
      title: "Cybersécurité",
      description: "Protection des données et conformité RGPD via audits, chiffrement et sécurisation des systèmes contre les cybermenaces modernes."
    }
];
  return (
    <div className="home-page bg-white">
       {/* <br/>
      <br/>
      <br/>
      <AdBanner /> */}
     <div id="at-preloader">
    <div className='at-preloader-dots'>
      <div className='at-dot'></div>
      <div className='at-dot'></div>
      <div className='at-dot'></div>
      <div className='at-dot'></div>
      <div className='at-dot'></div>
    </div>
  </div>
      <Header />
      <HeroSection />
      <FeaturedServices />
      <AboutSection />
      
      <ServicesSection
        id="services"
        title="Nos Services Professionnels"
        subtitle="Des solutions digitales complètes pour votre entreprise"
        services={servicesData}
      />
      <TestimonialSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
     
      <Footer />
    </div>
  );
};

export default Home;