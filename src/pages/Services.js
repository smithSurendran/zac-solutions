import React from 'react';
import { Link } from 'react-router-dom';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ServiceCard from '../components/ServiceCard';
import { SUBSCRIPTION_SERVICES } from '../config/subscriptionServices';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <p className="services-kicker">Subscription Offerings</p>
        <h1>Premium Ongoing Support for Growth-Focused Businesses</h1>
        <p>
          Choose a subscription package designed to strengthen your online visibility and ensure your digital presence
          stays consistent, professional, and actively managed.
        </p>
        <div className="services-hero-actions">
          <Link to="/contact" className="services-primary-cta">
            Book a Consultation
          </Link>
          <Link to="/" className="services-secondary-cta">
            Back to Home
            <ArrowOutwardRoundedIcon />
          </Link>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid-head">
          <h2>Available Plans</h2>
          <p>
            Frontend-only for now. Each plan is structured to connect later to Stripe payment links or backend checkout
            sessions without changing UI components.
          </p>
        </div>

        <div className="services-grid">
          {SUBSCRIPTION_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
