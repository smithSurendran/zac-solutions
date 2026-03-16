export const PAYMENT_PRODUCTS = {
  bookService: {
    id: 'bookService',
    label: 'Book Service',
    description: 'Secure checkout powered by Stripe.',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_BOOK_SERVICE || '',
    envVar: 'REACT_APP_STRIPE_PAYMENT_LINK_BOOK_SERVICE',
  },
  strategicBusinessDigitalSolutions: {
    id: 'strategicBusinessDigitalSolutions',
    label: 'Get Started - Strategic Business & Digital Solutions',
    description: 'Frontend-only Stripe Payment Link for strategic service onboarding.',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_STRATEGIC_SOLUTIONS || '',
    envVar: 'REACT_APP_STRIPE_PAYMENT_LINK_STRATEGIC_SOLUTIONS',
  },
  technicalCapabilitiesDeliverables: {
    id: 'technicalCapabilitiesDeliverables',
    label: 'Get Started - Technical Capabilities and Deliverables',
    description: 'Frontend-only Stripe Payment Link for technical service onboarding.',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_TECHNICAL_DELIVERABLES || '',
    envVar: 'REACT_APP_STRIPE_PAYMENT_LINK_TECHNICAL_DELIVERABLES',
  },
};

export function getPaymentProduct(productId) {
  return PAYMENT_PRODUCTS[productId] || null;
}
