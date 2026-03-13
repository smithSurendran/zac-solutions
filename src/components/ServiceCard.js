import React from 'react';
import { Link } from 'react-router-dom';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import { getServiceInquiryLink } from '../config/subscriptionServices';
import '../styles/ServiceCard.css';

function ServiceCard({ service }) {
  const inquiryLink = getServiceInquiryLink(service);

  return (
    <article className="service-offer-card" id={service.slug}>
      <div className="service-offer-head">
        <p className="service-offer-type">Customizable Engagement Track</p>
        <h3>{service.title}</h3>
        <p className="service-offer-track">{service.engagementTrack}</p>
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

      <Link to={inquiryLink} className="service-offer-cta">
        {service.ctaLabel}
        <ArrowOutwardRoundedIcon />
      </Link>

      <p className="service-offer-note">
        Scope, implementation depth, and support cadence are configured based on your business model and operational
        priorities.
      </p>
    </article>
  );
}

export default ServiceCard;
