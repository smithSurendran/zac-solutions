import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import '../styles/About.css';

const DIFFERENTIATORS = [
  'Client-first mindset: solutions tailored to your goals and constraints',
  'Cross-functional expertise across technology, operations, and growth strategy',
  'Agile team with a bias for action and long-term partnerships',
  'Transparent process and communication at every stage of delivery',
];

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <p className="about-kicker">Who We Are</p>
        <h1>About ZACK Software Solutions</h1>
        <p>
          We help businesses simplify operations, modernize digital systems, and execute strategic priorities with
          clarity.
        </p>
      </section>

      <section className="about-mission-grid">
        <article className="about-card">
          <h2>Our Mission</h2>
          <p>
            Deliver smart, scalable solutions that reduce complexity and support sustainable growth for entrepreneurs
            and growing teams.
          </p>
        </article>

        <article className="about-card">
          <h2>Our Vision</h2>
          <p>
            Build a future where companies of every size can use technology and operational excellence to compete with
            confidence.
          </p>
        </article>
      </section>

      <section className="about-difference">
        <div className="about-difference-head">
          <p className="about-kicker">What Makes Us Different</p>
          <h2>Business Context + Practical Execution</h2>
        </div>

        <ul className="about-checklist">
          {DIFFERENTIATORS.map((item) => (
            <li key={item}>
              <span className="check-icon" aria-hidden="true">
                <CheckCircleIcon />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-cta">
        <h2>Partner with ZACK Software Solutions</h2>
        <p>
          Whether you are launching something new or improving what you have built, we can help you move forward with
          stronger structure and measurable outcomes.
        </p>
        <Link to="/contact" className="about-cta-link">
          Start a Conversation
        </Link>
      </section>
    </div>
  );
}

export default About;
