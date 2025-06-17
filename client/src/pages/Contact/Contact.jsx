import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// React Icons
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_r4x9ssc',
      'template_eymex7g',
      form.current,
      'YdyGRJBW_Pz4kj2ZS'
    )
    .then((result) => {
        alert('Message sent successfully!');
        form.current.reset();
    }, (error) => {
        alert('Failed to send message.');
    });
  };

  return (
    <div className="contact container mt-5 contact-wrapper">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src='https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg' alt="Contact Us" className="img-fluid contact-img" />
        </div>

        {/* Right Form */}
        <div className="col-md-6">
          <div className="contact-container p-4 shadow-lg rounded bg-light">
            <h2 className="text-center mb-4 d-flex justify-content-center align-items-center gap-3 flex-wrap">
              Contact Us
              <a href="https://github.com/chaudarprashant" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub />
              </a>
              <a href="www.linkedin.com/in/prashant-chaudar-690425253" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaTwitter />
              </a>
            </h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" name="user_name" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input type="email" name="user_email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Your Message</label>
                <textarea name="message" rows="5" className="form-control" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary px-4">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
