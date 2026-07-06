import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Technology', path: '/technology' },
    { name: 'Industries', path: '/industries' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      {showPromo && (
        <div className={styles.promoBanner}>
          <span>🎉 Special Offer: Get <strong>10% Off</strong> on your first termite or pest service!</span>
          <Link to="/contact" onClick={() => setShowPromo(false)}>Claim Discount</Link>
          <button className={styles.promoClose} onClick={() => setShowPromo(false)} aria-label="Dismiss banner">
            <X size={15} />
          </button>
        </div>
      )}
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="Foggerwala Logo" className={styles.logoImg} onError={(e) => { e.target.style.display = 'none'; }} />
          <span className={styles.logoText}>Fogger<span className={styles.logoHighlight}>wala</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.navActions}>
          <a href="tel:9810629361" className={styles.actionBtn}>
            <Phone size={18} />
            <span className={styles.actionText}>Call Now</span>
          </a>
          <a href="https://wa.me/919990365024" className={`${styles.actionBtn} ${styles.primaryBtn}`}>
            <MessageCircle size={18} />
            <span className={styles.actionText}>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNavLinks}>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`${styles.mobileNavLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <div className={styles.mobileActions}>
             <a href="tel:9810629361" className={styles.actionBtn}>
              <Phone size={18} />
              <span>Call: 9810629361</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
