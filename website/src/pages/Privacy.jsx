import { motion } from 'framer-motion';
import styles from './Privacy.module.css';

const Privacy = () => {
  return (
    <div className={styles.privacyPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Last Updated: July 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.contentWrapper}>
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when requesting a free inspection, booking a service, or contacting us for queries. This may include:
            </p>
            <ul>
              <li>Contact details such as Full Name, Email Address, and Phone Number.</li>
              <li>Address details where inspection or treatment services are required.</li>
              <li>Details related to the type of pest issues you are experiencing.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our pest control and inspection services.</li>
              <li>Schedule inspection visits by our certified experts.</li>
              <li>Respond to your comments, questions, and requests for quotes or information.</li>
              <li>Send service updates, warranty documentation, and support messages.</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information. Our website uses secure SSL encryption to transmit data. Access to your personal data is restricted to authorized personnel who need the information to perform specific service jobs.
            </p>

            <h2>4. Cookies Policy</h2>
            <p>
              We use cookies to analyze web traffic, optimize site performance, and enhance your browsing experience. You can choose to accept or decline cookies in your browser settings. However, disabling cookies may affect certain functionalities of the website.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our website may contain links to other websites (such as social platforms or partners). We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy statements before submitting personal data.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wishes to request details about the personal data we hold, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@foggerwala.com<br />
              <strong>Phone:</strong> 9810629361, 9990365024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
