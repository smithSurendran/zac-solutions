import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import PaymentButton from '../components/PaymentButton';
import TestimonialsSection from '../components/TestimonialsSection';
import '../styles/Home.css';

const SERVICES = [
  {
    title: 'Technology Solutions',
    description: 'Custom software, automation tools, web apps, and platform support that streamline daily operations.',
    icon: <CodeRoundedIcon />,
  },
  {
    title: 'Business Support Services',
    description: 'Bookkeeping, reporting, payroll support, and process documentation to reduce administrative overhead.',
    icon: <BusinessCenterRoundedIcon />,
  },
  {
    title: 'Digital Strategy & Visibility',
    description: 'Modern websites and practical digital strategy to improve visibility and strengthen brand confidence.',
    icon: <AutoGraphRoundedIcon />,
  },
  {
    title: 'Flexible Consulting',
    description: 'Hands-on advisory support that helps you decide priorities and execute with confidence.',
    icon: <HandshakeRoundedIcon />,
  },
];

const TRUST_POINTS = [
  'Agile and adaptive execution aligned with how your team works',
  'Transparent communication, pricing, and delivery expectations',
  'Trusted by early-stage and growing companies across industries',
  'Scalable solutions built for long-term operational stability',
];

const HERO_METRICS = [
  { value: 'Fast', label: 'Implementation Cycles' },
  { value: 'Clear', label: 'Communication Standards' },
  { value: 'Scalable', label: 'Solution Architecture' },
];

function Home() {
  return (
    <div className="home">
      <section className="hero section-shell">
        <div className="hero-content">
          <p className="section-kicker">Digital + Operational Support</p>
          <h1>Modern Solutions That Help Your Business Run Better.</h1>
          <p className="hero-subtitle">
            Zack Solutions combines technology, strategy, and operational support to simplify complexity and unlock
            practical growth.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="primary-button">
              Get in Touch
            </Link>
            <Link to="/about" className="secondary-button">
              Learn More
              <ArrowOutwardRoundedIcon />
            </Link>
          </div>
          <div className="hero-metrics" aria-label="Business strengths">
            {HERO_METRICS.map((metric) => (
              <div className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services section-shell">
        <div className="section-head">
          <p className="section-kicker">Capabilities</p>
          <h2>What We Can Help You With</h2>
          <p>
            Every engagement is tailored to your business goals, operating realities, and growth stage. We focus on
            clarity, measurable value, and long-term maintainability.
          </p>
        </div>

        <div className="service-cards">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-us section-shell">
        <div className="why-content">
          <div className="section-head left">
            <p className="section-kicker">Why Zack Solutions</p>
            <h2>A Trusted Partner for Practical Growth</h2>
            <p>
              We blend technical depth with business context so your investments become repeatable systems, not
              one-off fixes.
            </p>
          </div>

          <ul className="trust-list">
            {TRUST_POINTS.map((point) => (
              <li key={point}>
                <span className="trust-icon" aria-hidden="true">
                  <CheckCircleIcon />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="why-highlight">
          <h3>Built for Teams That Value Quality and Speed</h3>
          <p>
            From initial assessment to delivery, we keep workflows transparent and outcomes measurable, so your team
            can move forward with confidence.
          </p>
          <div className="highlight-grid">
            <div>
              <strong>Structured</strong>
              <span>Planning & execution</span>
            </div>
            <div>
              <strong>Reliable</strong>
              <span>Delivery and support</span>
            </div>
            <div>
              <strong>Aligned</strong>
              <span>Business-first decisions</span>
            </div>
            <div>
              <strong>Focused</strong>
              <span>Clear measurable outcomes</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="about-preview section-shell">
        <div className="about-preview-panel">
          <div className="about-preview-copy">
            <p className="section-kicker">About Zack</p>
            <h2>Client-First by Design</h2>
            <p>
              Zack Solutions is dedicated to delivering practical, scalable, and impactful services across technology,
              operations, and digital strategy.
            </p>
            <p>
              Whether you are launching something new or optimizing existing systems, we help you move with better
              structure and confidence.
            </p>
            <Link to="/about" className="text-link">
              Explore Our Story
              <ArrowOutwardRoundedIcon />
            </Link>
          </div>

          <div className="about-preview-note">
            <h3>What You Can Expect</h3>
            <ul>
              <li>Clear project planning and communication from day one</li>
              <li>Solutions designed for maintainability and scale</li>
              <li>Balanced strategy and execution support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="payment-cta section-shell">
        <div className="payment-panel">
          <div>
            <p className="section-kicker">Secure Checkout</p>
            <h2>Book a Service Online</h2>
            <p>
              Reserve your service securely using Stripe checkout. You will be redirected to a hosted payment page to
              complete your booking.
            </p>
          </div>
          <div className="payment-action">
            <PaymentButton productId="bookService" label="Book Service" />
            <p className="payment-caption">Fast, secure, and optimized for frontend-only deployment.</p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="contact-cta section-shell">
        <h2>Ready to simplify your operations and scale with confidence?</h2>
        <p>Let’s discuss your goals and build a practical roadmap together.</p>
        <Link to="/contact" className="primary-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Home;
