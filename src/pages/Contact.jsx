import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Certified Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Reach out today for a free inspection, customized quote, or queries regarding our technologies and processes.
          </motion.p>
        </div>
      </section>

      {/* Main Section */}
      <section className={styles.contactContentSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Direct Connect Panel */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.dashboardCard}
            >
              <img 
                src="/images/hotelcontrol.png" 
                alt="Direct Booking Inquiries" 
                className={styles.officeImg} 
              />
              <div className={styles.dashboardWrapper}>
                <h2>Direct Helpline & Bookings</h2>
                <p>Connect with our certified experts instantly. Since we do not run automated web email forms, please use our active direct channels below for immediate assistance.</p>
                
                <div className={styles.channelsList}>
                  {/* Channel 1: Phone */}
                  <div className={styles.channelItem}>
                    <div className={styles.channelHeader}>
                      <div className={styles.channelIconWrapper}>
                        <Phone size={22} />
                      </div>
                      <div>
                        <h3>Direct Call Desk</h3>
                        <p>Immediate booking, inspections, & emergency pest sweeps.</p>
                      </div>
                    </div>
                    <div className={styles.channelActions}>
                      <a href="tel:9810629361" className={styles.channelBtn}>
                        <span>Call Support: 9810629361</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Channel 2: WhatsApp */}
                  <div className={styles.channelItem}>
                    <div className={styles.channelHeader}>
                      <div className={`${styles.channelIconWrapper} ${styles.whatsappIcon}`}>
                        <MessageCircle size={22} />
                      </div>
                      <div>
                        <h3>WhatsApp Inquiries</h3>
                        <p>Send photos of the infestation and get quotes in real-time.</p>
                      </div>
                    </div>
                    <div className={styles.channelActions}>
                      <a href="https://wa.me/919990365024" className={`${styles.channelBtn} ${styles.whatsappBtn}`} target="_blank" rel="noopener noreferrer">
                        <span>Message on WhatsApp</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Channel 3: Email */}
                  <div className={styles.channelItem}>
                    <div className={styles.channelHeader}>
                      <div className={`${styles.channelIconWrapper} ${styles.emailIcon}`}>
                        <Mail size={22} />
                      </div>
                      <div>
                        <h3>Email Desk</h3>
                        <p>For corporate contracts, AMC RFPs, and documentation requests.</p>
                      </div>
                    </div>
                    <div className={styles.channelActions}>
                      <a href="mailto:foggerwala@gmail.com" className={`${styles.channelBtn} ${styles.emailBtn}`}>
                        <span>Email: foggerwala@gmail.com</span>
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info panel */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.infoCol}
            >
              <div className={styles.infoCard}>
                <h2>Office Headquarters</h2>
                <div className={styles.companyName}>Foggerwala Private Limited</div>
                
                <ul className={styles.contactList}>
                  <li className={styles.contactItem}>
                    <MapPin size={24} className={styles.icon} />
                    <div>
                      <strong>Address:</strong>
                      <p>H-1, UG-11 & 26, Girdhar Plaza SMG-II, Above ICICI Bank, B Block, Shalimar Garden Extension-2, Sahibabad, Ghaziabad, Uttar Pradesh 201005</p>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <Phone size={24} className={styles.icon} />
                    <div>
                      <strong>Phone Numbers:</strong>
                      <p>
                        <a href="tel:9810629361">9810629361</a>, <a href="tel:9990365024">9990365024</a>
                      </p>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <Mail size={24} className={styles.icon} />
                    <div>
                      <strong>Email:</strong>
                      <p>
                        <a href="mailto:foggerwala@gmail.com">foggerwala@gmail.com</a>
                      </p>
                    </div>
                  </li>
                  <li className={styles.contactItem}>
                    <Clock size={24} className={styles.icon} />
                    <div>
                      <strong>Business Hours:</strong>
                      <p>Mon - Sat: 9:00 AM – 7:00 PM<br />Sun: 10:00 AM – 4:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className={styles.mapCard}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.0!2d77.3680!3d28.6735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf12345!2sShalimar+Garden+Extension+2!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="320" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Foggerwala Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
