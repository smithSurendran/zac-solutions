export const SUBSCRIPTION_SERVICES = [
  {
    title: 'Social Media Content Creation',
    slug: 'social-media-content-creation',
    price: 600,
    billingType: 'month',
    priceLabel: '$600/month',
    shortDescription:
      'Content creation support for social media presence, branded posts, and consistent business visibility.',
    features: [
      'Branded content creation for your social channels',
      'Consistent posting support',
      'Better visibility and audience engagement',
    ],
    ctaLabel: 'Subscribe',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_SOCIAL_MEDIA || '',
  },
  {
    title: 'Full Coverage Package',
    slug: 'full-coverage-package',
    price: 1000,
    billingType: 'month',
    priceLabel: '$1000/month',
    shortDescription:
      'Full coverage including website monitoring, online presence support, and portfolio management.',
    features: [
      'Website monitoring',
      'Online presence management',
      'Portfolio management',
      'Broader digital support for your business',
    ],
    ctaLabel: 'Subscribe',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_FULL_COVERAGE || '',
  },
];

export function getServiceCheckoutLink(service) {
  if (service.paymentLink) {
    return service.paymentLink;
  }

  // Frontend-only fallback while Stripe links/backend checkout are not connected.
  return `/contact?service=${encodeURIComponent(service.slug)}`;
}

export function hasServicePaymentLink(service) {
  return Boolean(service.paymentLink);
}
