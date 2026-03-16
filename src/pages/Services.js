import React from 'react';
import { Link, useParams } from 'react-router-dom';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import AutoModeRoundedIcon from '@mui/icons-material/AutoModeRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import PaymentButton from '../components/PaymentButton';
import { DEFAULT_SERVICE_SLUG, getServiceBySlug } from '../config/subscriptionServices';
import '../styles/Services.css';

const ICON_MAP = {
  businessSetup: LightbulbRoundedIcon,
  websiteDevelopment: LanguageRoundedIcon,
  marketingFoundation: CampaignRoundedIcon,
  operationsSetup: SettingsRoundedIcon,
  technologySetup: HubRoundedIcon,
  websiteStructure: WebRoundedIcon,
  crmSetup: SupportAgentRoundedIcon,
  onboardingProcess: AccountTreeRoundedIcon,
  analyticsReporting: QueryStatsRoundedIcon,
  seoVisibility: SearchRoundedIcon,
  contentOperations: DescriptionRoundedIcon,
  mobileDevelopment: PhoneIphoneRoundedIcon,
  automationSystems: AutoModeRoundedIcon,
  uxOptimization: DesignServicesRoundedIcon,
  technicalDocumentation: FactCheckRoundedIcon,
};

function ServiceIcon({ iconKey }) {
  const IconComponent = ICON_MAP[iconKey] || SettingsRoundedIcon;
  return <IconComponent />;
}

function ConsultationAction({ link, label }) {
  const isExternal = /^https?:\/\//.test(link);

  if (isExternal) {
    return (
      <a className="services-secondary-cta" href={link} target="_blank" rel="noreferrer">
        {label}
        <ArrowForwardRoundedIcon />
      </a>
    );
  }

  return (
    <Link className="services-secondary-cta" to={link}>
      {label}
      <ArrowForwardRoundedIcon />
    </Link>
  );
}

function Services() {
  const { slug = DEFAULT_SERVICE_SLUG } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="services-page">
        <section className="service-not-found">
          <h1>Service Detail Not Found</h1>
          <p>The service you requested is unavailable. Please open one of the active service detail pages.</p>
          <Link to={`/services/${DEFAULT_SERVICE_SLUG}`} className="services-secondary-cta">
            Open Available Service Details
            <ArrowForwardRoundedIcon />
          </Link>
        </section>
      </div>
    );
  }

  const isStrategicService = Boolean(service.servicesIncluded);

  return (
    <div className="services-page">
      <section className={`service-detail-hero ${isStrategicService ? 'strategic' : 'technical'}`}>
        <div className="service-detail-copy">
          <p className="services-kicker">Service Detail</p>
          <h1>
            {service.title}
            {service.subtitle ? <span>{service.subtitle}</span> : null}
          </h1>
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="service-detail-visual" aria-hidden="true">
          {isStrategicService ? (
            <>
              <div className="hero-chip">
                <RocketLaunchRoundedIcon />
                <span>Startup-ready systems</span>
              </div>
              <div className="hero-chip alternate">
                <QueryStatsRoundedIcon />
                <span>Structured digital growth</span>
              </div>
              <div className="hero-bars">
                <span />
                <span />
                <span />
                <span />
              </div>
            </>
          ) : (
            <div className="technical-visual-grid">
              {service.deliverables.slice(0, 4).map((item) => (
                <div key={item.title} className="technical-visual-card">
                  <ServiceIcon iconKey={item.iconKey} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {isStrategicService ? (
        <section className="strategic-detail-layout">
          <article className="strategic-services-panel">
            <h2>Services Included</h2>
            <div className="strategic-services-list">
              {service.servicesIncluded.map((item) => (
                <div key={item.title} className="strategic-service-item">
                  <span className="strategic-service-icon" aria-hidden="true">
                    <ServiceIcon iconKey={item.iconKey} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="strategic-side-panels">
            <article className="strategic-side-card">
              <h3>Who This Service Is For</h3>
              <ul>
                {service.audiencePoints.map((point) => (
                  <li key={point}>
                    <CheckCircleRoundedIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="strategic-side-card">
              <h3>Why Startup Support Matters</h3>
              <ul>
                {service.impactPoints.map((point) => (
                  <li key={point}>
                    <CheckCircleRoundedIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      ) : (
        <section className="technical-deliverables-panel">
          <h2>Technical Capabilities and Deliverables</h2>
          <p>
            Implementation-focused deliverables designed to increase operational clarity, automate workflows, and
            support scalable digital systems.
          </p>
          <div className="technical-deliverables-grid">
            {service.deliverables.map((item) => (
              <article key={item.title} className="technical-deliverable-card">
                <div className="technical-deliverable-head">
                  <span className="technical-deliverable-icon" aria-hidden="true">
                    <ServiceIcon iconKey={item.iconKey} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="service-detail-cta">
        <h2>{service.cta.heading}</h2>
        <p>{service.cta.description}</p>
        <div className="service-detail-cta-actions">
          <PaymentButton productId={service.cta.paymentProductId} label={service.cta.primaryLabel} />
          <ConsultationAction link={service.cta.consultationLink} label={service.cta.secondaryLabel} />
        </div>
      </section>
    </div>
  );
}

export default Services;
