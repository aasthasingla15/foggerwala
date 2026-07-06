import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerGrid}>
          {/* Company Info */}
          <div className={styles.footerCol}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoText}>Fogger<span className={styles.logoHighlight}>wala</span></span>
            </Link>
            <p className={styles.companyDesc}>
              Advanced Pest Control & Termite Protection Solutions. Professional pest management using advanced technology and certified experts.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={20} className={styles.contactIcon} />
                <span>H-1, UG-11 & 26, Girdhar Plaza SMG-II, Above ICICI Bank, B Block, Shalimar Garden Ext-2, Sahibabad, Ghaziabad, UP 201005</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={20} className={styles.contactIcon} />
                <div>
                  <a href="tel:9810629361">9810629361</a>
                  <br />
                  <a href="tel:9990365024">9990365024</a>
                </div>
              </li>
              <li className={styles.contactItem}>
                <Mail size={20} className={styles.contactIcon} />
                <div>
                  <a href="mailto:foggerwala@gmail.com">foggerwala@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Foggerwala Private Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
