import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { DEFAULT_SERVICE_SLUG } from './config/subscriptionServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Navigate to={`/services/${DEFAULT_SERVICE_SLUG}`} replace />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div style={{ padding: 40 }}>We'll be back soon.</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
