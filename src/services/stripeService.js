import { getPaymentProduct } from '../config/paymentConfig';

function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function buildStripePaymentLink(baseUrl, customerEmail) {
  const url = new URL(baseUrl);

  // Stripe Payment Links support prefilling known fields with query params.
  if (customerEmail) {
    url.searchParams.set('prefilled_email', customerEmail);
  }

  return url.toString();
}

export async function redirectToStripePaymentLink({ productId, customerEmail }) {
  const product = getPaymentProduct(productId);

  if (!product) {
    throw new Error(`Unknown payment product: ${productId}`);
  }

  if (!product.paymentLink) {
    throw new Error(
      `Missing payment link for "${productId}". Set REACT_APP_STRIPE_PAYMENT_LINK_BOOK_SERVICE in your environment.`
    );
  }

  if (!isValidHttpUrl(product.paymentLink)) {
    throw new Error(`Invalid Stripe payment link for "${productId}".`);
  }

  const redirectUrl = buildStripePaymentLink(product.paymentLink, customerEmail);

  if (typeof window === 'undefined') {
    throw new Error('Stripe redirection is only available in the browser.');
  }

  // Frontend-only mode: redirect user to Stripe-hosted checkout.
  // Backend upgrade point:
  // Replace this redirect with a call to your backend API that creates a Checkout Session.
  window.location.assign(redirectUrl);

  return { status: 'redirecting', redirectUrl };
}

