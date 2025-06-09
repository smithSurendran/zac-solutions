# ZAC Solutions Website

A responsive, modern business website for **ZAC Solutions**, built with React. The project includes custom pages for Home, About, and Contact, with dynamic form submission via EmailJS.

---

## 🌐 Live Sections
- **Home Page**: Overview of ZAC Solutions and services
- **About Page**: Mission, vision, and what sets ZAC apart
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
git clone https://github.com/your-username/zac-solutions.git
cd zac-solutions

# Install dependencies
npm install

# Start the development server
npm start
```

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

## 📁 Folder Structure
```
src/
├── components/        # Navbar and reusable components
├── pages/             # Home.js, About.js, Contact.js
├── styles/            # Home.css, About.css, Contact.css
├── App.js             # Main app wrapper
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
