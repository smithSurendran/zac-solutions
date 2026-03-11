import React, { useState } from 'react';
import { startPayment } from '../services/paymentService';
import '../styles/PaymentButton.css';

function PaymentButton({ productId, label = 'Pay Now', customerEmail = '' }) {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleClick = async () => {
    setFeedback({ type: '', message: '' });
    setIsLoading(true);

    try {
      await startPayment({ productId, customerEmail });
    } catch (error) {
      const rawMessage = error?.message || 'Unable to start payment. Please try again.';
      const isConfigIssue = rawMessage.toLowerCase().includes('missing payment link');

      setFeedback({
        type: isConfigIssue ? 'info' : 'error',
        message: isConfigIssue
          ? 'Online booking is being configured. Please contact us and we will complete your booking manually.'
          : rawMessage,
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-button-container">
      <button
        type="button"
        className="payment-button"
        onClick={handleClick}
        disabled={isLoading}
        aria-busy={isLoading}
      >
        {isLoading ? 'Redirecting...' : label}
      </button>

      {feedback.message ? (
        <p className={`payment-feedback ${feedback.type}`} role="status" aria-live="polite">
          {feedback.message}
        </p>
      ) : null}
    </div>
  );
}

export default PaymentButton;
