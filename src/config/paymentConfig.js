export const PAYMENT_PRODUCTS = {
  bookService: {
    id: 'bookService',
    label: 'Book Service',
    description: 'Secure checkout powered by Stripe.',
    paymentLink: process.env.REACT_APP_STRIPE_PAYMENT_LINK_BOOK_SERVICE || '',
  },
};

export function getPaymentProduct(productId) {
  return PAYMENT_PRODUCTS[productId] || null;
}

