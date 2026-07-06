import { motion } from 'framer-motion';
import styles from './Terms.module.css';

const Terms = () => {
  return (
    <div className={styles.termsPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Terms & Conditions
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
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website, booking our services, or purchasing products, you agree to comply with and be bound by the following Terms and Conditions of Foggerwala Private Limited.
            </p>

            <h2>2. Services Provided</h2>
            <p>
              We provide professional pest management, inspection, and termite control services using advanced technology such as the Termatrac T3i. Services are performed by certified experts. We guarantee high standards, but final success is subject to environmental variables and clients following preventive steps.
            </p>

            <h2>3. Client Responsibilities</h2>
            <p>
              Clients must provide safe access to the premises for inspection and treatment. Clients must follow all pre-treatment and post-treatment guidelines shared by our team (such as keeping spaces ventilated, sealing entry points, or avoiding washing areas immediately).
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              Payments for one-time services are due immediately upon service completion. For Annual Maintenance Contracts (AMC) and corporate projects, payment terms are defined in the specific agreement/work order.
            </p>

            <h2>5. Warranties & Guarantees</h2>
            <p>
              Our services come with specific warranties (e.g., 3-5 year warranty on termite control treatments) which are subject to regular scheduled inspection visits. The warranty is nullified if structural alterations are done without informing us or if external infestations are introduced due to client negligence.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              While we use safe, certified methods, Foggerwala Private Limited is not liable for structural damages pre-existing our inspection, or any indirect losses arising out of infestation issues.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Ghaziabad, Uttar Pradesh.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Updates will be posted on this page with the updated revision date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
