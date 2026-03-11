import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../styles/Contact.css';

const CONTACT_POINTS = [
  'Clear scope discussions and practical recommendations',
  'Fast response with transparent next steps',
  'Support for both project-based and ongoing engagements',
];

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <p className="contact-kicker">Contact</p>
        <h1>Let’s Build Something Practical and Scalable</h1>
        <p>
          Share your goals, blockers, or project ideas. We’ll respond with clear next steps and a path tailored to your
          business.
        </p>
      </section>

      <section className="contact-layout">
        <aside className="contact-info-card">
          <h2>What to Expect</h2>
          <p>
            Every inquiry is reviewed with business context in mind. We focus on delivering actionable recommendations
            and measurable outcomes.
          </p>

          <ul>
            {CONTACT_POINTS.map((point) => (
              <li key={point}>
                <span className="contact-point-icon" aria-hidden="true">
                  <CheckCircleIcon />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="contact-form-section">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input id="user_name" type="text" name="user_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input id="user_email" type="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
