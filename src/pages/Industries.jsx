import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import styles from './Industries.module.css';

const industriesData = [
  { id: 1, title: 'Residential Homes', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', desc: 'Complete termite and pest protection for homes and villas.' },
  { id: 2, title: 'Apartments', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', desc: 'Scheduled pest control programs for housing societies.' },
  { id: 3, title: 'Hotels & Resorts', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800', desc: 'Discreet pest management to ensure guest satisfaction.' },
  { id: 4, title: 'Restaurants', img: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?auto=format&fit=crop&q=80&w=800', desc: 'FSSAI-compliant pest control for food service businesses.' },
  { id: 5, title: 'Hospitals', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', desc: 'Sterile-safe pest management for healthcare facilities.' },
  { id: 6, title: 'Schools & Colleges', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800', desc: 'Child-safe pest solutions for educational institutions.' },
  { id: 7, title: 'Warehouses', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800', desc: 'Protect stored goods from rodents and stored product pests.' },
  { id: 8, title: 'Factories', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', desc: 'Robust pest control for manufacturing plants and units.' },
  { id: 9, title: 'Food Processing', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800', desc: 'HACCP-compliant programs for food production facilities.' },
  { id: 10, title: 'Pharmaceutical', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800', desc: 'GMP-compliant pest management for pharma facilities.' },
  { id: 11, title: 'Corporate Offices', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800', desc: 'Minimal-disruption pest control for office environments.' },
  { id: 12, title: 'Shopping Malls', img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800', desc: 'Large-scale pest management for retail complexes.' },
  { id: 13, title: 'Retail Stores', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800', desc: 'Protect your retail space and customer experience.' },
  { id: 14, title: 'IT Parks', img: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&q=80&w=800', desc: 'Specialized pest management for technology campuses.' },
  { id: 15, title: 'Government Buildings', img: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=800', desc: 'Reliable pest control for public sector buildings.' }
];

const testimonials = [
  {
    id: 1,
    name: 'Atma Prakash Mishra',
    role: 'Satisfied Customer',
    text: 'I am extremely satisfied with the services provided by Foggerwala Pest Control Service*. The team Employee Mr Chandrahesh professional, punctual, and highly knowledgeable. They conducted a thorough inspection, explained the treatment process in detail, and ensured that all pest-related concerns were addressed effectively. The service was carried out with great care and professionalism, and the results have been excellent. Their commitment to customer satisfaction, timely response, and quality service is truly commendable. I highly recommend Foggerwala Pest Control Service to anyone looking for reliable and effective pest management solutions.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 2,
    name: 'Neha Jha',
    role: 'Property Owner',
    text: 'Excellent pest control service! The team arrived on time, explained the entire process clearly, and completed the treatment professionally. I noticed a significant improvement after the service. The staff was courteous, knowledgeable, and efficient. Highly recommended for anyone looking for reliable pest control solutions.',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 3,
    name: 'Jatendra Kumar',
    role: 'Corporate Manager',
    text: 'The team was professional and courteous throughout. Outstanding customer service and great result',
    rating: 5,
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

const Industries = () => {
  return (
    <div className={styles.industriesPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Dedicated, specialized pest prevention and management solutions across multiple industry verticals.
          </motion.p>
        </div>
      </section>

      {/* Grid of Industries */}
      <section className={styles.industriesGridSection}>
        <div className="container">
          <div className={styles.grid}>
            {industriesData.map((ind) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={ind.id}
                className={styles.card}
              >
                <div className={styles.imgWrapper}>
                  <img src={ind.img} alt={ind.title} className={styles.cardImg} />
                  <div className={styles.cardOverlay}>
                    <h3>{ind.title}</h3>
                    <p>{ind.desc}</p>
                    <Link to="/contact" className={styles.quoteLink}>
                      Get Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`section section-bg-light ${styles.testimonialsSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>What Our Partners Say</h2>
            <p>Trusted by industry leaders to maintain clean, safe, and compliant environments.</p>
          </div>

          <div className={styles.testimonialsGrid}>
            {testimonials.map((test) => (
              <div key={test.id} className={styles.testCard}>
                <div className={styles.stars}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-primary)" color="var(--color-primary)" />
                  ))}
                </div>
                <p>"{test.text}"</p>
                <div className={styles.userInfo}>
                  <img src={test.img} alt={test.name} className={styles.userImg} />
                  <div>
                    <h4>{test.name}</h4>
                    <span>{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
