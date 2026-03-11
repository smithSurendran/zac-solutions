import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Logo from '../assets/ZACKLogo.png';
import { SUBSCRIPTION_SERVICES } from '../config/subscriptionServices';
import '../styles/Navbar.css';

const MAIN_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesRoute = location.pathname === '/services';

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

  return (
    <header className="navbar-wrapper">
      <div className="navbar-shell">
        <NavLink to="/" className="brand" onClick={closeAllMenus}>
          <img src={Logo} alt="Zack Solutions logo" />
          <span className="brand-text">Zack Solutions</span>
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

            <div className="services-dropdown" role="menu" aria-label="Service subscriptions">
              <p className="services-dropdown-kicker">Subscription Plans</p>
              <div className="services-preview-list">
                {SUBSCRIPTION_SERVICES.map((service) => (
                  <NavLink
                    key={service.slug}
                    to={`/services#${service.slug}`}
                    className="service-preview-link"
                    onClick={closeAllMenus}
                  >
                    <div className="service-preview-head">
                      <span>{service.title}</span>
                      <strong>{service.priceLabel}</strong>
                    </div>
                    <p>{service.shortDescription}</p>
                  </NavLink>
                ))}
              </div>
              <NavLink to="/services" className="services-dropdown-footer" onClick={closeAllMenus}>
                View all services
              </NavLink>
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
              {SUBSCRIPTION_SERVICES.map((service) => (
                <NavLink
                  key={service.slug}
                  to={`/services#${service.slug}`}
                  className="mobile-service-link"
                  onClick={closeAllMenus}
                >
                  <span>{service.title}</span>
                  <strong>{service.priceLabel}</strong>
                </NavLink>
              ))}
              <NavLink to="/services" className="mobile-services-all" onClick={closeAllMenus}>
                Browse all plans
              </NavLink>
            </div>
          </div>

          <NavLink to="/contact" onClick={closeAllMenus} className="nav-link">
            Contact
          </NavLink>

          <NavLink to="/contact" onClick={closeAllMenus} className="nav-cta">
            Get Started
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
