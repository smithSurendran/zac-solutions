import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4jw2nfr', 'template_dsbc854', form.current, 'gse_pEnSOo_9El3oc')
      .then((result) => {
          alert("Message sent successfully!");
          form.current.reset();
      }, (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact ZAC Solutions</h1>
        <p>We’d love to hear from you. Whether you have a question, need support, or want to discuss a project — let’s connect.</p>
      </section>

      <section className="contact-form-section">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
