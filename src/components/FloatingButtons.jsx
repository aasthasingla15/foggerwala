import { Phone, MessageCircle } from 'lucide-react';
import styles from './FloatingButtons.module.css';

const FloatingButtons = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (hidden on mobile via CSS) */}
      <div className={styles.desktopFloating}>
        <a 
          href="https://wa.me/919990365024" 
          className={styles.whatsappFloat} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} fill="currentColor" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (hidden on desktop via CSS) */}
      <div className={styles.mobileStickyBar}>
        <a 
          href="tel:+919810629361" 
          className={`${styles.mobileBtn} ${styles.callBtn}`}
        >
          <Phone size={20} fill="currentColor" />
          <span>Call Now</span>
        </a>
        <a 
          href="https://wa.me/919990365024" 
          className={`${styles.mobileBtn} ${styles.whatsappBtn}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} fill="currentColor" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
