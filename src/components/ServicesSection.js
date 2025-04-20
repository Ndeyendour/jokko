import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ icon, title, description }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="bg-white p-5 h-100 shadow-sm rounded-3 text-center">
      <div className="icon-wrapper mb-4">
        <img src={icon} alt={title} className="img-fluid" width="60" />
      </div>
      <h3 className="h4 mb-3 fw-bold text-dark">{title}</h3>
      <p className="text-secondary">{description}</p>
    </div>
  </div>
);

const ServicesSection = ({ id, title, subtitle, services = [] }) => {
  return (
    <section id="services" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mb-3 text-dark">{title}</h2>
            <p className="lead text-muted">{subtitle}</p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <ServiceCard
              key={`service-${index}`}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default ServicesSection;