import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.content}
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className={styles.errCode}
          >
            404
          </motion.div>
          <div className={styles.iconWrapper}>
            <AlertCircle size={48} className={styles.icon} />
          </div>
          <h1>Oops! Page Not Found</h1>
          <p>The page you are looking for might have been moved, deleted, or does not exist.</p>
          
          <div className={styles.actions}>
            <Link to="/" className={styles.homeBtn}>
              <Home size={18} />
              <span>Go Back Home</span>
            </Link>
            <Link to="/contact" className={styles.contactBtn}>
              <span>Contact Support</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
