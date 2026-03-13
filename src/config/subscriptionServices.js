export const SUBSCRIPTION_SERVICES = [
  {
    title: 'Social Media Content Creation',
    slug: 'social-media-content-creation',
    engagementTrack: 'Visibility and Content Operations',
    shortDescription:
      'Structured social content operations including branded asset production, publishing workflow design, and visibility execution aligned to your growth stage.',
    features: [
      'Branded content templates and production process setup',
      'Editorial calendar and publishing workflow standardization',
      'Approval loops, scheduling handoff, and communication cadence',
      'Baseline performance reporting for visibility tracking',
    ],
    ctaLabel: 'Request Tailored Scope',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_SOCIAL_MEDIA || '',
  },
  {
    title: 'Full Coverage Support',
    slug: 'full-coverage-support',
    engagementTrack: 'Digital Operations and Continuity',
    shortDescription:
      'Comprehensive digital operations support covering website monitoring, portfolio oversight, and structured online presence management.',
    features: [
      'Website monitoring, health checks, and support updates',
      'Online profile and brand presence management workflow',
      'Portfolio and digital asset governance framework',
      'Recurring operational review with implementation priorities',
    ],
    ctaLabel: 'Book Technical Consultation',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_FULL_COVERAGE || '',
  },
];

export function getServiceInquiryLink(service) {
  return `/contact?service=${encodeURIComponent(service.slug)}`;
}
