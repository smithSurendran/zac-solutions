# ZACK Software Solutions Website

A responsive, modern business website for **ZACK Software Solutions**, built with React. The project includes custom pages for Home, About, and Contact, with dynamic form submission via EmailJS.

---

## 🌐 Live Sections
- **Home Page**: Overview of ZACK Software Solutions and services
- **About Page**: Mission, vision, and what sets ZACK apart
- **Contact Page**: Message form with EmailJS integration to send emails directly to a configured inbox

---

## 🚀 Features
- Responsive layout with custom CSS
- Dynamic checklist icons using Material UI
- Email submission via [EmailJS](https://www.emailjs.com)
- Modular and scalable component structure

---

## 🛠 Tech Stack
- [React](https://reactjs.org/)
- [EmailJS](https://www.emailjs.com/)
- [Material UI Icons](https://mui.com/components/material-icons/)
- CSS Modules

---

## 📦 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/ZACK-solutions.git
cd ZACK-solutions

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 🔐 Environment Variables

Create a local `.env` file based on `.env.example`.

```bash
cp .env.example .env
```

Required for current frontend-only Stripe flow:

- `REACT_APP_STRIPE_PAYMENT_LINK_BOOK_SERVICE`
  - A Stripe Payment Link URL from your Stripe Dashboard.
  - This is safe to expose in frontend code because it is not a secret key.

---

## ✉️ Configure EmailJS
1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Add a new email service (e.g., Gmail)
3. Create a new email template with fields: `user_name`, `user_email`, and `message`
4. Get your **Service ID**, **Template ID**, and **Public Key**
5. Replace them in `Contact.js`:

```js
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
```

---

## 💳 Stripe (Frontend-Only for Now)

Current implementation uses a Stripe Payment Link redirect with no backend:

1. User clicks the reusable payment button in Home page.
2. UI calls `startPayment(...)` in `src/services/paymentService.js`.
3. Service delegates to `src/services/stripeService.js`.
4. App redirects browser to the Stripe-hosted payment page.

No Stripe secret key is used in frontend code.

### Key files
- `src/config/paymentConfig.js` -> central place for product/payment-link mapping.
- `src/services/paymentService.js` -> app-level payment abstraction layer.
- `src/services/stripeService.js` -> Stripe-specific redirect logic.
- `src/components/PaymentButton.js` -> reusable payment CTA component.

---

## 🧭 Backend Migration Path (Later)

When you are ready to add backend payments:

1. Keep UI components as-is (`PaymentButton` and calls to `startPayment`).
2. Update `startPayment` in `src/services/paymentService.js` to call your backend endpoint.
3. Backend creates Stripe Checkout Sessions / Payment Intents with your secret key.
4. Backend handles webhooks for payment verification and fulfillment.

This lets you migrate without rewriting your page components.

---

## ▲ Vercel Deployment Notes

- Add `REACT_APP_STRIPE_PAYMENT_LINK_BOOK_SERVICE` in Vercel Project Settings -> Environment Variables.
- Deploy as a static React app using existing `build` script.
- No custom server is required for current payment-link flow.

---

## 📁 Folder Structure
```
src/
├── components/        # Navbar, PaymentButton, and reusable components
├── config/            # Payment config (product/link mapping)
├── pages/             # Home.js, About.js, Contact.js
├── services/          # paymentService and Stripe provider implementation
├── styles/            # Page and component CSS files
├── App.js             # Main app wrapper + routes
└── index.js
```

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 🙌 Credits
Built and maintained by [Smith Surendran].
