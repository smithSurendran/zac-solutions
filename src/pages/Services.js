import React from 'react';
import { Link } from 'react-router-dom';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import LanRoundedIcon from '@mui/icons-material/LanRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import HubRoundedIcon from '@mui/icons-material/HubRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ServiceCard from '../components/ServiceCard';
import { SUBSCRIPTION_SERVICES } from '../config/subscriptionServices';
import '../styles/Services.css';

const SERVICES_INCLUDED = [
  {
    title: 'Digital Infrastructure Setup',
    description:
      'Implementation of foundational web infrastructure, domain routing, and communication stack required for launch and operational reliability.',
    icon: <LanRoundedIcon />,
  },
  {
    title: 'Website Architecture and Implementation',
    description:
      'Structured setup of customer-facing digital presence with clear information hierarchy, conversion pathways, and maintainable page architecture.',
    icon: <LanguageRoundedIcon />,
  },
  {
    title: 'Business Systems Configuration',
    description:
      'Configuration of CRM, client communication tooling, and support systems to reduce manual overhead and improve response workflows.',
    icon: <SettingsSuggestRoundedIcon />,
  },
  {
    title: 'Workflow Standardization',
    description:
      'Design and documentation of repeatable operational workflows for onboarding, delivery, support, and internal handoff operations.',
    icon: <HubRoundedIcon />,
  },
  {
    title: 'Visibility and Content Systems',
    description:
      'SEO baseline, search visibility configuration, and social media content systems built for consistent execution and measurable output.',
    icon: <QueryStatsRoundedIcon />,
  },
  {
    title: 'Monitoring and Support Operations',
    description:
      'Ongoing monitoring of core web assets and portfolio surfaces with structured support checkpoints and optimization recommendations.',
    icon: <GroupsRoundedIcon />,
  },
];

const TARGET_CLIENTS = [
  'Founders launching new digital-first business models',
  'Small teams moving from ad-hoc execution to structured operations',
  'Startups needing implementation support for web and client systems',
  'Growth-stage businesses formalizing delivery and support workflows',
];

const WHY_IT_MATTERS = [
  'Reduces operational friction by replacing ad-hoc work with defined systems',
  'Improves delivery quality through repeatable workflows and documentation',
  'Establishes technical foundations for scalable acquisition and retention',
  'Strengthens market credibility with a stable professional digital presence',
];

const TECH_DELIVERABLES = [
  'Website structure, page hierarchy, and implementation setup',
  'CRM and communication workflow configuration',
  'Operational process mapping for client onboarding and support',
  'Reporting and analytics foundation with measurable checkpoints',
  'SEO fundamentals and search visibility configuration',
  'Content operations model for predictable publishing cadence',
];

const CUSTOMIZATION_POINTS = [
  'Scope is configured around your current business stage, delivery model, and operational constraints',
  'Implementation priorities are set based on immediate execution gaps and growth objectives',
  'Support cadence is aligned to your internal capacity and technical maturity',
  'Engagements can combine multiple service tracks into one coordinated workflow model',
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-copy">
          <p className="services-kicker">Strategic Technical Services</p>
          <h1>Strategic Digital Infrastructure and Business Systems Support</h1>
          <p>
            Customizable technical, operational, and digital implementation services for startups and growth-stage
            businesses.
          </p>
          <p>
            Zack Solutions builds tailored service engagements to help teams launch, manage, and scale with structured
            systems instead of fragmented tools and workflows.
          </p>
        </div>

        <div className="services-hero-visual" aria-hidden="true">
          <div className="hero-visual-chip">
            <RocketLaunchRoundedIcon />
            <span>Launch-ready operations</span>
          </div>
          <div className="hero-visual-chip secondary">
            <QueryStatsRoundedIcon />
            <span>Measurable digital performance</span>
          </div>
          <div className="hero-visual-bars">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="services-structure">
        <article className="included-panel">
          <h2>Services Included</h2>
          <div className="included-list">
            {SERVICES_INCLUDED.map((item) => (
              <div key={item.title} className="included-item">
                <span className="included-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <div className="support-panels">
          <article className="support-card">
            <h3>Who This Service Is For</h3>
            <ul>
              {TARGET_CLIENTS.map((item) => (
                <li key={item}>
                  <CheckCircleRoundedIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="support-card">
            <h3>Why This Service Matters</h3>
            <ul>
              {WHY_IT_MATTERS.map((item) => (
                <li key={item}>
                  <CheckCircleRoundedIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="deliverables-panel">
        <h2>Operational and Technical Deliverables</h2>
        <p>
          Engagement outputs are implementation-focused and designed to improve execution clarity, operational
          consistency, and scalability readiness.
        </p>
        <div className="deliverables-grid">
          {TECH_DELIVERABLES.map((item) => (
            <div key={item} className="deliverable-item">
              <CheckCircleRoundedIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="customization-panel">
        <h2>Customizable Engagement Model</h2>
        <p>
          Instead of one-size-fits-all packages, Zack Solutions configures service engagements around your goals,
          operational gaps, and technical environment.
        </p>
        <div className="customization-grid">
          {CUSTOMIZATION_POINTS.map((item) => (
            <div key={item} className="customization-item">
              <CheckCircleRoundedIcon />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="engagement-panel" id="engagement-areas">
        <div className="engagement-head">
          <p className="services-kicker">Engagement Areas</p>
          <h2>Tailored Service Tracks</h2>
          <p>
            Select the support track that aligns with your current operational priorities. Final scope and delivery
            model are configured through consultation.
          </p>
        </div>
        <div className="engagement-grid">
          {SUBSCRIPTION_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="services-final-cta">
        <h2>Plan a Tailored Service Engagement</h2>
        <p>
          Schedule a consultation to define implementation scope, delivery priorities, and support cadence based on
          your business stage and growth targets.
        </p>
        <div className="services-final-actions">
          <Link to="/contact" className="services-primary-cta">
            Schedule Technical Consultation
          </Link>
          <a href="#engagement-areas" className="services-secondary-cta">
            Review Service Tracks
            <ArrowOutwardRoundedIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
