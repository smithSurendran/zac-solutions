import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Logo from '../assets/ZACKLogo.png';
import { NAV_SERVICES } from '../config/subscriptionServices';
import { startPayment } from '../services/paymentService';
import '../styles/Navbar.css';

const MAIN_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isServicesRoute = location.pathname.startsWith('/services');

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsDesktopServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleDesktopMenuBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsDesktopServicesOpen(false);
    }
  };

  const handleGetStartedCheckout = async () => {
    closeAllMenus();

    if (isCheckoutLoading) {
      return;
    }

    setIsCheckoutLoading(true);

    try {
      await startPayment({ productId: 'bookService' });
    } catch {
      setIsCheckoutLoading(false);
      navigate('/contact');
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar-shell">
        <NavLink to="/" className="brand" onClick={closeAllMenus}>
          <img src={Logo} alt="Zack Solutions logo" />
          <span className="brand-copy">
            <span className="brand-text">Zack Solutions</span>
            <span className="brand-tagline">Transforming Business for Tomorrow</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseRoundedIcon /> : <ReorderIcon />}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {MAIN_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeAllMenus}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}

          <div
            className={`services-menu ${isDesktopServicesOpen ? 'open' : ''}`}
            onMouseEnter={() => setIsDesktopServicesOpen(true)}
            onMouseLeave={() => setIsDesktopServicesOpen(false)}
            onBlur={handleDesktopMenuBlur}
          >
            <button
              type="button"
              className={`services-trigger${isServicesRoute ? ' active' : ''}`}
              onClick={() => setIsDesktopServicesOpen((prev) => !prev)}
              onFocus={() => setIsDesktopServicesOpen(true)}
              aria-expanded={isDesktopServicesOpen}
              aria-haspopup="true"
            >
              Services
              <ExpandMoreRoundedIcon />
            </button>

            <div className="services-dropdown" role="menu" aria-label="Service detail views">
              <p className="services-dropdown-kicker">Service Detail Views</p>
              <div className="services-preview-list">
                {NAV_SERVICES.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="service-preview-link"
                    onClick={closeAllMenus}
                  >
                    <div className="service-preview-head">
                      <span>{service.title}</span>
                      <span className="service-preview-tag">View</span>
                    </div>
                    <p>{service.navDescription}</p>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className={`mobile-services ${isMobileServicesOpen ? 'open' : ''}`}>
            <button
              type="button"
              className={`mobile-services-trigger${isServicesRoute ? ' active' : ''}`}
              onClick={() => setIsMobileServicesOpen((prev) => !prev)}
              aria-expanded={isMobileServicesOpen}
            >
              Services
              <ExpandMoreRoundedIcon />
            </button>
            <div className="mobile-services-list">
              {NAV_SERVICES.map((service) => (
                <NavLink
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="mobile-service-link"
                  onClick={closeAllMenus}
                >
                  <span>{service.title}</span>
                  <span className="mobile-service-tag">View</span>
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" onClick={closeAllMenus} className="nav-link">
            Contact
          </NavLink>

          <button
            type="button"
            className="nav-cta"
            onClick={handleGetStartedCheckout}
            disabled={isCheckoutLoading}
            aria-busy={isCheckoutLoading}
          >
            {isCheckoutLoading ? 'Redirecting...' : 'Get Started'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
