import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Create and style this separately
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to ZAC Solutions</h1>
        <p>Empowering businesses through innovative digital, operational, and strategic solutions.</p>
        <Link to="/contact" className="cta-button">Get in Touch</Link>
      </section>

      {/* Capabilities Section */}
      <section className="services">
        <h2>What We Can Help You With</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Technology Solutions</h3>
            <p>Custom software, automation tools, web apps, and platform support to streamline your operations.</p>
          </div>
          <div className="card">
            <h3>Business Support Services</h3>
            <p>Bookkeeping, reporting, payroll support, and process documentation to reduce your admin burden.</p>
          </div>
          <div className="card">
            <h3>Digital Strategy & Visibility</h3>
            <p>Modern websites, brand identity guidance, and basic digital outreach to help you get found online.</p>
          </div>
          <div className="card">
            <h3>Flexible Consulting</h3>
            <p>Not sure what you need? We'll help you assess your needs and design a plan to move forward efficiently.</p>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why ZAC Solutions?</h2>
          <ul className="checklist">
            <li>
              <span className="check-icon"><CheckCircleIcon /></span>
              <span>Agile and adaptive — we work the way you work</span>
            </li>
            <li>
              <span className="check-icon"><CheckCircleIcon /></span>
              <span>Transparent communication and pricing</span>
            </li>
            <li>
              <span className="check-icon"><CheckCircleIcon /></span>
              <span>Trusted by early-stage and growing companies alike</span>
            </li>
            <li>
              <span className="check-icon"><CheckCircleIcon /></span>
              <span>Scalable solutions built to last</span>
            </li>
          </ul>
      </section>

      {/* About Us */}
      <section className="about-preview">
        <h2>About ZAC</h2>
        <p>ZAC Solutions is a client-first service provider dedicated to delivering practical, scalable, and impactful business solutions. We combine technology, operations, and creativity to support your next move — whatever that may be.</p>
        <Link to="/about" className="link-button">Learn More</Link>
      </section>

      {/* Final Call to Action */}
      <section className="contact-cta">
        <h2>Ready to simplify your business operations or explore new digital opportunities?</h2>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </section>

    </div>
  );
}

export default Home;
