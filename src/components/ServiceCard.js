import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { getServiceCheckoutLink, hasServicePaymentLink } from '../config/subscriptionServices';
import '../styles/ServiceCard.css';

function ServiceCard({ service }) {
  const checkoutLink = getServiceCheckoutLink(service);
  const hasPaymentLink = hasServicePaymentLink(service);

  return (
    <article className="service-offer-card" id={service.slug}>
      <div className="service-offer-head">
        <p className="service-offer-type">Subscription Service</p>
        <h3>{service.title}</h3>
        <p className="service-offer-price">{service.priceLabel}</p>
      </div>

      <p className="service-offer-description">{service.shortDescription}</p>

      <ul className="service-offer-features">
        {service.features.map((feature) => (
          <li key={feature}>
            <CheckCircleRoundedIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {hasPaymentLink ? (
        <a href={checkoutLink} target="_blank" rel="noopener noreferrer" className="service-offer-cta">
          {service.ctaLabel}
          <ArrowOutwardRoundedIcon />
        </a>
      ) : (
        <Link to={checkoutLink} className="service-offer-cta">
          {service.ctaLabel}
          <ArrowOutwardRoundedIcon />
        </Link>
      )}

      <p className="service-offer-note">
        {hasPaymentLink
          ? 'Connected to Stripe Payment Link for frontend-only checkout.'
          : 'Frontend placeholder active. Add Stripe link or backend checkout session later.'}
      </p>
    </article>
  );
}

export default ServiceCard;
