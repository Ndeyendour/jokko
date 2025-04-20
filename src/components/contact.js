import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    msg: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (add more as needed)
    if (!formData.name || !formData.email || !formData.msg) {
      setAlertMessage('Please fill in all required fields');
      return;
    }

    // Here you can add logic to send the form data, like using fetch to an API
    // For now, just clear the form and show a success message
    setAlertMessage('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      address: '',
      phone: '',
      msg: '',
    });
  };

  return (
    <section className="at-contact-wrap" id="contact">
      <div className="height-b150 height-lg-b100"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="at-section-heading at-style1">
              <h2>Contactez-nous</h2>
              <div className="height-b85 height-lg-b45"></div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="at-contact-form" id="contact-form">
        <div className="container">
          {alertMessage && <div id="at-alert">{alertMessage}</div>}
          <div className="row">
            <div className="col-md-6">
              <div className="at-form-field">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <div className="at-bar"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="at-form-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="at-bar"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="at-form-field">
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <div className="at-bar"></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="at-form-field">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Mobile No"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <div className="at-bar"></div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="at-form-field">
                <textarea
                  cols="30"
                  rows="10"
                  id="msg"
                  name="msg"
                  required
                  placeholder="Write Your Message"
                  value={formData.msg}
                  onChange={handleChange}
                ></textarea>
                <div className="at-bar"></div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-3">
              <button type="submit" id="submit" name="submit" className="at-btn at-style2 w-100">
                Envoyer
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="height-b150 height-lg-b100"></div>
    </section>
  );
};

export default ContactSection;
