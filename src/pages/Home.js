import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import PaymentButton from '../components/PaymentButton';
import TestimonialsSection from '../components/TestimonialsSection';
import { NAV_SERVICES } from '../config/subscriptionServices';
import '../styles/Home.css';

const SERVICES = [
  {
    title: 'Digital Infrastructure Setup',
    description:
      'Implementation of the core systems and tooling required to launch and run a modern, client-facing digital business.',
    icon: <CodeRoundedIcon />,
    to: '/services/strategic-business-digital-solutions',
  },
  {
    title: 'Website Architecture & Delivery',
    description:
      'Structured website planning, content hierarchy, and build execution that supports credibility and conversion.',
    icon: <BusinessCenterRoundedIcon />,
    to: '/services/technical-capabilities-deliverables',
  },
  {
    title: 'CRM & Workflow Configuration',
    description:
      'Setup of CRM, communication, and service workflows to keep client operations organized and scalable.',
    icon: <AutoGraphRoundedIcon />,
    to: '/services/technical-capabilities-deliverables',
  },
  {
    title: 'Operational Process Design',
    description:
      'Process mapping and workflow standardization to reduce manual overhead and improve team execution clarity.',
    icon: <HubRoundedIcon />,
    to: '/services/strategic-business-digital-solutions',
  },
  {
    title: 'Analytics & Reporting Foundations',
    description:
      'Baseline reporting systems and performance tracking that inform practical decisions across marketing and delivery.',
    icon: <InsightsRoundedIcon />,
    to: '/services/technical-capabilities-deliverables',
  },
  {
    title: 'Documentation & Support Systems',
    description:
      'Implementation-ready documentation, handoff notes, and support structures for long-term consistency.',
    icon: <DescriptionRoundedIcon />,
    to: '/services/technical-capabilities-deliverables',
  },
];

const STRATEGIC_POINTS = [
  'Technical implementation aligned to business priorities and operating constraints',
  'Structured delivery model with milestone-based execution and transparent communication',
  'Scalable systems architecture designed to support growth beyond initial launch',
  'Operational clarity through documented workflows, tools, and ownership structures',
];

const HERO_METRICS = [
  { value: 'Execution-Led', label: 'Hands-on implementation, not just strategy decks' },
  { value: 'Operationally Sound', label: 'Systems and workflows designed for daily reliability' },
  { value: 'Built to Scale', label: 'Foundations that support growth without rework' },
];

const STRATEGIC_VALUES = [
  {
    title: 'Structured Delivery',
    description: 'Clear milestones, practical scope control, and predictable execution cadence.',
  },
  {
    title: 'Cross-Functional Expertise',
    description: 'Business, operational, and technical support delivered as one coordinated engagement.',
  },
  {
    title: 'Implementation Depth',
    description: 'From architecture decisions to tooling configuration and workflow rollout.',
  },
  {
    title: 'Long-Term Maintainability',
    description: 'Systems designed for consistency, handoff clarity, and ongoing optimization.',
  },
];

function Home() {
  return (
    <div className="home">
      <section className="hero section-shell">
        <div className="hero-content">
          <p className="section-kicker">Strategic Digital Infrastructure</p>
          <h1>Premium Digital and Operational Solutions for Growth-Focused Businesses</h1>
          <p className="hero-subtitle">
            ZACK Software Solutions delivers structured implementation across technology, operations, and digital visibility so
            startups and service businesses can launch, manage, and scale with confidence.
          </p>
          <div className="hero-actions">
            <div className="hero-primary-action">
              <PaymentButton productId="bookService" label="Get Started" />
            </div>
            <Link to={`/services/${NAV_SERVICES[0].slug}`} className="secondary-button">
              Explore Services
              <ArrowOutwardRoundedIcon />
            </Link>
          </div>
          <div className="hero-metrics" aria-label="Engagement strengths">
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
          <h2>Services and Capabilities</h2>
          <p>
            Engagement scope is tailored to your goals, business stage, and operating model. Every service is designed
            to be implementation-focused, measurable, and maintainable.
          </p>
        </div>

        <div className="service-cards">
          {SERVICES.map((service) => (
            <Link className="service-card service-card-link" key={service.title} to={service.to}>
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-card-cta">
                View details
                <ArrowOutwardRoundedIcon />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="strategic-band section-shell">
        <div className="strategic-copy">
          <div className="section-head left">
            <p className="section-kicker">Strategic Advantage</p>
            <h2>Why Clients Choose ZACK Software Solutions</h2>
            <p>
              We combine implementation rigor with practical business context, so your investment turns into durable
              systems, not short-term patchwork.
            </p>
          </div>

          <ul className="trust-list">
            {STRATEGIC_POINTS.map((point) => (
              <li key={point}>
                <span className="trust-icon" aria-hidden="true">
                  <CheckCircleIcon />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="strategic-values">
          <div className="highlight-grid">
            {STRATEGIC_VALUES.map((item) => (
              <article key={item.title} className="highlight-card">
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="about-preview section-shell">
        <div className="about-preview-panel">
          <div className="about-preview-copy">
            <p className="section-kicker">About Zack</p>
            <h2>Client-First by Design</h2>
            <p>
              ZACK Software Solutions supports founders and operators with technical implementation, digital infrastructure, and
              operational system design tailored to real business conditions.
            </p>
            <p>
              We prioritize clarity, maintainability, and execution quality so your team can scale without unnecessary
              complexity.
            </p>
            <Link to="/about" className="text-link">
              Explore Our Story
              <ArrowOutwardRoundedIcon />
            </Link>
          </div>

          <div className="about-preview-note">
            <h3>What You Can Expect</h3>
            <ul>
              <li>Implementation plans aligned to operational priorities</li>
              <li>Clean documentation and transparent project communication</li>
              <li>System designs built for scale, reliability, and maintainability</li>
              <li>Flexible engagement model configured to your business stage</li>
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <section className="payment-cta section-shell">
        <div className="payment-panel" id="book-service">
          <div>
            <p className="section-kicker">Secure Checkout</p>
            <h2>Book Your Service Engagement</h2>
            <p>
              Start your engagement through a secure Stripe-hosted checkout flow. You will be redirected to complete
              booking on Stripe.
            </p>
          </div>
          <div className="payment-action">
            <PaymentButton productId="bookService" label="Book Service" />
            <p className="payment-caption">Secure checkout powered by Stripe.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer section-shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>ZACK Software Solutions</h3>
            <p>Transforming Business for Tomorrow through structured digital and operational implementation.</p>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            {NAV_SERVICES.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <h4>Get Started</h4>
            <a href="#book-service">Book Service</a>
            <Link to="/contact">Schedule Consultation</Link>
            <a href="mailto:hello@zacksolutions.com">hello@zacksolutions.com</a>
          </div>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} ZACK Software Solutions. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;
