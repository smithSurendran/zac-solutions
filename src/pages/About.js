import React from 'react';
import '../styles/About.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function About() {
  return (
    <div className="about-page">

      {/* Header Section */}
      <section className="about-hero">
        <h1>About ZAC Solutions</h1>
        <p>Driven by a mission to empower businesses through practical, digital-first solutions.</p>
      </section>

      {/* Mission and Vision */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>To deliver smart, scalable solutions that simplify complexity and fuel sustainable growth for diverse businesses and entrepreneurs.</p>

        <h2>Our Vision</h2>
        <p>We envision a world where businesses of all sizes can harness technology, data, and operational excellence to succeed without friction.</p>
      </section>

      {/* What Makes Us Different */}
      <section className="about-section">
        <h2>What Makes Us Different?</h2>
        <ul className="checklist">
          <li>
            <span className="check-icon"><CheckCircleIcon /></span>
            <span>Client-first mindset — we tailor solutions, not templates</span>
          </li>
          <li>
            <span className="check-icon"><CheckCircleIcon /></span>
            <span>Cross-functional expertise spanning tech, business, and marketing</span>
          </li>
          <li>
            <span className="check-icon"><CheckCircleIcon /></span>
            <span>Agile team with a bias for action and long-term partnerships</span>
          </li>
          <li>
            <span className="check-icon"><CheckCircleIcon /></span>
            <span>Transparent process and open communication every step of the way</span>
          </li>
        </ul>
      </section>

      {/* Closing Section */}
      <section className="about-cta">
        <h2>Partner with ZAC Solutions</h2>
        <p>Whether you're starting something new or improving what you’ve built, we’d love to collaborate with you. Let’s shape the future together.</p>
      </section>

    </div>
  );
}

export default About;
