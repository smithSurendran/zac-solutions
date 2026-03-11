import { redirectToStripePaymentLink } from './stripeService';

export async function startPayment({ productId, customerEmail }) {
  // Shared payment entry point for UI components.
  // Backend upgrade point:
  // Keep this function signature, but switch implementation to your backend API.
  return redirectToStripePaymentLink({ productId, customerEmail });
}

